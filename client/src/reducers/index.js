import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
	myPost: postReducer
});

export default rootReducer;
