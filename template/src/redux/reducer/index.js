import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import form from './form';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    form,
  });
