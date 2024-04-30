export type submenu = {
    title: string;
    path: string;
};

export type SideNavItem = {
    title: string;
    path: string;
    icon: JSX.Element;
    submenu?: boolean;
    subMenuItems?: submenu[];
    // arrowIcon?: JSX.Element;
};