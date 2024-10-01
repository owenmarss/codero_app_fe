import { NextApiRequest, NextApiResponse } from "next";

async function getMessageById(messageId: number) {
    const res = await fetch(`http://127.0.0.1:8000/api/messages/${messageId}`, {});

    if (!res.ok) {
        throw new Error("Failed to fetch message from the backend.");
    }

    const data = await res.json();
    return data;
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { messageId } = req.query; // Extract messageId from the query

    if (!messageId) {
        return res.status(400).json({ message: "Message ID is required" });
    }

    try {
        const data = await getMessageById(Number(messageId));

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching message", error: (error as Error).message });
    }
}