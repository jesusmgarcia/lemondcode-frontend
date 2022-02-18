import * as React from 'react';
import Button from '@material-ui/core/Button';
import { characterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: characterEntityVm[];
  onShow: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onShow } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => {
          return (
            <li key={character.id}>
              <CharacterCard character={character} onShow={onShow} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
