import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  isWinner = () => {
    let player = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === player
        && this.state.squares[line[1]] === player
        && this.state.squares[line[2]] === player) {
        alert('Выиграл - ' + player);
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null)});
          this.setState({ count: 0 });
        }, 2000)
      }
    }
  }

  clickHandler = event => {
    //data - номер клетки 
    let data = event.target.getAttribute('data');
    let currentSquare = this.state.squares;

    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquare });
    }
    else {
      alert('Клетка занята!');
    }
    this.isWinner();
  }

  render() {
    return (
      <div className="App-header">
        <h1>React "Крестики-нолики"</h1>
        <h4>Первый игрок - Х</h4>
        <h4>Второй игрок - О</h4>
        <div className="tic-tac-toe">
          <div className="ttt-grid" onClick={this.clickHandler} data="0">
            <div className="ttt-number">{this.state.squares[0]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="1">
            <div className="ttt-number">{this.state.squares[1]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="2">
            <div className="ttt-number">{this.state.squares[2]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="3">
            <div className="ttt-number">{this.state.squares[3]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="4">
            <div className="ttt-number">{this.state.squares[4]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="5">
            <div className="ttt-number">{this.state.squares[5]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="6">
            <div className="ttt-number">{this.state.squares[6]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="7">
            <div className="ttt-number">{this.state.squares[7]}</div>
          </div>
          <div className="ttt-grid" onClick={this.clickHandler} data="8">
            <div className="ttt-number">{this.state.squares[8]}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;