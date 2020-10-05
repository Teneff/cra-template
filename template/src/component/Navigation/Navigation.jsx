import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '@material-ui/icons/Adjust';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    '& > *': {
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0, 1),
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" noWrap>
          <Link component={RouterLink} to="/" color="inherit" noWrap>
            <Logo />
            {process.env.REACT_APP_WEBSITE_NAME}
          </Link>
        </Typography>
        <Link component={RouterLink} to="/feedback" color="inherit" variant="h6" noWrap>
          feedback
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {};

export default Navigation;
