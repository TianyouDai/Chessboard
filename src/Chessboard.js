import React from 'react';
import styles from "./Chessboard.module.css";
import Piece from "./Piece.js";

class Chessboard extends React.Component {
  render(){
    let squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(<div className={this.getSquareClass(i)} key={i}></div>);
    }

    let board_state_string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    let board_state = board_state_string.split("/");
    let pieces = [];
    let numbers = "1,2,3,4,5,6,7,8,9";
    let uid = 100;
    let square = 0;
    for (let row of board_state){
      for (let p of row){
        if (numbers.indexOf(p) !== -1){
          let n = parseInt(p, 10);
          square += n;
          continue;
        }
        pieces.push(
          <Piece key={uid} type={p} square={square}/>
        );
        uid += 1;
        square += 1;
      }
    }

    return (
      <div className={styles.Chessboard}>
        {squares}
        {pieces}
      </div>
    );
  }

  getSquareClass(n){
      let color = styles.White;
      let row = Math.floor(n / 8);
      let col = n % 8;

      if (row % 2 === 0) {
        if (col % 2 !== 0){
          color = styles.Black;
        }
      }
      else{
        if (col % 2 === 0){
          color = styles.Black;
        }
      }
      return `${styles.Square} ${color}`
  }
}

export default Chessboard;
