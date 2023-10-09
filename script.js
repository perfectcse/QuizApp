const qustions = [
    {
        question: "Which type of JavaScript language is",
        answers: [
            { text: "Object-Oriented", correct: false },
            { text: "Object-Based", correct: true },
            { text: "Assembly-language", correct: false },
            { text: "High-level", correct: false },
        ]
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { text: "Global variable", correct: false },
            { text: "The local element", correct: true },
            { text: "The two of the above", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "In JavaScript, what will be used for calling the function definition expression:",
        answers: [
            { text: "Functional prototype", correct: false },
            { text: "Functional literal", correct: true },
            { text: "Function calling ", correct: false },
            { text: "Function Declaration ", correct: false },
        ]
    },
    {
        question: " HTML stands for ",
        answers: [
            { text: "HighText Machine Language", correct: false },
            { text: "HyperText and links Markup Language", correct: false },
            { text: "HyperText Markup Language ", correct: true },
            { text: "None of these ", correct: false },
        ]
    },
    {
        question: " What is a state in React?",
        answers: [
            { text: "A permanent storage.", correct: false },
            { text: "Internal storage of the component", correct: false },
            { text: "External storage of the component", correct: true },
            { text: "None of the above.", correct: false },
        ]
    },
];

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = qustions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
} function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            score++;
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = 'you scored 4{score} out of 4{qustions.length}!';
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextbutton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < qustions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < qustions.length) {
        handleNextbutton();
    } else {
        startQuiz();
    }
});
startQuiz();