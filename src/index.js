import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, Router} from 'react-router';
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";
import moment from 'moment';
import 'moment/locale/ru';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)));
const store = createStore(rootReducer, enhancer);

const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./rootReducer', () =>
    store.replaceReducer(rootReducer)
  );
}
moment.locale('ru');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();