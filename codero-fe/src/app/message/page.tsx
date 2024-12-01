"use client";

// Importing the icons
import EnvelopeIcon from "../../../public/icons/envelope-icon";
import PaginationLeft from "../../../public/icons/pagination-left";
import PaginationRight from "../../../public/icons/pagination-right";
import CloseIcon from "../../../public/icons/close-icon";
import { useEffect, useState } from "react";

type Message = {
    totalMessages: number;
    totalPages: number;
    currentPage: number;
    messages: {
        id: number;
        id_message: number;
        id_recipient: number;
        status: string;
        createdAt: string;
        updatedAt: string;
        message: {
            id: number;
            id_sender: number;
            send_date: string;
            send_time: string;
            subject: string;
            content: string;
            createdAt: string;
            updatedAt: string;
            sender: {
                first_name: string;
                last_name: string;
                email: string;
            };
        };
    }[];
};

export default function Message() {
    const [messages, setMessages] = useState<Message>(); // Menampung data message dari API route
    const [detailMessage, setDetailMessage] = useState(0); // Menampung data message yang dipilih
    const [countPage, setCountPage] = useState(0); // Menampung jumlah halaman
    const [currentPage, setCurrentPage] = useState(1); // Menampung halaman saat ini

    const [showDetailMessage, setShowDetailMessage] = useState(false);

    async function getAllMessages(page: number = 1) {
        try {
            const res = await fetch(`/api/getAllMessages?page=${page}`, {
                method: "GET",
            });
            const data = await res.json();
            console.log(data);

            setMessages(data);
            setCountPage(Math.ceil(data.totalMessages / 6));
            setCurrentPage(data.currentPage);
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    }

    function changePage(page: number) {
        if (page < 1 || page > countPage) return;
        setCurrentPage(page);
        getAllMessages(page);
    }

    function convertDate(dateStr: string) {
        const date = new Date(dateStr);

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    useEffect(() => {
        getAllMessages();
    }, []);

    return (
        <main id="message" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="message_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    Message
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
                    {messages?.messages.length === 0 ? (
                        <p>No messages available.</p>
                    ) : (
                        messages?.messages.map((messageData: any, index: number) => (
                            <div
                                onClick={() => {setDetailMessage(index); setShowDetailMessage(true)}}
                                key={messageData.id}
                                id="message_inbox"
                                className="bg-gray-200 py-3 rounded-lg group hover:bg-[#70C0F9] shadow-sm shadow-slate-400 duration-300"
                            >
                                <div className="flex items-center gap-5">
                                    <EnvelopeIcon className="text-black group-hover:text-white w-[7%]" />

                                    <h1 className="font-semibold text-sm w-[15%] group-hover:text-white truncate">
                                        {messageData.message.sender
                                            ?.first_name || "Unknown"}
                                        {/* Spacer */} {/* Spacer */}
                                        {messageData.message.sender
                                            ?.last_name || ""}
                                    </h1>

                                    <h1 className="font-semibold text-sm w-[15%] group-hover:text-white">
                                        {messageData.message.send_date ||
                                            "No date"}
                                    </h1>

                                    <h1 className="font-semibold text-sm w-[30%] truncate group-hover:text-white">
                                        {messageData.message.subject ||
                                            "No subject"}
                                    </h1>

                                    <h1 className="font-light text-gray-500 text-sm truncate w-[33%] pr-5 group-hover:text-white">
                                        {messageData.message.content ||
                                            "Empty message content"}
                                    </h1>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Popup Modal for Message by clicking the message */}
                <div
                    id="message_popup"
                    className={`absolute top-0 shadow-black shadow-md drop-shadow-sm left-1/2 translate-y-12 -translate-x-1/2 min-w-[28rem] min-h-24 bg-gray-100 rounded-lg z-20 ${showDetailMessage ? "block" : "hidden"}`}
                >
                    <span className="flex justify-end items-center bg-gray-300">
                        <button
                            type="button"
                            onClick={() => setShowDetailMessage(false)}
                            className="bg-transparent px-2 py-1.5 text-black hover:text-white font-light text-lg hover:bg-red-600 duration-300"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </span>

                    <div
                        id="message_popup_content"
                        className="flex flex-col gap-[1.20rem] px-5 pt-3 pb-10"
                    >
                        <div
                            id="message_popup_content_from"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg"> Dari: </h1>
                            <h1 className="font-light text-gray-500 flex gap-2">
                                {messages
                                    ? messages.messages[detailMessage].message
                                          .sender.first_name
                                    : "Unknown"}{" "}
                                {messages
                                    ? messages.messages[detailMessage].message
                                          .sender.last_name
                                    : "Unknown"}
                                <p> - </p>
                                <p className="font-medium italic hover:text-primary cursor-pointer hover:underline underline-offset-2">
                                    {messages
                                        ? messages.messages[detailMessage]
                                              .message.sender.email
                                        : ""}
                                </p>
                            </h1>
                        </div>

                        <div
                            id="message_popup_content_date"
                            className="flex flex-col gap-0.5"
                        >
                            <h1 className="font-semibold text-lg">
                                {" "}
                                Tanggal & Waktu:{" "}
                            </h1>
                            <div className="font-light text-gray-500 flex items-center gap-[0.65rem]">
                                {/* {messages
                                    ? messages.messages[detailMessage].message
                                          .send_date
                                    : "No Date"} */}

                                <h1 className="font-light text-gray-500">
                                    {convertDate( messages ? messages.messages[detailMessage].message.send_date : "")}
                                </h1>

                                <h1 className="font-light text-gray-500"> - </h1>

                                <div className="flex gap-1">
                                    <h1 className="font-light text-gray-500">
                                        {messages
                                            ? messages.messages[detailMessage].message
                                                .send_time.slice(0, 5)
                                            : "No Time"}
                                    </h1>

                                    <h2 className="font-light text-gray-500"> WIB </h2>
                                </div>


                            </div>
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
                                {messages
                                    ? messages.messages[detailMessage].message
                                          .subject
                                    : ""}
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
                                {messages
                                    ? messages.messages[detailMessage].message
                                          .content
                                    : ""}
                                {/* {messagesData[0].message.send_time ||
                                    "Empty message content"}{" "} */}
                            </h1>
                        </div>

                        <div className="flex justify-end pt-5">
                            <button 
                                type="button" 
                                onClick={() => setShowDetailMessage(false)}
                                className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-red-600 hover:bg-red-700 hover:underline duration-300 px-5 py-2 rounded-md"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    id="message_pagination"
                    className="flex justify-center items-center gap-3 pt-3"
                >
                    <button className="group mr-5" onClick={()=>changePage(currentPage - 1)}>
                        <PaginationLeft className="text-black group-hover:text-primary duration-300" />
                    </button>

                    <div id="message_page_button" className="flex gap-4">
                        {Array.from({ length: countPage }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => changePage(i + 1)}
                                className="text-black text-base font-bold border-[1.5px] border-transparent rounded-full w-10 h-10 hover:underline decoration-2 underline-offset-4 hover:bg-primary hover:border-primary hover:text-white duration-300"
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button className="group ml-5" onClick={()=>changePage(currentPage + 1)}>
                        <PaginationRight className="text-black group-hover:text-primary duration-300" />
                    </button>
                </div>
            </div>
        </main>
    );
}
