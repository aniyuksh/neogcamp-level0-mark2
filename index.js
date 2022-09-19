var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question("Namaste, whats ur name?? ");
console.log("Welcome " + userName + " ,so this is a general gameplay, your score will be calculated on the basis of right answer choices made by you \n");
var score = 0;

function game(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log(chalk.green("Congrats, you chose the right option \n"));
  }
  else {
    score = score - 1;
    console.log(chalk.red("OOPPPPSSSSS!!! You've made wrong choice \n"));
  }
}

var arrayOfQuestions = [
  {
    question: "1. Which day comes after Friday?? ",
    answer: "Saturday",
  },
  {
    question: "2. Where does a pig live? ",
    answer: "Sty",
  },
  {
    question: "3. Which animal is known as the ‘Ship of the Desert? ",
    answer: "Camel",
  },
  {
    question: "4. Which planet is known as the Red Planet? ",
    answer: "Mars",
  },
  {
    question: "5. We smell with our _______? ",
    answer: "Nose",
  },
  {
    question: "6. Sun rises in the ??? ",
    answer: "East",
  },
  {
    question: "7. Largest planet in our Solar System ? ",
    answer: "Jupiter",
  },
];

function play() {
  for (var i = 0; i < arrayOfQuestions.length; i++) {
    game(arrayOfQuestions[i].question, arrayOfQuestions[i].answer);
  }
}

play();
console.log("HURRRAYYYYYYY, you got " + score + " as score points");
