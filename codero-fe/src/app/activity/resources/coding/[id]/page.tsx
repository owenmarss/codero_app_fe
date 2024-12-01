import { cookies } from "next/headers";

export default async function CodingPageByOne({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const id = (await params).id;
    const data = await fetch(`http:127.0.0.1:8000/api/session/curriculum/${id}`, {
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${token?.value || ''}`,
        },
    }).then(
        (res) => res.json()
    );  
    console.log(data);

    const dataId = data[`${id}`];
    console.log("Ini data id nya: ", dataId);
    

    return (
        <main id="coding_session" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="coding_session_title" className="text-2xl font-bold text-primary tracking-wide">
                <h1> {data[0].curriculum?.curriculum_title || "Test"} </h1>
            </div>

            <ol className="list-decimal flex flex-col gap-2 px-6">
                {data.map((item: any) => (
                    <li key={item.index} className="">
                        <a href="" className="text-primary tracking-wide font-regular text-base hover:underline">
                            {item.session_title}
                        </a>
                    </li>
                ))}
            </ol>
        </main>
    );
}
