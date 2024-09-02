let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#user-score");
const oppScore = document.querySelector("#comp-score");

const genComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rndIndx = Math.floor(Math.random() * 3);
  return options[rndIndx];
};
const draw = () => {
  msg.innerText = " The game is Draw";
  console.log("game draw");
};
const showWinner = (useWin, userChoice, comchoice) => {
  if (useWin) {
    userScore++;
    yourScore.innerText = userScore;
   
    msg.innerText = ` You Win! Your ${userChoice} beats ${comchoice}`;
    msg.style.backgroundColor = "#385E3C";
  } else {
    
    msg.innerText = `You Lose!  ${comchoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "#C40233";
    comScore++;
    oppScore.innerText = comScore;
  }
};
const playGame = (userChoice) => {
  
  const comchoice = genComChoice();
  

  if (userChoice === comchoice) {
    draw();
  } else {
    let useWin = true;
    if (userChoice === "rock") {
      useWin = comchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      useWin = comchoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      useWin = comchoice === "rock" ? false : true;
    }
    showWinner(useWin, userChoice, comchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("userChoice is",userChoice)
    playGame(userChoice);
  });
});
