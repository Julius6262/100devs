// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let val = "hello there?"

if (val.endsWith("?")){
    alert("is question")

}


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = "hello there my jr. dev"

if(words.includes('jr. dev')){
    words = words.replaceAll("jr. dev", "software engineer")
}
console.log(words)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissor = () => {
    let min = 1
    let max = 3.99
    let random = Math.random() * (max - min) + min;
    if (random > 1 && random < 2){
        return "rock"
    }
    else if (random > 2 && random < 3){
        return "paper"
    }
    return "scissors"
}

console.log(rockPaperScissor())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they 
//won a game of rock paper scissors against a bot using the above function

const winOrLose = (player, bot) =>{
    if (player === "rock" && bot ==="scissors"){
        console.log("player wins with rock over scissors")
    }
    else if (player === "paper" && bot ==="rock"){
        console.log("player wins with paper over rock")
    }
    else if (player === "scissors" && bot ==="paper"){
        console.log("player wins with scissors over paper")
    }
    else if (player === bot){
        console.log("tied")
    }
    else{
        console.log("bot wins")
    }
}

winOrLose("paper",rockPaperScissor())

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the 
//number of choices in the array. Print the results of each game to the console.
let exAr = ['rock', 'paper', 'scissors','paper','paper']

const func = (ar) => {
    for (let i = 0; i < ar.length; i++){
        console.log(winOrLose(ar[i],rockPaperScissor()))
    }
}

func(exAr)