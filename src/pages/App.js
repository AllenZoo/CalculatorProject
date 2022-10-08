import "../styles/App.css";
import React, { useEffect, useState } from "react";
import * as styles from "./styled_components.js";

function App() {
  const [theme, setTheme] = useState(1);

  const helper = () => {
    //console.log("helped");
  };

  return (
    <div className="App">
      <styles.Screen>123456789</styles.Screen>
      <styles.KeyPad>
        <styles.KeyPadRow>
          <styles.OperationsButton onClick={helper}>7</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>8</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>9</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>9</styles.OperationsButton>
        </styles.KeyPadRow>
        <styles.KeyPadRow>
          <styles.OperationsButton onClick={helper}>4</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>5</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>6</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>+</styles.OperationsButton>
        </styles.KeyPadRow>
        <styles.KeyPadRow>
          <styles.OperationsButton onClick={helper}>1</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>2</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>3</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>-</styles.OperationsButton>
        </styles.KeyPadRow>
        <styles.KeyPadRow>
          <styles.OperationsButton onClick={helper}>.</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>0</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>/</styles.OperationsButton>
          <styles.OperationsButton onClick={helper}>x</styles.OperationsButton>
        </styles.KeyPadRow>
        <styles.KeyPadRow>
          <styles.ResetButton>RESET</styles.ResetButton>
          <styles.EqualsButton>=</styles.EqualsButton>
        </styles.KeyPadRow>
      </styles.KeyPad>
    </div>
  );
}

export default App;
