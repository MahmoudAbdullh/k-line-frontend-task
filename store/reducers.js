import { combineReducers } from "redux";

const TestReducer = (initState = {}, actions) => initState;
// COMBINED REDUCERS
const reducers = {
  TestReducer,
};

export default combineReducers(reducers);
