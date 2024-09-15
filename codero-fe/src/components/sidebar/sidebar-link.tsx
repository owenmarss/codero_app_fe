// React Hooks
"use client"
import { useState, useEffect } from 'react';
import ArrowDownSidebar from '../../../public/icons/arrow-down-sidebar';

// Import Sidebar Data Types
import { submenu, SidebarItemDataTypes } from '../type/sidebar-type';

export default function SidebarLink(data: SidebarItemDataTypes) {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuVisible(!submenuVisible);
    };

    useEffect(() => {
        setSubmenuVisible(false);
    }, []); // Run hanya sekali saat load

    return (
        <div id="dashboard_link" className="flex flex-col px-10">
            <div id="dashboard_link_main" className="flex gap-3 items-center group cursor-pointer">
                {/* {data.icon} */}
                
                <a href={data.path} className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300 w-full">
                    {data.title}
                </a>
                
                {data.submenu &&
                    <button className="" onClick={toggleSubmenu}>
                        <ArrowDownSidebar id="dashboard_arrow" className={`text-gray-400 group-hover:text-primary duration-500 ${submenuVisible ? 'rotate-180' : ''}`}/>
                    </button>
                }
            </div>

            {data.submenu && 
                <div className={`flex flex-col group cursor-pointer pt-4 pl-8 gap-3 ${submenuVisible ? '' : 'hidden'}`}>
                    {data.subMenuItems?.map((item:submenu, index) => (
                        <a key={index} href={item.path} className="text-sm font-semibold text-gray-400 tracking-wide hover:text-primary hover:underline duration-500">
                            {item.title}
                        </a>
                    ))}
                </div>
            }
        </div>
    )
};
