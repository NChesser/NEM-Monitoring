import React from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Title from "../components/Title/Title.jsx"
import dashboardRoutes from "../routes/dashboardRoutes.jsx";

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Title 
          routes={dashboardRoutes}
          {...rest}
        />
        <div>
            <div>{switchRoutes}</div>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
