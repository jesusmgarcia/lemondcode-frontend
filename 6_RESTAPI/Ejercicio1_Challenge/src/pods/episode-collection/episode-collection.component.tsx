import * as React from 'react';
import Button from '@material-ui/core/Button';
import { episodeEntityVm } from './episode-collection.vm';
import { EpisodeCard } from './components/episode-card.component';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: episodeEntityVm[];
  onShow: (id: number) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodeCollection, onShow } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} onShow={onShow} />
          </li>
        ))}
      </ul>
    </div>
  );
};
