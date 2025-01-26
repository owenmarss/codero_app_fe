"use client";

import { useEffect, useState } from "react";

export default function PrivateTransportForm() {
    // * Arrival
    const [arrivalStartLink, setArrivalStartLink] = useState<string>("");
    const [arrivalStartPlaceName, setArrivalStartPlaceName] =
        useState<string>("");

    const [arrivalDestinationLink, setArrivalDestinationLink] =
        useState<string>("");
    const [arrivalDestinationPlaceName, setArrivalDestinationPlaceName] =
        useState<string>("");

    // * Departure
    const [departureStartLink, setDepartureStartLink] = useState<string>("");
    const [departureStartPlaceName, setDepartureStartPlaceName] =
        useState<string>("");

    const [departureDestinationLink, setDepartureDestinationLink] =
        useState<string>("");
    const [departureDestinationPlaceName, setDepartureDestinationPlaceName] =
        useState<string>("");

    // * Matrix for KM calculation
    const [arrivalStartMatrix, setArrivalStartMatrix] = useState<string>("");
    const [arrivalDestinationMatrix, setArrivalDestinationMatrix] =
        useState<string>("");

    const [departureStartMatrix, setDepartureStartMatrix] =
        useState<string>("");
    const [departureDestinationMatrix, setDepartureDestinationMatrix] =
        useState<string>("");

    // * Distance
    const [arrivalDistance, setArrivalDistance] = useState<number>(0);
    const [departureDistance, setDepartureDistance] = useState<number>(0);

    const handleFetchPlaceName = async (
        link: string,
        setLink: any,
        setPlaceName: any,
        setMatrix: any
    ) => {
        setLink(link);
        try {
            const response = await fetch("/api/getPlaceName", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { link } }),
            });

            const data = await response.json();

            if (response.ok) {
                setMatrix(data.coordinates);
                setPlaceName(data.placeName);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const calculateDistance = async (
        start: string,
        destination: string,
        setDistance: any
    ) => {
        try {
            const response = await fetch("/api/getPrivateDistance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { start, destination } }),
            });

            const data = await response.json();

            if (response.ok) {
                setDistance(data.distance);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (arrivalStartMatrix && arrivalDestinationMatrix) {
            calculateDistance(
                arrivalStartMatrix,
                arrivalDestinationMatrix,
                setArrivalDistance
            );
        } else {
            setArrivalDistance(0);
        }
    }, [
        arrivalStartMatrix,
        arrivalStartLink,
        arrivalDestinationLink,
        arrivalDestinationMatrix,
    ]);

    return (
        <div id="transport_form" className="">
            <div
                id="transport_private_container"
                className="flex flex-col gap-7 pt-7"
            >
                <div
                    id="license_number_container"
                    className="flex items-center gap-3"
                >
                    <h1 className="text-lg font-semibold">Plat Nomor:</h1>
                    <input
                        type="text"
                        className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-40"
                    />
                </div>

                <div
                    id="private_transport_type_container"
                    className="flex items-center gap-3"
                >
                    <h1 className="text-lg font-semibold">
                        Jenis Kendaraan Pribadi:
                    </h1>
                    <select
                        name=""
                        id=""
                        className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-10 py-2"
                    >
                        <option value="private">Motor</option>
                        <option value="public">Mobil</option>
                    </select>
                </div>

                <div
                    id="private_transport_form_container"
                    className="flex flex-col gap-10"
                >
                    <div
                        id="private_arrival_container"
                        className="flex flex-col"
                    >
                        <h1 className="text-lg font-semibold pb-5">
                            {" "}
                            Keberangkatan{" "}
                        </h1>

                        <div className="flex justify-between items-center">
                            <div
                                id="private_arrival_start_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    value={arrivalStartLink}
                                    onChange={(e) =>
                                        handleFetchPlaceName(
                                            e.target.value,
                                            setArrivalStartLink,
                                            setArrivalStartPlaceName,
                                            setArrivalStartMatrix
                                        )
                                    }
                                    id=""
                                    placeholder="Masukan link maps awal keberangkatan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={arrivalStartPlaceName}
                                    className="pl-2 font-semibold text-xs text-primary"
                                />
                            </div>

                            <div>
                                <h1 className="text-lg font-semibold">
                                    {" "}
                                    {arrivalDistance} km{" "}
                                </h1>
                            </div>

                            <div
                                id="private_arrival_destination_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    value={arrivalDestinationLink}
                                    onChange={(e) =>
                                        handleFetchPlaceName(
                                            e.target.value,
                                            setArrivalDestinationLink,
                                            setArrivalDestinationPlaceName,
                                            setArrivalDestinationMatrix
                                        )
                                    }
                                    id=""
                                    placeholder="Masukan link maps tujuan keberangkatan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    value={arrivalDestinationPlaceName}
                                    id=""
                                    className="pl-2 font-semibold text-xs text-primary"
                                />
                            </div>
                        </div>

                        <div className="pt-5 flex items-center">
                            <h1 className="font-bold w-56">
                                {" "}
                                Harga Keberangkatan:{" "}
                            </h1>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Rp xxx.xxx,xx "
                                className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-44"
                                disabled
                            />
                        </div>
                    </div>

                    <div
                        id="private_departure_container"
                        className="flex flex-col"
                    >
                        <h1 className="text-lg font-semibold pb-5">
                            {" "}
                            Kepulangan{" "}
                        </h1>

                        <div className="flex justify-between items-center">
                            <div
                                id="private_departure_start_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Masukan link maps awal kepulangan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={"Nama Lokasi Mulai"}
                                    disabled
                                    className="pl-2 font-semibold text-xs text-primary"
                                />
                            </div>

                            <div>
                                <h1 className="text-lg font-semibold">
                                    {" "}
                                    ... km{" "}
                                </h1>
                            </div>

                            <div
                                id="private_departure_destination_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Masukan link maps tujuan kepulangan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={"Nama Lokasi Tujuan"}
                                    disabled
                                    className="pl-2 font-semibold text-xs text-primary"
                                />
                            </div>
                        </div>

                        <div className="pt-5 flex items-center">
                            <h1 className="font-bold w-56">
                                {" "}
                                Harga Kepulangan:{" "}
                            </h1>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Rp xxx.xxx,xx "
                                className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-44"
                                disabled
                            />
                        </div>
                    </div>

                    <div
                        id="private_transform_form_total"
                        className="flex items-center justify-between"
                    >
                        <h1 className="text-lg font-semibold">
                            {" "}
                            Total Harga:{" "}
                        </h1>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Rp xxx.xxx,xx "
                            className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-44"
                            disabled
                        />
                    </div>

                    <div
                        id="private_transform_form_button"
                        className="flex justify-between items-center"
                    >
                        <button
                            id="private_transport_reset"
                            className="bg-red hover:bg-red-secondary duration-500 hover:underline font-semibold text-white rounded-md py-2 w-24"
                        >
                            {" "}
                            Cancel{" "}
                        </button>

                        <button
                            id="private_transport_submit"
                            className="bg-green hover:bg-green-secondary duration-500 hover:underline font-semibold text-white rounded-md py-2 w-24"
                        >
                            {" "}
                            Submit{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
