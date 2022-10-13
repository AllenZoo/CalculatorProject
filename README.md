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

![](./screenshot.jpg)


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
// Changes display to match curNum
  useEffect(() => {
    updateDisplayName();
  }, [curNum]);

// Changes to counter updates theme to match
  useEffect(() => {
    updateTheme();
  }, [counter]);

```


### Continued development


### Useful resources

- [Dynamic Theme Prop]([https://www.example.com](https://stackoverflow.com/questions/42796584/dynamic-theme-in-styled-components)) - Resource helped with making the theme prop dynamic.
- [Theming]([https://www.example.com](https://styled-components.com/docs/advanced)) - Really awesome article with details of using ThemeProvider from styled-components.


## Author

- Frontend Mentor - [@AllenZoo](https://www.frontendmentor.io/profile/AllenZoo)

