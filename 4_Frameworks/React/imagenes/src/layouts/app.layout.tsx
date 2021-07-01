import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { ShopContext } from 'common/components/ShopContextProvider';
import Badge from '@material-ui/core/Badge';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const drawerWidth = 440;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
      color: 'white',
      textDecoration: 'none',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    drawerFooter: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    checkoutButton: {
      margin: '0rem 0rem',
    },
  })
);

export const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [numberInCartBadge, setNumberInCartBadge] = React.useState(0);

  const { imageList, setImageList } = React.useContext(ShopContext);

  React.useEffect(() => {
    setNumberInCartBadge(imageList.length);
  }, [imageList]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleEmptyCart = () => {
    setImageList([]);
  };

  const handleDeleteClick = (event, id) => {
    setImageList(imageList.filter((element) => element.id != id));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link to={routes.root} className={classes.titleLink}>
              Photo Ecommerce
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <Badge badgeContent={numberInCartBadge} color="secondary" showZero>
              <ShoppingCartIcon color="action" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Button
            onClick={handleEmptyCart}
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
        </div>
        <Divider />
        <List>
          {imageList.map((image) => (
            <ListItem button key={image.id}>
              <ListItemAvatar>
                <Avatar alt={image.title} src={image.imageUrl} />
              </ListItemAvatar>
              <ListItemText primary={image.title} />
              <IconButton
                onClick={(event) => handleDeleteClick(event, image.id)}
                aria-label="delete"
                color="primary"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        {numberInCartBadge > 0 && (
          <div>
            <Divider />
            <div className={classes.drawerFooter}>
              <Link to={routes.checkout}>
                <Button
                  className={classes.checkoutButton}
                  variant="contained"
                  color="primary"
                >
                  Checkout
                </Button>
              </Link>
            </div>
            <Divider />
          </div>
        )}
      </Drawer>
    </div>
  );
};
