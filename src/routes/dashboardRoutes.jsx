import Overview from "../views/Overview/Overview.jsx";
import HostsDashboard from "../views/Hosts/HostsDashboard.jsx";
import StatsDashboard from "../views/Stats/StatsDashboard.jsx";

const dashboardRoutes = [
    {
        path: "/overview",
        navbarName: "Overview",
        component: Overview
    },
    {
        path: "/statsboard",
        navbarName: "Statsboard",
        component: StatsDashboard
    },
    {
        path: "/host-dashboard",
        navbarName: "Testing",
        component: HostsDashboard
    },
    { redirect: true, path: "/", to: "/overview", navbarName: "Redirect" }
];

export default dashboardRoutes

