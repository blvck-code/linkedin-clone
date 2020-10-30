import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Register from "./layouts/Register";
import "./assets/fontawesome/css/font-awesome.min.css";
import "./App.css";
import PrivateRoute from "./helpers/PrivateRoute";
import LoginComponent from "./containers/Login";
import { connect } from "react-redux";
import { getUser } from "./redux/actions/auth";
import HomePageComponent from "./containers/HomePage";
import ResetPassComponent from "./containers/ResetPass";
import UserProfileComp from "./containers/UserProfile";

function App({ getUser }) {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/reset-password" component={ResetPassComponent} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={HomePageComponent} />
        <PrivateRoute exact path="/:slug" component={UserProfileComp} />
      </Switch>
    </Router>
  );
}

export default connect(null, { getUser })(App);
