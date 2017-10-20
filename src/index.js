import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";

const history = createBrowserHistory();
const reducer = connectRouter(history)(rootReducer);
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)));
const store = createStore(reducer, enhancer);

if (module.hot) {
  module.hot.accept('./rootReducer', () =>
    store.replaceReducer(reducer)
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
