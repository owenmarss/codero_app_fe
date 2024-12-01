import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function Robotic() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    const data = await fetch(`http://127.0.0.1:8000/api/curriculum/robotic`, {
        cache: "no-cache",
        headers: {
            "Authorization": `Bearer ${token?.value || ""}`,
        },
    }).then(
        (res) => res.json()
    );

    console.log(data);

    return (
        <main id="resources_robotic_container" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="resources_robotic_title">
                <h1 className="text-2xl font-bold text-primary"> Resources - {"["}Robotic{"]"} </h1>
            </div>

            <div id="resources_robotic_filter" className="flex items-center justify-between pb-5">
                <div id="resources_robotic_filter_technology" className="flex gap-5 items-center pb-2">
                    <h1 className="text-lg font-medium text-black"> Technology yang digunakan: </h1>
                    <select name="" id="" className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-6 py-2">
                        <option value="all"> --- </option>
                        <option value="python"> Python </option>
                        <option value="javascript"> JavaScript </option>
                        <option value="java"> Java </option>
                        <option value="c"> C </option>
                    </select>
                </div>

                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Search
                </button>
            </div>
            
            <div id="resources_robotic_content" className="grid grid-cols-3 gap-x-5 gap-y-10">
                {data.map((item: any) => (
                    <div key={item.id} id="resources_robotic_card" className="flex flex-col w-72 pt-3 px-4 pb-7 gap-6 border-2 border-primary rounded-lg shadow-lg drop-shadow-2xl">
                        <div id="resources_robotic_card_top" className="flex flex-col">
                            <h1 className="text-black font-semibold text-xl"> {item.curriculum_title} </h1>
                            <h2 className="text-primary font-medium text-lg italic"> {item.technology} </h2>
                            <h3 className="text-gray-600 font-light text-md"> {item.total_session} Pertemuan </h3>
                        </div>  

                        <div id="resources_robotic_card_button" className="flex justify-end">
                            <a href={`/activity/resources/robotic/${item.id}`} className="text-sm tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md"> Lihat Detail </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
};
