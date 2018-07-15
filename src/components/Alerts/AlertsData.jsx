import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReportIcon from '@material-ui/icons/Report';
import WarningIcon from '@material-ui/icons/Warning';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiListItemText: {
            primary: {
                color: 'white',
                fontSize: 12,
            },
            secondary: {
                color: 'grey',
                fontSize: 10,
            }
        },
        MuiListItem: {
            root: {
                borderBottom: '1px solid grey',
            }
        }
    }

});

const allAlerts = createMuiTheme({
    overrides: {
        MuiListItemText: {
            primary: {
                color: '#04B7EA',
                fontSize: 12,
                textAlign: 'center',
            },
        },
        MuiListItem: {
            root: {
                borderBottom: '1px solid grey',
                height: 30,
                align: 'center',
            }
        }
    }

});

export const alarmList = (
    <div>
        <MuiThemeProvider theme={theme}>
            <ListItem button style={{ borderBottom: '1px solid grey' }}>
                <ListItemIcon>
                    <ReportIcon style={{ color: '#c41115' }} />
                </ListItemIcon>
                <ListItemText primary="Unreachable Host" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon style={{ color: '#c41115' }} />
                </ListItemIcon>
                <ListItemText primary="Job duration Unusual" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon style={{ color: '#c41115' }} />
                </ListItemIcon>
                <ListItemText primary="Blocking process" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon style={{ color: '#c41115' }} />
                </ListItemIcon>
                <ListItemText primary="Database Unavailable" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WarningIcon style={{ color: '#F4C525' }} />
                </ListItemIcon>
                <ListItemText primary="Long running process" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WarningIcon style={{ color: '#F4C525' }} />
                </ListItemIcon>
                <ListItemText color="transparent" primary="Long running query" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WarningIcon style={{ color: '#F4C525' }} />
                </ListItemIcon>
                <ListItemText primary="High CPU" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WarningIcon style={{ color: '#F4C525' }} />
                </ListItemIcon>
                <ListItemText primary="Disk Usage" secondary="3 current alerts" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <WarningIcon style={{ color: '#F4C525' }} />
                </ListItemIcon>
                <ListItemText primary="Monitoring Error(host)" secondary="3 current alerts" />
            </ListItem>
        </MuiThemeProvider>
        <MuiThemeProvider theme={allAlerts}>
            <ListItem button>
                <ListItemText primary="See all alerts" />
            </ListItem>
        </MuiThemeProvider>
    </div>
);