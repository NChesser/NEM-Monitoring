import React from "react";
import { NavLink } from "react-router-dom";
import {
    withStyles,
    Paper,
    Typography,
    Grid,

} from "@material-ui/core";
import PropTypes from "prop-types";

import {
    CheckCircle,
    Warning,
    Report,
    Dns,

} from "@material-ui/icons";

import hostStyle from "../../assets/jss/hostStyle.jsx";

const getStatusColor = (status) => {
    var statuses = {
        "ok": "#01C806",
        "warning": "#F4C525",
        "error": "#c41115",
    };
    return statuses[status];
};

function Host({ ...props }) {
    const { classes, match } = props;

    const hostColor = getStatusColor(props.statusLevel);
    
    let statusIcon = null;
    console.log(props.statusLevel);

    if (props.statusLevel === "ok") {
        statusIcon = <CheckCircle className={classes.statusIcon} />
    } else if (props.statusLevel === "warning") {
        statusIcon = <Warning className={classes.statusIcon} />
    } else {
        statusIcon = <Report className={classes.statusIcon} />
    }

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
                                {props.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container>
                        <Grid zeroMinWidth item xs={2} className={classes.status} style={{ backgroundColor: hostColor }}>
                            {statusIcon}
                        </Grid>
                        <Grid zeroMinWidth item xs={8} className={classes.status} style={{ backgroundColor: hostColor }} wrap="nowrap">
                            <NavLink
                                to={{pathname: `/statsboard/${props.name}`, 
                                    state: {name: props.name,
                                            status: props.status,
                                            statusLevel: props.statusLevel,
                                            core: props.core,
                                            disk: props.disk,
                                            cpu: props.cpu      
                                    }}
                                }
                                activeClassName="active"
                                className={classes.Stats}
                            >
                                <Typography className={classes.statusText} color="#383733" component="p">
                                    {props.status}
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
                                {props.core}
                            </Typography>
                        </Grid>
                        <Grid zeroMinWidth item xs={4}>
                            <Typography variant="caption">
                                DISK
                            </Typography>
                            <Typography variant="title" color="inherit" className={classes.valuesText}>
                                {props.disk}%
                            </Typography>
                        </Grid>
                        <Grid zeroMinWidth item xs={4}>
                            <Typography variant="caption">
                                CPU
                            </Typography>
                            <Typography variant="title" color="inherit" className={classes.valuesText}>
                                {props.cpu}%
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>

        </div>
    )
};

Host.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(hostStyle)(Host)
