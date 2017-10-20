import {combineReducers} from 'redux';
import appReducer from "./app/AppReducer";
import registrationReducer from "./registration/RegistrationReducer";

export default combineReducers({
  app: appReducer,
  registration: registrationReducer
});
