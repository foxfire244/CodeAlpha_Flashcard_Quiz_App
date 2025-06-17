
const flashcards = [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
    { question: "What is the capital of France?", answer: "Paris" }
];

let currentIndex = 0;

const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const showAnswerBtn = document.getElementById("show-answer");
const nextBtn = document.getElementById("next");

function loadQuestion() {
    const card = flashcards[currentIndex];
    questionDiv.textContent = card.question;
    answerDiv.textContent = card.answer;
    answerDiv.classList.add("hidden");
}

showAnswerBtn.addEventListener("click", () => {
    answerDiv.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadQuestion();
});

loadQuestion();
