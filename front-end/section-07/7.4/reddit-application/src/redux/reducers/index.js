import { combineReducers } from "redux";
import subredditsReducer from "./subredditsReducer";

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
});

export default rootReducer;
