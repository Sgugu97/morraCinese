let humanScore = 0;
let computerScore = 0;


let container = document.createElement("div");
document.body.appendChild(container);

const rock = document.createElement("button");
rock.textContent= "ROCK";
container.appendChild(rock);
let humanSelection = "";

const paper = document.createElement("button");
paper.textContent= "PAPER";
container.appendChild(paper);

const scissor = document.createElement("button");
scissor.textContent= "SCISSOR";
container.appendChild(scissor);


const plays = document.createElement("h4");
container.appendChild(plays);

const scores = document.createElement("h2");
container.appendChild(scores);

const winner = document.createElement("h1");
container.appendChild(winner);



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
   rock.addEventListener("click", ()=>{
      humanSelection = "rock";
      playGame();
   });

   paper.addEventListener("click", ()=>{
      humanSelection = "paper";
      playGame();
   });
   
   scissor.addEventListener("click", ()=>{
      humanSelection = "scissor";
      playGame();
   });
}


function playGame(){
   function playRound(humanCoice, computerChoice){
      if ((humanSelection === "paper" && computerSelection === "rock")||(humanSelection === "scissor" && computerSelection ==="paper")||(humanSelection === "rock" && computerSelection === "scissor")) {
         humanScore = humanScore + 1;
         return humanScore
      } else if (humanSelection === computerSelection){
         return humanScore, computerScore;
      } else {
         computerScore = computerScore + 1;
         return computerScore;
      }
   }
   const computerSelection = getComputerChoice();
   
   playRound(humanSelection, computerSelection);

   scores.textContent = "Human score:" + `${humanScore}` + ".    Computer score:" + `${computerScore}`;

   plays.textContent = "Human choice:" + `${humanSelection}` + ".    Computer score:" + `${computerSelection}`;


   if(humanScore>=5){
      winner.textContent = "You Win!!";
   } else if(computerScore >= 5){
      winner.textContent = "You Lose.";
   } else if(humanScore === 5 && computerScore === 5){
      winner.textContent = "It's a Tie!!";
   }
}


getHumanChoice();











// let container = document.createElement("div");
//         document.body.appendChild(container)

//         const rock = document.createElement("button");
//         rock.setAttribute("id", "rock");
//         rock.textContent = "ROCK";
//         container.appendChild(rock);

//         const paper = document.createElement("button");
//         paper.setAttribute("id", "paper");
//         paper.textContent = "PAPER";
//         container.appendChild(paper);

//         const scissor = document.createElement("button");
//         scissor.setAttribute("id", "scissor");
//         scissor.textContent = "SCISSOR";
//         container.appendChild(scissor);

//         function getHumanChoice(){
//             container.addEventListener("click", (event)=> {
//                 let target = event.target;
//                 switch(target.id){
//                     case "rock":
//                         return(`${target.id}`);
//                         break;
//                     case "paper":
//                         return(`${target.id}`);
//                         break;
//                     case "scissor":
//                         return(`${target.id}`);
//                         break;
//                     }
//         })
//         };