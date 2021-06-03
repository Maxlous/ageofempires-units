# Age of Empires Units

[click here to go to live](https://ageofempiresunits.netlify.app/)

## Description

- It is a React.js app that you can filter Age of Empires Units according to ages and costs.
- You can also go to details page of particular unit.
- For state management redux and redux-saga used.

## How to run?

- Clone the repo
- Run "npm install"
- Run "npm start"

## Possible improvement areas in the code

- For further filtering abilities, ages filter could be re-organized to combine age filters
- Even though redux actions, state, and reducers tested, redux-saga middlewares could be tested too
- In filter reducer, filtering according to cost implemented with the help of two separate but similar for loops. It can be combine into one loop that can reduce complexity. Also the logic that checks to age before filtering acording to cost should be changed in a way that filter according to cost case should only deal with cost options.
