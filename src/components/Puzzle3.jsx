import React, { useState, useEffect, useCallback } from 'react';
import { getRandomQuestion } from '../utils/randomUtils';

function normalizeLevel(level) {
  if (!level) return '';
  if (level.toUpperCase().startsWith('BÁS')) return 'BASICO';
  if (level.toUpperCase().startsWith('NOR')) return 'NORMAL';
  if (level.toUpperCase().startsWith('DIF')) return 'DIFICIL';
  return level;
}

const Puzzle3 = ({ room, onComplete, level }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const resetPuzzle = useCallback(() => {
    const questions = room.puzzle3[normalizeLevel(level)];
    if (!questions || questions.length === 0) return;
    let newQuestion = getRandomQuestion(questions);
    setCurrentQuestion(newQuestion);
    setUserAnswer('');
    setIsCorrect(null);
    setShowFeedback(false);
  }, [level, room.puzzle3]);

  useEffect(() => {
    resetPuzzle();
  }, [resetPuzzle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    // Comparar la respuesta del usuario con la respuesta correcta
    const correct = userAnswer.toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim();
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
      <h2>Puzzle 3: Respuesta Abierta</h2>
      <div className="question-container">
        <p className="question">{currentQuestion.question}</p>
        <form onSubmit={handleSubmit} className="open-answer-form">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            disabled={showFeedback}
            className="open-answer-input"
            autoFocus
          />
          <div className="button-container">
            <button type="submit" disabled={showFeedback} className="submit-button">
              Enviar
            </button>
            {showFeedback && !isCorrect && (
              <button type="button" onClick={resetPuzzle} className="reset-button">
                Intentar otra pregunta
              </button>
            )}
          </div>
        </form>
        {showFeedback && (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`} style={{marginTop: 18}}>
            {isCorrect ? (
              '¡Correcto! Has completado el puzzle.'
            ) : (
              <div>
                <p>Incorrecto. La respuesta correcta era:</p>
                <p className="correct-answer">{currentQuestion.answer}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <style>{`
        .open-answer-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          margin-top: 24px;
        }
        .open-answer-input {
          width: 320px;
          max-width: 90vw;
          font-size: 1.3em;
          padding: 14px 18px;
          border-radius: 12px;
          border: 2px solid #00bfff;
          box-shadow: 0 2px 12px #00bfff22;
          outline: none;
          text-align: center;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .open-answer-input:focus {
          border: 2.5px solid #00ffe7;
          box-shadow: 0 4px 24px #00ffe733;
        }
        .submit-button {
          background: linear-gradient(90deg, #00ffe7 0%, #00bfff 100%);
          color: #181c24;
          font-weight: 700;
          font-size: 1.15em;
          border: none;
          border-radius: 10px;
          padding: 14px 38px;
          margin-top: 8px;
          box-shadow: 0 2px 12px #00bfff22;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .submit-button:active {
          transform: scale(0.97);
        }
        .reset-button {
          background: #e53e3e;
          color: #fff;
          font-weight: 700;
          font-size: 1em;
          border: none;
          border-radius: 10px;
          padding: 10px 24px;
          margin-left: 12px;
          margin-top: 8px;
          box-shadow: 0 2px 8px #e53e3e33;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .reset-button:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
};

export default Puzzle3; 