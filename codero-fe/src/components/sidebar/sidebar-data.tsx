// Hero Icons
import { HomeIcon, ScheduleIcon, ActivityIcon, HistoryIcon, NotificationIcon } from "../../../public/icons/hero-icons";

// Import Sidebar Data Types
import { SidebarItemDataTypes } from "../type/sidebar-type";

export const SidebarItems: SidebarItemDataTypes[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <HomeIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Home', path: '/dashboard' },
            { title: 'User Profile', path: '/profile' },
        ],
    }, 
    {
        title: 'Schedule',
        path: '/schedule',
        icon: <ScheduleIcon className="text-gray-400 group-hover:text-primary duration-300"/>
    }, 
    {
        title: 'Activity',
        path: '/activity',
        icon: <ActivityIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Assignment', path: '/activity/assignment' },
            { title: 'Resources', path: '/activity/resources' },
            { title: 'Sekolah & Centre', path: '/activity/sekolah-centre' },
            { title: 'Absensi & Transport', path: '/activity/absensi-transport' },
        ],
    }, 
    {
        title: 'History',
        path: '/history',
        icon: <HistoryIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'History Absensi', path: '/history/history-absensi' },
            { title: 'History Transport', path: '/history/history-transport' },
        ],
    }, 
    {
        title: 'Notification',
        path: '/notification',
        icon: <NotificationIcon className="text-gray-400 group-hover:text-primary duration-300"/>
    }, 
]