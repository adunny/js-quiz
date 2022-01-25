var startQuizEl = document.querySelector("#start");
var startButtonEl = document.querySelector("#start-button");
var highscoreEl = document.querySelector("#highscore")
var highscoreBtnEl = document.querySelector("#highscore-btn")
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];


var questionItem = document.createElement("div");
var optionList = document.createElement("ul");
var questionResultItem = document.createElement("div");
var timerItem = document.createElement("div");
var highscoreList = document.createElement("ul");
var body = document.body;

var questionIndex = 0;
var correctCount = 0;

var time = 20;
var intervalId;
var divIds = ['timer', 'question', 'option-list', 'question-result'];


startButtonEl.onclick = function() {
  startQuizEl.remove();
  highscoreEl.remove();
  generateQuestion();
};


highscoreBtnEl.onclick = function() {
  startQuizEl.remove();
  highscoreEl.remove();
  highscorePage();

};

function highscorePage() {
 var highscoreListItem = document.createElement("li")

 highscoreListItem.textcontent = "";
 highscoreList.appendChild(highscoreListItem);
 body.appendChild(highscoreList);

}


function endQuiz() {
  clearInterval(intervalId)
  body.innerHTML = "Game over! Your score is: " + correctCount;
};

function updateTimer() {
  body.appendChild(timerItem);
  time--;
  timerItem.textContent = time;
  if(time <= 0) {
    endQuiz();
  }
};

function generateQuestion() {
  if (time == 0) {
    updateTimer();
    return;
  }

  intervalId = setInterval(updateTimer, 1000);
  
  questionItem.setAttribute("id", "question");
  questionItem.textContent = questions[questionIndex].question;
  optionList.setAttribute("id", "option-list");
  optionList.textContent = "";
  questionResultItem.setAttribute("id", "question-result");
  questionResultItem.textcontent = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionList.appendChild(questionListItem);
  }

  body.appendChild(questionItem);
  body.appendChild(optionList);
  body.appendChild(questionResultItem);

};

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length){
    time = 0;
  }
  generateQuestion();

};

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent
    if (answer === questions[questionIndex].answer) {
      questionResultItem.textContent = "Correct!";
      correctCount++;
    }
    else{
      questionResultItem.textContent = "Incorrect!";
      time = time - 3;
      timerItem.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
};

optionList.addEventListener("click", checkAnswer);