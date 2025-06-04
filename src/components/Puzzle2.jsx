import React, { useState, useEffect, useCallback } from 'react';
import { getRandomQuestion, getShuffledFragments } from '../utils/randomUtils';

const Puzzle2 = ({ room, onComplete }) => {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [shuffledFragments, setShuffledFragments] = useState([]);
  const [selectedFragments, setSelectedFragments] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const resetPuzzle = useCallback(() => {
    let newChallenge;
    do {
      newChallenge = getRandomQuestion(room.puzzle2.challenges);
    } while (newChallenge === currentChallenge);
    setCurrentChallenge(newChallenge);
    setShuffledFragments(getShuffledFragments(newChallenge));
    setSelectedFragments([]);
    setIsCorrect(null);
    setShowFeedback(false);
    setDraggedIndex(null);
  }, [room.puzzle2.challenges, currentChallenge]);

  useEffect(() => {
    resetPuzzle();
  }, [resetPuzzle]);

  // Drag & Drop handlers para el área de código
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newFragments = [...selectedFragments];
    const [moved] = newFragments.splice(draggedIndex, 1);
    newFragments.splice(dropIndex, 0, moved);
    setSelectedFragments(newFragments);
    setDraggedIndex(null);
    checkSolution(newFragments);
  };

  const handleFragmentClick = (fragment) => {
    if (selectedFragments.includes(fragment)) return;
    const newSelected = [...selectedFragments, fragment];
    setSelectedFragments(newSelected);
    checkSolution(newSelected);
  };

  const handleRemoveFromCode = (index) => {
    const newSelected = [...selectedFragments];
    newSelected.splice(index, 1);
    setSelectedFragments(newSelected);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  const checkSolution = (fragmentsArr) => {
    if (fragmentsArr.length === currentChallenge.correctOrder.length) {
      const isCorrect = fragmentsArr.every(
        (frag, idx) => frag === currentChallenge.correctOrder[idx]
      );
      setIsCorrect(isCorrect);
      setShowFeedback(true);
      if (isCorrect) {
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    } else {
      setIsCorrect(null);
      setShowFeedback(false);
    }
  };

  if (!currentChallenge) return null;

  return (
    <div className="puzzle-container">
      <h2>Puzzle 2: Ordenar Fragmentos</h2>
      <div className="fragments-container">
        <div className="available-fragments">
          <h3>Fragmentos disponibles:</h3>
          <div className="fragments-tray">
            {shuffledFragments
              .filter((frag) => !selectedFragments.includes(frag))
              .map((fragment, index) => (
                <button
                  key={index}
                  className="fragment-button"
                  onClick={() => handleFragmentClick(fragment)}
                  disabled={showFeedback}
                >
                  {fragment}
                </button>
              ))}
          </div>
        </div>
        <div className="code-area-label">Área de código:</div>
        <div className="code-area">
          {selectedFragments.length === 0 && (
            <div className="code-placeholder">Arrastra o pulsa fragmentos aquí…</div>
          )}
          {selectedFragments.map((fragment, idx) => (
            <div
              key={idx}
              className="code-fragment"
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop(idx)}
              onClick={() => handleRemoveFromCode(idx)}
              title="Haz clic para quitar o arrastra para reordenar"
            >
              {fragment}
            </div>
          ))}
        </div>
        {showFeedback && (
          <div className="feedback-container">
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect
                ? '¡Correcto! Has completado el puzzle.'
                : 'Incorrecto. Puedes reordenar los fragmentos.'}
            </div>
            {!isCorrect && (
              <button className="reset-button" onClick={resetPuzzle}>
                Intentar otro reto
              </button>
            )}
          </div>
        )}
      </div>
      <style>{`
        .fragments-tray {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 18px;
        }
        .fragment-button, .code-fragment {
          background: #fff;
          color: #0a2540;
          border: 2px solid #00bfff;
          border-radius: 8px;
          padding: 10px 18px;
          font-family: monospace;
          font-size: 1.1em;
          cursor: pointer;
          box-shadow: 0 2px 8px #00bfff22;
          transition: background 0.2s, box-shadow 0.2s, color 0.2s;
        }
        .fragment-button:hover, .code-fragment:hover {
          background: #e0f7fa;
          color: #0077b6;
          box-shadow: 0 4px 16px #00bfff33;
        }
        .code-area-label {
          text-align: center;
          color: #00bfff;
          font-size: 1.1em;
          margin: 18px 0 4px 0;
        }
        .code-area {
          min-height: 64px;
          background: #181c24;
          border: 2.5px solid #00bfff;
          border-radius: 12px;
          margin: 0 auto 18px auto;
          padding: 18px 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: flex-start;
          max-width: 700px;
        }
        .code-placeholder {
          color: #888;
          font-style: italic;
          font-size: 1.1em;
        }
      `}</style>
    </div>
  );
};

export default Puzzle2; 