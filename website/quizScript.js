const questions = [
    {
        question: "Who composed Matthew Passion?",
        answers: [
                {text: "Mozart", correct:false},
                {text: "Bach", correct:true},
                {text: "Debussy", correct:false},
                {text: "Beethoven", correct:false},
        ]
    },
    {
        question: "Which rapper have the most grammys?",
        answers: [
                {text: "Kanye", correct:false},
                {text: "Jay-z", correct:false},
                {text: "Kendrick Lamar", correct:false},
                {text: "Kanye & Jay-z", correct:true},
        ]
    },
    {
        question: "How long does the song \'You suffer\' by Napalm Death lasts?",
        answers: [
                {text: "48 sec", correct:false},
                {text: "32 sec", correct:false},
                {text: "8 sec", correct:false},
                {text: "3 sec", correct:true},
        ]
    },
    {
        question: "Which album released first?",
        answers: [
                {text: "Revolver by The Beatles", correct:true},
                {text: "In the Court of the King Crimson by King Crimson", correct:false},
                {text: "Paranoid by Black Sabbath", correct:false},
                {text: "Ummagumma by Pink Floyd", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const netxButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    netxButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    netxButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    netxButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    netxButton.innerHTML = "Play Again!";
    netxButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
netxButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();