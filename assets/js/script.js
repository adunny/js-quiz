var startQuizEl = document.querySelector("#start");
var startButtonEl = document.querySelector("#start-button");
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

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

var time = 20;
var intervalId;
var divIds = ['timer', 'question', 'option-list', 'question-result'];


startButtonEl.onclick = function() {
  startQuizEl.remove();
  generateQuestion();
}

function generateQuestion() {
  var body = document.body;
  var questionDiv = document.createElement("div");
  var optionList = document.createElement("ul")
  var questionResultDiv = document.createElement("div")

  questionDiv.setAttribute("id", "question");
  questionDiv.textContent = questions[questionIndex].question;
  optionList.setAttribute("id", "option-list")
  
  


  body.appendChild(questionDiv);
  body.appendChild(optionList);

 

  // for (i=0; i < divIds.length; i++) {
  //   var d = document.createElement('div');
  //   d.setAttribute('id', divIds[i]);
  //   body.appendChild(d);
  // }
  
}
