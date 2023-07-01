const user = prompt("¿Cuál es tu nombre?");
let playerSelection = prompt("Escoge: Piedra, Papel o Tijeras");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

console.log(playerSelection);

function getComputerChoice(){
    const options = ["piedra", "papel", "tijeras"];
    return options[Math.floor(Math.random() * options.length)];
}
console.log(computerSelection);

function playRound(playerSelection, computerSelection){
    if(playerSelection == "piedra" && computerSelection == "tijeras"
    || playerSelection == "papel" && computerSelection == "piedra"
    || playerSelection == "tijeras" && computerSelection == "papel"){
        console.log(`Felicidades, ${user}! ${playerSelection} le gana a ${computerSelection}`);
    } else if(computerSelection == "piedra" && playerSelection == "tijeras"
    || computerSelection == "papel" && playerSelection == "piedra"
    || computerSelection == "tijeras" && playerSelection == "papel"){
        console.log(`Lo siento, ${user}! ${computerSelection} le gana a ${playerSelection}`);
    } else{
        console.log(`Es un empate, ambos eligieron ${playerSelection}`);
    }
}

playRound(playerSelection, computerSelection);