var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);

var rps = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    if(choice1 === "rock"){
        
        if(choice2 === "scissors"){
            return "rock wins";
        };
        return "paper wins";
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins";
        }
        return "scissors win";
    }
    else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            return "rock wins";
        }
        return "scissors wins";
    }
};

rps(userChoice, computerChoice);
