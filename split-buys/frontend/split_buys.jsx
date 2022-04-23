import React from "react";
import ReactDOM from "react-dom";
// import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import Root from "./components/root";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;  
  
  let store;
  store = configureStore();
  window.store = store;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

