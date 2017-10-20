import {combineReducers} from 'redux';
import appReducer from "./app/AppReducer";

export default combineReducers({
  app: appReducer,
});
