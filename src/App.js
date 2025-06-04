import React, { useState } from 'react';
import { cssPuzzles } from './data/cssPuzzles';
import { htmlPuzzles } from './data/htmlPuzzles';
import { jsPuzzles } from './data/jsPuzzles';
import { phpPuzzles } from './data/phpPuzzles';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Puzzle4 from './components/Puzzle4';
import RoomSelector3D from './components/RoomSelector3D';
import Loader from './components/Loader';
import './App.css';

function getRoomData(selectedRoom) {
  switch (selectedRoom) {
    case 'css': return cssPuzzles;
    case 'html': return htmlPuzzles;
    case 'js': return jsPuzzles;
    case 'php': return phpPuzzles;
    default: return null;
  }
}

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null); // 'html', 'css', 'js', 'php'
  const [currentPuzzle, setCurrentPuzzle] = useState(0); // 0-3
  const [completed, setCompleted] = useState(false);
  const [completedRooms, setCompletedRooms] = useState([]); // Ahora es un array de objetos: { room: 'html', level: 'BASICO' }
  const [galleryMode, setGalleryMode] = useState(false); // controla si se muestra la galería 3D
  const [showEscapeAnimation, setShowEscapeAnimation] = useState(false); // animación de puerta
  const [hasEscaped, setHasEscaped] = useState(false); // muestra mensaje final
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null); // 'BASICO', 'NORMAL', 'DIFICIL', 'PRO'
  const [showLevelMenu, setShowLevelMenu] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleRoomSelect = (roomName) => {
    // roomName es el nombre completo, lo mapeamos a la key
    let key = 'html';
    if (roomName.toLowerCase().includes('css')) key = 'css';
    if (roomName.toLowerCase().includes('javascript')) key = 'js';
    if (roomName.toLowerCase().includes('php')) key = 'php';
    setSelectedRoom(key);
    setCurrentPuzzle(0);
    setCompleted(false);
    setGalleryMode(false);
  };

  const handleSolve = () => {
    if (currentPuzzle < 3) {
      setCurrentPuzzle(currentPuzzle + 1);
    } else {
      setCompleted(true);
      // Marca la sala como completada para el nivel actual y vuelve a la galería 3D
      setCompletedRooms(prev => {
        const already = prev.some(r => r.room === selectedRoom && r.level === selectedLevel);
        const newRooms = already ? prev : [...prev, { room: selectedRoom, level: selectedLevel }];
        // Si se han completado las 4 salas en este nivel, activar animación de escape
        const roomsForLevel = newRooms.filter(r => r.level === selectedLevel);
        if (roomsForLevel.length === 4) {
          setTimeout(() => {
            setSelectedRoom(null);
            setGalleryMode(true);
            setTimeout(() => setShowEscapeAnimation(true), 800); // espera a que entre en galería
          }, 200);
        } else {
          setTimeout(() => {
            setSelectedRoom(null);
            setGalleryMode(true);
          }, 200);
        }
        return newRooms;
      });
    }
  };

  const handleExitGallery = () => {
    setGalleryMode(false);
  };

  // Cuando termina la animación de escape
  const handleEscapeAnimationEnd = () => {
    setShowEscapeAnimation(false);
    setHasEscaped(true);
  };

  // Volver al menú principal (pantalla de bienvenida)
  const handleRestart = () => {
    setSelectedRoom(null);
    setGalleryMode(false);
    setHasEscaped(false);
    setShowEscapeAnimation(false);
    setCurrentPuzzle(0);
    setCompleted(false);
  };

  // Transición instantánea al seleccionar nivel
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setGalleryMode(true);
    setShowLevelMenu(false);
  };

  // Render puzzles según sala y número
  const renderPuzzle = (level) => {
    const roomData = getRoomData(selectedRoom);
    if (!roomData) return null;
    if (currentPuzzle === 0) return <Puzzle1 room={roomData} onComplete={handleSolve} level={level} />;
    if (currentPuzzle === 1) return <Puzzle2 room={roomData} onComplete={handleSolve} level={level} />;
    if (currentPuzzle === 2) return <Puzzle3 room={roomData} onComplete={handleSolve} level={level} />;
    if (currentPuzzle === 3) return <Puzzle4 room={roomData} onComplete={handleSolve} level={level} />;
    return null;
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          {(!selectedRoom && !galleryMode && !showLevelMenu) && (
            <div className="welcome-screen">
              <h1>Escape Room Virtual</h1>
              <button
                className="play-btn"
                onClick={() => setShowLevelMenu(true)}
              >
                Jugar
              </button>
            </div>
          )}
          {showLevelMenu && !selectedRoom && !galleryMode && (
            <div className="welcome-screen level-menu-panel">
              <h1>Selecciona el nivel</h1>
              <div className="level-buttons">
                {["BÁSICO", "NORMAL", "DIFÍCIL"].map(level => (
                  <button
                    key={level}
                    className="level-btn"
                    onClick={() => handleLevelSelect(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
          {galleryMode && !selectedRoom && (
            <RoomSelector3D
              onSelectRoom={handleRoomSelect}
              completedRooms={completedRooms
                .filter(r => r.level === selectedLevel)
                .map(r => {
                  if (r.room === 'html') return 'HTML Escape Room';
                  if (r.room === 'css') return 'CSS Escape Room';
                  if (r.room === 'js') return 'JavaScript Escape Room';
                  if (r.room === 'php') return 'PHP Escape Room';
                  return r.room;
                })}
              mode="gallery"
              onExitGallery={handleExitGallery}
              showEscapeAnimation={showEscapeAnimation}
              hasEscaped={hasEscaped}
              onEscapeAnimationEnd={handleEscapeAnimationEnd}
              onRestart={handleRestart}
              selectedLevel={selectedLevel}
            />
          )}
          {selectedRoom && !completed && (
            <div className="puzzle-section">
              <div className="puzzle-progress">Puzzle {currentPuzzle + 1} / 4</div>
              {renderPuzzle(selectedLevel)}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
