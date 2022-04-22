import React from "react";
import ReactDOM from "react-dom";
// import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;  

  let store;
  store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to SplitBuys</h1>, root);
});

