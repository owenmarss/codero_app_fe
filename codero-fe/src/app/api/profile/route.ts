import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    let id: string | null = null;
    if (token?.value) {
        try {
            const decodedToken: any = jwt.decode(token.value);
            id = decodedToken?.id || null;
        } catch (error) {
            console.error("Failed to decode token:", error);
        }
    }

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            cache: "no-cache",
            headers: {
                Authorization: `Bearer ${token?.value || ""}`, // Use an empty string if token is undefined
            },
        });
        if (res.ok) {
            // Check if the response status is in the range of 200–299
            const data = await res.json(); // Parse the JSON response
            return NextResponse.json(data); // Return the API response as JSON
        } else {
            // Handle unauthorized or other errors
            return NextResponse.json(
                { message: "Invalid" },
                { status: res.status } // Reflect the actual status from the API response
            );
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

export const PUT = async (req: any, res: any) => {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
        return NextResponse.json(
            { error: "No files received." },
            { status: 400 }
        );
    }

    const data = formData.get("data")
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    try {
        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            new Uint8Array(buffer)
        );

        const res = await fetch(`http://127.0.0.1:8000/api/users/${id}/details`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token?.value || ""}`,
                "Content-Type": "application/json",
            },
            body: data,
        });

        if(res.ok){
            return NextResponse.json({ Message: "Success", status: 201 });
        }
        else{
            return NextResponse.json({ Message: "Failed update to backend", status: 500 });
        }

    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
};
