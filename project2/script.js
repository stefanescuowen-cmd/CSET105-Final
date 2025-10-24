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
let lastAnswerRight = false;

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
    question: "What is the most popular crypto currency?",
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
    
    typeWriter(question, questions[currentQuestion].question);

    // Create shuffled copy of answers
    let shuffled = shuffle(questions[currentQuestion].options);

    for(let i = 0; i < answers.length; i++){
        answers[i].innerText = shuffled[i];
        answers[i].classList.remove("fade-in");

        answers[i].onclick = function() {
            onAnsweredClicked(shuffled[i]);
        }

        setTimeout(() => {
            answers[i].classList.add("fade-in");
        }, i * 150);

    }
}

// Shuffle order of answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function onAnsweredClicked(selectedText){
    // Check if this answer is correct
    if(selectedText === questions[currentQuestion].answer){
        score++
        lastAnswerRight = true;
    }
    else
    {
        lastAnswerRight = false;
    }

    typeWriter(Visablescore, `Score: ${score}`);
    
    onSubmitClicked()
}


function startGame(){
    // Hide the start button and show the game
    document.getElementById("startBlock").style.display = "none";
    document.getElementById("questionBlock").style.display = "block"
    document.getElementById("nextQuestionBlock").style.display = "none";

    typeWriter(question, questions[currentQuestion].question);
    
    // Fill in squares first time
    let shuffled = shuffle(questions[currentQuestion].options);

    for(let i = 0; i < answers.length; i++){
        
        answers[i].innerText = shuffled[i];
        answers[i].classList.remove("fade-in");
        answers[i].onclick = function() {
            onAnsweredClicked(shuffled[i]);
        }

        setTimeout(() => {
            answers[i].classList.add("fade-in");
        }, i * 150);

    }
}


async function onSubmitClicked(){

    // Show next question block
    document.getElementById("startBlock").style.display = "none";
    document.getElementById("questionBlock").style.display = "none"
    document.getElementById("nextQuestionBlock").style.display = "flex";

    console.log(currentQuestion)
    console.log(questions.length)
    
    currentQuestion++


    // Display incorrect or correct
    if(currentQuestion === questions.length)
    {
        typeWriter(document.getElementById("correctness"), "You finally made it...");
        typeWriter(Visablescore, `Score: ${score}/${questions.length}`);
        document.getElementById("restartButton").style.display = "block";
    }

    else if (lastAnswerRight === true)
    {
        typeWriter(document.getElementById("correctness"), "Hmm. Seems you got that one.");
    }

    else{
        typeWriter(document.getElementById("correctness"), "WRONG! Guess I'll give you another chance...");
    }

    
    //wait to proceed to next question
    await sleep(3000);
    showNextQuestion()

    //show questions again
    document.getElementById("startBlock").style.display = "none";
    document.getElementById("questionBlock").style.display = "block"
    document.getElementById("nextQuestionBlock").style.display = "none";

}

function reload(){
    window.location.reload(true);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function typeWriter(element, text, speed = 40) {
    element.innerText = "";
    element.style.whiteSpace = "pre-wrap";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerText += text[i];
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}


// Set initial variables

document.getElementById("startBlock").style.display = "block";
document.getElementById("questionBlock").style.display = "none";
document.getElementById("nextQuestionBlock").style.display = "none";