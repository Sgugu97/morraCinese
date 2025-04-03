let humanScore = 0;
let computerScore = 0;

 function getComputerChoice(){
    let i = Math.random()*100;
    if (i <= 33){
      return "rock"
    } else if(i>33 , i<=66){
      return "paper"
    } else {
      return "scissor"
    };
 }

function getHumanChoice(){
   let sign = prompt("What's your choice?");
   return sign.toLowerCase();
}


function playGame(){
   function playRound(humanCoice, computerChoice){
      if ((humanSelection === "paper" && computerSelection === "rock")||(humanSelection === "scissor" && computerSelection ==="paper")||(humanSelection === "rock" && computerSelection === "scissor")) {
         humanScore = humanScore + 1;
         return humanScore
      } else if (humanSelection === computerSelection){
         humanScore = humanScore +1;
         computerScore = computerScore + 1;
         return humanScore, computerScore;
      } else {
         return computerScore = computerScore + 1;
         return computerScore;
      }
   }
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   
   playRound(humanSelection, computerSelection);
   console.log(humanSelection);
   console.log(computerSelection);
   console.log("Human = " + humanScore);
   console.log("Computer = " + computerScore);
   
   if (humanScore <= 4 && computerScore <= 4){
      playGame();
   } else if (humanScore === 5){
      console.log("--You Win--")
   }
   else if(computerScore === 5){
      console.log("--You Lose--")
   } 
}
playGame();