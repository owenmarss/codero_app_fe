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
        title: 'User Management',
        path: '/user-management',
        icon: <HomeIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Register User', path: '/register' },
            { title: 'User Detail', path: '/user-management' },
        ],
    }, 
    {
        title: 'Schedule',
        path: '/schedule',
        icon: <ScheduleIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'My Schedule', path: '/schedule/my-schedule' },
            { title: 'Schedule List', path: '/schedule/schedule-list' },
            { title: 'Create Schedule', path: '/schedule/create' },
            { title: 'Assign Schedule', path: '/schedule/assign-schedule' },
        ],
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
        title: 'Payroll',
        path: '/payroll',
        icon: <ActivityIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Attendance Detail', path: '/payroll' },
            { title: 'Count & Create Payroll', path: '/payroll/payslip' },
            { title: 'Payroll Detail', path: '/payroll/payslip' },
        ],
    },
    {
        title: 'Reimbursement',
        path: '/reimbursement',
        icon: <ActivityIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Pay Reimbursement', path: '/reimbursement/request' },
            { title: 'Reimbursement Detail', path: '/reimbursement/detail' },
        ],
    },
    {
        title: 'Report',
        path: '/report',
        icon: <HistoryIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
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
        title: 'Messages',
        path: '/message',
        icon: <NotificationIcon className="text-gray-400 group-hover:text-primary duration-300"/>,
        submenu: true,
        subMenuItems: [
            { title: 'Write Message', path: '/message/write' },
            { title: 'Message Inbox', path: '/message' },
        ],
    }, 
]