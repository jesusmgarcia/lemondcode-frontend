import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { characterEntityApi } from './api';
import { CharacterComponent } from './character.component';

const createEmptyCharacter = (): characterEntityApi => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
});

interface IParams {
  id: string;
}

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<characterEntityApi>(
    createEmptyCharacter()
  );

  const { id } = useParams<IParams>();
  const url = 'https://rickandmortyapi.com/api/character/' + id;

  console.log('url: ', url);
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(url);
    console.log('char: ', apiCharacter);
    setCharacter(apiCharacter);
  };

  React.useEffect(() => {
    console.log(id);
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleGoBack = async () => {
    history.goBack();
  };

  return <CharacterComponent character={character} onOk={handleGoBack} />;
};
