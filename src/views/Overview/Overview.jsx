import React from "react";
import propTypes from "prop-types";

import {
    withStyles,
    Grid,
    Typography,
} from "@material-ui/core";

import overviewStyle from "../../assets/jss/overviewStyle.jsx";

import Host from "../../components/Host/Host.jsx";
import Alerts from "../../components/Alerts/Alerts.jsx";

const statusLevels = [
    "ok",
    "warning",
    "error"
];

const statusMessages = [
    "Healthy since 01:17",
    "Warning: Long running process since 04:12",
    "Error: Database Unavailable since Mon, June 4"
];

const Hosts = () => {
    let hosts = [];
    for (let i = 1; i <= Math.floor(Math.random() * 5) + 5; i++) {
        let status = Math.floor(Math.random() * statusLevels.length);
        hosts.push(
            {
                "name": "nsstlbdsmapp0" + i,
                "core": Math.floor(Math.random() * 10),
                "disk": Math.floor(Math.random() * 100),
                "cpu": Math.floor(Math.random() * 100),
                "status": statusMessages[status],
                "statusLevel": statusLevels[status],
            }
        )
    }
    return hosts;
};

class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match, classes } = this.props;


        let hosts = (
            <div className={classes.hostsBox}>
                <Typography variant="title" color="inherit" className={classes.groupTitle}>
                    NEM-DMS HOSTS
                </Typography>
                <Grid container spacing={16}>
                    {Hosts().map((host) =>
                        <Grid item>
                            <Host
                                name={host["name"]}
                                core={host["cpu"]}
                                disk={host["disk"]}
                                cpu={host["cpu"]}
                                status={host["status"]}
                                statusLevel={host["statusLevel"]}
                            />
                        </Grid>
                    )}
                </Grid>
                <br />
                <br />
                <br />
                <Typography variant="title" color="inherit" className={classes.groupTitle}>
                    NEM-DMS HOSTS
                </Typography>
                <Grid container spacing={16}>
                    {Hosts().map((host) =>
                        <Grid item>
                            <Host
                                name={host["name"]}
                                core={host["cpu"]}
                                disk={host["disk"]}
                                cpu={host["cpu"]}
                                status={host["status"]}
                                statusLevel={host["statusLevel"]}
                            />
                        </Grid>
                    )}
                </Grid>
            </div>
        )

        return (
            <div>
                <Alerts hosts={hosts} />
            </div>
        )
    }
}

Overview.propTypes = {
    classes: propTypes.object.isRequired
};

export default withStyles(overviewStyle)(Overview);