import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { characterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { IconButton } from '@material-ui/core';

interface Props {
  character: characterEntityVm;
  onShow: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShow } = props;

  return (
    <Card>
      <CardHeader
        /*avatar={<Avatar aria-label="character">{character.rating}</Avatar>}*/
        title={character.name}
        subheader={character.name}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          {/*<Typography variant="subtitle1" gutterBottom>
            {character.description}
  </Typography>*/}
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onShow(character.id)}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
