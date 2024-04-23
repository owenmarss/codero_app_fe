"use client"

import ArrowDownHeader from "../../../public/icons/arrow-down-header";
import HamburgerIcon from "../../../public/icons/hamburger-icon";
import UserIcon from "../../../public/icons/user-icon";

import Sidebar from "./sidebar";
import { useState } from 'react';


export default function Header() {
    return (
        <main id="header" className="flex py-3 px-5 justify-between items-center shadow-md">
            <button id="hamburger_icon_container" className="cursor-pointer">
                <HamburgerIcon />
            </button>

            <div id="profile_container" className="flex items-center gap-1 cursor-pointer group">
                <UserIcon className="group-hover:text-primary duration-300"/>
                <ArrowDownHeader className="group-hover:text-primary group-hover:rotate-180 duration-500"/>
            </div>
        </main>
    )
};
