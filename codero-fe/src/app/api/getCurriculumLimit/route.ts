import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/curriculum/filter`, {
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${token?.value || ''}`, // Use an empty string if token is undefined
            }
        });

        if (res.ok) {
            const data = await res.json();
            return NextResponse.json(data);
        } else {
            return NextResponse.json(
                { message: "Invalid" },
                { status: res.status }
            );
        }
    } catch (error) {
        console.error("Error fetching curriculum:", error);
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}