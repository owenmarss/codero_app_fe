"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import EyeIcon from "../../../public/icons/eye-icon";
import EyeSlashIcon from "../../../public/icons/eye-slash-icon";

export default function ArrivalForm({ scheduleId }: { scheduleId: number }) {
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    function viewPassword() {
        setPasswordVisible(!passwordVisible);
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/arrival", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: { password, scheduleId } }),
            });

            if (res.ok) {
                // Redirect to dashboard
                router.push("/schedule/my-schedule");
            } else {
                const data = await res.json();
                setError(data.message);
            }
        } catch (error: any) {
            console.error("Arrival error:", error.message);
            throw error;
        }
    }

    return (
        <form id="arrival_form" className="pt-5 flex flex-col gap-2 w-fit" onSubmit={onSubmit}>
            <p className="px-3"> Masukan password untuk isi kehadiran: </p>

            <div id="arrival_form_input" className="w-full relative">
                <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm shadow-gray-200 rounded-md pl-2 py-2 text-base bg-white border-[1.5px] w-full"
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

            {error && <p className="flex items-center justify justify-center text-red">{error}</p>}

            <div id="arrival_form_button" className={`pt-${error ? 0 : 4} flex justify-between`}>
                <button
                    type="reset"
                    onClick={() => {
                        setPassword("");
                        setError("");
                    }}
                    className="bg-red hover:bg-red-secondary duration-300 font-bold tracking-wide text-white rounded-md py-1.5 px-5 hover:underline text-base"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-green hover:bg-green-secondary duration-300 font-bold tracking-wide text-white rounded-md py-1.5 px-5 hover:underline text-base"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
