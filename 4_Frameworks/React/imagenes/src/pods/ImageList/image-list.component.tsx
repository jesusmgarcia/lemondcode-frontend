import React from 'react';
import { Image } from './image-list.vm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const cardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  })
);

const gridStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

interface Props {
  ImageCollection: Image[];
}

export const ImageListComponent: React.FC<Props> = (props) => {
  const imageList = props.ImageCollection;
  const cardClasses = cardStyles();
  const gridClasses = gridStyles();

  return (
    <div className={gridClasses.root}>
      <Grid container spacing={3}>
        {imageList.map((image) => (
          <Grid key={image.id} item xs={3}>
            <Card className={cardClasses.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={image.description}
                  height="140"
                  image={image.image}
                  title={image.description}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {image.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/*<Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />*/}
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
