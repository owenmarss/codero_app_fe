import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export default async function CodingPageByOne({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    let position: string | null = null;
    if (token?.value) {
        try {
            const decodedToken: any = jwt.decode(token.value);
            position = decodedToken?.position || null;
        } catch (error) {   
            console.error('Failed to decode token:', error);
        }
    }
    
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
        <main id="coding_curriculum" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="coding_curriculum_title" className="text-2xl font-bold text-primary tracking-wide">
                <h1> {data.curriculum_title} </h1>
            </div>

            {data.sessions && data.sessions.length > 0 ? (
                <ol className="list-disc flex flex-col gap-2 px-6">
                    {data.sessions.map((item: any) => (
                        <li key={item.index_session} className="">
                            <a href={`/activity/resources/coding/${data.id}/session/${item.id}`} className="text-secondary tracking-wide font-regular text-base hover:underline">
                                {item.session_title}
                            </a>
                        </li>
                    ))}
                </ol>
            ) : (
                <div className="italic pl-5 pt-3"> No sessions is available in this curriculum. </div>
            )}

            {position && ['Head', 'HRD', 'Business Development'].includes(position) && (
                <div className="flex justify-end">
                    <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                        Tambahkan Pertemuan
                    </button>
                </div>
            )}
        </main>
    );
}
