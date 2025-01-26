import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import PrivateTransportForm from "@/components/forms/private-transport-form";
import PublicTransportForm from "@/components/forms/public-transport-form";

export default async function Transport({
    params,
}: {
    params: Promise<{ id: number }>;
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

    const id = (await params).id;
    const data = await fetch(
        `http:127.0.0.1:8000/api/teaching_attendance/${id}`,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                Authorization: `Bearer ${token?.value || ""}`,
            },
        }
    ).then((res) => res.json());
    // console.log(data);

    function convertDate(dateStr: string) {
        const date = new Date(dateStr);

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    return (
        <main id="transport" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="transport_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    Transport
                </h1>
            </div>

            <div
                id="transport_schedule_detail_container"
                className="flex justify-between"
            >
                <div
                    id="transport_schedule_detail_left"
                    className="flex flex-col gap-3"
                >
                    <div
                        id="transport_schedule_detail_name"
                        className="flex flex-col"
                    >
                        <h1 className="font-semibold">Schedule:</h1>
                        <p>
                            {data.userTeachingSchedule.teachingSchedule.partner
                                ?.name ??
                                data.userTeachingSchedule.teachingSchedule
                                    .student.name}
                        </p>
                    </div>

                    <div
                        id="transport_schedule_detail_date"
                        className="flex flex-col"
                    >
                        <h1 className="font-semibold">Hari & Tanggal:</h1>
                        <p>
                            {data.userTeachingSchedule.teachingSchedule.day}
                            {", "}
                            {convertDate(
                                data.userTeachingSchedule.teachingSchedule.date
                            )}
                        </p>
                    </div>

                    <div
                        id="transport_schedule_detail_time"
                        className="flex flex-col"
                    >
                        <h1 className="font-semibold">Jam:</h1>
                        <p>
                            {data.userTeachingSchedule.teachingSchedule.start_time.slice(
                                0,
                                5
                            ) +
                                " - " +
                                data.userTeachingSchedule.teachingSchedule.finish_time.slice(
                                    0,
                                    5
                                ) +
                                " WIB"}
                        </p>
                    </div>
                </div>

                <div
                    id="transport_schedule_detail_right"
                    className="flex flex-col gap-3"
                >
                    <div
                        id="transport_schedule_detail_session"
                        className="flex flex-col"
                    >
                        <h1 className="font-semibold">Sesi:</h1>
                        <p>
                            {
                                data.userTeachingSchedule.teachingSchedule
                                    .session_type
                            }
                        </p>
                    </div>

                    {data.userTeachingSchedule.teachingSchedule.session_type ==
                        "Onsite" && (
                        <div
                            id="transport_schedule_detail_location"
                            className="flex flex-col"
                        >
                            <h1 className="font-semibold">Lokasi:</h1>
                            <p>
                                {data.userTeachingSchedule.teachingSchedule
                                    .partner?.address ??
                                    data.userTeachingSchedule.teachingSchedule
                                        .student.address}
                            </p>
                        </div>
                    )}

                    <div id="transport_schedule_detail_curriculum">
                        <h1 className="font-semibold">Curriculum:</h1>
                        <div className="flex gap-1">
                            <p className="pr-1">
                                {data.userTeachingSchedule.teachingSchedule
                                    .partner?.curriculum.curriculum_title ??
                                    data.userTeachingSchedule.teachingSchedule
                                        .student.curriculum.curriculum_title}
                            </p>
                            <p> - </p>
                            <p className="pl-1">
                                {data.userTeachingSchedule.teachingSchedule
                                    .partner?.curriculum.curriculum_type ??
                                    data.userTeachingSchedule.teachingSchedule
                                        .student.curriculum.curriculum_type}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div
                id="transport_type_container"
                className="flex items-center gap-3"
                >
                    <h1 className="text-lg font-semibold">Jenis Kendaraan:</h1>
                    <select
                        name=""
                        id=""
                        className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-10 py-2"
                    >
                        <option value="private">Pribadi</option>
                        <option value="public">Umum</option>
                    </select>
                </div>

                <PrivateTransportForm />
                {/* <PublicTransportForm /> */}
            </div>
        </main>
    );
}
