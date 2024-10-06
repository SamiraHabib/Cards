const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');

const questions = [
  { question: 'Você gostaria de continuar?', correctAnswer: 'yes' },
  { question: 'Você gosta de JavaScript?', correctAnswer: 'yes' },
  { question: 'Você já visitou a França?', correctAnswer: 'no' },
  { question: 'Você prefere gatos a cachorros?', correctAnswer: 'no' }
];

let currentQuestionIndex = 0; 
let score = 0; 

function updateQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  card.style.display = 'none';
  resultElement.textContent = `Fim do quiz! Sua pontuação final é: ${score} pontos.`;
}

function checkAnswer(answer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (answer === correctAnswer) {
    score += 10; 
  }
  scoreElement.textContent = score; 
}

yesOption.addEventListener('click', () => {
  card.classList.add('move-right');
  setTimeout(() => {
    resetCard();
    checkAnswer('yes');
    updateQuestion();
  }, 600); 
});

noOption.addEventListener('click', () => {
  card.classList.add('move-left');
  setTimeout(() => {
    resetCard(); 
    checkAnswer('no'); 
    updateQuestion();
  }, 600);
});

function resetCard() {
  card.classList.remove('move-right', 'move-left');
}
