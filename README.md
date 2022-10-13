# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot
#### Theme 1

![](https://github.com/AllenZoo/CalculatorProject/blob/master/CalculatorProjectScreenshots/Theme1.png)

#### Theme 2

![](https://github.com/AllenZoo/CalculatorProject/blob/master/CalculatorProjectScreenshots/Theme2.png)

#### Theme 3

![](https://github.com/AllenZoo/CalculatorProject/blob/master/CalculatorProjectScreenshots/Theme3.png)

### Links

- Live Site URL: [Calculator](https://allenzoo.github.io/CalculatorProject/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned


Styled Comonents Version of useContext
```html
<ThemeProvider theme={theme}> </ThemeProvider>
```

Using useEffect hook to track specific changes:

```js
// Changes display to match curNum everytime curNum changes (setCurNum(...))
  useEffect(() => {
    updateDisplayName();
  }, [curNum]);

// Changes to counter (setCounter(...)) updates theme to match
  useEffect(() => {
    updateTheme();
  }, [counter]);

```


Some js that rounds buggy js floating point numbers
```js
let result = "";
let num = Number(prevNum);
let num2 = Number(curNum);

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
// MAGIC LINE
result = Math.round((result + Number.EPSILON) * 1000000) / 1000000;
```

### Continued development


### Useful resources

- [Dynamic Theme Prop](https://stackoverflow.com/questions/42796584/dynamic-theme-in-styled-components) - Resource helped with making the theme prop dynamic.
- [Theming](https://styled-components.com/docs/advanced) - Really awesome article with details of using ThemeProvider from styled-components.


## Author

- Frontend Mentor - [@AllenZoo](https://www.frontendmentor.io/profile/AllenZoo)

