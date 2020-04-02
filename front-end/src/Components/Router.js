import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed}></Route>
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

const AppRouter = ({ isLoggenIn }) => (
  <Router>
    <Switch>{isLoggenIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

Router.propTypes = {
  isLoggenIn: PropTypes.bool.isRequired
};

export default AppRouter;
