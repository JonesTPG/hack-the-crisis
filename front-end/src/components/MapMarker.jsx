import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpButton: {
    color: '#2b2b2b',
    backgroundColor: '#fcaf3b'
  },
  foodButton: {
    color: '#ffffff',
    backgroundColor: '#2b2b2b'
  }
});

const MapMarker = props => {
  const { classes, place } = props;

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item>
        <Typography>
          {place.name}
          <br />
          {place.address}
          <br />
          {place.phone}
        </Typography>
      </Grid>
      <Grid item>
        <Link href={place.url} target='_blank'>
          <Button variant='contained' className={classes.helpButton}>
            Haluan auttaa!
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(MapMarker);
