'use client'

import { useState, useEffect } from 'react';

type Curriculum = {
    coding: {
        total: number;
        currentPage: number;
        totalPages: number;
        coding_data: {
            id: number;
            curriculum_title: string;
            curriculum_type: string;
            technology: string;
            tools: string;
            total_session: number;
        }[]
    }
    robotic: {
        total: number;
        currentPage: number;
        totalPages: number;
        robotic_data: {
            id: number;
            curriculum_title: string;
            curriculum_type: string;
            technology: string;
            tools: string;
            total_session: number;
        }[]
    }
}


export default function Resources() {
    const [curriculum, setCurriculum] = useState<Curriculum>();

    async function fetchData() {
        try {
            const res = await fetch('/api/getCurriculumLimit', {
                method: 'GET',
            });

            const data = await res.json();
            console.log(data);

            setCurriculum(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main id="resources" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="resources_title">
                <h1 className="text-2xl font-bold text-primary">Resources</h1>
                <h1> {curriculum?.robotic.total} test </h1>
            </div>

            <div id="resources_content" className="flex flex-col gap-5">
                <div id="resources_coding_container" className="flex flex-col gap-1.5">
                    <div id="resources_coding_headline">
                        <h1 className="font-medium text-lg text-gray-600"> Coding: </h1>
                    </div>
                    
                    <div id="resources_coding_content_container" className="flex gap-5 pb-5 overflow-x-scroll whitespace-nowrap">
                        {curriculum?.coding.coding_data.map((item: any) => (
                            <div key={item.id} id="resources_coding_content" className="flex flex-col w-72 pt-3 pb-7 px-4 gap-6 border-2 border-primary rounded-lg shadow-lg drop-shadow-2xl">
                                <div id="resources_coding_content_text" className="flex flex-col">
                                    <h1 className="text-black font-semibold text-xl"> {item.curriculum_title} </h1>
                                    <h2 className="text-primary font-medium text-lg italic"> {item.technology} </h2>
                                    <h3 className="text-gray-600 font-light text-md"> {item.total_session} Pertemuan </h3>
                                </div>

                                <div id="resources-coding_content_button" className="flex justify-end">
                                    <a href="" className="text-sm tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md"> Lihat Detail</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2 pb-1 flex justify-end">
                        <a href="" className="text-primary tracking-wider font-medium hover:text-secondary hover:underline duration-500"> View All... </a>
                    </div>
                </div>

                <div id="resources_robotic_container" className="flex flex-col gap-1.5">
                    <div id="resources_robotic_headline">
                        <h1 className="font-medium text-lg text-gray-600"> Robotic: </h1>
                    </div>

                    <div id="resources_robotic_content_container" className="flex gap-5 pb-5 overflow-x-scroll whitespace-nowrap">
                        {curriculum?.robotic.robotic_data.map((item: any) => (
                            <div key={item.id} id="resources_robotic_content" className="flex flex-col w-72 pt-3 pb-7 px-4 gap-6 border-2 border-primary rounded-lg shadow-lg drop-shadow-2xl">
                                <div id="resources_robotic_content_text" className="flex flex-col">
                                    <h1 className="text-black font-semibold text-xl"> {item.curriculum_title} </h1>
                                    <h2 className="text-primary font-medium text-lg italic"> {item.technology} </h2>
                                    <h3 className="text-gray-600 font-light text-md"> {item.total_session} Pertemuan </h3>
                                </div>

                                <div id="resources-robotic_content_button" className="flex justify-end">
                                    <a href={`/activity/resources/coding/${item.id}`} className="text-sm tracking-wide font-bold shadow-md drop-shadow text-white bg-primary hover:bg-secondary hover:underline duration-300 px-5 py-2 rounded-md"> Lihat Detail</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2 pb-1 flex justify-end">
                        <a href="" className="text-primary tracking-wider font-medium hover:text-secondary hover:underline duration-500"> View All... </a>
                    </div>
                </div>
            </div>
        </main>
    )
};
