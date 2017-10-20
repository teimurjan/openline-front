import React from 'react';
import {Route} from "react-router";
import App from "./app/AppContainer";
import Registration from "./registration/RegistrationContainer";

export default (
  <div id='router'>
    <App>
      <Route path='/registration' component={Registration}/>
    </App>
  </div>
)