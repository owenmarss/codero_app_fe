import { cookies } from "next/headers";

export default async function CodingPageByOne({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const id = (await params).id;
    const data = await fetch(`http:127.0.0.1:8000/api/curriculum/${id}`, {
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${token?.value || ''}`,
        },
    }).then(
        (res) => res.json()
    );  
    console.log(data);

    return (
        <main id="coding_session" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            {/* My Post: {id} */}
            <div id="coding_session_title" className="text-2xl font-bold text-primary tracking-wide">
                <h1> {data.curriculum_title} </h1>
            </div>
            
            {/* <div>
                <h1> Title: {data.curriculum_title} </h1>
            </div>
            <div>
                <h1> Content: {data.curriculum_type} </h1>
            </div> */}
        </main>
    );
}
