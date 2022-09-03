var readlineSync = require("readline-sync");

var score = 0

var userName = readlineSync.question("what is tour name? ");

console.log("welcome " + userName + " to the game !");

// data of high score
var highscore = [
  {
    name: "sammmed",
    score: 3
  },
  {
    name: "akanksha",
    score: 2
  }
];

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!")
    score = score + 1;
  }
  else {
    console.log("wrong!")
  }
  console.log("Your score is: " + score)
  console.log("--------------")
}

var questions = [{
  question: "Where Do I live? ",
  answer: "sangli"
}, {
  question: "Who is my favourite superhero? ",
  answer: "spiderman"
}, {
  question: "Where do I work? ",
  answer: "tcs"
}, {
  question: "which technology I love? ",
  answer: "web development"
}, {
  question: "which is my favourite sport? ",
  answer: "cricket"
}];

// loop

for (i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("Yay! you scored " + score);

console.log("checkout high Scores: ")

for (i = 0; i < highscore.length; i++) {
  console.log(highscore[i].name, highscore[i].score)
}
console.log("If you have beaten this please ping me and I will update it.")