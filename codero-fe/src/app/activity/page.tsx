import AssignmentIcon from "../../../public/icons/assignment-icon";
import ResourcesIcon from "../../../public/icons/resources-icon";
import RocketLaunch from "../../../public/icons/rocket-launch";
import SchoolIcon from "../../../public/icons/school-icon";

export default function Activity() {
    return (
        <main id="activity" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="activity_title">
                <h1 className="text-2xl font-bold text-primary tracking-wide"> Activity </h1>
            </div>

            <div id="activity_content" className="grid grid-cols-2 gap-y-10">
                <div id="activity_assignment" className="flex flex-col justify-center w-96 pt-5 pb-7 px-5 bg-gradient-to-r from-[#2392ED] from-0%  to-[#7dc5ff] to-100% rounded-lg shadow-xl drop-shadow-xl">
                    <div id="activity_assignment_top" className="flex items-center justify-between">
                        <div id="activity_assignment_top_left"> 
                            <h1 className="text-base font-bold text-white"> Assignment </h1>
                            <h1 className="text-sm text-gray-400 font-regular text-white"> Recap Assignment </h1>
                        </div>

                        <AssignmentIcon className="text-white" />
                    </div>

                    <div id="activity_assignment_bottom" className="flex flex-col gap-1 pt-10">
                        <div id="activity_assignment_completed" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Completed: </h1>
                            <b className="text-sm text-white font-bold"> 3 </b> 
                        </div>

                        <div id="activity_assignment_on_progress" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> On-Progress: </h1>
                            <b className="text-sm text-white font-bold"> 4 </b>
                        </div>
                    </div>

                    <div id="activity_assignment_link" className="flex justify-end pt-10">
                        <a href="/activity/assignment" className="text-white text-xs tracking-wide hover:underline hover:text-white duration-300"> Lihat Semua Assignment... </a>
                    </div>
                </div>

                <div id="activity_resources" className="flex flex-col justify-center w-96 pt-5 pb-7 px-5 bg-gradient-to-r from-[#00AEE5] from-0%  to-[#70DBFE] to-100% rounded-lg shadow-xl drop-shadow-xl">
                    <div id="activity_resources_top" className="flex items-center justify-between">
                        <div id="activity_resources_top_left"> 
                            <h1 className="text-base font-bold text-white"> Resources </h1>
                            <h1 className="text-sm text-gray-400 font-regular text-white"> Kumpulan Resources </h1>
                        </div>

                        <ResourcesIcon className="text-white" />
                    </div>

                    <div id="activity_resources_bottom" className="flex flex-col gap-1 pt-10">
                        <div id="activity_resources_completed" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Coding: </h1>
                            <b className="text-sm text-white font-bold"> 120 </b> 
                        </div>

                        <div id="activity_resources_on_progress" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Robotic: </h1>
                            <b className="text-sm text-white font-bold"> 80 </b>
                        </div>
                    </div>

                    <div id="activity_resources_link" className="flex justify-end pt-10">
                        <a href="/activity/resources" className="text-white text-xs tracking-wide hover:underline hover:text-white duration-300"> Lihat Semua Resources... </a>
                    </div>
                </div>

                <div id="activity_sekolah_centre" className="flex flex-col justify-center w-96 pt-5 pb-7 px-5 bg-gradient-to-r from-[#17b169] from-0%  to-[#32de84] to-100% rounded-lg shadow-xl drop-shadow-xl">
                    <div id="activity_sekolah_centre_top" className="flex items-center justify-between">
                        <div id="activity_sekolah_centre_top_left"> 
                            <h1 className="text-base font-bold text-white"> Sekolah & Centre </h1>
                            <h1 className="text-sm text-gray-400 font-regular text-white"> Data Sekolah & Centre </h1>
                        </div>

                        <SchoolIcon className="text-white"/>
                    </div>

                    <div id="activity_sekolah_centre_bottom" className="flex flex-col gap-1 pt-10">
                        <div id="activity_sekolah_centre_completed" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Sekolah: </h1>
                            <b className="text-sm text-white font-bold"> 120 </b> 
                        </div>

                        <div id="activity_sekolah_centre_on_progress" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Centre: </h1>
                            <b className="text-sm text-white font-bold"> 80 </b>
                        </div>
                    </div>

                    <div id="activity_sekolah_centre_link" className="flex justify-end pt-10">
                        <a href="/activity/sekolah-centre" className="text-white text-xs tracking-wide hover:underline hover:text-white duration-300"> Lihat Semua Sekolah & Centre... </a>
                    </div>
                </div>

                <div id="activity_absensi_transport" className="flex flex-col justify-center w-96 pt-5 pb-7 px-5 bg-gradient-to-r from-[#F2994A] from-0%  to-[#F2C94C] to-100% rounded-lg shadow-xl drop-shadow-xl">
                    <div id="activity_absensi_transport_top" className="flex items-center justify-between">
                        <div id="activity_absensi_transport_top_left"> 
                            <h1 className="text-base font-bold text-white"> Absensi & Transport </h1>
                            <h1 className="text-sm text-gray-400 font-regular text-white"> Data Absensi & Transport </h1>
                        </div>
                        
                        <RocketLaunch className="text-white"/>
                    </div>

                    <div id="activity_absensi_transport_bottom" className="flex flex-col gap-1 pt-10">
                        <div id="activity_absensi_transport_completed" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Absensi <b>(April 2024)</b>: </h1>
                            <b className="text-sm text-white font-bold"> 30 </b> 
                        </div>

                        <div id="activity_absensi_transport_on_progress" className="flex items-center">
                            <h1 className="text-sm text-white w-4/6"> Transport <b>(April 2024)</b>: </h1>
                            <b className="text-sm text-white font-bold"> Rp 188.000,00 </b>
                        </div>
                    </div>

                    <div id="activity_absensi_transport_link" className="flex justify-end pt-10">
                        <a href="/activity/absensi-transport/absensi" className="text-white text-xs tracking-wide hover:underline hover:text-white duration-300"> Isi Absensi & Transport... </a>
                    </div>
                </div>
            </div>
        </main>
    )
};

// bg-gradient-to-r from-[#ffdb19] from-0%  to-[#FFFF00] to-100%