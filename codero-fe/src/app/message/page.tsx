// Importing the necessary libraries and tools
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// Importing the icons
import EnvelopeIcon from "../../../public/icons/envelope-icon";
import PaginationLeft from "../../../public/icons/pagination-left";
import PaginationRight from "../../../public/icons/pagination-right";
import CloseIcon from "../../../public/icons/close-icon";

type Message = {
    id: number;
    subject: string;
    isi_pesan: string;
    tanggal_dikirim: string;
    waktu_dikirim: string;
    pengirim: {
        namaDepan: string;
        namaBelakang: string;
        email: string;
    };
    message_recipients?: {
        id: number;
        id_message: number;
        id_penerima: number;
        status: string;
        createdAt: string;
        updatedAt: string;
        penerima: {
            namaDepan: string;
            namaBelakang: string;
            email: string;
        };
    } [];
};

export default async function Message() {
    // Get All Messages
    const cookiesStore = cookies();
    const token = cookiesStore.get("token");
    let userId = null;
    // let messageId = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        userId = decodedToken?.id;
    }

    const res = await fetch(
        `http://127.0.0.1:8000/api/messages/user/${userId}`,
        {
            method: "GET",
        }
    );
    
    const data = await res.json();
    const messagesData: any[] = data || [];

    console.log("Messages:", messagesData);
    // console.log("Messages:", messages[0].message.pengirim?.namaDepan);

    return (
        <main id="message" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="message_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    {" "}
                    Message{" "}
                </h1>
            </div>

            <div id="message_content" className="flex flex-col gap-5 relative">
                <div
                    id="message_filter"
                    className="flex justify-between items-center pb-2"
                >
                    <div
                        id="message_filter_date"
                        className="flex justify-between items-center gap-4"
                    >
                        <h2 className="text-lg font-semibold text-black">
                            {" "}
                            Tanggal:{" "}
                        </h2>
                        <input
                            type="date"
                            name=""
                            id=""
                            className="text-base text-gray-500 bg-gray-200 rounded-md px-4 py-2"
                        />
                    </div>

                    <div
                        id="message_filter_status"
                        className="flex justify-between items-center gap-4"
                    >
                        <h2 className="text-lg font-semibold text-black">
                            {" "}
                            Status:{" "}
                        </h2>
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

                <div
                    id="message_inbox_container"
                    className="flex flex-col gap-4"
                >
                    {messagesData.length === 0 ? (
                        <p>No messages available.</p>
                    ) : (
                        messagesData.map((messageData) => (
                            <div
                                key={messageData.id}
                                id="message_inbox"
                                className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300"
                            >
                                <a href="" className="flex items-center gap-5">
                                    <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                                    <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate">
                                        {messageData.message.pengirim
                                            ?.namaDepan || "Unknown"}{" "}
                                        {messageData.message.pengirim
                                            ?.namaBelakang || ""}
                                    </h1>
                                    <h1 className="font-semibold text-sm w-[15%] group-hover:text-white">
                                        {messageData.message.tanggal_dikirim ||
                                            "No date"}
                                    </h1>
                                    <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white">
                                        {messageData.message.subject ||
                                            "No subject"}
                                    </h1>
                                    <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white">
                                        {messageData.message.isi_pesan ||
                                            "Empty message content"}
                                    </h1>
                                </a>
                            </div>
                        ))
                    )}
                </div>

                {/* Popup Modal for Message by clicking the message */}
                <div
                    id="message_popup"
                    className="absolute top-0 left-1/2 translate-y-10 -translate-x-1/2 min-w-[28rem] min-h-full bg-gray-100 rounded-lg z-20 hidden"
                >
                    <span className="flex justify-end items-center bg-gray-300">
                        <button
                            type="button"
                            className="bg-transparent px-2 py-1.5 text-black hover:text-white font-light text-lg hover:bg-red-600 duration-300"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </span>

                    <div
                        id="message_popup_content"
                        className="flex flex-col gap-3 px-5 pt-3 pb-10"
                    >
                        <div
                            id="message_popup_content_from"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg"> Dari: </h1>
                            <h1 className="font-light text-gray-500 flex gap-2">
                                {messagesData[0].message.pengirim?.namaDepan ||
                                    "Unknown"}{" "}
                                {messagesData[0].message.pengirim
                                    ?.namaBelakang || ""}
                                <p> - </p>
                                <p className="hover:text-primary cursor-pointer hover:underline underline-offset-2">
                                    {messagesData[0].message.pengirim?.email ||
                                        ""}
                                </p>
                            </h1>
                        </div>

                        <div
                            id="message_popup_content_date"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg">
                                {" "}
                                Tanggal:{" "}
                            </h1>
                            <h1 className="font-light text-gray-500">
                                {" "}
                                {messagesData[0].message.tanggal_dikirim ||
                                    "No date"}{" "}
                            </h1>
                        </div>

                        <div
                            id="message_popup_content_subject"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg">
                                {" "}
                                Subject:{" "}
                            </h1>
                            <h1 className="font-light text-gray-500">
                                {" "}
                                {messagesData[0].message.subject ||
                                    "No subject"}{" "}
                            </h1>
                        </div>

                        <div
                            id="message_popup_content_message"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg">
                                {" "}
                                Message:{" "}
                            </h1>
                            <h1 className="font-light text-gray-500">
                                {" "}
                                {messagesData[0].message.isi_pesan ||
                                    "Empty message content"}{" "}
                            </h1>
                        </div>
                    </div>
                </div>

                <div
                    id="message_pagination"
                    className="flex justify-center items-center gap-3 pt-3"
                >
                    <button className="group mr-5">
                        <PaginationLeft className="text-black group-hover:text-primary duration-300" />
                    </button>

                    <div id="message_page_button" className="flex gap-4">
                        <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300">
                            1
                        </button>
                        <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300">
                            2
                        </button>
                        <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300">
                            3
                        </button>
                        <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300">
                            4
                        </button>
                        <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300">
                            5
                        </button>
                        {/* <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:bg-primary hover:border-primary hover:text-white duration-300"> 11 </button> */}
                        {/* <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:bg-primary hover:border-primary hover:text-white duration-300"> 225 </button> */}
                        {/* <button className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:bg-primary hover:border-primary hover:text-white duration-300"> 2250 </button> */}
                    </div>

                    <button className="group ml-5">
                        <PaginationRight className="text-black group-hover:text-primary duration-300" />
                    </button>
                </div>
            </div>
        </main>
    );
}
