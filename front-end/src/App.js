import React from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import './map.css';
import MapMarker from './components/MapMarker';
import places from './places.json';
const { BaseLayer } = LayersControl;

const App = () => {
  return (
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
  );
};

export default App;
