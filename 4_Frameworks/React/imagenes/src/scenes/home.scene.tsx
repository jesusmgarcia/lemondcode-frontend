import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    height: '340px',
    backgroundColor: '#fafafa',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridListTile: {
    height: '320px',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export const HomeScene: React.FC = () => {
  const classes = useStyles();

  return (
    <AppLayout>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2}>
          <Link to={routes.cats}>
            <GridListTile className={classes.gridListTile}>
              <img
                src="https://via.placeholder.com/420x320/3fbf7f/333333?text=Cats"
                alt="Cats"
              />
              <GridListTileBar
                title="Buy Cats Photos"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          </Link>
          <Link to={routes.dogs}>
            <GridListTile className={classes.gridListTile}>
              <img
                src="https://via.placeholder.com/420x320/bf3f7f/333333?text=Dogs"
                alt="Dogs"
              />
              <GridListTileBar
                title="Buy Dogs Photos"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          </Link>
        </GridList>
      </div>
    </AppLayout>
  );
};
