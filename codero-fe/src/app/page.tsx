import Image from "next/image";
import Sidebar from "./navigation/sidebar";
import Header from "./navigation/header";
import Login from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
    return (
        <main>
            <Dashboard/>
            {/* <Login/> */}
        </main>
    );
}
