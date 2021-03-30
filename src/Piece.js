import React from 'react';
import styles from './Piece.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessRook, faChessBishop, faChessKnight, faChessQueen, faChessKing, faChessPawn } from '@fortawesome/free-solid-svg-icons';

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    let lookup = {
      "r": faChessRook,
      "b": faChessBishop,
      "n": faChessKnight,
      "q": faChessQueen,
      "k": faChessKing,
      "p": faChessPawn
    };

    let piece_icon = lookup[this.props.type.toLowerCase()];
    const styles = {
      left: `${Math.random() * 600}px`,
      top:`${Math.random() * 600}px`,
      color: "lightsalmon",
      position: "absolute",
      zIndex: 1,
      fontSize: "3rem"
    };

    return (
      <div className={styles.Piece} style={styles}>
        <FontAwesomeIcon icon={piece_icon} />
      </div>
    );
  }
}

export default Piece;
