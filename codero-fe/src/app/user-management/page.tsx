import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import PenIcon from '../../../public/icons/pen-icon';

export default async function UserManagement() {
    const cookieStore = cookies();
    const token = cookieStore.get('token'); // Replace 'token' with your actual cookie name

    let position: string | null = null;
    if (token?.value) {
        try {
            const decodedToken: any = jwt.decode(token.value);
            position = decodedToken?.position || null;
        } catch (error) {   
            console.error('Failed to decode token:', error);
        }
    }

    const res = await fetch('http://127.0.0.1:8000/api/users', {
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${token?.value}` // Ensure you are passing the value of the cookie
        }
    });

    const data = await res.json();

    if (!res.ok) {
        return <div>Failed to fetch data</div>;
    }

    function convertDate(dateStr: string) {
        const date = new Date(dateStr);

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    return (
        <main className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="user-management_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">User Management</h1>
            </div>

            <div id="user-management_filter" className="flex justify-between items-center">
                <div id="position_filter" className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-black"> Posisi: </h2>
                    <select className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-6 py-2">
                        <option value="">---</option>
                        <option value="Head">Head</option>
                        <option value="HRD">HRD</option>
                        <option value="Finance">Finance</option>
                        <option value="Business Development">Business Development</option>
                        <option value="Teacher">Teacher</option>
                    </select>
                </div>

                <div id="working-hour_filter" className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-black"> Jam Kerja: </h2>
                    <select className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-6 py-2">
                        <option value="">---</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Search
                </button>
            </div>

            <div id="user-management_content" className="flex flex-col gap-10">
                <div id="user-management_table_container" className="overflow-x-scroll overflow-y-scroll pb-3 h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                    <table id="sekolah-centre_table" className="table-auto w-full shadow-md rounded min-w-max">
                        <thead>
                            <tr className="bg-blue-200 text-sm">
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> No </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Nama </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> ID Karyawan </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Jenis Kelamin </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Posisi </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Jam Kerja </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Tanggal Lahir </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Alamat </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> No Telepon </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Email </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Cabang </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> NPWP </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5"> Rekening </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5" colSpan={position && ['Head', 'HRD'].includes(position) ? 4 : 3}> Action </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item: any, index: any) => (
                                <tr key={item.id} className="text-center text-xs hover:bg-gray-200 duration-300">
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {index + 1} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.first_name} {item.last_name} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.employee_id} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.gender} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.position} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.working_hour} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {convertDate(item.birth_date)} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.address} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.phone} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.email} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.branch} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item?.npwp} </td>
                                    <td className="shadow py-3 border-b border-gray-150 px-5"> {item.bank} - [{item.account_number}] </td>

                                    {position && ['Head', 'HRD'].includes(position) && (
                                        <>
                                            <td className="shadow py-3 border-b border-gray-150 px-5">
                                                <a href="" className="text-primary hover:text-secondary">
                                                    Lihat Detail
                                                </a>
                                            </td>

                                            <td className="shadow py-3 border-b border-gray-150 px-5">
                                                <a href={`/activity/sekolah-centre/edit-${item.id}`} className="text-orange hover:text-orange-secondary">
                                                    Edit
                                                </a>
                                            </td>
                                            
                                            <td className="shadow py-3 border-b border-gray-150 px-5">
                                                <form action="">
                                                    <button type="submit" className="text-red hover:text-red-secondary">
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {position && ['Head', 'HRD'].includes(position) && (
                <div id="user-management_button_container" className="flex justify-end">
                    <a href="/activity/user-management/add">
                        <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                            Tambah User
                        </button>
                    </a>
                </div>
            )}
        </main>
    )
};
