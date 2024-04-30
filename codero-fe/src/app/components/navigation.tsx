"use client";

// Image
import Image from "next/image";
import LogoCodero from "../../../public/images/logo_codero2.png";

import { SIDENAV_ITEMS } from "../data/sidebar";
import DropdownLink from "../components/dropdown-link";
import Header from "../navigation/header";
import HamburgerIcon from "../../../public/icons/hamburger-icon";
import UserIcon from "../../../public/icons/user-icon";
import ArrowDownHeader from "../../../public/icons/arrow-down-header";
import { useState } from "react";

export default function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const [profileVisible, setProfileVisible] = useState(false);

    return (
        <main className="flex">
            <aside
                id="sidebar"
                className={`w-72 min-h-[100vh] bg-black flex-col gap-[72px] pb-16 ${sidebarVisible ? "flex" : "hidden"}`}
            >
                <div id="sidebar_logo" className="flex mt-10 justify-center">
                    <a href="/">
                        <Image src={LogoCodero} alt="Codero" className="w-40" />
                    </a>
                </div>

                <div id="sidebar_nav" className="flex flex-col gap-10">
                    {SIDENAV_ITEMS.map((item, index) => (
                        <DropdownLink
                            key={index}
                            title={item.title}
                            path={item.path}
                            icon={item.icon}
                            submenu={item.submenu}
                            subMenuItems={item.subMenuItems}
                        />
                    ))}
                </div>
            </aside>

            <div id="page_right" className={`${sidebarVisible ? 'w-right' : 'w-full'}`}>
                <main
                    id="header"
                    className="flex py-3 px-5 justify-between items-center shadow-md"
                >
                    <button
                        id="hamburger_icon_container"
                        className="cursor-pointer"
                        onClick={() => {setSidebarVisible(!sidebarVisible)}}
                    >
                        <HamburgerIcon />
                    </button>

                    <div
                        id="profile_container"
                        className="relative"
                    >   
                        <button 
                            className="flex items-center gap-1 cursor-pointer group"
                            onClick={() => {setProfileVisible(!profileVisible)}}
                        >
                            <UserIcon className="group-hover:text-primary duration-300" />
                            <ArrowDownHeader className={`group-hover:text-primary duration-500 ${profileVisible ? 'rotate-180' : ''}`} />
                        </button>


                        <div id="profile_dropdown" className={`w-40 flex flex-col absolute bg-gray-100 right-0 top-0 mt-10 rounded z-10 shadow-md drop-shadow-md rounded-lg border border-gray-300   ${profileVisible ? "flex" : "hidden"}`}>
                            <a href="/profile" className="pl-2.5 py-2 border-b border-gray-300 font-medium hover:bg-gray-200 hover:underline duration-300"> User Profile </a>
                            <a href="/notification" className="pl-2.5 py-2 border-b border-gray-300 font-medium hover:bg-gray-200 hover:underline duration-300"> Notification </a>
                            <a href="" className="pl-2.5 py-2 text-red-600 font-medium hover:bg-gray-200 hover:underline duration-300"> Logout </a>
                        </div>
                    </div>
                </main>

                {children}
            </div>
        </main>
    );
}
