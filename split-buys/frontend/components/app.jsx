import React from "react";
import Test from "./test";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BenchIndexContainer from './bench/bench_index_container';
import Home from "./home/home";
import AppHeader from "./app_header/app_header";
import AppHeaderContainer from "./app_header/app_header_container"; 
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={Home} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/" component={AppHeaderContainer} />
    <ProtectedRoute path="/test" component={Test} />

    {/* <Route exact path="/" component={BenchIndexContainer} /> */}
  </div>
);

export default App;