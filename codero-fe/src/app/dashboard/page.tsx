import { cookies } from "next/headers";
import EnvelopeIcon from "../../../public/icons/envelope-icon";
import Notification2Icon from "../../../public/icons/notification2-icon";
import PenIcon from "../../../public/icons/pen-icon";
import RocketLaunch from "../../../public/icons/rocket-launch";
import Schedule2Icon from "../../../public/icons/schedule2-icon";
import jwt from "jsonwebtoken";

export default async function Dashboard() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let id = null;

    if(token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        method: "GET",
    });
    const data = await res.json();
    console.log(data);
    
    const title = data.gender === 'Laki-laki' ? 'Mr.' : 'Ms.';

    return (
        <main id="dashboard" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="dashboard_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Home </h1>
            </div>

            <div id="dashboard_card" className="grid grid-cols-4 gap-x-4 gap-y-4">
                <div id="dashboard_card_user" className="border-[1px] shadow-lg flex flex-col pt-4 pb-9 rounded-lg gap-3 col-span-1 row-span-3 order-1 drop-shadow-lg">
                    <div id="dashboard_card_user_top" className="flex items-center justify-between px-4">
                        <div className="flex flex-col w-3/4">
                            <h1 className="text-sm font-semibold"> Profile </h1>
                            <h1 className="text-xs text-gray-400 font-medium"> ID: <b className="font-semibold text-secondary"> {data.employee_id} </b> </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <a href="/message">
                                <Notification2Icon className="text-black hover:text-secondary duration-500 cursor-pointer"/>
                            </a>

                            <a href="/profile">
                                <PenIcon className="text-black hover:text-secondary duration-500 cursor-pointer"/>
                            </a>
                        </div>
                    </div>

                    <div id="dashboard_card_user_middle" className="flex items-center justify-center mt-1 cursor-pointer">
                        <div className="bg-gray-400 w-1/2 flex items-center justify-center rounded-full w-36 h-36">
                            Foto
                        </div>
                    </div>
                    
                    <div id="dashboard_card_user_bottom" className="flex flex-col items-center gap-1">
                        <h1 className="font-semibold text-base"> {title} {data.first_name} </h1>
                        <h2 className="text-secondary font-bold text-sm"> {data.position} ({data.working_hour}) </h2>
                        <h3 className="bg-secondary mt-1 px-4 py-1.5 rounded text-white uppercase font-bold tracking-wider text-sm"> {data.branch} </h3>
                    </div>
                </div>

                <div id="dashboard_card_reminder" className="col-span-2 row-span-1 border-[1px] order-2 relative rounded-lg flex items-center shadow-md group drop-shadow-md">
                    <div className="bg-secondary absolute h-full w-1.5 overflow-hidden rounded-md top-0 left-0 text-secondary blur-[1.5px]"> </div>
                    <div id="dashboard_card_reminder_text" className="flex flex-col pl-4">
                        <h1 className="uppercase text-xs tracking-wider font-light"> Reminder </h1>
                        <h2 className="text-lg tracking-wider font-medium"> Hello, <b className="font-bold"> {title} {data.first_name}</b>! </h2>
                        <h2 className="text-sm pt-1"> Selamat hari Senin! Jangan lupa menjaga kesehatan nya yah mr! </h2>
                    </div>
                </div>

                <div id="dashboard_card_absensi" className="row-span-2 order-4 flex flex-col justify-between px-4 py-4 bg-gradient-to-r from-[#2392ED] from-0%  to-[#7dc5ff] to-100% rounded-lg shadow-lg drop-shadow-lg">
                    <div id="dashboard_card_absensi_top" className="flex items-center justify-between">
                        <div id="dashboard_card_absensi_top_left"> 
                            <h1 className="text-sm font-bold text-white"> Absensi </h1>
                            <h1 className="text-xs text-gray-400 font-medium text-white"> Recap Absensi </h1>
                        </div>

                        <Schedule2Icon className="text-white"/>
                    </div>

                    <div id="dashboard_card_absensi_bottom" className="flex flex-col gap-1">
                        <div id="dashboard_total_absensi" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Total: </h1>
                            <b className="text-sm text-white font-bold"> 17x </b> 
                        </div>

                        <div id="dashboard_bulan_absensi" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Bulan: </h1>
                            <b className="text-sm text-white font-bold"> April </b>
                        </div>

                        <div id="dashboard_tahun_absensi" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Tahun: </h1>
                            <b className="text-sm text-white font-bold"> 2024 </b>
                        </div>
                    </div>

                    <div id="dashboard_card_absensi_link" className="flex justify-end">
                        <a href="history/history-absensi" className="text-gray-50 text-xs font-light hover:underline hover:text-white tracking-wider duration-300"> Lihat Detail Absensi... </a>
                    </div>
                </div>

                <div id="dashboard_card_transport" className="row-span-2 order-5 flex flex-col justify-between px-4 py-4 bg-gradient-to-r from-[#00AEE5] from-0%  to-[#70DBFE] to-100% rounded-lg shadow-lg drop-shadow-lg"> 
                    <div id="dashboard_card_transport_top" className="flex items-center justify-between">
                        <div id="dashboard_card_transport_top_left"> 
                            <h1 className="text-sm font-bold text-white"> Transport </h1>
                            <h1 className="text-xs text-gray-400 font-medium text-white"> Recap Transport </h1>
                        </div>

                        <RocketLaunch className="text-white"/>
                    </div>

                    <div id="dashboard_card_transport_bottom" className="flex flex-col gap-1">
                        <div id="dashboard_total_transport" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Total: </h1>
                            <b className="text-sm text-white font-bold"> Rp 188.000,00 </b> 
                        </div>

                        <div id="dashboard_bulan_transport" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Bulan: </h1>
                            <b className="text-sm text-white font-bold"> April </b>
                        </div>

                        <div id="dashboard_tahun_transport" className="flex items-center">
                            <h1 className="text-sm text-white w-2/6"> Tahun: </h1>
                            <b className="text-sm text-white font-bold"> 2024 </b>
                        </div>
                    </div>

                    <div id="dashboard_card_absensi_link" className="flex justify-end">
                        <a href="/history/history-transport" className="text-gray-50 text-xs font-light hover:underline hover:text-white tracking-wider duration-300"> Lihat Detail Transport... </a>
                    </div>
                </div>

                <div className="col-span-1 row-span-3 order-3 flex justify-center items-center bg-gray-200 rounded-lg drop-shadow-lg">
                    <h1 className="font-bold text-9xl"> ? </h1>
                </div>
            </div>

            <div id="dashboard_inbox" className="flex flex-col pt-5 gap-5">
                <div id="dashboard_inbox_title" className="w-fit">
                    <h1 className="text-2xl font-semibold text-black"> Message </h1>
                    <div className="bg-secondary w-full h-1.5">  </div>
                </div>

                <div id="dashboard_inbox_message_container" className="flex flex-col gap-4">
                    <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> HRD Codero </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Singgih Agus </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Arif Puji Wahiramar </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Muhammad Rizky </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>



                    {/* <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-1/4" />

                            <h1 className="font-bold text-sm w-2/4 group-hover:text-white"> Finance Codero </h1>
                            <h1 className="font-regular text-sm w-3/4 group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-regular text-sm truncate w-4/4 pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="dashboard_inbox_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-1/4" />

                            <h1 className="font-bold text-sm w-2/4 group-hover:text-white"> Singgih Agus </h1>
                            <h1 className="font-regular text-sm w-3/4 group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-regular text-sm truncate w-4/4 pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div> */}
                </div>

                <div id="dashboard_inbox_link" className="flex justify-end mt-1">
                    <a href="/message" className="text-primary font-semibold hover:underline hover:text-secondary duration-300"> Lihat Semua Pesan </a>
                </div>
            </div>
        </main>
    )
};
