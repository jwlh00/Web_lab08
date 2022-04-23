import React from 'react';
import { PureComponent } from 'react/cjs/react.production.min';
import './startApp.css';

class StartApp extends PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Juego de Memoria</h1>
        <button type="button">Juego Nuevo</button>
      </div>
    );
  }
}

export default StartApp;
