import Image from "next/image";
import Sidebar from "./navigation/sidebar";
import Header from "./navigation/header";
import Login from "./auth/login";

export default function Home() {
    return (
        <main>
            <Login/>
        </main>
    );
}
