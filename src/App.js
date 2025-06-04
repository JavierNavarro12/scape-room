import React, { useState, useEffect } from 'react';
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
import Confetti from 'react-confetti';
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
  const [showConfetti, setShowConfetti] = useState(false);
  const [showEscapeMessage, setShowEscapeMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null); // 'BASICO', 'NORMAL', 'DIFICIL', 'PRO'
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showRotateOverlay, setShowRotateOverlay] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Overlay de orientación global
  useEffect(() => {
    function checkOrientation() {
      const isMobile = window.innerWidth <= 900 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isPortrait = window.innerHeight > window.innerWidth;
      setShowRotateOverlay(isMobile && isPortrait);
    }
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
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
      setCompletedRooms(prev => {
        const already = prev.some(r => r.room === selectedRoom && r.level === selectedLevel);
        const newRooms = already ? prev : [...prev, { room: selectedRoom, level: selectedLevel }];
        const roomsForLevel = newRooms.filter(r => r.level === selectedLevel);
        if (roomsForLevel.length === 4) {
          setTimeout(() => {
            setSelectedRoom(null);
            setGalleryMode(true);
            setShowConfetti(true);
            setShowEscapeMessage(true);
            // El confeti se detiene solo cuando se pulsa 'Volver al inicio'
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

  // Volver al menú principal (pantalla de bienvenida)
  const handleRestart = () => {
    setSelectedRoom(null);
    setGalleryMode(false);
    setShowConfetti(false);
    setShowEscapeMessage(false);
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
      {showRotateOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(24,28,36,0.98)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <div style={{
            color: '#00ffe7',
            fontSize: '2em',
            fontWeight: 900,
            textAlign: 'center',
            textShadow: '0 0 16px #00ffe7, 0 0 32px #00ffe7',
            marginBottom: '24px',
            fontFamily: 'Orbitron, Arial, sans-serif',
          }}>
            Por favor, gira tu dispositivo<br />para jugar en horizontal
          </div>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="30" width="60" height="30" rx="8" fill="#00ffe7" fillOpacity="0.13" stroke="#00ffe7" strokeWidth="3"/>
            <rect x="20" y="35" width="40" height="20" rx="5" fill="#00ffe7" fillOpacity="0.18" />
            <path d="M60 60 Q70 40 60 20" stroke="#00ffe7" strokeWidth="3" fill="none"/>
            <polygon points="62,18 68,22 60,24" fill="#00ffe7" />
          </svg>
        </div>
      )}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={400}
          style={{
            position: 'fixed',
            zIndex: 10000,
            pointerEvents: 'none',
            top: 0,
            left: 0,
          }}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          {(!selectedRoom && !galleryMode && !showLevelMenu) && (
            <div className="welcome-screen main-welcome-screen">
              <h1 className="main-title">ESCAPE VIRTUAL ROOM</h1>
              <button
                className="play-btn"
                onClick={() => setShowLevelMenu(true)}
              >
                JUGAR
              </button>
            </div>
          )}
          {showLevelMenu && !selectedRoom && !galleryMode && (
            <div className="welcome-screen level-menu-panel">
              <h1 className="main-title" style={{whiteSpace: 'nowrap'}}>BIENVENIDO A CODING ROOM</h1>
              <div className="level-buttons">
                {['BÁSICO', 'NORMAL', 'DIFÍCIL'].map(level => (
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
              showConfetti={showConfetti}
              showEscapeMessage={showEscapeMessage}
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
      <style>{`
        .main-title {
          white-space: nowrap;
          font-size: 2.5em;
          font-family: Orbitron, Arial, sans-serif;
          letter-spacing: 2px;
          color: #00ffe7;
          text-shadow: 0 0 12px #00ffe7, 0 0 24px #00ffe7;
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
}

export default App;
