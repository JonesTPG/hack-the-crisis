import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Map from './components/Map';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Typography>
          Tarvitsetko ruoka-apua tai haluatko auttaa heikommassa asemassa
          olevia? Saat tarkempia tietoja ruoanjakelusta painamalla kartalla
          näkyviä merkkejä.
        </Typography>
        <Map />
      </header>
    </div>
  );
};

export default App;
