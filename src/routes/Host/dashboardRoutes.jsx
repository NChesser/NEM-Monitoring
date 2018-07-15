import HostsDashboard from "../views/Hosts/HostsDashboard.jsx";
import StatsDashboard from "../views/Stats/StatsDashboard.jsx";

const hostDashboardRoutes = [
    {
        path: "/dashboard",
        component: HostsDashboard
    },
    {
        path: "/statsboard",
        component: StatsDashboard
    },
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes

