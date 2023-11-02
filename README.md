# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%202023-11-02%20at%2013-11-02%20Frontend%20Mentor%20Advice%20generator%20app.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

I learned how to make a simple API call: 

fetch('https://api.adviceslip.com/advice')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const id = data.slip.id;
        number.textContent = id;
        const quote = data.slip.advice;
        p.textContent = `"${quote}"`;
    })



### Continued development

Having a better idea on how to make API calls, I now want to move forth and experiment with different apps and take advantage of all the different free API's that are
available online. I would also like to work on databases next.


## Author

- GitHub - [Jxnfernandx](https://github.com/Jxnfernandx)
- Frontend Mentor - [@Jxnfernandx](https://www.frontendmentor.io/profile/Jxnfernandx)



