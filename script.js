const card = document.getElementById('card');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');

// Array de perguntas e respostas corretas
const questions = [
  { question: 'Você gostaria de continuar?', correctAnswer: 'yes' },
  { question: 'Você gosta de JavaScript?', correctAnswer: 'yes' },
  { question: 'Você já visitou a França?', correctAnswer: 'no' },
  { question: 'Você prefere gatos a cachorros?', correctAnswer: 'no' }
];

let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação inicial

// Função para atualizar a pergunta ou terminar o quiz
function updateQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
  } else {
    endQuiz();
  }
}

// Função para terminar o quiz
function endQuiz() {
  card.style.display = 'none'; // Esconder o card
  resultElement.textContent = `Fim do quiz! Sua pontuação final é: ${score} pontos.`;
}

// Função para verificar a resposta e calcular a pontuação
function checkAnswer(answer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (answer === correctAnswer) {
    score += 10; // Adiciona 10 pontos se a resposta for correta
  }
  scoreElement.textContent = score; // Atualiza a pontuação na tela
}

// Função para mover o card para a direita (Sim)
yesOption.addEventListener('click', () => {
  card.classList.add('move-right');
  setTimeout(() => {
    resetCard(); // Resetar a posição após a transição
    checkAnswer('yes'); // Verifica se a resposta foi correta
    updateQuestion(); // Atualizar a pergunta
  }, 600); // O tempo da transição
});

// Função para mover o card para a esquerda (Não)
noOption.addEventListener('click', () => {
  card.classList.add('move-left');
  setTimeout(() => {
    resetCard(); // Resetar a posição após a transição
    checkAnswer('no'); // Verifica se a resposta foi correta
    updateQuestion(); // Atualizar a pergunta
  }, 600); // O tempo da transição
});

// Função para resetar o card à sua posição original
function resetCard() {
  card.classList.remove('move-right', 'move-left');
}
