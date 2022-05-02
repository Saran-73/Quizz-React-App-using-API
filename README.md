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

![quiz 2](https://user-images.githubusercontent.com/94773376/166235403-e7a2af4d-09e2-4bd9-b6e1-ec9300bea4ab.PNG)
![quiz 3](https://user-images.githubusercontent.com/94773376/166235409-7e765231-176d-4ea1-8d6d-e3f4ce0d9dc1.PNG)
![quiz 1](https://user-images.githubusercontent.com/94773376/166235412-3cd35d61-f836-4f94-b679-ee99c222d6af.PNG)



### Links

- live site URL: [https://saran-73.github.io/Quizz-React-App-using-API/]

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

- Twitter - [@Saran840900481](https://www.twitter.com/yourusername)


## Acknowledgments

I am thankful for scrimba for having the free course to learn React which helped me to create React applications like this challenge. The instructor Bob ziroll has an great way of teaching I liked it so much I enjoyed going through the course because of him giving me a hands on approach to learing I thank him.


