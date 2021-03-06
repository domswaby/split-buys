import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = (formUser) => {
  return (dispatch) => {
    return postSession(formUser)
      .then(user => dispatch(receiveCurrentUser(user)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const logout = () => dispatch => {
  return deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};

export const signup = (formUser) => dispatch => {
  return postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));
};






