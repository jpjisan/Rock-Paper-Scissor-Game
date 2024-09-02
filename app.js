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
    console.log("you win!");
    msg.innerText = `you Win! Your ${userChoice} beats ${comchoice}`;
    msg.style.backgroundColor = "#385E3C";
  } else {
    console.log("you lost");
    msg.innerText = `you lose!  ${comchoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "#C40233";
    comScore++;
    oppScore.innerText = comScore;
  }
};
const playGame = (userChoice) => {
  console.log("userChoice is", userChoice);
  const comchoice = genComChoice();
  console.log("comp choice is", comchoice);

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
