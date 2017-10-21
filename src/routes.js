import React from 'react';
import {Route} from "react-router";
import App from "./app/AppContainer";
import Registration from "./registration/RegistrationContainer";
import Login from "./login/LoginContainer";
import NewProject from "./new-project/NewProjectContainer";

export default (
  <Route path='/' component={App}>
    <Route path='registration' component={Registration}/>
    <Route path='login' component={Login}/>
    <Route path='project/new' component={NewProject}/>
  </Route>
)