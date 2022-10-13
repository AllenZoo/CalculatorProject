import "../styles/App.css";
import React, { useEffect, useState } from "react";
import * as styles from "./styled_components.js";

function App() {
  const [theme, setTheme] = useState(1);
  const [curNum, setCurNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);

  const [displayNum, setDisplayNum] = useState("");
  const [curOp, setCurOp] = useState("");

  const [prevPress, setPrevPress] = useState("");

  const updateDisplayName = () => {
    let dNum = curNum.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 20,
    });
    setDisplayNum(dNum);
  };

  // value guranteed to be: [0-9]|/.
  const handleNumPress = (value) => {
    if (prevPress === "op") {
      setCurNum(value);
    } else if (prevPress === "equals") {
      setCurNum(value);
      setPrevNum(0);
    } else {
      let strNum = curNum.toString();
      strNum += value;

      let newNum = Number(strNum);
      setCurNum(newNum);
    }

    setPrevPress("num");
  };

  /* op = one of +, -, x, or /        */
  const handleOpPress = (op) => {
    if (prevPress === "op") {
      setCurOp(op);
    } else if (curOp !== "") {
      evaluate();
    } else {
      setPrevNum(curNum);
    }

    setCurOp(op);
    setPrevPress("op");
  };

  const handleDelete = () => {
    if (prevPress === "equals") {
      return;
    }

    let strNum = curNum.toString();

    if (strNum.length > 1) {
      strNum = strNum.substring(0, strNum.length - 1);
    } else {
      strNum = "0";
    }

    let newNum = Number(strNum);
    setCurNum(newNum);
  };

  const handleReset = () => {
    setCurNum(0);
    setPrevNum(0);
    setCurOp("");
  };

  const handleEqualsPress = () => {
    if (prevPress === "op") {
    } else if (prevPress === "num") {
      evaluate();
      setCurOp("");
    } else if (curOp !== "") {
    } else if (prevPress === "equals") {
    }
    setPrevPress("equals");
  };

  const evaluate = () => {
    //console.log(prevNum, num, curOp);
    let result = "";
    switch (curOp) {
      case "+":
        result = Number(prevNum) + Number(curNum);
        break;
      case "-":
        result = Number(prevNum) - Number(curNum);
        break;
      case "x":
        result = Number(prevNum) * Number(curNum);
        break;
      case "/":
        result = Number(prevNum) / Number(curNum);
        break;
    }
    console.log("results: " + result);
    if (result !== "") {
      //console.log("setting number: " + result);
      setPrevNum(result);
      setCurNum(result);
      setPrevPress("eval");
    }
  };

  useEffect(() => {
    //console.log("called!");
    // evaluate();
    updateDisplayName();
  }, [curNum]);

  return (
    <div className="App">
      <div className="calculator-container">
        <styles.Screen>{displayNum}</styles.Screen>
        <styles.KeyPad>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("7");
              }}
            >
              7
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("8");
              }}
            >
              8
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("9");
              }}
            >
              9
            </styles.OperationsButton>
            <styles.DeleteButton
              onClick={function () {
                handleDelete();
              }}
            >
              DEL
            </styles.DeleteButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("4");
              }}
            >
              4
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("5");
              }}
            >
              5
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("6");
              }}
            >
              6
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleOpPress("+");
              }}
            >
              +
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("1");
              }}
            >
              1
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("2");
              }}
            >
              2
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("3");
              }}
            >
              3
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleOpPress("-");
              }}
            >
              -
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.OperationsButton
              onClick={function () {
                console.log("not implemented yet :)");
              }}
            >
              .
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleNumPress("0");
              }}
            >
              0
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleOpPress("/");
              }}
            >
              /
            </styles.OperationsButton>
            <styles.OperationsButton
              onClick={function () {
                handleOpPress("x");
              }}
            >
              x
            </styles.OperationsButton>
          </styles.KeyPadRow>
          <styles.KeyPadRow>
            <styles.ResetButton
              onClick={function () {
                handleReset();
              }}
            >
              RESET
            </styles.ResetButton>
            <styles.EqualsButton
              onClick={function () {
                handleEqualsPress();
              }}
            >
              =
            </styles.EqualsButton>
          </styles.KeyPadRow>
        </styles.KeyPad>
        <button
          onClick={console.log(
            "curNum: " +
              curNum +
              " prevNum: " +
              prevNum +
              " prevPress: " +
              prevPress +
              " curOp: " +
              curOp
          )}
        >
          Test
        </button>
      </div>
    </div>
  );
}

export default App;
