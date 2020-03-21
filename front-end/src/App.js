import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Map from './components/Map';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className='App'>
      <header className='App-header'>
        <Typography variant='h6' className={classes.header}>
          Tarvitsetko ruoka-apua tai haluatko auttaa heikommassa asemassa
          olevia? Saat tarkempia tietoja ruoanjakelusta painamalla kartalla
          näkyviä merkkejä.
        </Typography>
        <Map />
      </header>
    </div>
  );
};

export default withStyles(styles)(App);
