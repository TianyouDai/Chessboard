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
    let type = this.props.type;
    let type_lower = type.toLowerCase();
    let iswhite = type !== type_lower;
    let piece_icon = lookup[type_lower];
    let iswhite_class = (iswhite)? styles.White: styles.Black;
    let piece_class = `${styles.Piece} ${iswhite_class}`;
    let square_size = 75;
    let rank = Math.floor(this.props.square / 8);
    let file = this.props.square % 8;

    const css_styles = {
      left: `${file * square_size}px`,
      top:`${rank * square_size}px`,
      position: "absolute",
      zIndex: 1,
      fontSize: "3rem"
    };

    return (
      <div className={piece_class} style={css_styles}>
        <FontAwesomeIcon icon={piece_icon} />
      </div>
    );
  }
}

export default Piece;
