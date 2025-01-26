export default function TeachingPayroll() {
    return (
        <main
            id="teaching-payroll"
            className="pt-7 pb-10 px-6 flex flex-col gap-5"
        >
            <div id="teaching_payroll_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    {" "}
                    Payroll - [Teaching]{" "}
                </h1>
            </div>

            <div id="teaching_payroll_content" className="flex flex-col gap-5">
                <div id="teaching_payroll_filter" className="flex justify-between items-center">
                    <div
                        id="jenis-sekolah-center_filter"
                        className="flex justify-between items-center gap-4"
                    >
                        <h2 className="text-lg font-semibold text-black">
                            {" "}
                            Bulan:{" "}
                        </h2>
                        <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
                            <option value="">---</option>
                            <option value="Sekolah">Sekolah</option>
                            <option value="Centre">Centre</option>
                        </select>
                    </div>

                    <div
                        id="daerah-sekolah-center_filter"
                        className="flex justify-between items-center gap-4"
                    >
                        <h2 className="text-lg font-semibold text-black">
                            {" "}
                            Tahun:{" "}
                        </h2>
                        <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
                            <option value="">---</option>
                            <option value="Jakarta Utara">Jakarta Utara</option>
                            <option value="Jakarta Selatan">
                                Jakarta Selatan
                            </option>
                            <option value="Jakarta Barat">Jakarta Barat</option>
                            <option value="Jakarta Timur">Jakarta Timur</option>
                            <option value="Tanggerang">Tanggerang</option>
                            <option value="Tanggerang Selatan">
                                Tanggerang Selatan
                            </option>
                            <option value="Bekasi">Bekasi</option>
                            <option value="Bekasi Timur">Bekasi Timur</option>
                        </select>
                    </div>

                    <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                        Search
                    </button>
                </div>

                <div id="teaching_payroll_form" className="grid grid-cols-2 gap-y-5 pt-5">
                    <div id="teaching_payroll_name" className="flex items-center">
                        <label htmlFor="teacher_name_payroll" className="font-semibold w-36"> Nama: </label>
                        <select name="teacher_name_payroll" id="teacher_name_payroll" className="bg-white border border-gray-200 rounded-md p-2 w-32">
                            <option value="1">Partner</option>
                            <option value="2">Private</option>
                        </select>
                    </div>

                    <div id="teaching_payroll_position" className="flex items-center">
                        <label htmlFor="teacher_position_payroll" className="font-semibold w-36"> Posisi: </label>
                        <select name="teacher_position_payroll" id="teacher_position_payroll" className="bg-white border border-gray-200 rounded-md p-2 w-56">
                            <option value="1">Business Development</option>
                            <option value="2">Teacher</option>
                        </select>
                    </div>

                    <div id="teaching_payroll_working_hour" className="flex items-center">
                        <label htmlFor="teacher_working_hour_payroll" className="font-semibold w-36"> Jam Kerja: </label>
                        <select name="teacher_working_hour_payroll" id="teacher_working_hour_payroll"  className="bg-white border border-gray-200 rounded-md p-2 w-32">
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <div id="teaching_payroll_branch" className="flex items-center">
                        <label htmlFor="teacher_branch_payroll" className="font-semibold w-36"> Cabang: </label>
                        <select name="teacher_branch_payroll" id="teacher_branch_payroll" className="bg-white border border-gray-200 rounded-md p-2 w-56">
                            <option value="1">Jakarta</option>
                            <option value="2">Bekasi</option>
                        </select>
                    </div>

                    <div id="teaching_payroll_salary" className="flex items-center">
                        <label htmlFor="teacher_salary_payroll" className="font-semibold w-36"> Gaji: </label>
                        <input type="number" name="teacher_salary_payroll" id="teacher_salary_payroll" className="bg-white border border-gray-200 rounded-md p-2 w-56" />
                    </div>
                </div>
            </div>
        </main>
    );
}
