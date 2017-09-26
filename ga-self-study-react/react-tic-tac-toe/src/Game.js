import React, { Component } from 'react';
import Board from './Board';
import Message from './Message';
import Aside from './Aside';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [1,2,3,4,5,6,7,8,9],
      turn: 0,
      xWin: 0,
      yWin: 0
    }
  }

  render() {
    return(
      <div>
        <div>
        </div>
          <Aside />
        <div>
            <Message />
            <Board board={this.state.board}/>
        </div>
        <div>
          <Aside />
        </div>

      </div>
    )
  }

}

export default Game;
