"use client";
// import { cookies } from 'next/headers';

export default function AddSekolahCentre() {
    // const cookieStore = cookies();
    // const token = cookieStore.get('token'); // Replace 'token' with your actual cookie name

    const handleSubmit = async (e:any) => {
        e.preventDefault();        
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const res = await fetch('http://127.0.0.1:8000/api/schoolcentres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token?.value}` // Ensure you are passing the value of the cookie
            },
            cache: 'no-cache',
            body: JSON.stringify({data}),
        });

        if (res.ok) {
            // * Redirect or show success message
            window.location.href = '/activity/sekolah-centre'; // TODO: Sementara sebelum pakai middleware
        } else {
            // Handle error
            alert('Error: Failed to add Sekolah/Centre');
            console.log(res);
            console.log(data);
        }
    }

    return (
        <main id="add_sekolah-centre" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="add_sekolah-centre_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Sekolah & Centre - [TAMBAH] </h1>
            </div>

            <div id="add_sekolah-centre_content">
                <form onSubmit={handleSubmit} id="add_sekolah-centre_form" className="grid grid-cols-2 gap-y-5">
                    <div id="add_sekolah-centre_nama" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_nama" className="text-base font-semibold text-black"> Nama: </label>
                        <input type="text" id="add_sekolah-centre_nama" name="nama" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80" />
                    </div>

                    <div id="add_sekolah-centre_jenis" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_jenis" className="text-base font-semibold text-black"> Jenis: </label>
                        <select id="add_sekolah-centre_jenis" name="jenis" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80">
                            <option value="">---</option>
                            <option value="Sekolah">Sekolah</option>
                            <option value="Centre">Centre</option>
                        </select>
                    </div>

                    <div id="add_sekolah-centre_alamat" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_alamat" className="text-base font-semibold text-black"> Alamat: </label>
                        <input type="text" id="add_sekolah-centre_alamat" name="alamat" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80" />
                    </div>

                    <div id="add_sekolah-centre_daerah" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_daerah" className="text-base font-semibold text-black"> Daerah: </label>
                        <select id="add_sekolah-centre_daerah" name="daerah" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80">
                            <option value="">---</option>
                            <option value="Jakarta Utara">Jakarta Utara</option>
                            <option value="Jakarta Selatan">Jakarta Selatan</option>
                            <option value="Jakarta Barat">Jakarta Barat</option>
                            <option value="Jakarta Timur">Jakarta Timur</option>
                            <option value="Tanggerang">Tanggerang</option>
                            <option value="Tanggerang Selatan">Tanggerang Selatan</option>
                            <option value="Bekasi">Bekasi</option>
                            <option value="Bekasi Timur">Bekasi Timur</option>
                        </select>
                    </div>

                    <div id="add_sekolah-centre_jenjang" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_jenjang" className="text-base font-semibold text-black"> Jenjang: </label>
                        <select name="jenjang" id="add_sekolah-centre_jenjang" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80">
                            <option value="">---</option>
                            <option value="SD">SD</option>
                            <option value="SMP">SMP</option>
                            <option value="SMA">SMA</option>
                        </select>
                    </div>

                    <div id="add_sekolah-centre_kelas" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_kelas" className="text-base font-semibold text-black"> Kelas: </label>
                        <input type="text" id="add_sekolah-centre_kelas" name="kelas" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80" />
                    </div>

                    <div id="add_sekolah-centre_tipe_materi" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_tipe-materi" className="text-base font-semibold text-black"> Tipe Materi: </label>
                        <input type="text" id="add_sekolah-centre_tipe_materi" name="tipeMateri" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80" />
                    </div>

                    <div id="add_sekolah-centre_materi" className="flex flex-col gap-1">
                        <label htmlFor="add_sekolah-centre_materi" className="text-base font-semibold text-black"> Materi: </label>
                        <select name="materi" id="" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 py-2 w-80">
                            <option value="">---</option>
                            <option value="SD">Scratch</option>
                            <option value="SMP">Roblox</option>
                            <option value="SMA">U-Kit</option>
                            <option value="SMA">Jimu</option>
                            <option value="SMA">Arduino</option>
                        </select>
                    </div>

                    <div id="add_sekolah-centre_button" className="col-span-2 flex gap-96 pt-5">
                        <button type="reset" className="w-fit text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-red hover:bg-red-700 hover:underline duration-300 px-10 py-2 rounded-md">
                            Cancel
                        </button>

                        <button type="submit" className="w-fit text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-10 py-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
};

