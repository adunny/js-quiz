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
  var questionItem = document.createElement("div");
  var optionList = document.createElement("ul")
  var questionResultItem = document.createElement("div")

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

}

function checkAnswer(event) {
  if (event.target.matches("li")) {
    
  }
}
