export default function MyTax() {
    return (
        <main id="profile" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="my_tax_title">
                <h1 className="text-2xl font-bold text-primary">My Tax</h1>
            </div>

            <form id="my_tax_form_container" className="flex flex-col">
                <div id="my_tax_form" className="grid grid-cols-2 gap-5">
                    <div id="my_tax_dependents_form" className="flex items-center gap-3">
                        <div id="my_tax_dependents_title">
                            <h2 className="text-base font-semibold">Tanggungan: </h2>
                        </div>

                        <div id="my_tax_dependents_input">
                            <select
                                id="my_tax_dependents_input_number"
                                className="shadow-sm shadow-gray-200 rounded-md pl-2 pr-5 py-2 text-base bg-white border-[1.5px] w-full"
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>

                    <div id="my_tax_ptkp_form" className="flex items-center gap-3">
                        <div id="my_tax_ptkp_title">
                            <h2 className="text-base font-semibold">PTKP: </h2>
                        </div>

                        <div id="my_tax_ptkp_input">
                            <input
                                id="my_tax_ptkp_input_number"
                                type="number"
                                disabled={true}
                                placeholder="Rp. 54.000.000,-"
                                className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 border-[1.5px] w-full"
                            />
                        </div>
                    </div>

                    <div id="my_tax_value_form" className="flex items-center gap-3">
                        <div id="my_tax_value_title">
                            <h2 className="text-base font-semibold">Tarif: </h2>
                        </div>

                        <div id="my_tax_value_input">
                            <input
                                id="my_tax_value_input_number"
                                type="number"
                                disabled={true}
                                className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 border-[1.5px] w-24"
                                placeholder="5%"
                            />
                        </div>
                    </div>
                </div>

                <div id="my_tax_form_button" className="flex justify-end pt-10">
                    <button
                        id="my_tax_form_button_calculate"
                        type="button"
                        className="bg-primary font-bold tracking-wide text-white rounded-md py-1 px-5 hover:underline text-lg"
                    >
                        Edit
                    </button>
                </div>
            </form>

            <div id="my_tax_note">
                <p className="text-sm text-gray-500">
                    * Mohon isi form di atas sesuai dengan surat Job Offering.
                </p>
                <p className="text-sm text-gray-500">
                    * Data yang diisi akan dicocokkan dengan data yang ada di database perusahaan.
                </p>
                <p className="text-sm text-gray-500">
                    * Segala bentuk kecurangan atau pemalsuan data diawasi oleh pihak manajemen.
                </p>
            </div>

            <div id="tax_table_explanation">
                <table id="tax_table_1" className="table-auto w-full shadow-md rounded min-w-max">
                    <thead>
                        <tr className="bg-blue-200 text-sm">
                            <th className="font-bold shadow border-t border-gray-150 w-56 px-5"> Golongan </th>
                            <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Kode </th>
                            <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Tarif PTKP / tahun </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5 font-semibold" rowSpan={4}>Tidak Kawin (TK)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">TK/0 (Tanpa Tanggungan)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 54.000.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> TK/1 (1 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 58.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">TK/2 (2 tanggungan)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 63.000.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> TK/3 (3 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 67.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5 font-semibold" rowSpan={4}>Kawin (K)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/0 (Tanpa Tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 58.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/1 (1 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 63.000.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/2 (2 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 67.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/3 (3 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 72.000.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5 font-semibold" rowSpan={4}>Kawin dengan penghasilan istri digabung (K/I)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">K/I/0 (Tanpa Tanggungan)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 112.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">K/I/1 (1 tanggungan)</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 117.000.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/I/2 (2 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 121.500.000,-</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5"> K/3 (3 tanggungan) </td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 126.000.000,-</td>
                        </tr>
                    </tbody>
                </table>

                <table id="tax_table_2" className="table-auto w-full shadow-md rounded min-w-max mt-5">
                    <thead>
                        <tr className="bg-blue-200 text-sm">
                            <th className="font-bold shadow border-t border-gray-150 w-44 px-5"> Tarif Pajak </th>
                            <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Penghasilan Pertahun </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">5%</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Sampai dengan Rp. 60.000.000</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">15%</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 60.000.001 sampai dengan Rp. 250.000.000</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">25%</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 250.000.001 sampai dengan Rp. 500.000.000</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">30%</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5">Rp. 500.000.001 sampai dengan Rp.5.000.000.000</td>
                        </tr>

                        <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                            <td className="shadow py-2 border-b border-gray-150 px-5">35%</td>
                            <td className="shadow py-2 border-b border-gray-150 px-5"> Lebih dari Rp 5.000.000.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};
