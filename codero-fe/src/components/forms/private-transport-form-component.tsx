import { DirectionsRenderer, DirectionsService, MarkerF, StandaloneSearchBox } from "@react-google-maps/api";
import { useRef, useState } from "react";

export default function TruckMapComponent({ setData, data }: { setData: (value: any) => void; data: any }) {
    const indonesiaBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(-11.008611, 95.011112),
        new window.google.maps.LatLng(6.210472, 141.011717)
    );
    const [localDirection, setLocalDirection] = useState<any>();

    const [center, setCenter] = useState(localDirection ? localDirection.center : { lat: 0, lng: 0 });
    const [centerBefore, setCenterBefore] = useState(center);

    const [center2, setCenter2] = useState(localDirection ? localDirection.center2 : { lat: 0, lng: 0 });
    const [centerBefore2, setCenterBefore2] = useState(center2);

    const autocompleteRef = useRef<StandaloneSearchBox | null>(null);
    const autocompleteRef2 = useRef<StandaloneSearchBox | null>(null);

    const onPlaceChanged = (set: any, setBefore: any, ref: any) => {
        const allPlaces = ref.current.state.searchBox.getPlaces();

        if (allPlaces) {
            const getLocation = allPlaces[0].geometry.location;
            const latlng = {
                lat: getLocation.lat(),
                lng: getLocation.lng(),
            };
            if (indonesiaBounds.contains(latlng)) {
                set(latlng);
                setBefore(latlng);
            } else {
                console.log("error");
            }
        }
    };

    const [directionServiceResult, setDirectionServiceResult] = useState<any>();

    function callBack(e: any) {
        function setNewCenter(set: any, value: any) {
            set({ lat: value.lat(), lng: value.lng() });
        }

        if (e && e.status === "OK") {
            const origin = e.request.origin.location;
            const waypoint = e.request.waypoints[0].location.location;
            const destination = e.request.destination.location;
            // kalau hasilnya keluar
            let trueResult = false;

            if (!directionServiceResult || directionServiceResult?.routes?.length === 0) {
                trueResult = true;
            } else if (localDirection) {
                if (
                    e.geocoded_waypoints[0].place_id !== localDirection.geocoded_waypoints[0].place_id ||
                    e.geocoded_waypoints[1].place_id !== localDirection.geocoded_waypoints[1].place_id ||
                    e.geocoded_waypoints[2].place_id !== localDirection.geocoded_waypoints[2].place_id
                ) {
                    trueResult = true;
                }
            }

            if (trueResult) {
                // hitung jarak truk dari a sampai c
                let distance = 0;
                e.routes[0].legs.map((tujuan: any) => {
                    distance += tujuan.distance.value;
                });
                distance = Math.ceil(distance / 1000);
                // setDistance(distance);
                console.log(distance);

                // hitung waktu
                // let duration = 0;
                // e.routes[0].legs.map((tujuan: any) => {
                //     duration += tujuan.duration.value;
                // });
                // duration = Math.ceil(duration / 60);
                // console.log("duration :" + duration + "menit");
                // setDuration(duration);

                // menentukan pin poin pertama
                setNewCenter(setCenter, origin);
                // pin poin kedua pasti beradap pada waypoint
                setNewCenter(setCenter2, waypoint);

                setLocalDirection(e);
                setDirectionServiceResult(e);
                const direction = {
                    center: center,
                    center2: center2,
                };
                localStorage.setItem("direction", JSON.stringify(direction));
                // setDirection(direction);

                setData({
                    distance: distance,
                    price: distance * 15000,
                });
            }
        }
    }

    const handleMarkerDragEnd = (event: any, set: any, setBefore: any, before: any) => {
        const newPosition = event.latLng.toJSON();
        if (indonesiaBounds.contains(event.latLng)) {
            setBefore(newPosition);
            set(newPosition);
        } else {
            set(before);
        }
    };

    return (
        <>
            <StandaloneSearchBox ref={autocompleteRef} onPlacesChanged={() => onPlaceChanged(setCenter, setCenterBefore, autocompleteRef)}>
                <div className="absolute w-20 top-2 left-[1vw]">
                    <input type="text" placeholder="Asal" />
                </div>
            </StandaloneSearchBox>
            <StandaloneSearchBox ref={autocompleteRef2} onPlacesChanged={() => onPlaceChanged(setCenter2, setCenterBefore2, autocompleteRef2)}>
                <div className="absolute w-20 top-2 left-[22vw]">
                    <input type="text" placeholder="Tujuan" />
                </div>
            </StandaloneSearchBox>

            <MarkerF
                title="Pengirim"
                onDragEnd={(e) => handleMarkerDragEnd(e, setCenter, setCenterBefore, centerBefore)}
                draggable={true}
                position={center}
            />
            <MarkerF
                title="Tujuan 1"
                onDragEnd={(e) => handleMarkerDragEnd(e, setCenter2, setCenterBefore2, centerBefore2)}
                draggable={true}
                position={center2}
            />

            <DirectionsService
                options={{
                    origin: center,
                    destination: center2,
                    travelMode: google.maps.TravelMode.DRIVING,
                    avoidTolls: true,
                    waypoints: [
                        {
                            location: center2,
                            stopover: true,
                        },
                    ],
                }}
                callback={(e) => callBack(e)}
            />
            <DirectionsRenderer options={{ suppressMarkers: true }} directions={directionServiceResult} />
        </>
    );
}
