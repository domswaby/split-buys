import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import { deleteFriend, createFriend } from "./actions/friendship_actions";
import { receiveFriend, removeFriend } from "./actions/friendship_actions";
import { createExpense } from "./util/expense_api_util";
import { deleteExpense } from "./util/expense_api_util";
import { createUserExpense, deleteUserExpense } from "./util/user_expense_api_util";
import { makeExpense } from "./actions/expense_actions";
import { updateExpense } from "./util/expense_api_util";
import { editExpense } from "./actions/expense_actions";


// import { fetchBenches } from "./actions/bench_actions";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.createFriend = createFriend;
  window.deleteFriend = deleteFriend;
  window.receiveFriend = receiveFriend; 
  window.removeFriend = removeFriend;
  window.createExpense = createExpense; 
  window.deleteExpense = deleteExpense;
  window.createUserExpense = createUserExpense;
  window.deleteUserExpense = deleteUserExpense;
  window.makeExpense = makeExpense; 
  window.updateExpense = updateExpense;
  window.editExpense = editExpense;
  
  // window.fetchBenches = fetchBenches;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

});

