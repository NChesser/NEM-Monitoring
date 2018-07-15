import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import {
    withStyles,
    Paper,
    Typography,
    Grid,

} from "@material-ui/core";
import propTypes from "prop-types";

import {
    Report,
    Dns,

} from "@material-ui/icons";

import hostStyle from "../../assets/jss/hostStyle.jsx";

function getStatusColor(status) {
    var statuses = {
        "ok": "#01C806",
        "warning": "#F4C525",
        "error": "#c41115",
    };

    return statuses[status];
};

function getHostRoute(hostname) {
    return {
        path: "/" + hostname,
        navbarName: "Host Graphs",
        component: HostDetails
    }

};

function HostStats() {
    return (
        <div>
            <h2>Host Stats</h2>
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
    console.log(props);
    return (
        <HostGraphs
        {...props}
        name={props.name}
        />
    );
}


class Host2 extends React.Component {

    render() {
        const { classes } = this.props;

        const hostColor = getStatusColor(this.props.statusLevel);
        const hostRoute = getHostRoute(this.props.name);

        return (
            <div>
                <Paper className={classes.hostBase} style={{ borderLeft: "10px solid " + hostColor }}>
                    <div className={classes.title}>
                        <Grid container>
                            <Grid zeroMinWidth item>
                                <Dns />
                            </Grid>
                            <Grid zeroMinWidth item>
                                <Typography color="#383733" component="p" className={classes.titleText}>
                                    {this.props.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Grid container>
                            <Grid zeroMinWidth item xs={2} className={classes.status} style={{ backgroundColor: hostColor }}>
                                <Report className={classes.statusIcon} />
                            </Grid>
                            <Grid zeroMinWidth item xs={8} className={classes.status} style={{ backgroundColor: hostColor }}>
                                <NavLink
                                    to={`${this.props.path}/statsboard${hostRoute.path}`}
                                    activeClassName="active"
                                >
                                    <Typography className={classes.statusText} color="#383733" component="p">
                                        {this.props.status}
                                    </Typography>
                                </NavLink>

                            </Grid>
                            <Grid zeroMinWidth item xs={2} className={classes.errorBox}>
                                <Typography variant="caption" className={classes.errorBoxText}>
                                    +
                            </Typography>
                                <Typography variant="title" className={classes.errorBoxText}>
                                    {Math.floor((Math.random() * 10) + 1)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.values}>
                        <Grid container>
                            <Grid zeroMinWidth item xs={4}>
                                <Typography variant="caption">
                                    CORE
                            </Typography>
                                <Typography variant="title" color="inherit" className={classes.valuesText}>
                                    {this.props.core}
                                </Typography>
                            </Grid>
                            <Grid zeroMinWidth item xs={4}>
                                <Typography variant="caption">
                                    DISK
                            </Typography>
                                <Typography variant="title" color="inherit" className={classes.valuesText}>
                                    {this.props.disk}%
                            </Typography>
                            </Grid>
                            <Grid zeroMinWidth item xs={4}>
                                <Typography variant="caption">
                                    CPU
                            </Typography>
                                <Typography variant="title" color="inherit" className={classes.valuesText}>
                                    {this.props.cpu}%
                            </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>

                <Switch>
                    <Route path={this.props.path + '/statsboard' + hostRoute.path} component={hostRoute.component} />
                    {/*
                    {dashboardRoutes.map((prop, key) => {
                        let path = this.props.path + prop.path;
                        return <Route path={path} component={prop.component} key={key} />;
                    })}
                */}
                </Switch>
            </div>
        )
    }
};

Host2.propTypes = {
    classes: propTypes.object.isRequired
};

export default withStyles(hostStyle)(Host2);
