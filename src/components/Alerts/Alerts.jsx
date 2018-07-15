import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AlarmIcon from '@material-ui/icons/Alarm';
import Button from '@material-ui/core/Button';

import alertsDrawerStyle from "../../assets/jss/alertsDrawerStyle.jsx";
import { alarmList } from "./AlertsData.jsx";

class AlertsDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'right',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose} style={{ color: 'white' }}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <AlarmIcon style={{ color: 'white' }} />
          <Typography variant="title" color="inherit" noWrap className={classes.alarms}>
            ALARM HISTORY
          </Typography>
        </div>
        <div style={{marginLeft: 10}}>
          <Button className={classes.button}>Last 24 hours</Button>
          <Button className={classes.button}>All groups</Button>
        </div>
        <List>{alarmList}</List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open,
              })} position="static" color="default" elevation={0}
            >
              <Toolbar disableGutters={!open}>
                <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                    
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {this.props.hosts}
          </main>
          {drawer}
        </div>
      </div>
    );
  }
}

AlertsDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(alertsDrawerStyle, { withTheme: true })(AlertsDrawer);