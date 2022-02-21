import { Box, Button, Typography } from '@material-ui/core';
import { linkRoutes } from 'core/router';
import { CharacterCollectionComponent } from 'pods/character-collection/character-collection.component';
import { characterEntityApi } from 'pods/character/api';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { episodeEntityApi } from './api';

interface IParams {
  id: string;
}

export const EpisodeContainer: React.FunctionComponent = (props) => {
  const [characterCollection, setCharacterCollection] = React.useState<
    characterEntityApi[]
  >([]);
  const [episode, setEpisode] = React.useState<episodeEntityApi>(
    {} as episodeEntityApi
  );

  const { id } = useParams<IParams>();
  const episodeUrl = 'https://rickandmortyapi.com/api/episode/' + id;
  let characterUrl = 'https://rickandmortyapi.com/api/character/';

  const history = useHistory();

  const handleLoadEpisode = async () => {
    const apiEpisode = await api.getEpisode(episodeUrl);

    setEpisode(apiEpisode);

    for (const char of apiEpisode.characters) {
      characterUrl += char.split('/').pop() + ',';
    }

    characterUrl = characterUrl.slice(0, -1);

    const apiCharacters = await api.getCharacterCollection(characterUrl);

    setCharacterCollection(apiCharacters);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadEpisode();
    }
  }, []);

  const handleShowCharacter = (id: number) => {
    console.log(id);
    history.push(linkRoutes.showCharacter(id));
  };

  const handleGoBack = async () => {
    history.goBack();
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <Typography variant="h2" align="center" gutterBottom>
        List of Characters in Episode: {episode.episode} {episode.name}
      </Typography>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onShow={handleShowCharacter}
      />
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => handleGoBack()}
        >
          Go Back
        </Button>
      </div>
    </Box>
  );
};
