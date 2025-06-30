const questions = [
    {
        question: "what is my country name?",
        answers: [
            { text: "Pakistan", correct: true },
            { text: "Saudi", correct: false },
            { text: "iran", correct: false },
            { text: "Qatar", correct: false },

        ]
    },
    {
        question: "What is the currency of Pakistan",
        answers: [
            { text: "Riyal", correct: false },
            { text: "Dollar", correct: false },
            { text: "Rupee", correct: true },
            { text: "Dinar", correct: false },

        ]
    },
    {
        question: "Which Is National Animal of Pakistan?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Markhor", correct: true },
            { text: "Elephant", correct: false },
            { text: "Mouse", correct: false },

        ]
    },
    {
        question: "Who is the founder of Pakistan?",
        answers: [
            { text: "Molana Muhammad Ali Johar", correct: false },
            { text: "Allama Iqbal", correct: false },
            { text: "Liaqat Ali Khan", correct: false },
            { text: "M.A Jinnah", correct: true },

        ]
    },
];
const question = document.querySelector(".Question");
const button = document.querySelector(".answers");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

};

function showQuestion() {
    setState();
    let currenQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ". " + currenQuestion.question;
    currenQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        button.appendChild(btn);
        if (answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click",selectOption );
    })
}
function setState(){
    nextButton.style.display= "none";
    button.innerHTML= "";
}
function selectOption(a){
    const selectedBtn = a.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        currentScore++;
    }
    else{
        selectedBtn.classList.add("wrong")
    }
    Array.from(button.children).forEach(btn=>{
        if (btn.dataset.correct === "true"){
            btn.classList.add("correct");
        }
        btn.disabled= true;
    })
    nextButton.style.display= "block";

}
  function  showResult()  {
        setState();
        question.innerHTML = `You scored ${currentScore} out of ${questions.length} !`
        nextButton.style.display = "block"
        nextButton.innerHTML = "Play Again"
    }

function handleNextBtn(){
 currentQuestionIndex++;
 if (currentQuestionIndex<questions.length){
    showQuestion();
 }
 else{
    showResult();
 }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
       handleNextBtn();
    }
    else{
    startQuiz();
    }
})
startQuiz();