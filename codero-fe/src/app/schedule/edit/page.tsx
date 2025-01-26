export default function EditSchedule() {
    return (
        <main id="edit_schedule" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="edit_schedule_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">Edit Schedule</h1>
            </div>

            <form id="edit_schedule_form" className="flex flex-col gap-10">
                <div id="edit_schedule_form_1" className="grid grid-cols-2 gap-y-8 items-center justify-between">
                    <div id="edit_schedule_client_type" className="flex items-center">
                        <label htmlFor="client_type" className="font-semibold w-44">Jenis Client:</label>
                        <select name="client_type" id="client_type" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-32">
                            <option value="1">Partner</option>
                            <option value="2">Private</option>
                        </select>
                    </div>

                    <div id="edit_schedule_session_type" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44"> Jenis Sesi: </label>
                        <select name="session_type" id="session_type" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-32">
                            <option value="1">Online</option>
                            <option value="2">Offline</option>
                        </select>
                    </div>

                    <div id="edit_schedule_activity" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44">Jenis Kegiatan: </label>
                        <select name="activity" id="activity" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-32">
                            <option value="Mengajar">Mengajar</option>
                            <option value="Trial Class">Trial Class</option>
                            <option value="Visit">Visit</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>

                    <div id="edit_schedule_day" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44">Hari: </label>
                        <select name="" id="" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-32" disabled>
                            <option value="Senin">Senin</option>
                            <option value="Selasa">Selasa</option>
                            <option value="Rabu">Rabu</option>
                            <option value="Kamis">Kamis</option>
                            <option value="Jumat">Jumat</option>
                            <option value="Sabtu">Sabtu</option>
                            <option value="Minggu">Minggu</option>
                        </select>
                    </div>

                    <div id="edit_schedule_date" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44">Tanggal: </label>
                        <input type="date" name="" id="" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-44" disabled />
                    </div>

                    <div id="edit_schedule_time_start" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44">Waktu: </label>
                        <div className="flex gap-3 items-center">
                            <input type="time" name="" id="" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-24" disabled />
                            <h1 className="font-medium">-</h1>
                            <input type="time" name="" id="" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-24" disabled />
                        </div>
                    </div>

                    <div id="edit_schedule_status" className="flex items-center">
                        <label htmlFor="" className="font-semibold w-44">Status: </label>
                        <select name="" id="" className="bg-gray-200 border border-gray-400 shadow-md rounded-md p-2 w-32" disabled>
                            <option value="Masuk">Masuk</option>
                            <option value="Libur">Libur</option>
                        </select>
                    </div>

                    <div id="edit_schedule_button" className="flex items-center gap-16">
                        <button className="bg-primary hover:bg-secondary duration-300 px-4 py-2 text-white font-bold rounded-md hover:underline"> Edit </button>
                        {/* <button className="bg-red hover:bg-red-secondary duration-300 px-4 py-2 text-white font-bold rounded-md hover:underline"> Cancel </button>
                        <button className="bg-green hover:bg-green-secondary duration-300 px-4 py-2 text-white font-bold rounded-md hover:underline"> Save </button> */}
                    </div>
                </div>

                <div id="edit_schedule_form_2" className="flex flex-col gap-10 border border-2 border-gray-400 rounded-xl px-6 pt-4 pb-10">
                    <div id="edit_schedule_partner" className="flex flex-col gap-3">
                        <div id="edit_schedule_partner_name" className="flex items-center">
                            <h1 className="font-semibold w-56">Partner: </h1>
                            <select name="" id="" className="bg-white border border-gray-200 rounded-md p-2 w-40">
                                <option value="">Partner 1</option>
                                <option value="">Partner 2</option>
                                <option value="">Partner 3</option>
                            </select>
                        </div>

                        <div id="edit_schedule_partner_category" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Jenis Partner: </h1>
                            <h1 className="text-gray-500 font-medium"> Sekolah </h1>
                        </div>

                        <div id="edit_schedule_partner_location" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Lokasi: </h1>
                            <h1 className="text-gray-500 font-medium"> Jl. Sunter Hijau IV </h1>
                        </div>

                        <div id="edit_schedule_partner_region" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Daerah: </h1>
                            <h1 className="text-gray-500 font-medium">Jakarta Utara</h1>
                        </div>

                        <div id="edit_schedule_partner_level" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Jenjang: </h1>
                            <h1 className="text-gray-500 font-medium">SD</h1>
                        </div>

                        <div id="edit_schedule_partner_grade" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Kelas: </h1>
                            <h1 className="text-gray-500 font-medium">2</h1>
                        </div>

                        <div id="edit_schedule_partner_curriculum" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Kurikulum: </h1>
                            <h1 className="text-gray-500 font-medium">Scratch For Beginner </h1>
                        </div>

                        <div id="edit_schedule_partner_curriculum_type" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Jenis Kurikulum: </h1>
                            <h1 className="text-gray-500 font-medium">Coding </h1>
                        </div>
                    </div>
                    
                    <div id="edit_schedule_student" className="flex flex-col gap-3 hidden">
                        <div id="edit_schedule_student_name" className="flex items-center">
                            <h1 className="font-semibold w-56">Murid: </h1>
                            <select name="" id="" className="bg-white border border-gray-200 rounded-md p-2 w-40">
                                <option value="">Student 1</option>
                                <option value="">Student 2</option>
                                <option value="">Student 3</option>
                            </select>
                        </div>

                        <div id="edit_schedule_student_age" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Umur: </h1>
                            <h1 className="text-gray-500 font-medium">11 </h1>
                        </div>

                        <div id="edit_schedule_student_birth_place_date" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Tempat, Tanggal Lahir: </h1>
                            <h1 className="text-gray-500 font-medium">Jakarta, 1 Januari 2011 </h1>
                        </div>

                        <div id="edit_schedule_student_address" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Alamat: </h1>
                            <h1 className="text-gray-500 font-medium">Jl. Sunter Hijau IV </h1>
                        </div>

                        <div id="edit_schedule_student_level" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Jenjang: </h1>
                            <h1 className="text-gray-500 font-medium">SD</h1>
                        </div>

                        <div id="edit_schedule_student_grade" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Kelas: </h1>
                            <h1 className="text-gray-500 font-medium">2</h1>
                        </div>

                        <div id="edit_schedule_partner_curriculum" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Kurikulum: </h1>
                            <h1 className="text-gray-500 font-medium">Scratch For Beginner </h1>
                        </div>

                        <div id="edit_schedule_partner_curriculum_type" className="flex items-center gap-2">
                            <h1 className="font-semibold w-56">Jenis Kurikulum: </h1>
                            <h1 className="text-gray-500 font-medium">Coding </h1>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
};
