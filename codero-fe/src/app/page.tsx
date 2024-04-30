import Image from "next/image";
import Sidebar from "./navigation/sidebar";
import Header from "./navigation/header";
import Login from "./auth/login";
import Dashboard from "./dashboard/page";

export default function Home() {
    return (
        <main>
            <Dashboard/>
        </main>
    );
}
