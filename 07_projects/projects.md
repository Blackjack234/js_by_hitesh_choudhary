# js_by_hitesh_choudhary_project

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qembmu?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

## BMI Calculator

The following is a JavaScript code snippet for a BMI calculator:

```javascript
document.querySelector('form').addEventListener('submit', (e) => {
  try {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please provide a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please provide a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // show result
      if (bmi < 18.6) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are under weight</span>`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are normal range</span>`;
      } else if (bmi > 24.9) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are over weight</span>`;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});
```

## Display clock

The following is a JavaScript code snippet for a clock display:

```javascript
const clock = document.querySelector('#clock');


setInterval(()=>{
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## Guess a number game

The following is a JavaScript code snippet for a guess a number game:

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesseSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Minimum number allowed is 1');
  } else if (guess > 100) {
    alert('Max number allowed is 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Guess is TOOO heigh`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesseSlot.innerHTML += `${guess} , `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start new game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesseSlot.innerHTML = '';
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

