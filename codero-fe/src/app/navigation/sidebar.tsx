import HomeIcon from "../../../public/icons/home-icon";
import ScheduleIcon from "../../../public/icons/schedule-icon";
import ActivityIcon from "../../../public/icons/activity-icon";
import HistoryIcon from "../../../public/icons/history-icon";
import NotificationIcon from "../../../public/icons/notification-icon";

export default function Sidebar() {
    return (
        <main id="sidebar" className="w-64 min-h-[100vh] bg-black flex flex-col items-center gap-20">
            <div id="sidebar_logo" className="flex mt-10">
                <h1 className="text-primary font-bold text-4xl tracking-widest"> Codero </h1>
            </div>

            <div id="sidebar_nav" className="flex flex-col gap-10">
                <div id="dashboard_link">
                    <div id="dashboard_link_main" className="flex items-center gap-4 group">
                        <HomeIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300"> Dashboard </a>
                    </div>
                </div>

                <div id="schedule_link">
                    <div id="schedule_link_main" className="flex items-center gap-4 group">
                        <ScheduleIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300"> Schedule </a>
                    </div>
                </div>

                <div id="activity_link">
                    <div id="activity_link_main" className="flex items-center gap-4 group">
                        <ActivityIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300"> Activity </a>
                    </div>
                </div>

                <div id="history_link">
                    <div id="history_link_main" className="flex items-center gap-4 group">
                        <HistoryIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300"> History </a>
                    </div>
                </div>

                <div id="notification_link">
                    <div id="notification_link_main" className="flex items-center gap-4 group">
                        <NotificationIcon className="text-gray-400 group-hover:text-primary duration-300"/>
                        <a href="" className="text-base font-semibold text-gray-400 tracking-wide group-hover:text-primary group-hover:underline duration-300"> Notification </a>
                    </div>
                </div>
            </div>
        </main>
    )
};
