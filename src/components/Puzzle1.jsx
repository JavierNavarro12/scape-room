import React, { useState, useEffect } from 'react';
import { shuffleArray } from '../utils/randomUtils';

const Puzzle1 = ({ room, onComplete }) => {
  const questions = room.puzzle1.questions;
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Inicializar el banco de preguntas al entrar en el puzzle
  useEffect(() => {
    setRemainingQuestions(shuffleArray(questions));
    setCurrentQuestion(null);
    setShuffledOptions([]);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  }, [questions]);

  // Seleccionar la siguiente pregunta del banco
  useEffect(() => {
    if (remainingQuestions.length > 0 && !currentQuestion) {
      const next = remainingQuestions[0];
      setCurrentQuestion(next);
      setShuffledOptions(shuffleArray(next.options));
    }
  }, [remainingQuestions, currentQuestion]);

  const nextQuestion = () => {
    // Eliminar la pregunta actual del banco y seleccionar la siguiente
    const newRemaining = remainingQuestions.filter(q => q.id !== currentQuestion.id);
    if (newRemaining.length === 0) {
      // Si se acaban, reiniciar el banco (pero mezclado)
      setRemainingQuestions(shuffleArray(questions));
    } else {
      setRemainingQuestions(newRemaining);
    }
    setCurrentQuestion(null);
    setShuffledOptions([]);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="puzzle-container">
      <h2>Puzzle 1: Opción Múltiple</h2>
      <div className="question-container">
        <p className="question">{currentQuestion.question}</p>
        <div className="options-container spaced-options">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onClick={() => handleAnswerSelect(option)}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className="feedback-container">
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect
                ? '¡Correcto! Has completado el puzzle.'
                : 'Incorrecto. Inténtalo de nuevo.'}
            </div>
            {!isCorrect && (
              <button className="reset-button" onClick={nextQuestion}>
                Siguiente pregunta
              </button>
            )}
          </div>
        )}
      </div>
      <style>{`
        .spaced-options {
          display: flex;
          gap: 32px;
          justify-content: center;
          margin: 32px 0 0 0;
          flex-wrap: wrap;
        }
        .option-button {
          min-width: 140px;
          font-size: 1.2em;
          padding: 16px 0;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
};

export default Puzzle1; 