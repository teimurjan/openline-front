import React from 'react';
import {IndexRoute, Route} from "react-router";
import App from "./app/AppContainer";
import Registration from "./registration/RegistrationContainer";
import Login from "./login/LoginContainer";
import NewProject from "./new-project/NewProjectContainer";
import CommonInformation from "./new-project/common-information/CommonInformationContainer";
import Details from "./new-project/details/DetailsContainer";

export default (
  <Route path='/' component={App}>
    <Route path='registration' component={Registration}/>
    <Route path='login' component={Login}/>
    <Route path='project/new' component={NewProject}>
      <IndexRoute path='' component={CommonInformation}/>
      <Route path=':id' component={Details}/>
    </Route>
  </Route>
)