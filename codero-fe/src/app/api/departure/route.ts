import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
    }
    
    const { data } = await request.json();
    const id = data.scheduleId;
    const password = data.password;

    try {
        const res = await fetch(`http://localhost:8000/api/teaching_attendance/${id}/depart`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token?.value || ''}`, // Use an empty string if token is undefined
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data}),
        });
        
        if (res.ok) {
            const responseData = await res.json();
            return NextResponse.json(responseData, { status: res.status });
        } else {
            return NextResponse.json(
                { message: "Masukan password yang benar!" },
                { status: res.status }
            );
        }
    } catch (error) {
        console.error("Error fetching messages:", error); // Log the error for debugging
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}