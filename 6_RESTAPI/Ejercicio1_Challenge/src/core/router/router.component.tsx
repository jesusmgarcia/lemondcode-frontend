import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  HomeScene,
  CharacterCollectionScene,
  LocationCollectionScene,
  EpisodeCollectionScene,
  CharacterScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root]} component={HomeScene} />
        <Route
          exact={true}
          path={[switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.locationCollection]}
          component={LocationCollectionScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.episodeCollection]}
          component={EpisodeCollectionScene}
        />
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
