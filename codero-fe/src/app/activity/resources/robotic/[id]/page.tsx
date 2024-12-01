import { cookies } from "next/headers";

export default async function RoboticPageByOne({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const id = (await params).id;
    const data = await fetch(`http:127.0.0.1:8000/api/curriculum/${id}/sessions`, {
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${token?.value || ''}`,
        },
    }).then(
        (res) => res.json()
    );
    console.log(data);

    return (
        <main id="robotic_curriculum" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="robotic_curriculum_title" className="text-2xl font-bold text-primary tracking-wide">
                <h1> {data.curriculum_title} </h1>
            </div>

            {data.sessions && data.sessions.length > 0 ? (
                <ol className="list-disc flex flex-col gap-2 px-6">
                    {data.sessions.map((item: any) => (
                        <li key={item.index_session} className="">
                            <a href="" className="text-secondary tracking-wide font-regular text-base hover:underline">
                                {" "}{item.session_title}
                            </a>
                            {/* <h1> {data.id} </h1> */}
                        </li>
                    ))}
                </ol>
            ) : (
                <div className="italic pl-5 pt-3"> No sessions is available in this curriculum. </div>
            )}
        </main>
    );
}