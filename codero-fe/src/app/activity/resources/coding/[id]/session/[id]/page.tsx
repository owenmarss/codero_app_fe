import { cookies } from "next/headers";

export default async function CodingSessionByOne({
    params
} : {
    params: Promise<{ id: number }>;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const curriculumId = (await params).id;
    const sessionId = (await params).id;

    const data = await fetch(`http:127.0.0.1:8000/api/session/by-curriculum/${curriculumId}/${sessionId}`, {
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${token?.value || ''}`,
        },
    }).then(
        (res) => res.json()
    );

    return (
        <main>
            <h1> TESTT </h1>
            <h1> {data.session_title} </h1>
        </main>
    )
};
