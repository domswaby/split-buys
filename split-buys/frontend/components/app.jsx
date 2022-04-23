import React from "react";
import Test from "./test";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BenchIndexContainer from './bench/bench_index_container';
import Home from "./home/home";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <ProtectedRoute path="/test" component={Test} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/" component={Home} />
    {/* <Route exact path="/" component={BenchIndexContainer} /> */}
  </div>
);

export default App;