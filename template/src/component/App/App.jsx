import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store, history } from '../../redux/store';

import * as Page from '../../page';
import Navigation from '../Navigation';
import Footer from '../Footer';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <Navigation />
        <Switch>
          <Route path="/" component={Page.Home} exact />
          <Route path="/feedback" component={Page.Feedback} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
