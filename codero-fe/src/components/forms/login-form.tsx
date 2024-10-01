"use client";

// Icon Imports
import EyeIcon from "../../../public/icons/eye-icon";
import EyeSlashIcon from "../../../public/icons/eye-slash-icon";

// Next.js imports
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();

    function viewPassword() {
        setPasswordVisible(!passwordVisible);
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { email, password } }),
            });

            if (res.ok) {
                // Redirect to dashboard
                router.push("/dashboard");
            } else {
                const data = await res.json();
                setError(data.message);
            }
        } catch (error: any) {
            console.error("Login error:", error.message);
            throw error;
        }
    };

    return (
        <form id="login_form" className="flex flex-col gap-3" onSubmit={onSubmit}>
            <div id="login_email_container" className="w-96">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full"
                />
            </div>

            <div id="login_password_container" className="w-96 relative">
                <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full"
                />
                <div className="absolute top-0 right-0 py-2 mr-2">
                    <button
                        id="eye_enabled"
                        onClick={viewPassword}
                        className={`group ${passwordVisible ? "" : "hidden"}`}
                        type="button"
                    >
                        <EyeIcon className="text-gray-400 group-hover:text-primary duration-500" />
                    </button>

                    <button
                        id="eye_disabled"
                        onClick={viewPassword}
                        className={`group ${passwordVisible ? "hidden" : ""}`}
                        type="button"
                    >
                        <EyeSlashIcon className="text-gray-400 group-hover:text-primary duration-300" />
                    </button>
                </div>
            </div>

            {error && (
                <p className="text-red-600 text-center">{error}</p>
            )
            }

            <div
                id="login_button_container"
                className={`flex flex-col gap-2 ${error ? "" : "pt-5"}`}
            >
                <div id="login_button_submit" className="flex justify-center">
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
    );
}
