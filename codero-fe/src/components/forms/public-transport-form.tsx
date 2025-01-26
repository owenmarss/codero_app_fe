export default function PublicTransportForm() {
    return (
        <div id="public_transport_form" className="">
            <div
                id="transport_public_container"
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
                    id="public_transport_type_container"
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
                        <option value="public">Motor</option>
                        <option value="public">Mobil</option>
                    </select>
                </div>

                <div
                    id="public_transport_form_container"
                    className="flex flex-col gap-10"
                >
                    <div
                        id="public_arrival_container"
                        className="flex flex-col"
                    >
                        <h1 className="text-lg font-semibold pb-5">
                            {" "}
                            Keberangkatan{" "}
                        </h1>

                        <div className="flex justify-between items-center">
                            <div
                                id="public_arrival_start_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Masukan link maps awal keberangkatan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
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
                                id="public_arrival_destination_link"
                                className="flex flex-col gap-2"
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Masukan link maps tujuan keberangkatan"
                                    className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 py-2 w-64 truncate"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    disabled
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
                        id="public_departure_container"
                        className="flex flex-col"
                    >
                        <h1 className="text-lg font-semibold pb-5">
                            {" "}
                            Kepulangan{" "}
                        </h1>

                        <div className="flex justify-between items-center">
                            <div
                                id="public_departure_start_link"
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
                                id="public_departure_destination_link"
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
                        id="public_transform_form_total"
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
                        id="public_transform_form_button"
                        className="flex justify-between items-center"
                    >
                        <button
                            id="public_transport_reset"
                            className="bg-red hover:bg-red-secondary duration-500 hover:underline font-semibold text-white rounded-md py-2 w-24"
                        >
                            {" "}
                            Cancel{" "}
                        </button>

                        <button
                            id="public_transport_submit"
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
