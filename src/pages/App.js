import "../styles/App.css";
import React, { useEffect, useState } from "react";
import * as styles from "./styled_components.js";

function App() {
  const [theme, setTheme] = useState(1);
  const [num, setNum] = useState(9.11);
  const [displayNum, setDisplayNum] = useState("");
  const [curOp, setCurOp] = useState("");
  const [prevOp, setPrevOp] = useState("");
  const [prevNum, setPrevNum] = useState(0);

  const getDisplayNum = () => {
    let dNum = num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 20,
    });
    setDisplayNum(dNum);
  };

  const helper = () => {};

  const addToNum = (value) => {
    // add value to end of string
    let dNum = displayNum + value;

    // remove commas for parsing back to string
    dNum = dNum.replace(/,/g, "");

    // parse back into number
    dNum = Number(dNum);
    setNum(dNum);

    // convert back to string with added commas
    dNum = dNum.toLocaleString("en-US");
    console.log(dNum);
    setDisplayNum(dNum);
  };

  const deleteDigit = () => {};

  const operatorClicked = (op) => {};

  useEffect(() => {
    getDisplayNum();
  });

  return (
    <div className="App">
      <div className="calculator-container">
        <styles.Screen>{displayNum}</styles.Screen>
        <styles.KeyPad>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                addToNum("7");
              }}
            >
              7
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("8");
              }}
            >
              8
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("9");
              }}
            >
              9
            </styles.OperationsButton>
            <styles.DeleteButton onClick={helper}>DEL</styles.DeleteButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                addToNum("4");
              }}
            >
              4
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("5");
              }}
            >
              5
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("6");
              }}
            >
              6
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                setCurOp("+");
              }}
            >
              +
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                addToNum("1");
              }}
            >
              1
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("2");
              }}
            >
              2
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("3");
              }}
            >
              3
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                setCurOp("-");
              }}
            >
              -
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                addToNum(".");
              }}
            >
              .
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                addToNum("0");
              }}
            >
              0
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                setCurOp("/");
              }}
            >
              /
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                setCurOp("x");
              }}
            >
              x
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.ResetButton>RESET</styles.ResetButton>
            <styles.EqualsButton>=</styles.EqualsButton>
          </styles.KeyPadRow>
        </styles.KeyPad>
        {/* <button onClick={console.log(num)}>Test</button> */}
      </div>
    </div>
  );
}

export default App;
