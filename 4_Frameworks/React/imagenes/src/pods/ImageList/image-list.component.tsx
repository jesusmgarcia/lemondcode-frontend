import React from 'react';
import { Image } from './image-list.vm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardComponent } from 'common/components';

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
  const gridClasses = gridStyles();

  return (
    <div className={gridClasses.root}>
      <Grid container spacing={3}>
        {imageList.map((image) => (
          <Grid key={image.id} item xs={3}>
            <CardComponent
              description={image.description}
              imageUrl={image.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
