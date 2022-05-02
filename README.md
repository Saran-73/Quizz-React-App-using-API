## Quizzical app 
React app that users can use to quiz themselves.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
 React app that has questions and options to choose, once the user chooses the options they can check for scores. Questions are fetched from an API once the round is completed they can start playing again with new questions in a particular topic.


### Screenshot

![](./screenshot.jpg)


### Links

- source code URL: []
- live site URL: []

## My process
- First created the file App.js that has state on which data fetched from an API is stored.
- Modified the data to have properties id , choosen ,isClicked so to work with the data and keep track of which options are selected. 
- Then the questions are render by mapping them each questions will have child component that render options.
- OnClick is given to the options when the options clicked, the id is passed to the function which updated the state regarding which option is choosen then dynamic style is applied to the options highlighting them.
- Created a check scores button when clicked it will look at the state for correct answers and look for a match in choosen option if they matched filtered out in to new array which length gives us the score.
- Conditionally render the button for new game when clicked reset everything and home page is rendered with start game button on it.


### Built with

- Semantic HTML5 markup
- CSS Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

 I first had a struggle to create a proper data flow structure which affected the way components rendered then I learned how to create components which has child components in a proper way.

### Continued development
  Working with an API is new for me and need to focus on asyncronous programming ,working with promises.

### Useful resources

- [Example resource 1](https://www.example.com) - This is where I learned React and this challenge is part of that curriculum, the course is amazing and it is free .

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments

I am thankful for scrimba for having the free course to learn React which helped me to create React applications like this challenge. The instructor Bob ziroll has an great way of teaching I liked it so much I enjoyed going through the course because of him giving me a hands on approach to learing I thank him.


