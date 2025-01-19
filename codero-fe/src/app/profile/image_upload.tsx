"use client";

import { useState, ChangeEvent, use, useEffect } from "react";
import CameraIcon from "../../../public/icons/camera-icon";
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

interface ImageUploaderProps {
    disabled: boolean; // Specify the type for the `disabled` prop
    user: User;
    setUser: (user: User) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    disabled,
    user,
    setUser,
}) => {
    const [image, setImage] = useState<string | null>(null); // To store the uploaded image's URL
    const [preview, setPreview] = useState<string | null>(null); // For displaying the preview before upload

    // Handle file selection and preview generation
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file)); // Show preview
            setUser({ ...user, picture: file.name.replaceAll(" ", "_") });
        }
    };

    // Handle image upload
    const handleUpload = async () => {
        if (!preview) {
            alert("Please select an image first.");
            return;
        }

        const fileInput =
            document.querySelector<HTMLInputElement>("input[type='file']");
        const file = fileInput?.files?.[0];

        if (!file) {
            alert("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setImage(data.filePath); // Set uploaded image URL
                alert("Image uploaded successfully!");
            } else {
                alert("Failed to upload image.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    useEffect(() => {
        if (user.picture) {
            setPreview(`/uploads/${user.picture}`);
            console.log(user.picture);
        }
    }, [user.picture]);

    return (
        <div>
            <div
                id="profile_picture"
                style={{
                    backgroundImage: "url('http://localhost:8000/t')", // Correct relative path
                }}
                className="relative bg-center bg-cover overflow-hidden flex justify-center items-center bg-gray-400 w-[300px] h-[300px] rounded-full shadow-md drop-shadow-md"
            >
                <div className="bg-auto bg-no-repeat bg-center"></div>
                {!preview && <h1>No Image</h1>}
            </div>

            <input
                type="file"
                accept="image/*"
                name="file"
                onChange={handleFileChange}
                disabled={disabled}
                className={`${disabled ? "hidden" : ""}`}
            />

            {/* {preview && (
                <div>
                    <h2>Image Preview</h2>
                    <Image
                        src={preview}
                        alt="Preview"
                        width={300}
                        height={300}
                        style={{ maxWidth: "300px", marginTop: "10px" }}
                    />
                </div>
            )} */}
        </div>
    );
};

export default ImageUploader;
