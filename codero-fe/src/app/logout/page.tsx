// "use client";
// import { useEffect } from 'react';

// "use server";
// import { cookies } from 'next/headers'

// export default function Logout() {
// cookies().delete('token');

// useEffect(() => {
// Remove the token from localStorage
// localStorage.removeItem('token');

// Optionally, if you are using cookies directly
// document.cookie = 'token=; Max-Age=0; path=/;'; // Removes the cookie by setting its expiry date to the past

// Redirect to the login page
// window.location.href = '/login';
// }, []); // Empty dependency array to run once on mount

// return null;
// }

"use client";

import { useRouter } from "next/navigation";
import CloseIcon from "../../../public/icons/close-icon";
import { useState } from "react";

const LogoutPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    function openPopup() {
        setIsOpen(true);
    }

    function closePopup() {
        setIsOpen(false);
    }

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

    return (
        <>
        </>
        // <>
        //     <button onClick={openPopup} className="bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>

        //     {isOpen && (
                // <main className="bg-gray-200 shadow-xl shadow-black-600 flex flex-col gap-2 justify-between absolute w-96 pb-16 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                //     <span className="flex justify-end items-center bg-gray-400">
                //         <button 
                //             type="button"
                //             className="bg-transparent px-2 py-1.5 text-black hover:text-white font-light text-lg hover:bg-red-600 duration-300"
                //             onClick={closePopup}
                //         >
                //             <CloseIcon className="w-6 h-6" />
                //         </button>
                //     </span>

                //     <h1 className="font-semibold text-lg text-center pt-5">Are you sure you want to log out?</h1>

                //     <div className="flex gap-5 justify-center items-center">
                //         <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold tracking-wide hover:underline hover:bg-red-700 duration-500">Yes, I&apos;m sure!</button>
                //         <button onClick={closePopup} className="bg-primary text-white font-semibold px-4 py-2 rounded-md tracking-wide hover:underline duration-500 hover:bg-secondary"> Cancel </button>
                //     </div>
                // </main>
        //     )}
        // </>

        // <main className={`bg-gray-200 shadow-xl shadow-black-600 flex flex-col gap-2 justify-between absolute w-96 pb-16 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 $s ${isOpen ? 'hidden' : ''}`}>
        //     <span className="flex justify-end items-center bg-gray-400">
        //         <button 
        //             type="button"
        //             className="bg-transparent px-2 py-1.5 text-black hover:text-white font-light text-lg hover:bg-red-600 duration-300"
        //             onClick={() => openPopup()}
        //         >
        //             <CloseIcon className="w-6 h-6" />
        //         </button>
        //     </span>

        //     <h1 className="font-semibold text-lg text-center pt-5">Are you sure you want to log out?</h1>

        //     <div className="flex gap-5 justify-center items-center">
        //         <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold tracking-wide hover:underline hover:bg-red-700 duration-500">Yes, I&apos;m sure!</button>
        //         <button className="bg-primary text-white font-semibold px-4 py-2 rounded-md tracking-wide hover:underline duration-500 hover:bg-secondary"> Cancel </button>
        //     </div>
        // </main>
    );
};

export default LogoutPage;
