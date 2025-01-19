import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Image from "next/image";

import imageTest from "/public/images/test1.jpg";

export default async function CodingSessionByID({
    params,
}: {
    params: Promise<{ id: number; session_id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    let position: string | null = null;
    if (token?.value) {
        try {
            const decodedToken: any = jwt.decode(token.value);
            position = decodedToken?.position || null;
        } catch (error) {
            console.error("Failed to decode token:", error);
        }
    }

    const session_id = (await params).session_id;
    const data = await fetch(`http:127.0.0.1:8000/api/session/${session_id}`, {
        cache: "no-cache",
        headers: {
            Authorization: `Bearer ${token?.value || ""}`,
        },
    }).then((res) => res.json());
    console.log(data);

    return (
        <main className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="session_coding_title">
                <h1 className="text-2xl font-bold text-primary">
                    {" "}
                    {data.session_title}{" "}
                </h1>
            </div>

            <div>
                <Image src={imageTest} alt="session_image" className="w-1/2"/>
            </div>

            <div id="session_coding_content">
                <h1 className=""> Ini content: {data.session_content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis sint id commodi placeat, et itaque magnam dolore, quasi adipisci aliquid a quo ut rem excepturi quisquam, voluptatem maxime iure? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt officia odit omnis repudiandae labore vero aliquid in, a nostrum, provident, itaque fugit dicta. Quisquam animi natus deserunt expedita qui atque! </h1>
            </div>

            <div id="session_coding_link" className="flex justify-between pt-3">
                <div id="session_coding_link_source" className="flex flex-col">
                    <h1 className="font-semibold"> Link source: </h1>
                    {data?.link_source ? (
                        <a href={data.link_source} className="text-primary hover:text-secondary"> {data.link_source} </a>
                    ) : (
                        <p> No source available </p>
                    )
                    }
                </div>

                <div id="session_coding_link_video" className="flex flex-col">
                    <h1 className="font-semibold"> Ini video: </h1>
                    {data?.link_video ? (
                        <a href={data.link_video} className="text-primary hover:text-secondary"> {data.link_video} </a>
                    ) : (
                        <p> No video available </p>
                    )}
                </div>
            </div>
        </main>
    );
}
