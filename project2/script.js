// Store the questions and answers in an array of objects in your JS file.

// Display questions like this (design doesn’t matter)

// Don’t let the user submit unless an option is selected.

// When all the questions are answered, the score is displayed and a
// button to let the user reload and start from beginning. Google up how to
// reload a page in JS if needed.
// Or come up with your own solution.


// Score

let score = 0
let currentQuestion = 0

// Questions

const questions = [
    
    // question #1
    {
    question: "When is Wolfy's Birthday?",
    options: ["6/7", "7/18", "10/28", "Who is that again?"],
    answer: "10/28"
    },

    // question #2
    {
    question: "Which keyboard switch type is the quietest?",
    options: ["red", "brown", "blue", "yellow"],
    answer: "red"
    },

    // question #3
    {
    question: "How many states are in the U.S.A.?",
    options: ["67", "10", "48", "50"],
    answer: "50"
    },

    // question #4
    {
    question: "What Persona does Joker use?",
    options: ["Orpheus", "Arsen", "Izanagi", "Jack Frost"],
    answer: "Arsen"
    },

    // question #5
    {
    question: "What year did the original Donkey Kong release in arcades?",
    options: ["1994", "1981", "1985", "1992"],
    answer: "1981"
    },

    // question #6
    {
    question: "How many book are in the Bible?",
    options: ["66", "55", "44", "33"],
    answer: "66"
    },

    // question #7
    {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Ag", "Au"],
    answer: "Au"
    },

    // question #8
    {
    question: "What is the most popular crypto currenency?",
    options: ["BitCoin", "Etherium", "DogeCoin", "LitCoin"],
    answer: "BitCoin"
    },

    // question #9
    {
    question: "What does CTC stand for?",
    options: ["Critical Tech Corporation", "Career & Tech Center", "Corporate Tax Credit", "Crackers & Truffle Cheese"],
    answer: "Career & Tech Center"
    },

    // question #10
    {
    question: "Who makes iPhone products?",
    options: ["LG", "Samsung", "Google", "Apple"],
    answer: "Apple"
    },

];


// Show next question function

const answers = document.getElementsByClassName("answer");
const question = document.getElementById("questionTitle");
const Visablescore = document.getElementById("score")

function showNextQuestion(){
    
    question.innerText = questions[currentQuestion].question;

    for(let i = 0; i < answers.length; i++){
        
        answers[i].innerText = questions[currentQuestion].options[i];

    }
    
    currentQuestion++
}

function onAnsweredClicked(value){
    console.log(questions[currentQuestion].options[value]);
    console.log(questions[currentQuestion].answer)
    // Check if this answer is correct
    if(questions[currentQuestion].options[value] === questions[currentQuestion].answer){
        score++
        Visablescore.innerText = score
    }

}


function startGame(){
    
}


function onSubmitClicked(){

}


function endOfGame(){

}


// Set initial variables

question.innerText = questions[currentQuestion].question;

for(let i = 0; i < answers.length; i++){
    
    answers[i].innerText = questions[currentQuestion].options[i];

}

