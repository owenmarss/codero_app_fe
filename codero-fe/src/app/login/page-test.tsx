import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Image from "next/image";
import LogoCodero from "../../../public/images/logo_codero2.png";
import EyeIcon from "../../../public/icons/eye-icon";
import EyeSlashIcon from "../../../public/icons/eye-slash-icon";

// Mark this function as a server action using "use server"
export async function handleSubmit(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        const res = await fetch("http://localhost:8000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: { email, password }}),
        });

        // Check if the response is JSON
        const contentType = res.headers.get("content-type");
        if (!res.ok) {
            if (contentType && contentType.includes("application/json")) {
                const errorData = await res.json();
                console.error("Backend error (JSON):", errorData);
                throw new Error(errorData.message || "Invalid credentials");
            } else {
                const errorText = await res.text(); // Parse as text (probably HTML)
                console.error("Backend error (HTML):", errorText);
                throw new Error(
                    "Unexpected server error. Please try again later."
                );
            }
        }

        // Parse the successful JSON response
        const { token } = await res.json();
        const cookieStore = cookies();

        // Store the token in a cookie
        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: true,
            path: "/",
            maxAge: 60 * 60 * 24, // 24 hours
        });

        redirect("/dashboard");
    } catch (error: any) {
        console.error("Login error:", error.message);
        throw error; // Ensure error is thrown to display message
    }
}

export default function LoginPage() {
    return (
        <main
            id="login"
            className="flex flex-col justify-center items-center gap-10 min-h-[100vh]"
        >
            <div id="login_logo" className="w-72">
                <Image src={LogoCodero} alt="Codero" className="w-full" />
            </div>

            <form
                action={handleSubmit}
                id="login_form"
                className="flex flex-col gap-3"
            >
                <div id="login_email_container" className="w-96">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full"
                    />
                </div>

                <div id="login_password_container" className="w-96 relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full"
                    />
                    <div className="absolute top-0 right-0 py-2 mr-2">
                        <button id="eye_enabled" className="group hidden">
                            <EyeIcon className="text-gray-400 group-hover:text-primary duration-500" />
                        </button>

                        <button id="eye_disabled" className="group hidden">
                            <EyeSlashIcon className="text-gray-400 group-hover:text-primary duration-300" />
                        </button>
                    </div>
                </div>

                <div
                    id="login_button_container"
                    className="flex flex-col gap-2 pt-5"
                >
                    <div
                        id="login_button_submit"
                        className="flex justify-center"
                    >
                        <button
                            type="submit"
                            className="bg-primary font-bold tracking-wide text-white rounded-md py-1 px-5 hover:underline text-lg"
                        >
                            Login
                        </button>
                    </div>

                    <div
                        id="login_button_forgot_password"
                        className="flex justify-center"
                    >
                        <a
                            href=""
                            className="text-gray-400 hover:underline font-light text-lg hover:text-primary"
                        >
                            {" "}
                            Forgot Password?{" "}
                        </a>
                    </div>
                </div>
            </form>
        </main>
    );
}
