const user = prompt("¿Cuál es tu nombre?");

function playerChoice(){
    let opcion = prompt("Escoge: Piedra, Papel o Tijeras");
    return opcion.toLowerCase();
}

function getComputerChoice(){
    const options = ["piedra", "papel", "tijeras"];
    return options[Math.floor(Math.random() * options.length)];
}

//console.log(playerSelection);
//console.log(computerSelection);

function playRound(){
    let playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    
    console.log(playerSelection);
    console.log(computerSelection);

    if(playerSelection == "piedra" && computerSelection == "tijeras"
    || playerSelection == "papel" && computerSelection == "piedra"
    || playerSelection == "tijeras" && computerSelection == "papel"){
        return `Felicidades, ${user}! ${playerSelection} le gana a ${computerSelection}`;
    } else if(computerSelection == "piedra" && playerSelection == "tijeras"
    || computerSelection == "papel" && playerSelection == "piedra"
    || computerSelection == "tijeras" && playerSelection == "papel"){
        return `Lo siento, ${user}! ${computerSelection} le gana a ${playerSelection}`;
    } else{
        return `Es un empate, ambos eligieron ${playerSelection}`;
    }
}

console.log(playRound());