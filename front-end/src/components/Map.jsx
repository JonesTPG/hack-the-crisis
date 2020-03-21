import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Map, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { withStyles } from '@material-ui/core/styles';
import './map.css';
import MapMarker from './MapMarker';
import places from '../places.json';
const { BaseLayer } = LayersControl;

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  }
});

const InteractiveMap = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item>
        <Paper className={classes.paper}>
          <Map center={[places[0].lat, places[0].lon]} zoom={13}>
            <LayersControl position='topright'>
              <BaseLayer checked name='Digitransit'>
                <TileLayer
                  url='https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}@2x.png'
                  attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                  maxZoom={19}
                  tileSize={512}
                  zoomOffset={-1}
                  id='hsl-map'
                />
              </BaseLayer>
              <BaseLayer name='Swedish'>
                <TileLayer
                  url='https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}@2x.png'
                  attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                  maxZoom={19}
                  tileSize={512}
                  zoomOffset={-1}
                  id='hsl-map-sv'
                />
              </BaseLayer>
              {places.map((item, index) => {
                return (
                  <Marker position={[item.lat, item.lon]} key={index}>
                    <Popup>
                      <MapMarker place={item} />
                    </Popup>
                  </Marker>
                );
              })}
            </LayersControl>
          </Map>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(InteractiveMap);
