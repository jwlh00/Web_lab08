import React from 'react';
import { PureComponent } from 'react/cjs/react.production.min';
import './board.css';
import backImg from './public/card_back.png';

class Board extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  createSquare() {
    return <Square />;
  }

  render() {
    return (
      <>
        <div className="row1">
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
        </div>
        <div className="count">
          <h1>Intento numero 0</h1>
        </div>
      </>
    );
  }
}

class Square extends PureComponent {
  render() {
    return <img className="back" src={backImg} alt="backCard" />;
  }
}

export default Board;
