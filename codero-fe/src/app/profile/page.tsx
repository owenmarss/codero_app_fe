"use client";

import CameraIcon from "../../../public/icons/camera-icon";
import KeyIcon from "../../../public/icons/key-icon";
import Pen2Icon from "../../../public/icons/pen2-icon";
import ImageUploader from "./image_upload";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type User = {
    employee_id: string;
    first_name: string;
    last_name: string;
    gender: string;
    birth_date: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    position: string;
    working_hour: string;
    branch: string;
    npwp: string;
    bank: string;
    picture: string;
    account_number: string;
};

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<User>({
        employee_id: "",
        first_name: "",
        last_name: "",
        gender: "",
        birth_date: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        position: "",
        working_hour: "",
        branch: "",
        npwp: "",
        bank: "",
        picture: "",
        account_number: "",
    });
    const router = useRouter();

    function onSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fileInput =
            document.querySelector<HTMLInputElement>("input[type='file']");
        const file = fileInput?.files?.[0];

        const formData = new FormData();
        if (file) {
            formData.append("file", file);
        }
        formData.append("data", JSON.stringify(data));

        fetch("/api/profile", {
            method: "PUT",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        const getProfile = async () => {
            try {
                const res = await fetch("/api/profile", {
                    method: "GET",
                });

                if (!res.ok) {
                    <div> Failed to Load </div>;
                } else {
                    setData(await res.json());
                }
            } catch (error) {
                console.error("An unexpected error occurred:", error);
            }
        };
        getProfile();
    }, []);

    return (
        <main id="profile" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="profile_title">
                <h1 className="text-2xl font-bold text-primary"> Profile </h1>
            </div>

            <form
                onSubmit={onSubmit}
                id="profile_content"
                className="flex flex-col gap-5"
            >
                <ImageUploader
                    disabled={!isEditing}
                    user={data}
                    setUser={setData}
                />

                <div
                    id="profile_info"
                    className="grid grid-cols-2 justify-between gap-y-5 pt-2"
                >
                    <div
                        id="profile_info_id"
                        className="flex flex-col gap-1.5 col-span-2 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            ID:{" "}
                        </h2>
                        <input
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    employee_id: e.currentTarget.value,
                                })
                            }
                            type="text"
                            name="employee_id"
                            id=""
                            disabled={!isEditing}
                            value={data?.employee_id}
                            className={`text-base border border-gray-300 rounded-md p-2 w-56 ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_first_name"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Nama Depan:{" "}
                        </h2>
                        <input
                            type="text"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.first_name}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    first_name: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_last_name"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Nama Belakang:{" "}
                        </h2>
                        <input
                            type="text"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.last_name}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    last_name: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_gender"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Jenis Kelamin:{" "}
                        </h2>
                        <select
                            name=""
                            id=""
                            disabled={!isEditing}
                            className={`text-base border border-gray-300 rounded-md p-2 w-1/2 bg-transparent ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        >
                            {/* if (gender=="Pria") {
                                <option value="Pria" selected> Pria </option>
                                <option value="Wanita"> Wanita </option>
                            } else {
                                <option value="Pria"> Pria </option>
                                <option value="Wanita" selected> Wanita </option>
                            } */}
                            <option value="Pria"> Pria </option>
                            <option value="Pria"> Wanita </option>
                        </select>
                    </div>

                    <div
                        id="profile_info_birth_date"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Tanggal Lahir:{" "}
                        </h2>
                        <input
                            type="date"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.birth_date}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    birth_date: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-3/4 ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_email"
                        className="flex flex-col gap-1.5 w-80"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Email:{" "}
                        </h2>
                        <input
                            type="email"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.email}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    email: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_phone"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Nomor Telepon:{" "}
                        </h2>
                        <input
                            type="tel"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.phone}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    phone: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_address"
                        className="flex flex-col gap-1.5 w-96"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Alamat:{" "}
                        </h2>
                        <textarea
                            name="text"
                            id=""
                            disabled={!isEditing}
                            value={data?.address}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    address: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_city"
                        className="flex flex-col gap-1.5"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Kota:{" "}
                        </h2>
                        <input
                            type="text"
                            name=""
                            id=""
                            disabled={!isEditing}
                            value={data?.city}
                            onInput={(e) =>
                                setData({
                                    ...data,
                                    city: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-64 ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        />
                    </div>

                    <div
                        id="profile_info_position"
                        className="flex flex-col gap-1.5 w-64"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Posisi:{" "}
                        </h2>
                        <select
                            name=""
                            id=""
                            disabled={!isEditing}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    position: e.currentTarget.value,
                                })
                            }
                            className={`text-base border border-gray-300 rounded-md p-2 w-full bg-transparent ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                        >
                            <option value="Head"> Head </option>
                            <option value="HRD"> HRD </option>
                            <option value="Finance"> Finance </option>
                            <option value="Business Development">
                                {" "}
                                Business Development{" "}
                            </option>
                            <option value="Teacher"> Teacher </option>
                        </select>
                    </div>

                    <div
                        id="profile_info_division"
                        className="flex flex-col gap-1.5"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Jam Kerja:{" "}
                        </h2>
                        <select
                            name=""
                            id=""
                            className={`text-base border border-gray-300 rounded-md p-2 w-64 bg-transparent ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                            disabled={!isEditing}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    working_hour: e.currentTarget.value,
                                })
                            }
                        >
                            <option value="Full-Time"> Full-Time </option>
                            <option value="Part-Time"> Part-Time </option>
                            <option value="Intern"> Intern </option>
                        </select>
                    </div>

                    <div
                        id="profile_info_region"
                        className="flex flex-col gap-1.5"
                    >
                        <h2 className="text-lg font-medium text-black">
                            {" "}
                            Cabang:{" "}
                        </h2>
                        <select
                            name=""
                            id=""
                            className={`text-base border border-gray-300 rounded-md p-2 w-64 bg-transparent ${
                                isEditing ? "text-black" : "text-gray-400"
                            }`}
                            disabled={!isEditing}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    branch: e.currentTarget.value,
                                })
                            }
                        >
                            <option value="Jabodetabek"> Jabodetabek </option>
                            <option value="Banjarmasin"> Banjarmasin </option>
                            <option value="Yogyakarta"> Yogyakarta </option>
                        </select>
                    </div>
                </div>

                <div
                    id="profile_action"
                    className="flex justify-end gap-5 pt-5"
                >
                    <a
                        href="/profile/change-password"
                        className="bg-blue-950 text-white font-bold flex items-center gap-2 pl-2 pr-3 rounded-md tracking-wide hover:bg-blue-900 hover:underline hover:shadow-md hover:drop-shadow duration-300"
                    >
                        <KeyIcon className="text-white" />
                        Change Password
                    </a>

                    <button
                        type="button"
                        id="profile_action_edit"
                        onClick={() => setIsEditing(!isEditing)}
                        className={`text-white font-bold tracking-widest bg-primary rounded-md py-2 pl-4 pr-5 hover:bg-secondary hover:underline hover:shadow-md hover:drop-shadow duration-300 flex items-center gap-2 ${
                            isEditing ? "hidden" : ""
                        }`}
                    >
                        <Pen2Icon className="text-white" />
                        Edit
                    </button>

                    <button
                        id="profile_action_cancel"
                        onClick={() => setIsEditing(!isEditing)}
                        className={`text-white font-bold tracking-widest bg-red rounded-md p-2 w-24 hover:bg-red-secondary hover:underline hover:shadow-md hover:drop-shadow duration-300 ${
                            !isEditing ? "hidden" : ""
                        }`}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        id="profile_action_save"
                        className={`text-white font-bold tracking-widest bg-green
                             rounded-md p-2 w-24 hover:bg-green-secondary hover:underline hover:shadow-md hover:drop-shadow duration-300 ${
                            !isEditing ? "hidden" : ""
                        }`}
                    >
                        Save
                    </button>
                </div>
            </form>
        </main>
    );
}
