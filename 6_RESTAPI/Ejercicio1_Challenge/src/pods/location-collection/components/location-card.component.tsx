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
import { locationEntityVm } from '../location-collection.vm';
import * as classes from './location-card.styles';

interface Props {
  location: locationEntityVm;
}

export const LocationCard: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Card>
      <CardHeader
        /*avatar={<Avatar aria-label="character">{character.rating}</Avatar>}*/
        title={location.name}
        //subheader={character.address}
      />
      <CardContent>
        <div className={classes.content}>
          {/*<CardMedia
            image={location.url}
            //title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.description}
  </Typography>*/}
        </div>
      </CardContent>
      {/*<CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>*/}
    </Card>
  );
};
