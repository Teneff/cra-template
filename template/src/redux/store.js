import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import googleAnalytics from './googleAnalytics';

import createRootReducer from './reducer';

export const history = createBrowserHistory();

const middlewareHistoryRouter = routerMiddleware(history);

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(middlewareHistoryRouter, googleAnalytics)),
);
