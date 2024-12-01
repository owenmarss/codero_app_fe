import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function Schedule() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    const data = await fetch(`http:127.0.0.1:8000/api/attendance/user/${id}`, {
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
        <main id="schedule" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="schedule_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    {" "}
                    Schedule{" "}
                </h1>
            </div>

            <div
                id="schedule_filter"
                className="flex justify-between items-center pb-2"
            >
                <div
                    id="schedule_filter_day"
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

            <div id="schedule_content" className="flex flex-col gap-5">
                {data && data.length > 0 ? (
                    data.map((item: any, index: any) => (
                        <div
                            key={index}
                            id="schedule_list_container"
                            className=" border-[1px] rounded-lg flex flex-col shadow-lg drop-shadow"
                        >
                            <div
                                id="schedule_list"
                                className="py-5 pl-1 pr-4 flex items-center justify-between"
                            >
                                <div
                                    id="schedule_list_index"
                                    className="w-[5%] flex justify-center"
                                >
                                    <h2 className="text-lg font-semibold text-black">
                                        {" "}
                                        {index + 1}{" "}
                                    </h2>
                                </div>
    
                                <div
                                    id="schedule_list_timeline"
                                    className="flex flex-col w-[45%]"
                                >
                                    <div id="schedule_list_day">
                                        <h2 className="text-lg font-semibold text-black">
                                            {" "}
                                            {item.userSchedule.schedules.day}{","}
                                        </h2>
                                    </div>
    
                                    <div id="schedule_list_date">
                                        <h3 className="text-base text-black">
                                            {convertDate(
                                                item.userSchedule.schedules.date
                                            )}
                                        </h3>
                                    </div>
    
                                    <div id="schedule_list_time" className="pt-1">
                                        <h3 className="text-base text-black">
                                            {item.userSchedule.schedules.start_time.slice(
                                                0,
                                                5
                                            ) +
                                                " - " +
                                                item.userSchedule.schedules.finish_time.slice(
                                                    0,
                                                    5
                                                ) +
                                                " WIB"}
                                        </h3>
                                    </div>
                                </div>
    
                                <div
                                    id="schedule_list_location"
                                    className="flex flex-col items-end w-[45%]"
                                >
                                    <div
                                        id="schedule_list_school_centre"
                                        className="flex items-center gap-2"
                                    >
                                        <a
                                            href=""
                                            className="text-lg font-bold text-primary tracking-wide"
                                        >
                                            {" "}
                                            {item.userSchedule.schedules.partner?.name ?? item.userSchedule.schedules.student.name}
                                            {" "}
                                        </a>
                                        <h1 className="text-lg font-bold text-primary tracking-wide">
                                            {"("}
                                            {item.userSchedule.schedules.partner?.curriculum.curriculum_type ?? item.userSchedule.schedules.student.curriculum.curriculum_type}
                                            {")"}
                                        </h1>
                                    </div>
    
                                    <div id="schedule_list_address">
                                        <h3 className="text-sm font-light text-gray-600">
                                            {" "}
                                            {item.userSchedule.schedules.partner?.address ?? item.userSchedule.schedules.student.address}
                                        </h3>
                                    </div>
    
                                    <div
                                        id="schedule_list_materi"
                                        className="flex gap-2"
                                    >
                                        <h3 className="text-base font-semibold">
                                            {item.userSchedule.schedules.partner?.curriculum.curriculum_title ?? item.userSchedule.schedules.student.curriculum.curriculum_title}
                                        </h3>
                                    </div>
    
                                    {/* <div id="schedule_list_partner" className="flex gap-2">
                                        <h3 className="text-base font-base text-gray-600"> Partner: </h3>
                                        <h3 className="text-base font-semibold"> Mr. Rizky </h3>
                                    </div> */}
    
                                    <div
                                        id="schedule_list_action"
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
    
                                        <div id="schedule_list_action_2">
                                            <a
                                                href="/activity/resources"
                                                className="text-xs text-primary font-regular hover:underline hover:text-secondary duration-500 tracking-wider"
                                            >
                                                {" "}
                                                Resources{" "}
                                            </a>
                                        </div>
    
                                        <div id="schedule_list_action_3">
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
    
                            <div
                                id="schedule_attendance"
                                className="bg-slate-100 border-t-[1.25px] py-3 flex justify-between px-5 gap-5"
                            >
                                <div className="flex gap-5">
                                    <div id="arrive_button">
                                        <button className="text-sm hover:underline bg-primary tracking-wide font-bold text-white hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                                            Isi Kehadiran
                                        </button>
                                    </div>
    
                                    <div id="depart_button">
                                        <button className="text-sm hover:underline bg-primary tracking-wide font-bold text-white hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                                            Isi Kepulangan
                                        </button>
                                    </div>
                                </div>
    
                                <div id="transport_form">
                                    <button className="text-sm hover:underline bg-primary tracking-wide font-bold text-white hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                                        Isi Reimbursement
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="italic flex items-center justify-center pt-16"> No schedule assigned </div>
                )}
            </div>
        </main>
    );
}
