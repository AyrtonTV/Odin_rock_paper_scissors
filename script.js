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

//Se juega una ronda de 5
function game(){
    for(i = 0; i < 5; i++){
        let playRound5 = playRound();
        if(playRound5 === 1){
            console.log(`Felicidades, ${user}! ${playerSelection} le gana a ${computerSelection}. Has ganado un punto.`);
            playerScore += 1;
            console.log(`Marcador: ${user}: ${playerScore}
            Computadora: ${computerScore}`);
        }
        else if(playRound5 === 2){
            console.log(`Lo siento, ${user}! ${computerSelection} le gana a ${playerSelection}. Computadora gana un punto.`);
            computerScore += 1;
            console.log(`Marcador: ${user}: ${playerScore}
            Computadora: ${computerScore}`);
        }
        else if(playRound5 === 3){
            console.log(`Es un empate, ambos eligieron ${playerSelection}. Nadie gana puntos.`);
            console.log(`Marcador: ${user}: ${playerScore}
            Computadora: ${computerScore}`);
        }
    }
    console.log(`
    ******************************
    
            Marcador final      
            ${user}: ${playerScore}      
            Computadora: ${computerScore}     
                             
    ******************************
                                                        `);
    if(playerScore === computerScore){
        console.log(`Es un empate, ambos obtuvieron ${playerScore}`);
    }
    else if(playerScore > computerScore){
        console.log(`Felicidades, ${user}!, has ganado la partida!`);
    }
    else{
        console.log(`Lo siento, ${user}, la Computadora te ha ganado`);
    }
}

game();