import * as React from 'react';
import Button from '@material-ui/core/Button';
import { episodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: episodeEntityVm[];
  /*onCreatecharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;*/
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodeCollection/*, onCreatecharacter, onEdit, onDelete*/ } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard
              episode={episode}
              /*onEdit={onEdit}
              onDelete={onDelete}*/
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
