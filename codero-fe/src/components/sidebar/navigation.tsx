"use client";

// Image
import Image from "next/image";
import LogoCodero from "../../../public/images/logo_codero2.png";

// Sidebar
import { SidebarItems } from "./sidebar-data";
import SidebarLink from "./sidebar-link";

// Header Icons
import HamburgerIcon from "../../../public/icons/hamburger-icon";
import UserIcon from "../../../public/icons/user-icon";
import ArrowDownHeader from "../../../public/icons/arrow-down-header";

// React Hooks
import { Children, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CloseIcon from "../../../public/icons/close-icon";

export default function Navigation({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        const checkToken = async () => {
            try {
                const res = await fetch("/api/checkToken", {
                    method: "GET",
                });
                            
                if (!res.ok) {
                    router.push("/login");
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("An unexpected error occurred:", error);
            }
            setLoading(false);
        }
        checkToken();
        console.log(loading);
        
    }, []);
    
    const [loading, setLoading] = useState(true);
    
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [profileVisible, setProfileVisible] = useState(false);
    
    // Logout Popup
    const [logoutOpen, setLogoutOpen] = useState(false);
    
    function openPopup() {
        setLogoutOpen(true);
    }
    
    function closePopup() {
        setLogoutOpen(false);
    }
    
    // Logout Function
    const router = useRouter();
    
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "POST",
            });
            
            if (res.ok) {
                router.push("/login"); // Redirect the user to the login page after logout
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    };
    
    
    
    // Pathname that doesn't require layout
    const pathname = usePathname();
    const noLayout = [
        '/login', '/register', 'logout',
        // How to call failed login popup here?
        
    ];
    
    if (noLayout.includes(pathname)) {
        return (
            <>
                {children}
            </>
        );
    }
    
    if (loading) {
        return (
            <>
                <h1> loading... </h1>
            </>
        )
    }

    return (
        <main className="flex">
            {/* Sidebar */}
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
                    {SidebarItems.map((item, index) => (
                        <SidebarLink
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

            <div id="page_right" className={`relative ${sidebarVisible ? 'w-right' : 'w-full'}`}>
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
                            <button type="button" onClick={openPopup} className="flex pl-2.5 py-2 text-red-600 font-medium hover:bg-gray-200 hover:underline duration-300"> Logout </button>
                        </div>
                    </div>
                </main>
                
                {logoutOpen && (
                    <div id="logout-popup" className="z-10 bg-gray-100 shadow-xl shadow-black-600 drop-shadow-lg flex flex-col gap-2 justify-between absolute w-96 pb-16 rounded-lg top-0 left-1/2 -translate-x-1/2 translate-y-full">
                        <span className="flex justify-end items-center bg-gray-300">
                            <button 
                                type="button"
                                onClick={closePopup}
                                className="bg-transparent px-2 py-1.5 text-black hover:text-white font-light text-lg hover:bg-red-600 duration-300"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </span>

                        <h1 className="font-semibold text-lg text-center pt-5">Are you sure you want to log out?</h1>

                        <div className="flex gap-5 justify-center items-center">
                            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold tracking-wide hover:underline hover:bg-red-700 duration-500">Yes, I&apos;m sure!</button>
                            <button onClick={closePopup} className="bg-primary text-white font-semibold px-4 py-2 rounded-md tracking-wide hover:underline duration-500 hover:bg-secondary"> Cancel </button>
                        </div>
                    </div>
                )}
                
                {children}
            </div>

        </main>
    )
}
