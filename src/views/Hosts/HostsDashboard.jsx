import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

function HostStats({ ...props }) {
    const { classes } = props;
    return (
        <div>
            <h2>Host Stats</h2>
            {props.name}
        </div>
    )
}

function HostGraphs({ ...props }) {
    const { classes } = props;
    return (
        <div>
            <h2>Host Graphs</h2>
            {props.name}
        </div>
    )
}

const HostDetails = (props) => {
    return (
        <HostGraphs name='Nick'
        {...props}
        />
    );
}

const dashboardRoutes = [
    {
        path: "/host-graphs",
        navbarName: "Host Graphs",
        component: HostDetails
    },
    {
        path: "/host-stats",
        navbarName: "Statsboard",
        component: HostStats
    },
    { redirect: true, path: "/", to: "/overview", navbarName: "Redirect" }
];

class HostsDashboard extends React.Component {

    render() {
        const { match } = this.props;

        return (
            <div>
                <h1>Hosts Dashboard</h1>

                <NavLink
                    to={`${match.path}/host-stats`}
                    activeClassName="active"
                >
                    Host Stats
                </NavLink>
                <NavLink
                    to={`${match.path}/host-graphs`}
                    activeClassName="active"
                >
                    Host Graphs
                </NavLink>

                <Switch>
                    {dashboardRoutes.map((prop, key) => {
                        let path = match.path + prop.path;
                        return <Route path={path} component={prop.component} key={key} />;
                    })}
                </Switch>

                {/*
                
                <Route path={`${match.path}/host-stats`} component={HostStats} />
                <Route path={`${match.path}/host-graphs`} component={HostGraphs} />
                */}
            </div>
        )
    }
}

HostsDashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

// Add with Styles here
export default HostsDashboard