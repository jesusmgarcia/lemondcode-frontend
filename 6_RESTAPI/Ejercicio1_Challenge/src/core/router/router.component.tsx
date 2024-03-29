import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HomeScene, CharacterScene } from 'scenes';
import { EpisodeScene } from 'scenes/episode.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root]} component={HomeScene} />
        <Route
          exact={true}
          path={switchRoutes.showCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.showEpisode}
          component={EpisodeScene}
        />
      </Switch>
    </HashRouter>
  );
};
