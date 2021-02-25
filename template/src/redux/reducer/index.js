import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import form from './form';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    form,
  });

export default createRootReducer;
