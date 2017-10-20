import {combineReducers} from 'redux';
import appReducer from "./app/AppReducer";
import registrationReducer from "./registration/RegistrationReducer";
import loginReducer from "./login/LoginReducer";
import {routerReducer as routing} from 'react-router-redux';

export default combineReducers({
  routing,
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer
});
