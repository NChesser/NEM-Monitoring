import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import ToolBar from "@material-ui/core/Toolbar";
import {
    withStyles,
    AppBar,
    Typography,
    Button,
    List,
} from "@material-ui/core";

import NatureIcon from "@material-ui/icons/NaturePeople";

import titlebarStyle from "../../assets/jss/titlebarStyle.jsx";

const Title = ({ ...props }) => {
    // verifies if routeName is the one active (in browser input)
    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }

    const { classes, routes } = props;
    var links = (
        <List>
            {routes.map((prop, key) => {
                if (prop.redirect) return null;
                const whiteFontClasses = cx({
                    [" " + classes.whiteFont]: activeRoute(prop.path)
                  });
                return (
                    <NavLink
                        to={prop.path}
                        activeClassName="active"
                        className={classes.linkText}
                        key={key}
                    >
                        <Button color="inherit" className={classes.linkText + whiteFontClasses} >{prop.navbarName}</Button>
                    </NavLink>
                );
            })}
        </List>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <ToolBar>
                    <NatureIcon className={classes.logo} />
                    <Typography variant="title" color="inherit" className={classes.title}>
                        NEM-DMS MONITORING
                    </Typography>
                    {links}
                </ToolBar>
            </AppBar>
        </div>
    )
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
}

// Add with styles here
export default withStyles(titlebarStyle)(Title);
