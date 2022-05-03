import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import expensesReducer from "./expenses_reducer";
import benchesReducer from "./benches_reducer";



const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer, 
  benches: benchesReducer
  
});

export default entitiesReducer;


