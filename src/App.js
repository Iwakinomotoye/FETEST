import React from 'react';
import './App.css';
import { Lander } from './components/Lander';
import OpenAccount from './components/OpenAccount';
import { BaseNav } from './components/BaseNav';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Lander />
          </Route>
          <Route path="/account-detail">
            <OpenAccount />
          </Route>
        </Switch>
        <BaseNav />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
