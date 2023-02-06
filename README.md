# Live Football World Cup Score Board App

This repository contains the React project I have developed for the coding test for SpartRadar.The project is a Live Football World Cup Scoreboard library (or frontend application) that allows users to start a new game, update the score, and finish a game in progress. 
The default match time is set to 90 seconds, but this can be modified in the Clock component found in the helpers folder.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### The following operations are supported:
1. Start a new game - this requires the home team and away team parameters to be provided, and initializes the score to 0-0
2. Update score - this requires a pair of absolute scores for the home team and away team
3. Finish game - this removes a match from the scoreboard
4. Get a summary of games in progress - this returns the games in progress ordered by their total score, with the games with the same total score being returned ordered by the most recently started match in the scoreboard.

## Available Scripts

In the project directory, you can run:

### `npm install`

install all packages needed.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

The project can be accessed at : [https://coding-test-s.vercel.app/](https://coding-test-s.vercel.app/)


