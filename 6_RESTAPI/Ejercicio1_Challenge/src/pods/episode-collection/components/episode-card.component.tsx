import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { episodeEntityVm } from '../episode-collection.vm';
import * as classes from './episode-card.styles';
import VisibilityIcon from '@material-ui/icons/Visibility';

interface Props {
  episode: episodeEntityVm;
  onShow: (id: number) => void;
}

export const EpisodeCard: React.FunctionComponent<Props> = (props) => {
  const { episode, onShow } = props;

  return (
    <Card>
      <CardHeader
        /*avatar={<Avatar aria-label="character">{character.rating}</Avatar>}*/
        title={episode.name}
        subheader={episode.episode}
      />
      {/*<CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.description}
          </Typography>
        </div>
      </CardContent>*/}
      <CardActions>
        <IconButton onClick={() => onShow(episode.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
