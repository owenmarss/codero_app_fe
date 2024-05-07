import EnvelopeIcon from "../../../public/icons/envelope-icon";
import PaginationLeft from "../../../public/icons/pagination-left";
import PaginationRight from "../../../public/icons/pagination-right";

export default function Notification() {
    return (
        <main id="notification" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="dashboard_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Notification </h1>
            </div>

            <div id="notification_content" className="flex flex-col gap-5">
                <div id="notification_filter" className="flex justify-between items-center pb-2">
                    <div id="notification_filter_date" className="flex justify-between items-center gap-4">
                        <h2 className="text-lg font-semibold text-black"> Tanggal: </h2>
                        <input type="date" name="" id="" className="text-base text-gray-500 bg-gray-200 rounded-md px-4 py-2"/>
                    </div>

                    <div id="notification_filter_status" className="flex justify-between items-center gap-4">
                        <h2 className="text-lg font-semibold text-black"> Status: </h2>
                        <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
                            <option value="">---</option>
                            <option value="Dibaca">Dibaca</option>
                            <option value="Belum Dibaca">Belum Dibaca</option>
                        </select>
                    </div>

                    <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                        Search
                    </button>
                </div>

                <div id="notification_messages_container" className="flex flex-col gap-4">
                    <div id="notification_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> HRD Codero </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="notification_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Singgih Agus </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="notification_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Arif Puji Wahirman </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>

                    <div id="notification_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Muhammad Rizky </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>
                    
                    <div id="notification_message" className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300">
                        <a href="" className="flex items-center gap-5">
                            <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate"> Muhammad Rizky </h1>
                            <h1 className="font-semibold text-sm w-[15%] group-hover:text-white"> 26 April 2024 </h1>
                            <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white"> Subject Subject Subject Subject </h1>
                            <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime. Voluptate voluptatem reprehenderit perferendis fuga dicta recusandae quibusdam laboriosam, consectetur maiores officiis asperiores totam quisquam laudantium quae aut. Officiis, optio! </h1>
                        </a>
                    </div>
                </div>

                <div id="notification_pagination" className="flex justify-center items-center gap-3 pt-5">
                    <button className="group mr-5">
                        <PaginationLeft className="text-black group-hover:text-primary duration-300"/>
                    </button>

                    <div id="notification_page_button" className="flex gap-2">
                        <button className="text-black font-bold border-[1.5px] border-transparent rounded-full py-2 px-4 hover:bg-primary hover:border-primary hover:text-white duration-300"> 1 </button>
                        <button className="text-black font-bold border-[1.5px] border-transparent rounded-full py-2 px-4 hover:bg-primary hover:border-primary hover:text-white duration-300"> 2 </button>
                        <button className="text-black font-bold border-[1.5px] border-transparent rounded-full py-2 px-4 hover:bg-primary hover:border-primary hover:text-white duration-300"> 3 </button>
                        <button className="text-black font-bold border-[1.5px] border-transparent rounded-full py-2 px-4 hover:bg-primary hover:border-primary hover:text-white duration-300"> 4 </button>
                        <button className="text-black font-bold border-[1.5px] border-transparent rounded-full py-2 px-4 hover:bg-primary hover:border-primary hover:text-white duration-300"> 5 </button>
                    </div>

                    <button className="group ml-5">
                        <PaginationRight className="text-black group-hover:text-primary duration-300"/>
                    </button>
                </div>
            </div>
        </main>
    )
};
