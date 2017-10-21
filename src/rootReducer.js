import {combineReducers} from 'redux';
import appReducer from "./app/AppReducer";
import registrationReducer from "./registration/RegistrationReducer";
import loginReducer from "./login/LoginReducer";
import newProjectReducer from './new-project/NewProjectReducer';
import commonInformationReducer from './new-project/common-information/CommonInformationReducer';
import detailsReducer from './new-project/details/DetailsReducer';
import {routerReducer as routing} from 'react-router-redux';

export default combineReducers({
  routing,
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
  newProject: newProjectReducer,
  commonInformation: commonInformationReducer,
  details: detailsReducer
});
