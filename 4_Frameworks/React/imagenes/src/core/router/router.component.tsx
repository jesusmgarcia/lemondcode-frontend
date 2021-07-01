import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CheckoutScene, DogsScene, CatsScene, HomeScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={switchRoutes.root} component={HomeScene} />
        <Route exact={true} path={switchRoutes.cats} component={CatsScene} />
        <Route exact={true} path={switchRoutes.dogs} component={DogsScene} />
        <Route
          exact={true}
          path={switchRoutes.checkout}
          component={CheckoutScene}
        />
      </Switch>
    </Router>
  );
};
