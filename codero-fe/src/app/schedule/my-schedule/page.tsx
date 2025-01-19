import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import CloseIcon from "../../../../public/icons/close-icon";

export default async function MySchedule() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    const data = await fetch(`http:127.0.0.1:8000/api/teaching_attendance/user/${id}`, {
        method: "GET",
        cache: "no-cache",
        headers: {
            Authorization: `Bearer ${token?.value || ""}`,
        },
    }).then((res) => res.json());
    console.log(data);

    function convertDate(dateStr: string) {
        const date = new Date(dateStr);

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
    }

    return (
        <main id="my_schedule" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="my_schedule_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    {" "}
                    Schedule{" "}
                </h1>
            </div>

            <div
                id="my_schedule_filter"
                className="flex justify-between items-center pb-2"
            >
                <div
                    id="my_schedule_filter_day"
                    className="flex justify-between items-center gap-4"
                >
                    <h2 className="text-lg font-semibold text-black">
                        {" "}
                        Hari:{" "}
                    </h2>
                    <select className="text-base text-gray-500 bg-gray-200 rounded-md pl-2 pr-10 py-2">
                        <option value="">---</option>
                        <option value="Monday">Senin</option>
                        <option value="Tuesday">Selasa</option>
                        <option value="Wednesday">Rabu</option>
                        <option value="Thursday">Kamis</option>
                        <option value="Friday">Jumat</option>
                        <option value="Saturday">Sabtu</option>
                        <option value="Sunday">Minggu</option>
                    </select>
                </div>

                <button className="text-base tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                    Search
                </button>
            </div>

            <div id="my_schedule_content" className="flex flex-col gap-5">
                {data && data.length > 0 ? (
                    data.map((item: any, index: any) => (
                        <div
                            key={index}
                            id="my_schedule_list_container"
                            className=" border-[1px] rounded-lg flex flex-col shadow-lg drop-shadow"
                        >
                            <div
                                id="my_schedule_list"
                                className="py-5 pl-1 pr-4 flex items-center justify-between"
                            >
                                <div
                                    id="my_schedule_list_index"
                                    className="w-[5%] flex justify-center"
                                >
                                    <h2 className="text-lg font-semibold text-black">
                                        {" "}
                                        {index + 1}{" "}
                                    </h2>
                                </div>
    
                                <div
                                    id="my_schedule_list_timeline"
                                    className="flex flex-col w-[45%]"
                                >
                                    <div id="my_schedule_list_day">
                                        <h2 className="text-lg font-semibold text-black">
                                            {" "}
                                            {item.userTeachingSchedule.teachingSchedule.day}{","}
                                        </h2>
                                    </div>
    
                                    <div id="my_schedule_list_date">
                                        <h3 className="text-base text-black">
                                            {convertDate(
                                                item.userTeachingSchedule.teachingSchedule.date
                                            )}
                                        </h3>
                                    </div>
    
                                    <div id="my_schedule_list_time" className="pt-1">
                                        <h3 className="text-base text-black">
                                            {item.userTeachingSchedule.teachingSchedule.start_time.slice(
                                                0,
                                                5
                                            ) +
                                                " - " +
                                                item.userTeachingSchedule.teachingSchedule.finish_time.slice(
                                                    0,
                                                    5
                                                ) +
                                                " WIB"}
                                        </h3>
                                    </div>
                                </div>
    
                                <div
                                    id="my_schedule_list_location"
                                    className="flex flex-col items-end w-[45%]"
                                >
                                    <div
                                        id="my_schedule_list_school_centre"
                                        className="flex items-center gap-2"
                                    >
                                        <h1
                                            className="text-lg font-bold text-primary tracking-wide"
                                        >
                                            {" "}
                                            {item.userTeachingSchedule.teachingSchedule.partner?.name ?? item.userTeachingSchedule.teachingSchedule.student.name}
                                            {" "}
                                        </h1>
                                        {"-"}                                        
                                        <h1 className="text-lg font-bold text-primary tracking-wide">
                                            {item.userTeachingSchedule.teachingSchedule.session_type}
                                        </h1>
                                    </div>
    
                                    <div id="my_schedule_list_address">
                                        <h3 className="text-sm font-light text-gray-600">
                                            {" "}
                                            {item.userTeachingSchedule.teachingSchedule.partner?.address ?? item.userTeachingSchedule.teachingSchedule.student.address}
                                        </h3>
                                    </div>
    
                                    <div
                                        id="my_schedule_list_materi"
                                        className="flex items-center gap-3"
                                    >
                                        <h1 className="text-base font-semibold text-primary tracking-wide">
                                            {item.userTeachingSchedule.teachingSchedule.partner?.curriculum.curriculum_type ?? item.userTeachingSchedule.teachingSchedule.student.curriculum.curriculum_type}
                                            {":"}
                                        </h1>
                                        <h3 className="text-base font-semibold">
                                            {item.userTeachingSchedule.teachingSchedule.partner?.curriculum.curriculum_title ?? item.userTeachingSchedule.teachingSchedule.student.curriculum.curriculum_title}
                                        </h3>
                                    </div>
    
                                    <div
                                        id="my_schedule_list_action"
                                        className="flex justify-end gap-5 pt-0.5"
                                    >
                                        <div id="schedule_list_action_1">
                                            <a
                                                href=""
                                                className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"
                                            >
                                                {" "}
                                                Lihat Sekolah/Centre{" "}
                                            </a>
                                        </div>
    
                                        <div id="my_schedule_list_action_2">
                                            <a
                                                href="/activity/resources"
                                                className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"
                                            >
                                                {" "}
                                                Resources{" "}
                                            </a>
                                        </div>
    
                                        <div id="my_schedule_list_action_3">
                                            <a
                                                href=""
                                                className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"
                                            >
                                                {" "}
                                                Data Murid{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {(item.arrival_status === 'Belum Isi' || item.departure_status === 'Belum Isi' || item.reimbursement_status === 'Belum Isi' ) && (
                                <div
                                    id="my_schedule_feature"
                                    className="bg-slate-100 border-t-[1.25px] py-3 flex justify-between px-5 gap-5"
                                >
                                    <div className="flex gap-5">
                                        {item.arrival_time == '00:00:00' && (
                                            <a href={`/schedule/my-schedule/arrival/${item.id}`} id="arrive_button">
                                                <button className="text-sm hover:underline bg-green hover:bg-green-secondary tracking-wide font-bold text-white hover:underline duration-300 px-5 py-2 rounded-md">
                                                    Isi Kehadiran
                                                </button>
                                            </a>
                                        )}

                                        {item.departure_time == '00:00:00' && (
                                            <a href={`/schedule/my-schedule/departure/${item.id}`} id="depart_button">
                                                <button className="text-sm hover:underline bg-red tracking-wide font-bold text-white hover:bg-red-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                                                    Isi Kepulangan
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                    
                                    {item.userTeachingSchedule.teachingSchedule.session_type == 'Onsite' && (
                                        <a href={`/schedule/my-schedule/transport/${item.id}`} id="transport_form">
                                            <button className="text-sm hover:underline bg-[#F2994A] hover:bg-[#F2C94C] tracking-wide font-bold text-white hover:underline duration-300 px-5 py-2 rounded-md">
                                                Isi Reimbursement
                                            </button>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="italic flex items-center justify-center pt-16"> No schedule assigned </div>
                )}
            </div>
        </main>
    );
}
