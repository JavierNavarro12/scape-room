// Función para obtener un número aleatorio entre min y max (inclusive)
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para mezclar un array (Fisher-Yates shuffle)
export const shuffleArray = (array) => {
  if (!Array.isArray(array)) return [];
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Función para obtener una pregunta aleatoria de un array de preguntas
export const getRandomQuestion = (questions) => {
  const randomIndex = getRandomInt(0, questions.length - 1);
  return questions[randomIndex];
};

// Función para mezclar las opciones de una pregunta
export const getShuffledOptions = (question) => {
  if (!question.options) return [];
  return shuffleArray(question.options);
};

// Función para mezclar los fragmentos de un reto
export const getShuffledFragments = (challenge) => {
  if (!challenge.correctOrder) return [];
  return shuffleArray(challenge.correctOrder);
}; 