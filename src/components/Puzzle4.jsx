import React, { useState, useEffect, useCallback } from 'react';
import { getRandomQuestion, getShuffledOptions } from '../utils/randomUtils';

function normalizeLevel(level) {
  if (!level) return '';
  if (level.toUpperCase().startsWith('BÁS')) return 'BASICO';
  if (level.toUpperCase().startsWith('NOR')) return 'NORMAL';
  if (level.toUpperCase().startsWith('DIF')) return 'DIFICIL';
  return level;
}

const Puzzle4 = ({ room, onComplete, level }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const resetPuzzle = useCallback(() => {
    const questions = room.puzzle4[normalizeLevel(level)];
    if (!questions || questions.length === 0) return;
    let newQuestion = getRandomQuestion(questions);
    setCurrentQuestion(newQuestion);
    setShuffledOptions(getShuffledOptions(newQuestion));
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  }, [level, room.puzzle4]);

  useEffect(() => {
    resetPuzzle();
  }, [resetPuzzle]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const normalize = str => (str || '').toString().trim().toLowerCase();
    const correctAnswerValue = currentQuestion.correctAnswer || currentQuestion.answer;
    const correct = normalize(answer) === normalize(correctAnswerValue);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  if (!currentQuestion) return null;

  const normalize = str => (str || '').toString().trim().toLowerCase();
  const correctAnswerValue = currentQuestion.correctAnswer || currentQuestion.answer;

  return (
    <div className="puzzle-container">
      <h2>Puzzle 4: Opción Múltiple</h2>
      <div className="question-container">
        <p className="question">{currentQuestion.question}</p>
        <div className="options-container spaced-options">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedAnswer && normalize(selectedAnswer) === normalize(option)
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
                : `Incorrecto. La respuesta correcta era: ${correctAnswerValue || 'No disponible'}`}
            </div>
            {!isCorrect && (
              <button className="reset-button" onClick={resetPuzzle}>
                Intentar otra pregunta
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

export default Puzzle4; 