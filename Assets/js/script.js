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

// html elements
let bannerHead = document.querySelector("#ui-heading");
let startButton = document.querySelector("#ui-button");
let questionText = document.querySelector("#ui-text");
let questionChoicesBody = document.querySelector("ul")
let questionChoices = document.querySelectorAll(".ui-choices");
let qChoice1 = document.querySelector("#qChoice1");
let qChoice2 = document.querySelector("#qChoice2");
let qChoice3 = document.querySelector("#qChoice3");
let qChoice4 = document.querySelector("#qChoice4");
// form elements
let uiForm = document.querySelector("#ui-form");
let playerInitials = document.querySelector("#playerInitials");
let sumbitButton = document.querySelector("#sumbitInitials");
// display highscores
let highScoreList = localStorage.getItem("highScoreList");
let displayScore = document.querySelector(".view-score");

// quiz
function codeQuiz () {
    // timer
    let timeEl = document.querySelector(".timer");
    let secondsLeft = 90;

    function countDown() {
        let timeInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = `${secondsLeft} seconds left`;

            if ((secondsLeft === 0) || (i === questionBank.length)) {
                clearInterval(timeInterval);
                timeEl.textContent = "TIME'S UP!";
            }
        }, 1000);
    }
    

    // quiz logic
    let questionsCorrect = 0;
    let i = 0
    countDown();
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

    function codeEndScreen() {
        if (i === questionBank.length) {
            for (let x = 0; x < questionChoices.length; x++) {
                questionChoices[x].style.display = "none";
            }

            let largeText = document.createElement("h2")
            questionText.textContent = "Congrats! ALL DONE!"
            largeText.textContent = "Record your score below!"
            questionText.append(largeText);

            uiForm.style.visibility = "visible";
        }
    }

    questionChoicesBody.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log(event.target)
        if (event.target.textContent === questionBank[i].correctAnswer) {
            questionsCorrect++
            if (i < (questionBank.length - 1)) {
                i++
                populateQuestion();
            }
            else {
                i++
                codeEndScreen()
            }
        }

        else {
            secondsLeft = secondsLeft - 10;
            if (i < (questionBank.length - 1)) {
                i++
                populateQuestion();
            }
            else {
                i++     
                codeEndScreen()
            }
        }
    });

    // eventlistener for clicking sumbit high score button
    sumbitButton.addEventListener("click", function(event) {
        event.preventDefault();

        uiForm.style.display = "none";

        // consolidate scores
        let  highScoreEntry = {
            initials: playerInitials.value,
            timeLeft: secondsLeft,
            answerRatio: `${questionsCorrect} out 5`,
        }
        
        localStorage.setItem("highScoreList", JSON.stringify(highScoreEntry));
        highScorePage()
    });
}

// highscore page
function highScorePage () {
    bannerHead.textContent = "High Score Page";

    lastHighScore = JSON.parse(localStorage.getItem("highScoreList"))

    // scoreEl = document.createElement("")
    questionText.innerHTML = `<b>Last time:</b> ${lastHighScore.initials} got ${lastHighScore.answerRatio} with ${lastHighScore.timeLeft} seconds left.`
}

// eventlistener for clicking highscore page button
displayScore.addEventListener("click", highScorePage);

// eventlistener for quiz start
startButton.addEventListener("click", codeQuiz);