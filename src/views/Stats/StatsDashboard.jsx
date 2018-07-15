import React from "react";
import propTypes from "prop-types";

import {
    withStyles,
    Typography,
    Paper,
    Grid,
    Divider,
} from "@material-ui/core";

import statsStyle from "../../assets/jss/statsStyle.jsx";

const getStatusColor = (status) => {
    var statuses = [
        "#01C806",
        "#F4C525",
        "#c41115",
    ];
    return statuses[status];
};


class StatsDashboard extends React.Component {
    constructor(props) {
        super(props);
        if (props.location.state) {
            this.state = {
                name: props.location.state.name,
                status: props.location.state.status,
                core: props.location.state.core,
                disk: props.location.state.disk,
                cpu: props.location.state.cpu,
            }
        } else {
            this.state = {
                name: 'Example Host',
                status: 'Example Status',
            }
        }
    }

    render() {
        const { classes } = this.props;

        const passedValues = [
            ['Status', this.state.status],
            ['Core Files', this.state.core],
            ['Disk Usage', this.state.cpu + '%'],
            ['CPU Usage', this.state.disk + '%'],
            ['Something', 'Other Info'],
            ['Something', 'Other Info'],
        ]

        const statusColor = passedValues.map(x => getStatusColor(Math.floor(Math.random() * 3)));

        return (
            <div className={classes.statsBox}>

                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <Paper className={classes.paperOverview}>
                            <Typography variant="title" color="inherit" className={classes.title}>
                                Host Name: {this.state.name}
                            </Typography>
                            <Typography variant="title" color="inherit" className={classes.values}>
                                Uptime: 41 Days
                            </Typography>
                            <Typography variant="title" color="inherit" className={classes.values}>
                                Status Message: {this.state.status}
                            </Typography>
                             <Typography variant="title" color="inherit" className={classes.values}>
                                Various other info for: {this.state.name}
                            </Typography>
                        </Paper>

                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={16}>
                            {passedValues.map((value, index) =>
                                <Grid item xs={3}>
                                    <Paper className={classes.paperBase} style={{ borderLeft: "10px solid " + statusColor[index] }}>
                                        <Typography variant="title" color="inherit" className={classes.values}>
                                            {value[0]}
                                        <Divider />

                                        </Typography>
                                        <Typography variant="title" color="inherit" className={classes.values}>
                                            {value[1]}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

StatsDashboard.propTypes = {
    classes: propTypes.object.isRequired
};

// Add with Styles here
export default withStyles(statsStyle)(StatsDashboard);