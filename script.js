// Se obtiene la información del user
const user = prompt("¿Cuál es tu nombre?");
let playerSelection = "";
let computerSelection = "";

function playerChoice(){
    let opcion = prompt("Escoge: Piedra, Papel o Tijeras");
    return opcion.toLowerCase();
}

function getComputerChoice(){
    const options = ["piedra", "papel", "tijeras"];
    return options[Math.floor(Math.random() * options.length)];
}

// Se juega una ronda
function playRound(){
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection == "piedra" && computerSelection == "tijeras"
    || playerSelection == "papel" && computerSelection == "piedra"
    || playerSelection == "tijeras" && computerSelection == "papel"){
        return 1;
        // console.log(`Felicidades, ${user}! ${playerSelection} le gana a ${computerSelection}`);
    } else if(computerSelection == "piedra" && playerSelection == "tijeras"
    || computerSelection == "papel" && playerSelection == "piedra"
    || computerSelection == "tijeras" && playerSelection == "papel"){
        return 2;
        // console.log(`Lo siento, ${user}! ${computerSelection} le gana a ${playerSelection}`);
    } else{
        return 3;
        // console.log(`Es un empate, ambos eligieron ${playerSelection}`);
    }
}

let playerScore = 0;
let computerScore = 0;

