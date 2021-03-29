import React from 'react';
import styles from "./Chessboard.module.css";

class Chessboard extends React.Component {
  render(){
    let square = [];
    for (let i = 0; i < 64; i++) {
      square.push(<div className={this.getSquareClass(i)} key={i}></div>);
    }

    return (
      <div className={styles.Chessboard}>
        {square}
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
      return `${styles.square} ${color}`
  }
}

export default Chessboard;
