import { NextApiRequest, NextApiResponse } from "next";

async function getAllMessages(userId: number) {
    const res = await fetch(`http://127.0.0.1:/messages/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch messages from the backend.");
    }

    const data = await res.json();
    return data;
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query; // Extract userId from the query

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        const data = await getAllMessages(Number(userId));
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching messages", error: (error as Error).message });
    }
}