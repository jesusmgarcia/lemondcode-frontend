import { Button } from '@material-ui/core';
import { CharacterCollectionContainer } from 'pods/character-collection';
import { EpisodeCollectionContainer } from 'pods/episode-collection';
import { LocationCollectionContainer } from 'pods/location-collection';
import * as React from 'react';
import { useHomeBaseUrls } from './home.hook';
import * as classes from './home.styles';

const apiUrl = 'https://rickandmortyapi.com/api';

export const HomeComponent: React.FunctionComponent = () => {
  const [showCharacters, setShowCharacters] = React.useState<boolean>(false);
  const [showLocations, setShowLocations] = React.useState<boolean>(false);
  const [showEpisodes, setShowEpisodes] = React.useState<boolean>(false);
  const { baseUrls, loadBaseUrls } = useHomeBaseUrls(apiUrl);

  React.useEffect(() => {
    loadBaseUrls();
  }, []);

  React.useEffect(() => {
    if (baseUrls.characters) setShowCharacters(true);
  }, [baseUrls]);

  const onClickCharacters = () => {
    setShowCharacters(true);
    setShowLocations(false);
    setShowEpisodes(false);
  };

  const onClickLocations = () => {
    setShowCharacters(false);
    setShowLocations(true);
    setShowEpisodes(false);
  };

  const onClickEpisodes = () => {
    setShowCharacters(false);
    setShowLocations(false);
    setShowEpisodes(true);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <Button variant="contained" color="primary" onClick={onClickCharacters}>
          Characters
        </Button>
        <Button variant="contained" color="primary" onClick={onClickLocations}>
          Locations
        </Button>
        <Button variant="contained" color="primary" onClick={onClickEpisodes}>
          Episodes
        </Button>
      </ul>
      {showCharacters && (
        <CharacterCollectionContainer url={baseUrls.characters} />
      )}
      {showLocations && (
        <LocationCollectionContainer url={baseUrls.locations} />
      )}
      {showEpisodes && <EpisodeCollectionContainer url={baseUrls.episodes} />}
    </div>
  );
};
