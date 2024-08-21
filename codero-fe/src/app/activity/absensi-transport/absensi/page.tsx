export default function Absensi() {
    return (
        <main id="absensi" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="absensi_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Absensi </h1>
            </div>

            <div id="absensi_content">
                <form action="" id="absensi_form" className="grid grid-cols-3 gap-y-6">
                    <div id="absensi_hari" className="flex flex-col gap-1">
                        <label htmlFor="absensi_hari_input" className="text-base font-semibold text-black"> Hari: </label>
                        <select name="" id="absensi_hari_input" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-28" required>
                            <option value="Senin">Senin</option>
                            <option value="Selasa">Selasa</option>
                            <option value="Rabu">Rabu</option>
                            <option value="Kamis">Kamis</option>
                            <option value="Jumat">Jumat</option>
                            <option value="Sabtu">Sabtu</option>
                            <option value="Minggu">Minggu</option>
                        </select>
                    </div>

                    <div id="absensi_tanggal" className="flex flex-col gap-1">
                        <label htmlFor="absensi_tanggal_input" className="text-base font-semibold text-black"> Tanggal: </label>
                        <input type="date" name="" id="absensi_tanggal_input" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-44" required/>
                    </div>

                    <div id="absensi_jam" className="flex flex-col gap-1">
                        <label htmlFor="absensi_jam_input" className="text-base font-semibold text-black"> Jam: </label>
                        <div id="absensi_jam_input_container" className="flex items-center gap-2">
                            <input type="time" name="" id="absensi_jam_input_datang" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-28" required/>
                            <span className="font-semibold text-xl px-2"> - </span>
                            <input type="time" name="" id="absensi_jam_input_pulang" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-28" required/>
                        </div>
                    </div>

                    <div id="absensi_kegiatan" className="flex flex-col gap-1">
                        <label htmlFor="absensi_kegiatan_input" className="text-base font-semibold text-black"> Kegiatan: </label>
                        <select name="" id="absensi_kegiatan_input" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-64" required>
                            <option value="Pendidikan"> Mengajar [Onsite] </option>
                            <option value="Pendidikan"> Mengajar [Online] </option>
                            <option value="Pendidikan"> Demo Ekskul </option>
                            <option value="Pendidikan"> Trial Class </option>
                            <option value="Pendidikan"> Meeting Sekolah </option>
                            <option value="Pendidikan"> Pameran </option>
                            <option value="Pendidikan"> Lomba </option>
                        </select>
                    </div>

                    <div id="absensi_lokasi" className="flex flex-col gap-1 col-span-2">
                        <label htmlFor="absensi_lokasi_input" className="text-base font-semibold text-black"> Lokasi: </label>
                        <select name="" id="absensi_lokasi_input" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-64">
                            <option value="Sekolah"> SDK Penabur </option>
                            <option value="Sekolah"> SDN Negeri </option>
                            <option value="Kantor"> Kantor BSD </option>
                            <option value="Kantor"> Centre Bintaro </option>
                        </select>
                    </div>

                    <div id="absensi_button" className="flex justify-between col-span-3 pt-5">
                        <button type="reset" className="w-fit text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-red-600 hover:bg-red-700 hover:underline duration-300 px-7 py-2 rounded-md">
                            Cancel
                        </button>

                        <button type="submit" className="w-fit text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-7 py-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
};
