// Questions bank
let question1 = {
    text: "What is Git interested in tracking?",
    choice1: "Files",
    choice2: "Folders",
    choice3: "Changes",
    choice4: "Itself",
    correctAnswer: "Changes",
}

let question2 = {
    text: "In Javascript, how do we declare a variable?",
    choice1: "DECLARE { @LOCAL_VARIABLE data_type [ = value ] }",
    choice2: "variable myVar = value",
    choice3: "var myVar = value",
    choice4: "set value to myVar",
    correctAnswer: "var myVar = value",
}

let question3 = {
    text: "In CSS, which property is responsible for the orientation of flex items in the flexbox model?",
    choice1: "display",
    choice2: "flex-wrap",
    choice3: "flex-direction",
    choice4: "justify-content",
    correctAnswer: "flex-direction",
}

let question4 = {
    text: "In Javascript, which of the following prevents the default behavior of events?",
    choice1: "event.stopPropagation()",
    choice2: "event.preventdefault",
    choice3: "event.preventDefault()",
    choice4: "preventDefault(event)",
    correctAnswer: "event.preventDefault()",
}

let question5 = {
    text: "What were we not allowed to use on this assignment that would have made it easier?",
    choice1: "the internet",
    choice2: "JSON",
    choice3: "jQuery",
    choice4: "AJAX",
    correctAnswer: "jQuery",
}

let questionBank = [question1, question2, question3, question4, question5]

// timer
let timeEl = document.querySelector(".timer");
let secondsLeft = 90;

function countDown() {
    let timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = `${secondsLeft} seconds left`;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            timeEl.textContent = "OUT OF TIME";
        }
    }, 1000);
}

// start quiz
let startButton = document.querySelector("#ui-button");
let questionText = document.querySelector("#ui-text");
let questionChoicesBody = document.querySelector("ul")
let questionChoices = document.querySelectorAll(".ui-choices");
let qChoice1 = document.querySelector("#qChoice1");
let qChoice2 = document.querySelector("#qChoice2");
let qChoice3 = document.querySelector("#qChoice3");
let qChoice4 = document.querySelector("#qChoice4");

function codeQuiz () {
    countDown();
    let questionsCorrect = 0;
    let i = 0
    startButton.style.visibility = "hidden";

    function populateQuestion() {
        questionText.textContent = questionBank[i].text
        qChoice1.textContent = questionBank[i].choice1
        qChoice2.textContent = questionBank[i].choice2
        qChoice3.textContent = questionBank[i].choice3
        qChoice4.textContent = questionBank[i].choice4
    }

    populateQuestion();

    for (let x = 0; x < questionChoices.length; x++) {
        questionChoices[x].style.display = "list-item";
    }

    questionChoicesBody.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log(event.target)
        if (event.target.textContent === questionBank[i].correctAnswer) {
            // event.target.classList.add("correct");
            // event.target.textContent = "CORRECT!";
            questionsCorrect++
            i++
            populateQuestion();
        } 
        else {
            // event.target.classList.add("wrong");
            // event.target.textContent = "Wrong!";
            secondsLeft = secondsLeft - 10;
            i++
            populateQuestion();
        }
    });

    if (i === questionBank.length) {
        for (let x = 0; x < questionChoices.length; x++) {
            questionChoices[x].style.display = "none";
        }
        // create heading and append to p
        questionText.textContent = "ALL DONE!"

    }
}

// eventlistener for quiz
startButton.addEventListener("click", codeQuiz);

// display highscores
let highScoreList = localStorage.getItem("highScoreList");
let displayScore = document.querySelector(".view-score");



// clicking highscore button
displayScore.addEventListener("click", highScorePage);

function highScorePage () {

}
