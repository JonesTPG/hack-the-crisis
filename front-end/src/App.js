import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tervetuloa auttamaan pienyrityksiä!</p>
        <div>
          <Button variant="contained">Olen asiakas</Button>
          {"            "}

          <Button variant="contained">Olen yritys</Button>
        </div>
      </header>
    </div>
  );
};

export default App;
