'use strict';

const body = document.querySelector('body');

const number = document.querySelector('.number');
const guessNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreUI = document.querySelector('.score')
const highscoreUI = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');




let secretNumber = Math.trunc(Math.random() * 20) + 1;

// number.textContent = secretNumber; 🚫❌-----Only for test in UI

let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = Number((guessNum).value);

    if (!guess) {
        message.textContent = '🚫Please ! choose any number'
    }
    else if (guess === secretNumber) {
        message.textContent = `🎉🥳Hurryyy it's right`
        body.style.backgroundColor = '#60b347'
        number.style.width = '30rem'
        number.textContent = secretNumber
        if (score > highscore) {
            highscore = score;
            highscoreUI.textContent = highscore;
        }
    }

    if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? '💹Too High' : '📉Too Low';
            score--;
            scoreUI.textContent = score;
        }
        else {
            message.textContent = '💢🚫You losss';
            body.style.backgroundColor = 'red';
            number.textContent = secretNumber;
        }
    }
})


againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    body.style.backgroundColor = '#222';
    number.style.width = '15rem'
    scoreUI.textContent = score
    guessNum.value = '';
    number.textContent = '?';
    message.textContent = 'Start guessing...'

})




























// const secretNumber = Math.trunc(Math.random() * 20) + 1
// number.textContent = secretNumber;

// const submit = function (e) {
//     e.preventDefault()
//     let guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);
//     if (!guess) {
//         message.textContent = '❌Please.! Choose any Number';

//     }
//     if (guess > secretNumber) {
//         message.textContent = 'Too High💹';
//         score.textContent--;
//         if (score > 1) {
//             message.textContent = 'You Lost ❌🚫the Game';
//         }
//     }
//     else if (guess < secretNumber) {
//         message.textContent = 'Too Low📉'
//         score.textContent--;
//         if (score > 1) {
//             message.textContent = 'You Lost ❌🚫the Game';
//         }
//     }


//     if (guess == secretNumber) {
//         message.textContent = `🎉🥳Hurryyy it's right`
//         highscore.textContent = score.textContent;
//         score.textContent = 0;
//     }
// }

// checkBtn.addEventListener('click', submit);