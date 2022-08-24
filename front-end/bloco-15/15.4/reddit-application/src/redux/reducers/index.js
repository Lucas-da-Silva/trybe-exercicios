import { combineReducers } from "redux";
import subredditsReducer from "./subredditsReducer";

const rootReducer = combineReducers({
  subredditsReducer,
});

export default rootReducer;
