"use client"

// Image
import Image from 'next/image';
import LogoCodero from "../../../public/images/logo_codero2.png"

// Icon
import HomeIcon from "../../../public/icons/home-icon";
import ScheduleIcon from "../../../public/icons/schedule-icon";
import ActivityIcon from "../../../public/icons/activity-icon";
import HistoryIcon from "../../../public/icons/history-icon";
import NotificationIcon from "../../../public/icons/notification-icon";
import ArrowDownSidebar from "../../../public/icons/arrow-down-sidebar";

// React Hooks
import { useState, useEffect } from 'react';

import Header from "./header";

export default function Sidebar() {
    // function SubmenuDropdown() {
    //     // document.querySelector("#dashboard_link_sub")?.classList.toggle('hidden')
    //     // document.querySelector("#dashboard_arrow")?.classList.toggle('rotate-180')
    //     const dashboardLinkSub = document.querySelector("#dashboard_link_sub");
    //     const dashboardArrow = document.querySelector("#dashboard_arrow");
    //     if (dashboardLinkSub && dashboardArrow) {
    //         dashboardLinkSub.classList.toggle('hidden');
    //         dashboardArrow.classList.toggle('rotate-180');
    //     }
    // }

    const [submenuVisible, setSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuVisible(!submenuVisible);
    };

    useEffect(() => {
        // Hide saat load
        const dashboardLinkSub = document.querySelector("#dashboard_link_sub");
        const dashboardArrow = document.querySelector("#dashboard_arrow");
        if (dashboardLinkSub && dashboardArrow) {
            dashboardLinkSub.classList.add('hidden');
        }
    }, []); // Run hanya sekali saat load

    return (
        <main id="sidebar" className="w-72 min-h-[100vh] bg-black flex flex-col gap-[72px]">
            <div id="sidebar_logo" className="flex mt-10 justify-center">
                <Image src={LogoCodero} alt='Codero' className='w-40'/>
            </div>

            <div id="sidebar_nav" className="flex flex-col gap-10 items-center">
                <div id="dashboard_link" className="flex flex-col">
                    <div id="dashboard_link_main" className="flex items-center group cursor-pointer">
                        <HomeIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-32 ml-4"> Dashboard </a>
                        <button className="mt-1" onClick={toggleSubmenu}>
                            <ArrowDownSidebar id="dashboard_arrow" className={`text-gray-400 group-hover:text-primary duration-500 ${submenuVisible ? 'rotate-180' : ''}`}/>
                        </button>
                    </div>

                    <div id="dashboard_link_sub" className={`flex flex-col gap-3 mt-4 ml-10 group cursor-pointer ${submenuVisible ? '' : 'hidden'}`}>
                        <a href="" className="text-sm font-semibold text-gray-400 tracking-wide hover:text-primary hover:underline duration-500"> Home </a>
                        <a href="" className="text-sm font-semibold text-gray-400 tracking-wide hover:text-primary hover:underline duration-500"> User Profile </a>
                    </div>
                </div>

                <div id="schedule_link">
                    <div id="schedule_link_main" className="flex items-center group cursor-pointer">
                        <ScheduleIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-32 ml-4"> Schedule </a>
                        <ArrowDownSidebar className="text-gray-400 mt-1 group-hover:text-primary group-hover:rotate-180 duration-500"/>
                    </div>
                </div>

                <div id="activity_link">
                    <div id="activity_link_main" className="flex items-center group cursor-pointer">
                        <ActivityIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-32 ml-4"> Activity </a>
                        <ArrowDownSidebar className="text-gray-400 mt-1 group-hover:text-primary group-hover:rotate-180 duration-500"/>
                    </div>
                </div>

                <div id="history_link">
                    <div id="history_link_main" className="flex items-center group cursor-pointer">
                        <HistoryIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-32 ml-4"> History </a>
                        <ArrowDownSidebar className="text-gray-400 mt-1 group-hover:text-primary group-hover:rotate-180 duration-500"/>
                    </div>
                </div>

                <div id="notification_link">
                    <div id="notification_link_main" className="flex items-center group cursor-pointer">
                        <NotificationIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-32 ml-4"> Notification </a>
                        <ArrowDownSidebar className="text-gray-400 mt-1 group-hover:text-primary group-hover:rotate-180 duration-500"/>
                    </div>
                </div>
            </div>
        </main>
    )
};
