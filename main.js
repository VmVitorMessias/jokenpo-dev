const rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors');
let resultElement = document.getElementById('result'),
    myResultElement = document.getElementById('my-result'),
    alexaResultElement = document.getElementById('alexa-result');

let result = 0;
let myResult = 0;
let alexaResult = 0;

const options = ['rock', 'paper', 'scissors'];

const generateAlexaChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    return options[randomNumber];
};

const playGame = (userChoice) => {
    const alexaChoice = generateAlexaChoice();

    console.log(`Escolha do usuário: ${userChoice}`);
    console.log(`Escolha da Alexa: ${alexaChoice}`);

    if (userChoice === alexaChoice) {
        resultElement.innerHTML = 'Empate';
    } 
    
    else if (
        (userChoice === 'rock' && alexaChoice === 'scissors') ||
        (userChoice === 'paper' && alexaChoice === 'rock') ||
        (userChoice === 'scissors' && alexaChoice === 'paper')
    ) {
        resultElement.innerHTML = 'Você ganhou';
        myResult++;
    } 
    
    else {
        resultElement.innerHTML = 'Você perdeu';
        alexaResult++;
    }

    myResultElement.innerHTML = `${myResult}`;
    alexaResultElement.innerHTML = `${alexaResult}`;
};

rock.addEventListener('click', () => {
    playGame('rock');
});

paper.addEventListener('click', () => {
    playGame('paper');
});

scissors.addEventListener('click', () => {
    playGame('scissors');
});