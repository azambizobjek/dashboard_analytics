//put all of reducer inside this file

import { combineReducers } from "redux";
import { LOG_OUT } from "../actions/types";
import authReducer from "./authReducer";
import layoutInitReducer from "./layoutInitReducer";
import searchReducer from "./searchReducer";
import totalYearReducer from "./totalYearReducer";
import totalMonthReducer from "./totalMonthReducer";
import recordTypesReducer from "./recordTypesReducer";
import totalCreatedReducer from "./totalCreatedReducer";
import recMonthReducer from "./recMonthReducer";
import recYearReducer from "./recYearReducer";

const appReducer = combineReducers({
  session: authReducer,
  layout: layoutInitReducer,
  searchConf: searchReducer,
  totalYe: totalYearReducer,
  totalMon: totalMonthReducer,
  recTypes: recordTypesReducer,
  totalCrea: totalCreatedReducer,
  recMonth: recMonthReducer,
  recYear: recYearReducer
});

export const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
