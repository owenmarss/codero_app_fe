import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function ScheduleList() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    const data = await fetch("http:/127.0.0.1:8000/api/user_teaching_schedules/all-schedules", {method: "GET",
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
        <main
            id="schedule_list"
            className="pt-7 pb-10 px-6 flex flex-col gap-5"
        >
            <div id="schedule_list_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide">
                    Schedule List
                </h1>
            </div>

            <div
                id="schedule_list_filter"
                className="flex justify-between items-center pb-2"
            >
                <div
                    id="schedule_list_filter_day"
                    className="flex justify-between items-center gap-4"
                >
                    <h2 className="text-lg font-semibold text-black">
                        {" "}
                        Hari:{" "}
                    </h2>
                    <select className="text-base text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-10 py-2">
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

            <div id="schedule_list_content" className="flex flex-col gap-5">
                {data && data.length > 0 ? (
                    data.map((item: any, index: any) => (
                        <div
                            key={index}
                            id="schedule_list_container"
                            className=" border-[1px] rounded-lg flex flex-col shadow-lg drop-shadow"
                        >
                            <div
                                id="schedule_list_box"
                                className="py-5 pl-1 pr-4 flex items-center justify-between"
                            >
                                <div
                                    id="schedule_list_index"
                                    className="w-[5%] flex justify-center"
                                >
                                    <h2 className="text-lg font-semibold text-black">
                                        {index + 1}
                                    </h2>
                                </div>

                                <div
                                    id="schedule_list_timeline"
                                    className="flex flex-col w-[45%]"
                                >
                                    <div id="schedule_list_day">
                                        <h2 className="text-lg font-semibold text-black">
                                            {item.day}{","}
                                        </h2>
                                    </div>

                                    <div id="schedule_list_date">
                                        <h3 className="text-base text-black">
                                            {convertDate(item.date)}
                                        </h3>
                                    </div>

                                    <div id="schedule_list_time" className="pt-1">
                                        <h3 className="text-base text-black">
                                            {item.start_time.slice(
                                                0,
                                                5
                                            ) +
                                                " - " +
                                                item.finish_time.slice(
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
                                        <h1 className="text-lg font-bold text-primary tracking-wide">
                                            {item.partner?.name ?? item.student.name}
                                        </h1>
                                        {"-"}
                                        <h1 className="text-lg font-bold text-primary tracking-wide">
                                            {item.session_type}
                                        </h1>
                                    </div>

                                    <div id="my_schedule_list_address">
                                        <h3 className="text-sm font-light text-gray-600">
                                            {" "}
                                            {item.partner?.address ?? item.student.address}
                                        </h3>
                                    </div>

                                    <div
                                        id="my_schedule_list_materi"
                                        className="flex items-center gap-3"
                                    >
                                        <h1 className="text-base font-semibold text-primary tracking-wide">
                                            {item.partner?.curriculum.curriculum_type ?? item.student.curriculum.curriculum_type}
                                            {":"}
                                        </h1>
                                        <h3 className="text-base font-semibold">
                                            {item.partner?.curriculum.curriculum_title ?? item.student.curriculum.curriculum_title}
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

                            <div id="schedule_list_features" className="bg-slate-100 border-t-[1.25px] py-3 flex flex-col px-5 gap-3">
                                <div id="schedule_list_teachers" className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm font-semibold text-black">
                                            Pengajar:
                                        </h1>
                                    </div>

                                    <div
                                        id="schedule_list_teachers_name"
                                        className="flex flex-col items-end"
                                    >
                                        <h2 className="text-sm font-medium text-primary text-black">
                                            {/* {item.users?.name} */}
                                            Owen Marscel
                                        </h2>
                                        
                                        <h2 className="text-sm font-medium text-primary text-black">
                                            {/* {item.users?.name} */}
                                            Ary Firmansyah
                                        </h2>

                                        <h2 className="text-sm font-medium text-primary text-black">
                                            {/* {item.users?.name} */}
                                            Ignatius Surya Wijaya
                                        </h2>
                                    </div>
                                </div>

                                <div id="schedule_list_assign_features" className="flex flex-col">
                                    {/* <div className="flex justify-between items-center">
                                        <label htmlFor="" className="text-sm font-semibold text-black">
                                            Assign:
                                        </label>

                                        <select name="" id="" className="text-sm text-gray-500 bg-white border-[1.5px] rounded-md pl-2 pr-10 py-2">
                                            <option value="" className=""> Masukan nama </option>
                                        </select>
                                    </div> */}

                                    <div className="flex justify-end">
                                        <button className="text-sm font-semibold text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md">
                                            Assign
                                        </button>
                                    </div>
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
