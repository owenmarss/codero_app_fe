export default function History() {
    return (
        <main id="history" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            {/* <div id="history_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> History </h1>
            </div> */}

            <div id="history_content" className="flex flex-col gap-10">
                <div id="history_absensi_summary" className="flex flex-col gap-5">
                    <div id="history_absensi_summary_title">
                        <h1 className="text-2xl font-bold text-primary tracking-wide"> History Absensi </h1>
                    </div>

                    <div id="history_absensi_summary_table_container" className="overflow-x-scroll overflow-y-scroll h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                        <table id="history_absensi_summary_table" className="table-auto w-full shadow-md rounded min-w-max">
                            <thead>
                                <tr className="bg-blue-200">
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> No </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Hari </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Tanggal </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Jam</th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Kegiatan </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Lokasi </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 1 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Senin </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 12/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Mengajar (Onsite) </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SD Global Insani Islamic Bekasi </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 2 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Selasa </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 13/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Mengajar (Online) </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK 11 Penabur Kebon Jeruk </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 3 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rabu </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 14/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Demo Ekskul </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK Summarecon Penabur </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 4 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Kamis </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 15/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Trial Class </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK 3 Penabur Gunung Sahari </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 5 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Jumat </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 16/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Meeting Sekolah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Gandhi Intercontinental School </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 6 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Sabtu </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 17/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Pameran </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Eureka Sunter </td>
                                </tr>

                                <tr className="text-center text-sm hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 7 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Minggu </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 18/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 08:00 - 09:00 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Lomba </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> - </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="history_absensi_summary_content" className="flex flex-col gap-2.5 xs:max-sm:flex md:max-2xl:hidden">
                        <div id="history_absensi_summary_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                            <div id="history_absensi_summary_list_index" className="w-[5%] flex justify-center">
                                <h2 className="text-lg font-semibold text-black"> 1. </h2>
                            </div>

                            <div id="history_absensi_summary_list_timeline" className="flex flex-col w-[20%]">
                                <div id="history_absensi_summary_list_day" >
                                    <h2 className="text-lg font-semibold text-black"> Senin </h2>
                                </div>

                                <div id="history_absensi_summary_list_date" >
                                    <h2 className="text-lg font-semibold text-black"> 01/01/2024 </h2>
                                </div>

                                <div id="history_absensi_summary_list_time">
                                    <h3 className="text-base text-black"> 14:00 - 15:00 </h3>
                                </div>
                            </div>

                            <div id="history_absensi_summary_list_kegiatan" className="w-[25%]">
                                <h1 className="font-semibold text-primary tracking-wide"> Mengajar (Onsite) </h1>
                            </div>

                            <div id="history_absensi_summary_list_location" className="flex flex-col items-end w-[45%]">
                                <div id="history_absensi_summary_list_school_centre" className="flex items-center gap-2">
                                    <a href="" className="text-lg font-bold text-primary tracking-wide"> SD Global Insani Islamic School </a>
                                    <h1 className="text-lg font-bold text-primary tracking-wide"> (Robotic) </h1>
                                </div>

                                <div id="history_absensi_summary_list_address">
                                    <h3 className="text-sm font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
                                </div>

                                <div id="history_absensi_summary_list_partner" className="flex gap-2">
                                    <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                                    <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                                </div>
                            </div>
                        </div>

                        <div id="history_absensi_summary_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                            <div id="history_absensi_summary_list_index" className="w-[5%] flex justify-center">
                                <h2 className="text-lg font-semibold text-black"> 2. </h2>
                            </div>

                            <div id="history_absensi_summary_list_timeline" className="flex flex-col w-[20%]">
                                <div id="history_absensi_summary_list_day" >
                                    <h2 className="text-lg font-semibold text-black"> Selasa </h2>
                                </div>

                                <div id="history_absensi_summary_list_date" >
                                    <h2 className="text-lg font-semibold text-black"> 02/01/2024 </h2>
                                </div>

                                <div id="history_absensi_summary_list_time">
                                    <h3 className="text-base text-black"> 14:00 - 15:00 </h3>
                                </div>
                            </div>

                            <div id="history_absensi_summary_list_kegiatan" className="w-[25%]">
                                <h1 className="font-semibold text-primary tracking-wide"> Mengajar (Online) </h1>
                            </div>

                            <div id="history_absensi_summary_list_location" className="flex flex-col items-end w-[45%]">
                                <div id="history_absensi_summary_list_school_centre" className="flex items-center gap-2">
                                    <a href="" className="text-lg font-bold text-primary tracking-wide"> SDK 11 Penabur Kebon Jeruk </a>
                                    <h1 className="text-lg font-bold text-primary tracking-wide"> (Coding) </h1>
                                </div>

                                <div id="history_absensi_summary_list_address">
                                    <h3 className="text-sm font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
                                </div>

                                <div id="history_absensi_summary_list_partner" className="flex gap-2">
                                    <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                                    <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                                </div>
                            </div>
                        </div>

                        <div id="history_absensi_summary_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                            <div id="history_absensi_summary_list_index" className="w-[5%] flex justify-center">
                                <h2 className="text-lg font-semibold text-black"> 3. </h2>
                            </div>

                            <div id="history_absensi_summary_list_timeline" className="flex flex-col w-[20%]">
                                <div id="history_absensi_summary_list_day" >
                                    <h2 className="text-lg font-semibold text-black"> Rabu </h2>
                                </div>

                                <div id="history_absensi_summary_list_date" >
                                    <h2 className="text-lg font-semibold text-black"> 03/01/2024 </h2>
                                </div>

                                <div id="history_absensi_summary_list_time">
                                    <h3 className="text-base text-black"> 14:00 - 15:00 </h3>
                                </div>
                            </div>

                            <div id="history_absensi_summary_list_kegiatan" className="w-[25%]">
                                <h1 className="font-semibold text-primary tracking-wide"> Demo Ekskul </h1>
                            </div>

                            <div id="history_absensi_summary_list_location" className="flex flex-col items-end w-[45%]">
                                <div id="history_absensi_summary_list_school_centre" className="flex items-center gap-2">
                                    <a href="" className="text-lg font-bold text-primary tracking-wide"> SDK Summarecon Penabur </a>
                                    <h1 className="text-lg font-bold text-primary tracking-wide"> (Coding) </h1>
                                </div>

                                <div id="history_absensi_summary_list_address">
                                    <h3 className="text-sm font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
                                </div>

                                <div id="history_absensi_summary_list_partner" className="flex gap-2">
                                    <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                                    <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                                </div>
                            </div>
                        </div>

                        <div id="history_absensi_summary_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                            <div id="history_absensi_summary_list_index" className="w-[5%] flex justify-center">
                                <h2 className="text-lg font-semibold text-black"> 4. </h2>
                            </div>

                            <div id="history_absensi_summary_list_timeline" className="flex flex-col w-[20%]">
                                <div id="history_absensi_summary_list_day" >
                                    <h2 className="text-lg font-semibold text-black"> Kamis </h2>
                                </div>

                                <div id="history_absensi_summary_list_date" >
                                    <h2 className="text-lg font-semibold text-black"> 04/01/2024 </h2>
                                </div>

                                <div id="history_absensi_summary_list_time">
                                    <h3 className="text-base text-black"> 14:00 - 15:00 </h3>
                                </div>
                            </div>

                            <div id="history_absensi_summary_list_kegiatan" className="w-[25%]">
                                <h1 className="font-semibold text-primary tracking-wide"> Trial Class </h1>
                            </div>

                            <div id="history_absensi_summary_list_location" className="flex flex-col items-end w-[45%]">
                                <div id="history_absensi_summary_list_school_centre" className="flex items-center gap-2">
                                    <a href="" className="text-lg font-bold text-primary tracking-wide"> SDK 3 Penabur Gunung Sahari </a>
                                    <h1 className="text-lg font-bold text-primary tracking-wide"> (Coding) </h1>
                                </div>

                                <div id="history_absensi_summary_list_address">
                                    <h3 className="text-sm font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
                                </div>

                                <div id="history_absensi_summary_list_partner" className="flex gap-2">
                                    <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                                    <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <a href="/history/history-absensi" className="text-primary text-xs font-medium tracking-wider hover:text-secondary hover:underline duration-700"> Lihat History Absensi... </a>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-gray-100"></div>

                <div id="history_transport_summary" className="flex flex-col gap-5">
                    <div id="history_transport_summary_title">
                        <h1 className="text-2xl font-bold text-primary tracking-wide"> History Transport </h1>
                    </div>

                    <div id="history_transport_summary_table_container" className="overflow-x-scroll overflow-y-scroll h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                        <table id="history_transport_summary_table" className="table-auto w-full shadow-md rounded min-w-max">
                            <thead>
                                <tr className="bg-blue-200">
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> No </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Hari </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Tanggal </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Kendaraan </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Titik Awal </th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Titik Akhir</th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total KM</th>
                                    <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total Biaya</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 1 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Senin </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 12/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SD Global Insani Islamic School Bekasi </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 10 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 20.000 </td>
                                </tr>

                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 2 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Senin </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 12/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SD Global Insani Islamic School Bekasi </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 10 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 20.000 </td>
                                </tr>

                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 3 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Selasa </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 13/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK 11 Penabur Kebon Jeruk </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 20 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 30.000 </td>
                                </tr>

                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 3 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Selasa </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 13/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK 11 Penabur Kebon Jeruk </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 20 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 30.000 </td>
                                </tr>

                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 4 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rabu </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 14/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK Penabur Summarecon Bekasi </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 30 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 40.000 </td>
                                </tr>

                                <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 5 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rabu </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 14/12/2021 </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Motor </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> SDK Penabur Summarecon Bekasi </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rumah </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> 30 km </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> Rp 40.000 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end">
                        <a href="/history/history-transport" className="text-primary text-xs font-medium tracking-wider hover:text-secondary hover:underline duration-700"> Lihat History Transport... </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
