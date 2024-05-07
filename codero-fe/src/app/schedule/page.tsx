export default function schedule() {
    return (
        <main id="schedule" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="schedule_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Schedule </h1>
            </div>

            <div id="schedule_filter" className="flex justify-between items-center pb-2 ">
                <div id="schedule_filter_day" className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-black"> Hari: </h2>
                    <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-10 py-2">
                        <option value="">---</option>
                        <option value="Monday">Senin</option>
                        <option value="Tuesday">Selasa</option>
                        <option value="Wednesday">Rabu</option>
                        <option value="Thursday">Kamis</option>
                        <option value="Friday">Jumat</option>
                        <option value="Saturday">Sabtu</option>
                        <option value="Sunday">Minggu</option>
                    </select>
                </div>

                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Search
                </button>
            </div>

            <div id="schedule_content" className="flex flex-col gap-5">
                <div id="schedule_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                    <div id="schedule_list_index" className="w-[5%] flex justify-center">
                        <h2 className="text-lg font-semibold text-black"> 1. </h2>
                    </div>

                    <div id="schedule_list_timeline" className="flex flex-col w-[45%]">
                        <div id="schedule_list_day" >
                            <h2 className="text-lg font-semibold text-black"> Senin </h2>
                        </div>

                        <div id="schedule_list_time">
                            <h3 className="text-base text-black"> 14:00 - 15:00 </h3>
                        </div>
                    </div>

                    <div id="schedule_list_location" className="flex flex-col items-end w-[45%]">
                        <div id="schedule_list_school_centre" className="flex items-center gap-2">
                            <a href="" className="text-lg font-bold text-primary tracking-wide"> SD Global Insani Islamic School </a>
                            <h1 className="text-lg font-bold text-primary tracking-wide"> (Robotic) </h1>
                        </div>

                        <div id="schedule_list_address">
                            <h3 className="text-sm font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
                        </div>

                        <div id="schedule_list_partner" className="flex gap-2">
                            <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                            <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                        </div>

                        <div id="schedule_list_action" className="flex justify-end gap-5 pt-0.5">
                            <div id="schedule_list_action_1">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Lihat Sekolah/Centre </a>
                            </div>

                            <div id="schedule_list_action_2">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Resources </a>
                            </div>

                            <div id="schedule_list_action_3">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Data Murid </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="schedule_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                    <div id="schedule_list_index" className="w-[5%] flex justify-center">
                        <h2 className="text-lg font-semibold text-black"> 2. </h2>
                    </div>

                    <div id="schedule_list_timeline" className="flex flex-col w-[45%]">
                        <div id="schedule_list_day" >
                            <h2 className="text-lg font-semibold text-black"> Selasa </h2>
                        </div>

                        <div id="schedule_list_time">
                            <h3 className="text-base text-black"> 10:00 - 12:00 </h3>
                        </div>
                    </div>

                    <div id="schedule_list_location" className="flex flex-col items-end w-[45%]">
                        <div id="schedule_list_school_centre" className="flex items-center gap-2">
                            <a href="" className="text-lg font-bold text-primary tracking-wide"> SDK 11 Penabur Kebon Jeruk </a>
                            <h1 className="text-lg font-bold text-primary tracking-wide"> (Coding) </h1>
                        </div>

                        <div id="schedule_list_address">
                            <h3 className="text-sm font-light text-gray-600"> Jl. Surya Harapan Indah, Kebon Jeruk, Jakarta Barat </h3>
                        </div>

                        <div id="schedule_list_partner" className="flex gap-2">
                            <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                            <h3 className="text-base font-semibold"> Mr. Bagas </h3>
                        </div>

                        <div id="schedule_list_action" className="flex justify-end gap-5 pt-0.5">
                            <div id="schedule_list_action_1">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Lihat Sekolah/Centre </a>
                            </div>

                            <div id="schedule_list_action_2">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Resources </a>
                            </div>

                            <div id="schedule_list_action_3">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Data Murid </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="schedule_list" className="py-3 pl-1 pr-4 border-[1px] rounded-lg shadow-md drop-shadow flex items-center justify-between">
                    <div id="schedule_list_index" className="w-[5%] flex justify-center">
                        <h2 className="text-lg font-semibold text-black"> 3. </h2>

                    </div>

                    <div id="schedule_list_timeline" className="flex flex-col w-[45%]">
                        <div id="schedule_list_day" >
                            <h2 className="text-lg font-semibold text-black"> Kamis </h2>
                        </div>

                        <div id="schedule_list_time">
                            <h3 className="text-base text-black"> 10:00 - 11:00 </h3>
                        </div>
                    </div>

                    <div id="schedule_list_location" className="flex flex-col items-end w-[45%]">
                        <div id="schedule_list_school_centre" className="flex items-center gap-2">
                            <a href="" className="text-lg font-bold text-primary tracking-wide"> SDK 3 Penabur Gunung Sahari </a>
                            <h1 className="text-lg font-bold text-primary tracking-wide"> (Robotic) </h1>
                        </div>

                        <div id="schedule_list_address">
                            <h3 className="text-sm font-light text-gray-600"> Jl. Gunung Sahari IV, Jakarta Utara </h3>
                        </div>

                        <div id="schedule_list_partner" className="flex gap-2">
                            <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                            <h3 className="text-base font-semibold"> Mr. Bagas </h3>
                        </div>

                        <div id="schedule_list_action" className="flex justify-end gap-5 pt-0.5">
                            <div id="schedule_list_action_1">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Lihat Sekolah/Centre </a>
                            </div>

                            <div id="schedule_list_action_2">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Resources </a>
                            </div>

                            <div id="schedule_list_action_3">
                                <a href="" className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"> Data Murid </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

 {/* <div id="schedule_list_content" className="flex flex-col">
    <div id="schedule_list_top" className="flex justify-between items-center">
        <div id="schedule_list_timeline" className="flex flex-col w-[45%]">
            <div id="schedule_list_day" >
                <h2 className="text-lg font-semibold text-black"> Senin </h2>
            </div>

            <div id="schedule_list_time">
                <h3 className="text-base text-black"> 08:00 - 10:00 </h3>
            </div>
        </div>

        <div id="schedule_list_location" className="flex flex-col items-end w-[45%]">
            <div id="schedule_list_school_centre">
                <h2 className="text-lg font-bold text-primary"> SD Global Insani Islamic School </h2>
            </div>

            <div id="schedule_list_address">
                <h3 className="text-base font-light text-gray-600"> Jl. Harapan Indah Raya, Bekasi </h3>
            </div>
        </div>
    </div>

    <div id="schedule_list_bottom" className="flex justify-end gap-5">
        <div id="schedule_list_action_1">
            <a href="" className="text-xs text-primary font-regular hover:underline"> Lihat Sekolah/Centre </a>
        </div>

        <div id="schedule_list_action_2">
            <a href="" className="text-xs text-primary font-regular hover:underline"> Resources </a>
        </div>

        <div id="schedule_list_action_3">
            <a href="" className="text-xs text-primary font-regular hover:underline"> Data Murid </a>
        </div>
    </div>
</div> */}