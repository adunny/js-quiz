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
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "Which of the following is an event listener in JavaScript?",
    choices: ["onclick", "blur", "click", "Click()"],
    answer: "click",
  },
  {
    question: "Which function is used to parse a string to an int?",
    choices: ["integer.parse", "int.parse", "parse.int", "none of the above"],
    answer: "int.parse",
  },
];


var questionItem = document.createElement("div");
var optionList = document.createElement("ul");
var questionResultItem = document.createElement("div");
var timerItem = document.createElement("div");
var highscoreList = document.createElement("ul");
var body = document.body;
var endquizEl = document.createElement("div")
var hsButtonEl = document.createElement("button")
var restartButtonEl = document.createElement("button")
hsButtonEl.textContent = "View Highscore"
restartButtonEl.textContent = "Restart Test"

var questionIndex = 0;
var correctCount = 0;

var time = 30;
var intervalId;



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
  var highscoreListItem = document.createElement("li");
  var savedScore = localStorage.getItem("score");
  savedScore = JSON.parse(savedScore);
  console.log(savedScore);
  highscoreListItem.textContent = "Initials: " + savedScore.initials + "  Score: " + savedScore.score;
  highscoreList.appendChild(highscoreListItem);
  body.appendChild(highscoreList);

}



function endQuiz() {
  clearInterval(intervalId)
  questionItem.remove();
  optionList.remove();
  questionResultItem.remove();
  timerItem.remove();
  renderResults();
  document.querySelector("form").addEventListener("submit", storeData)
};

function storeData(event){
  event.preventDefault();
  var inputEl = document.querySelector("input");
  var highscoreObj = {
    initials: inputEl.value,
    score: correctCount
  }
console.log(highscoreObj);
  
  localStorage.setItem("score", JSON.stringify(highscoreObj));
}
function renderResults() {
  var resultHtml = `
    <div>
      <h3>Game over! Your score is: ${correctCount}</h3>
      <form>
        <label>Enter Initials</label>
        <input type="text" />
        <button id="submit-btn">Submit</button>
      </form>
    </div>
  `
  body.innerHTML = resultHtml;
  
}

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