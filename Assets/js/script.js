// display highscores
let highScoreList = localStorage.getItem("highScoreList");
let displayScore = document.querySelector(".view-score");



// clicking highscore button
displayScore.addEventListener("click", highScorePage);

function highScorePage () {

}


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
        timeEl.innerHTML = `${secondsLeft} seconds left`;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            timeEl.innerHTML = "OUT OF TIME";
        }
    }, 1000);
}


// start quiz
let startButton = document.querySelector("#ui-button");
let questionText = document.querySelector("#ui-text");
let questionChoices = document.querySelector("#ui-choices");
let qChoice1 = document.querySelector("#qChoice1");
let qChoice2 = document.querySelector("#qChoice2");
let qChoice3 = document.querySelector("#qChoce3");
let qChoice4 = document.querySelector("#qChoce4");

function codeQuiz () {
    countDown();
    let questionsCorrect = 0;
    
    startButton.style.visibility = "hidden";

    while ((secondsLeft !== 0) && (i < questionBank.length)) {
        let i = 0;
        questionText.innerHTML = questionBank[i].text
        qChoice1 = questionBank[i].choice1
        qChoice2 = questionBank[i].choice2
        qChoice3 = questionBank[i].choice3
        qChoice4 = questionBank[i].choice4

        questionChoices.children.style.visibility = "visible";


    }
    

    if (event.currentTarget === questionBank[i].correctAnswer) {

    }

}


// eventlistener for quiz
startButton.addEventListener("click", codeQuiz);