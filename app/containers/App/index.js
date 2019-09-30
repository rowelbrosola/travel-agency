/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Adventures from 'containers/Adventures/Loadable';
import Booking from 'containers/Booking/Loadable';
import International from 'containers/International/Loadable';

import GlobalStyle from '../../global-styles';

// Components
import Header from 'components/Header'

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/adventures" component={Adventures} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/international" component={International} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
