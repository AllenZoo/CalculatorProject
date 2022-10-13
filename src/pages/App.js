import "../styles/App.css";
import React, { useEffect, useState } from "react";
import * as styles from "./styled_components.js";
import { ThemeProvider } from "styled-components";

function App() {
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

  const handleDecimalPress = () => {
    if (prevPress === "equals" || prevPress === "decimal") {
      return;
    }

    let strNum = curNum.toString();
    if (strNum.indexOf(".") >= 0) {
      //found decimal already in num
      return;
    } else {
      strNum += ".";
      setCurNum(strNum);
    }
    setPrevPress("decimal");
  };

  // value guranteed to be: [0-9]
  const handleNumPress = (value) => {
    let strNum = curNum + "";
    if (prevPress === "op") {
      setCurNum(value);
    } else if (prevPress === "equals") {
      setCurNum(value);
      setPrevNum(0);
    } else if (prevPress === "decimal" || strNum.indexOf(".") >= 0) {
      let strNum = curNum;
      strNum += value;
      setCurNum(strNum);
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
    let num = Number(prevNum);
    let num2 = Number(curNum);

    console.log(num, num2);
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
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000;
    if (result !== "") {
      //console.log("setting number: " + result);
      setPrevNum(result);
      setCurNum(result);
      setPrevPress("eval");
    }
  };

  const themeStyle1 = {
    // number keys + - x and /
    op_key_bg: "hsl(30, 25%, 89%)",
    op_key_bg_shadow: "hsla(28, 16%, 65%)",
    op_key_text: "hsl(221, 14%, 31%)",
    op_key_bg_hover: "hsl(225, 21%, 100%)",
    op_key_bg_active: "hsl(30, 25%, 80%)",

    // delete and remove
    dr_key_bg: "hsl(225, 21%, 49%)",
    dr_key_bg_shadow: "hsla(224, 28%, 35%)",
    dr_key_text: "white",
    dr_key_bg_hover: "hsl(225, 21%, 65%)",
    dr_key_bg_active: "hsl(225, 21%, 40%)",

    // eq and theme change
    et_key_bg: "hsl(6, 63%, 50%)",
    et_key_bg_shadow: "hsla(6, 70%, 34%)",
    et_key_text: "white",
    et_key_bg_hover: "hsl(6, 63%, 60%)",
    et_key_bg_active: "hsl(6, 63%, 40%)",

    // main background
    main_bg: "hsl(222, 26%, 31%)",

    // toggle + keypad background
    tk_bg: "hsl(223, 31%, 20%)",

    // screen
    screen_bg: "hsl(224, 36%, 15%)",
    screen_text: "white",

    // button alignment
    t_align: "flex-start",
  };

  const themeStyle2 = {
    // number keys + - x and /
    op_key_bg: "hsl(45, 7%, 89%)",
    op_key_bg_shadow: "hsl(35, 11%, 61%)",
    op_key_text: "hsl(60, 10%, 19%)",
    op_key_bg_hover: "hsl(45, 7%, 99%)",
    op_key_bg_active: "hsl(45, 7%, 79%)",

    // delete and remove
    dr_key_bg: "hsl(185, 42%, 37%)",
    dr_key_bg_shadow: "hsl(185, 58%, 25%)",
    dr_key_text: "white",
    dr_key_bg_hover: "hsl(185, 42%, 47%)",
    dr_key_bg_active: "hsl(185, 42%, 27%)",

    // eq and theme change
    et_key_bg: "hsl(25, 98%, 40%)",
    et_key_bg_shadow: "hsl(25, 99%, 27%)",
    et_key_text: "white",
    et_key_bg_hover: "hsl(25, 98%, 50%)",
    et_key_bg_active: "hsl(25, 98%, 30%)",

    // main background
    main_bg: "hsl(0, 0%, 90%)",

    // toggle + keypad background
    tk_bg: "hsl(0, 5%, 81%)",

    // screen
    screen_bg: "hsl(0, 0%, 93%)",
    screen_text: "hsl(60, 10%, 19%)",

    // button alignment
    t_align: "center",
  };

  const themeStyle3 = {
    // number keys + - x and /
    op_key_bg: "hsl(268, 47%, 21%)",
    op_key_bg_shadow: "hsl(290, 70%, 36%)",
    op_key_text: "hsl(52, 100%, 62%)",
    op_key_bg_hover: "hsl(268, 47%, 31%)",
    op_key_bg_active: "hsl(268, 47%, 11%)",

    // delete and remove
    dr_key_bg: "hsl(281, 89%, 26%)",
    dr_key_bg_shadow: "hsl(285, 91%, 52%)",
    dr_key_text: "white",
    dr_key_bg_hover: "hsl(281, 89%, 36%)",
    dr_key_bg_active: "hsl(281, 89%, 16%)",

    // eq and theme change
    et_key_bg: "hsl(176, 100%, 44%)",
    et_key_bg_shadow: "hsl(177, 92%, 70%)",
    et_key_text: "hsl(198, 20%, 13%)",
    et_key_bg_hover: "hsl(176, 100%, 54%)",
    et_key_bg_active: "hsl(176, 100%, 34%)",

    // main background
    main_bg: "hsl(268, 75%, 9%)",

    // toggle + keypad background
    tk_bg: "hsl(268, 71%, 12%)",

    // screen
    screen_bg: "hsl(268, 71%, 12%)",
    screen_text: "hsl(52, 100%, 62%)",

    // button alignment
    t_align: "flex-end",
  };

  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(themeStyle1);
  const rotateTheme = () => {
    if (counter < 2) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const updateTheme = () => {
    switch (counter) {
      case 0:
        setTheme(themeStyle1);
        break;
      case 1:
        setTheme(themeStyle2);
        break;
      case 2:
        setTheme(themeStyle3);
        break;
    }
  };

  useEffect(() => {
    updateDisplayName();
  }, [curNum]);

  useEffect(() => {
    updateTheme();
  }, [counter]);

  return (
    <div className="App">
      <div className="calculator-container">
        <ThemeProvider theme={theme}>
          <styles.GlobalWrapper>
            <div className="subwrapper">
              <styles.TopContainer>
                <styles.SliderLabelContainer>
                  <styles.SliderLabel>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                  </styles.SliderLabel>
                </styles.SliderLabelContainer>

                <styles.HeaderContainer>
                  <div className="title">calc</div>
                  <styles.HeaderRightSide>
                    <div className="text">THEME</div>
                    <styles.SliderContainer>
                      <styles.ThemeButton
                        onClick={function () {
                          rotateTheme();
                        }}
                      />
                    </styles.SliderContainer>
                  </styles.HeaderRightSide>
                </styles.HeaderContainer>
              </styles.TopContainer>

              <styles.Screen>{displayNum}</styles.Screen>
              <styles.KeyPad>
                <styles.KeyPadRow>
                  <styles.OperationsButton
                    onClick={function () {
                      handleNumPress("7");
                    }}
                    key_bg
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
                      handleDecimalPress();
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
            </div>
          </styles.GlobalWrapper>
        </ThemeProvider>

        {/* <button
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
        </button> */}
      </div>
    </div>
  );
}

export default App;
