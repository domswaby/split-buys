// frontend/reducers/errors_reducer.jsx

import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import friendshipErrorsReducer from "./friendship_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer, 
  friendships: friendshipErrorsReducer
});

export default errorsReducer;
