import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  HomeScene,
  CharacterScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root]} component={HomeScene} />
        <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
