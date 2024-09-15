// "use client";

// Image and Icons
import Image from "next/image";
import LogoCodero from "../../../public/images/logo_codero2.png";
import LoginForm from "@/components/forms/login-form";

export default function Login() {
    return (
        <main
            id="login"
            className="flex flex-col justify-center items-center gap-10 min-h-[100vh] relative"
        >
            <div id="login_logo" className="w-72">
                <Image src={LogoCodero} alt="Codero" className="w-full" />
            </div>

            <LoginForm />
        </main>
    );
}
