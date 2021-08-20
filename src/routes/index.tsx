import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from '../pages/Error';
import Home from '../pages/Home';
import Others from '../pages/Others';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/others" component={Others} />
      <Route exact path="*" component={Error} />
    </Switch>
  </>
);

export default Routes;
