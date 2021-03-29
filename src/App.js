import './App.module.css';
import React from 'react';
import styles from "./App.module.css";
import Chessboard from "./Chessboard.js";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Chessboard/>
      </div>
    );
  }
}

export default App;
