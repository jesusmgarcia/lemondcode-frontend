import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  description: string;
  imageUrl: string;
}

const cardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  })
);

export const CardComponent: React.FunctionComponent<Props> = (props) => {
  const description = props.description;
  const imageUrl = props.imageUrl;
  const cardClasses = cardStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Card className={cardClasses.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={description}
          height="140"
          image={imageUrl}
          title={description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="Buy"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Buy"
        />
      </CardActions>
    </Card>
  );
};
