"use client";

import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import PrivateTransportFormComponent from "./private-transport-form-component";
import { useState } from "react";

const library: "places"[] = ["places"];

export default function PrivateTransportForm() {
    const mapCenter = { lat: -4.357091994, lng: 119.889373864 };
    const containerStyle = {
        width: "100%",
        height: "60vh",
    };

    const [arrival, setArrival] = useState({ distance: 0, price: 0 });
    const [departure, setDeparture] = useState({ distance: 0, price: 0 });

    return (
        <div>
            <LoadScriptNext libraries={library} googleMapsApiKey="AIzaSyC0ka_Lxb01t7CDV-7XhpszHJfTKv1vZlY" region="id">
                <GoogleMap
                    zoom={5}
                    center={mapCenter}
                    mapContainerStyle={containerStyle}
                    options={{
                        streetViewControl: false,
                        keyboardShortcuts: false,
                        mapTypeControl: false,
                    }}
                >
                    <PrivateTransportFormComponent setData={setArrival} data={arrival} />
                </GoogleMap>
            </LoadScriptNext>
            <p>jarak : {arrival.distance} Km</p>
            <p>harga : Rp. {arrival.price}</p>

            <LoadScriptNext libraries={library} googleMapsApiKey="AIzaSyC0ka_Lxb01t7CDV-7XhpszHJfTKv1vZlY" region="id">
                <GoogleMap
                    zoom={5}
                    center={mapCenter}
                    mapContainerStyle={containerStyle}
                    options={{
                        streetViewControl: false,
                        keyboardShortcuts: false,
                        mapTypeControl: false,
                    }}
                >
                    <PrivateTransportFormComponent setData={setDeparture} data={departure} />
                </GoogleMap>
            </LoadScriptNext>
            <p>jarak : {departure.distance} Km</p>
            <p>harga : Rp. {departure.price}</p>

            <div className="mt-10">
                <h1 className="font-bold text-5xl">Total Harga : Rp. {arrival.price + departure.price}</h1>
            </div>
        </div>
    );
}
