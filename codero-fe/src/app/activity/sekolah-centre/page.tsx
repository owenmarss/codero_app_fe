export default async function SekolahCentre() {
    const res = await fetch('http://127.0.0.1:8000/api/schoolcentres', {cache: 'force-cache', next:{revalidate: 60}});
    // {cache: 'no-cache', next:{revalidate: 60}} -> to not cache the data
    const data = await res.json();
    // console.log(data);

    return (
        <main id="sekolah-centre" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="sekolah-centre_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Sekolah & Centre </h1>
            </div>
 
            <div id="sekolah-centre_filter" className="flex justify-between items-center">
                <div id="jenis-sekolah-center_filter" className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-black"> Jenis: </h2>
                    <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
                        <option value="">---</option>
                        <option value="Sekolah">Sekolah</option>
                        <option value="Centre">Centre</option>
                    </select>
                </div>

                <div id="daerah-sekolah-center_filter" className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-black"> Daerah: </h2>
                    <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
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

                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Search
                </button>
            </div>

            <div id="sekolah-centre_content" className="flex flex-col gap-10">
                <div id="sekolah-centre_table_container" className="overflow-x-scroll overflow-y-scroll h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                    <table id="sekolah-centre_table" className="table-auto w-full shadow-md rounded min-w-max">
                        <thead>
                            <tr className="bg-blue-200 text-sm">
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> No </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Nama </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Jenis </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Alamat </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Daerah </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Jenjang </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Kelas </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Tipe Materi </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Materi </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5" colSpan={2}> Action </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item:any, index:any) => (
                                <tr key={item.id} className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {index + 1} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.nama} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.jenis} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.alamat} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.daerah} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.jenjang} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.kelas} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.tipeMateri} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.materi} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5">
                                        <a href={`/sekolah-centre/info-${item.id}`} className="text-primary hover:text-secondary">
                                            Lihat Sekolah
                                        </a>
                                    </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5">
                                        <a href={`/sekolah-centre/student-list-${item.id}`} className="text-primary hover:text-secondary">
                                            Absensi Murid
                                        </a>
                                    </td>
                                </tr>   
                            ))}
                        </tbody>
                    </table>
                </div>

                <div id="sekolah-centre_button_container" className="flex justify-end">
                    <a href="/activity/sekolah-centre/add">
                        <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                            Tambah Sekolah
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
};
