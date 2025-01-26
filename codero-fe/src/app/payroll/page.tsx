import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export default function Payroll() {
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

    return (
        <main id="payroll" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="payroll_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Payroll </h1>
            </div>

            <div id="teaching_payroll" className='flex flex-col gap-5'>
                <div id="teachig_payroll_content" className="overflow-x-scroll overflow-y-scroll h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                    <table id="teaching_payroll_summary_table" className="table-auto w-full shadow-md rounded min-w-max">
                        <thead>
                            <tr className="bg-blue-200">
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> No </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Nama </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Posisi </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Periode </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Tanggal Mulai </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Tanggal Selesai </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total Masuk </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Gaji Kotor </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> PPH </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total Gaji </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm" colSpan={position && ['Head', 'HRD', 'Business Development'].includes(position) ? 4 : 3}> Action </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Owen Marscel </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 31 Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 2 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Ary Firmansyah </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 28 Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 3 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rizky Ramadhan </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 31 Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end">
                    <a href="/payroll/teaching-payroll" className="text-primary text-sm font-medium tracking-wider hover:text-secondary hover:underline duration-700"> Lihat lebih lanjut... </a>
                </div>
            </div>

            <div id="office_payroll" className="flex flex-col gap-5">
                <div id="office_payroll_content" className="overflow-x-scroll overflow-y-scroll h-fit max-h-72 shadow-lg drop-shadow rounded-lg">
                    <table id="teaching_payroll_summary_table" className="table-auto w-full shadow-md rounded min-w-max">
                        <thead>
                            <tr className="bg-green-secondary">
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> No </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Nama </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Posisi </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Periode </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Tanggal Mulai </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Tanggal Selesai </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total Masuk </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Gaji Kotor </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> PPH </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm"> Total Gaji </th>
                                <th className="font-bold shadow border-t border-gray-150 py-3 px-5 text-sm" colSpan={position && ['Head', 'HRD', 'Business Development'].includes(position) ? 4 : 3}> Action </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Owen Marscel </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 31 Januari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 2 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Ary Firmansyah </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 28 Februari 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr className="text-center text-xs hover:bg-gray-200 duration-300">
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 3 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rizky Ramadhan </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Teacher - Full-Time </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 1 Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 31 Maret 2021 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> 20x </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 5.000.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 50.000 </td>
                                <td className="shadow py-3 border-b border-gray-150 px-5 text-xs"> Rp. 4.500.000 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end">
                    <a href="/payroll/teaching-payroll" className="text-primary text-sm font-medium tracking-wider hover:text-secondary hover:underline duration-700"> Lihat lebih lanjut... </a>
                </div>
            </div>
        </main>
    )
};
