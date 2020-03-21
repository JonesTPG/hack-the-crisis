import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const MapMarker = props => {
  const { classes, place } = props;

  const handleFood = event => {
    event.preventDefault();
  };
  const handleHelp = event => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
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
          <Button variant='contained' onClick={handleHelp}>
            Haluan auttaa!
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={handleFood}>
            Haluan ruokaa!
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(MapMarker);
