import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const ROOMS = [
  { name: 'HTML Escape Room', color: '#e34c26', textColor: 'white', position: [-7.9, 2, 0], rotation: [0, Math.PI / 2, 0] },
  { name: 'CSS Escape Room', color: '#2965f1', textColor: 'white', position: [0, 2, -7.9], rotation: [0, 0, 0] },
  { name: 'JavaScript Escape Room', color: '#f7df1e', textColor: '#222', position: [7.9, 2, 0], rotation: [0, -Math.PI / 2, 0] },
  { name: 'PHP Escape Room', color: '#777bb4', textColor: 'white', position: [0, 2, 7.9], rotation: [0, Math.PI, 0] },
];

const getLevelLabel = (level) => {
  if (!level) return '';
  if (level === 'BASICO') return 'Básico';
  if (level === 'NORMAL') return 'Normal';
  if (level === 'DIFICIL') return 'Difícil';
  if (level === 'PRO') return 'Pro';
  return level;
};

function DoorAndCameraEscape({ show, onEnd }) {
  const doorRef = useRef();
  const { camera } = useThree();
  const [phase, setPhase] = useState('door'); // 'door' -> 'camera' -> 'done'

  useEffect(() => {
    if (show) {
      setPhase('door');
    }
  }, [show]);

  // Animación de la puerta (1.5s)
  useFrame((_, delta) => {
    if (!show) return;
    if (phase === 'door') {
      if (doorRef.current) {
        doorRef.current.rotation.y = -Math.PI/2 * 0.5;
      }
      if (phase === 'door') {
        setTimeout(() => {
          setPhase('camera');
        }, 300); // pequeña pausa
      }
    } else if (phase === 'camera') {
      camera.position.lerp({x:0, y:2, z:-10}, 0.9);
      camera.lookAt(0,2,-12);
      if (onEnd) {
        setTimeout(onEnd, 800);
        setPhase('done');
      }
    }
  });

  return (
    <group>
      {/* Marco de la puerta */}
      <mesh position={[0, 1.5, -7.89]}>
        <boxGeometry args={[2.2, 3.2, 0.18]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Hoja de la puerta */}
      <mesh ref={doorRef} position={[0.6, 1.5, -7.8]}>
        <boxGeometry args={[1, 3, 0.12]} />
        <meshStandardMaterial color="#8b5c2a" />
      </mesh>
      {/* Manilla */}
      <mesh position={[1.05, 1.5, -7.65]}>
        <cylinderGeometry args={[0.05, 0.05, 0.18, 16]} />
        <meshStandardMaterial color="#e2c275" />
      </mesh>
    </group>
  );
}

function RoomSelector3D({
  onSelectRoom,
  completedRooms = [],
  mode: externalMode,
  onExitGallery,
  showEscapeAnimation = false,
  hasEscaped = false,
  onEscapeAnimationEnd = () => {},
  onRestart,
  selectedLevel,
  showConfetti,
  showEscapeMessage,
}) {
  const [mode, setMode] = useState(externalMode || 'lobby');
  const [hovered, setHovered] = useState(null);
  const canvasRef = useRef();
  const [showWelcome, setShowWelcome] = useState(false);
  const welcomeShownRef = useRef(false);

  // Sincroniza el modo externo
  React.useEffect(() => {
    if (externalMode) setMode(externalMode);
  }, [externalMode]);

  // Mostrar bocadillo de bienvenida SOLO la primera vez que se entra en la galería 3D
  useEffect(() => {
    if (mode === 'gallery' && selectedLevel) {
      const alreadyShown = window.sessionStorage.getItem('welcome3D_shown');
      if (!alreadyShown) {
        setShowWelcome(true);
        window.sessionStorage.setItem('welcome3D_shown', '1');
      } else {
        setShowWelcome(false);
      }
    }
  }, [mode, selectedLevel]);

  // Lobby: un solo panel grande, centrado y contenido
  function LobbyPanel() {
    return null;
  }

  // Galería: sala 3D grande con paneles de escape rooms
  function GalleryRoom() {
    return (
      <group>
        {/* Suelo */}
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial color="#bfae9c" />
        </mesh>
        {/* Paredes */}
        <mesh position={[0, 2.5, -8]} receiveShadow>
          <boxGeometry args={[16, 5, 0.2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Puerta animada solo si showEscapeAnimation */}
        {showEscapeAnimation && <DoorAndCameraEscape show={showEscapeAnimation} onEnd={onEscapeAnimationEnd} />}
        <mesh position={[-8, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[16, 5, 0.2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        <mesh position={[8, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[16, 5, 0.2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        {/* Pared trasera */}
        <mesh position={[0, 2.5, 8]} rotation={[0, Math.PI, 0]} receiveShadow>
          <boxGeometry args={[16, 5, 0.2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[16, 16]} />
          <meshStandardMaterial color="#d6cfc7" />
        </mesh>
        {/* Paneles de escape room como cuadros en la pared */}
        {ROOMS.map((room, idx) => (
          <group key={room.name} position={room.position} rotation={room.rotation}>
            {/* Marco exterior negro, grande y con relieve */}
            <mesh position={[0, 0, -0.25]}>
              <boxGeometry args={[4.5, 3.2, 0.25]} />
              <meshStandardMaterial color="#111" roughness={0.3} metalness={1} />
            </mesh>
            {/* Passepartout blanco, más ancho y profundo */}
            <mesh position={[0, 0, -0.12]}>
              <boxGeometry args={[4.0, 2.7, 0.12]} />
              <meshStandardMaterial color="#fff" roughness={1} />
            </mesh>
            {/* Cuadro interior, más grande y profundo */}
            <mesh
              onPointerOver={() => setHovered(room.name)}
              onPointerOut={() => setHovered(null)}
              onClick={() => onSelectRoom(room.name)}
              position={[0, 0, 0]}
            >
              <boxGeometry args={[3.2, 2.1, 0.12]} />
              <meshStandardMaterial color={room.color} opacity={0.92} transparent />
            </mesh>
            {/* Texto del nombre */}
            <Text
              position={[0, 0, 0.18]}
              fontSize={0.38}
              color={room.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={2.5}
            >
              {room.name}
            </Text>
            {/* Completado y tick en la misma línea si está completado */}
            {completedRooms.includes(room.name) && (
              <Text
                position={[0, 1.1, 0.25]}
                fontSize={0.32}
                color="#38d430"
                anchorX="center"
                anchorY="bottom"
                maxWidth={2.5}
              >
                {`Completado  ✅`}
              </Text>
            )}
          </group>
        ))}
      </group>
    );
  }

  // Estilos para el canvas según el modo
  const canvasStyle = mode === 'lobby'
    ? {
        width: '700px',
        height: '400px',
        borderRadius: '18px',
        background: '#222',
        outline: 'none',
        display: 'block',
        boxShadow: '0 4px 24px #0002',
      }
    : {
        width: '100vw',
        height: '100vh',
        background: '#222',
        outline: 'none',
        display: 'block',
      };

  // Estilos para el contenedor según el modo
  const containerStyle = mode === 'lobby'
    ? {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        position: 'relative',
      }
    : {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        background: '#181c24',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      };

  // Botón salir
  const handleExit = () => {
    if (onExitGallery) {
      onExitGallery();
    } else {
      setMode('lobby');
    }
  };

  return (
    <div style={containerStyle}>
      <Canvas
        ref={canvasRef}
        style={{
          ...canvasStyle,
          touchAction: 'pan-x pan-y',
          pointerEvents: 'auto',
        }}
        camera={{ position: [0, 2, 8], fov: 60 }}
        shadows
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[0, 8, 5]} intensity={0.3} castShadow />
        {mode === 'lobby' && <LobbyPanel />}
        {mode === 'gallery' && <GalleryRoom />}
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          minPolarAngle={mode === 'gallery' ? Math.PI * 0.18 : 0}
          maxPolarAngle={mode === 'gallery' ? Math.PI * 0.48 : Math.PI}
          enableZoom={false}
        />
      </Canvas>
      {/* Cursor global para los paneles interactivos */}
      <style>{`
        body { cursor: ${hovered ? 'pointer' : 'default'} !important; }
      `}</style>
      {mode === 'gallery' && hasEscaped && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(24,28,36,0.92)',
          zIndex: 4000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '2.2em',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textShadow: '0 2px 16px #000',
        }}>
          <div style={{
            background: 'rgba(0,255,231,0.10)',
            border: '2.5px solid #00ffe7',
            borderRadius: '22px',
            padding: '48px 2vw 32px 2vw',
            boxShadow: '0 8px 48px #00ffe799, 0 2px 8px #0008',
            textAlign: 'center',
            maxWidth: '900px',
            minWidth: '320px',
            marginBottom: '32px',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              fontSize: '2.2em',
              fontWeight: 900,
              color: '#00ffe7',
              marginBottom: '18px',
              letterSpacing: '2px',
              textShadow: '0 0 12px #00ffe7, 0 0 24px #00ffe7',
              fontFamily: 'Orbitron, Arial, sans-serif',
              whiteSpace: 'nowrap',
              width: '100%',
              textAlign: 'center',
              lineHeight: 1.1,
              overflow: 'visible',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              ¡Enhorabuena!
            </div>
            <div style={{
              fontSize: '1.25em',
              color: '#fff',
              marginBottom: '18px',
              fontWeight: 600,
              textShadow: '0 2px 16px #000',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              lineHeight: 1.2,
              width: '100%',
              textAlign: 'center',
            }}>
              Has escapado del Escape Room Virtual.
            </div>
            <button
              onClick={typeof onRestart === 'function' ? onRestart : undefined}
              style={{
                marginTop: '18px',
                fontSize: '1.25em',
                fontWeight: 900,
                padding: '18px 48px',
                borderRadius: '14px',
                background: 'linear-gradient(90deg, #00ffe7 0%, #00bfff 100%)',
                color: '#181c24',
                border: 'none',
                boxShadow: '0 4px 32px #00ffe7aa, 0 2px 8px #0008',
                cursor: 'pointer',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textShadow: '0 0 8px #fff, 0 0 16px #00ffe7',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00bfff 0%, #00ffe7 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00ffe7 0%, #00bfff 100%)'}
            >
              Volver al menú principal
            </button>
          </div>
        </div>
      )}
      {mode === 'gallery' && !hasEscaped && (
        <button
          onClick={handleExit}
          style={{
            position: 'fixed',
            top: 32,
            right: 32,
            zIndex: 3000,
            background: '#222',
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '8px',
            padding: '12px 24px',
            fontSize: '1.1em',
            cursor: 'pointer',
            boxShadow: '0 4px 16px #0004',
            opacity: 0.92,
            pointerEvents: 'auto',
          }}
        >
          Salir
        </button>
      )}
      {/* Bocadillo de bienvenida al entrar en la galería 3D */}
      {mode === 'gallery' && showWelcome && !hasEscaped && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(24,28,36,0.92)',
          zIndex: 5000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'rgba(0,255,231,0.13)',
            border: '2.5px solid #00ffe7',
            borderRadius: '22px',
            padding: '48px 32px 32px 32px',
            boxShadow: '0 8px 48px #00ffe799, 0 2px 8px #0008',
            textAlign: 'center',
            maxWidth: '520px',
            minWidth: '320px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              fontSize: '2em',
              fontWeight: 900,
              color: '#00ffe7',
              marginBottom: '18px',
              letterSpacing: '2px',
              textShadow: '0 0 12px #00ffe7, 0 0 24px #00ffe7',
              fontFamily: 'Orbitron, Arial, sans-serif',
              textAlign: 'center',
              lineHeight: 1.1,
            }}>
              Bienvenido a la sala 3D
            </div>
            <div style={{
              fontSize: '1.15em',
              color: '#fff',
              marginBottom: '12px',
              fontWeight: 600,
              textShadow: '0 2px 16px #000',
              lineHeight: 1.3,
              width: '100%',
              textAlign: 'center',
            }}>
              Completa todos los desafíos para escapar.<br />
              <span style={{ color: '#00ffe7', fontWeight: 700, fontSize: '1.08em' }}>
                Nivel seleccionado: {getLevelLabel(selectedLevel)}
              </span>
            </div>
            <div style={{
              fontSize: '1.05em',
              color: '#b2fff7',
              marginBottom: '18px',
              fontWeight: 500,
              textShadow: '0 2px 12px #000',
              lineHeight: 1.3,
              width: '100%',
              textAlign: 'center',
            }}>
              Puedes girar la vista 360º arrastrando con el ratón o el dedo.
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              style={{
                marginTop: '8px',
                fontSize: '1.15em',
                fontWeight: 900,
                padding: '16px 44px',
                borderRadius: '14px',
                background: 'linear-gradient(90deg, #00ffe7 0%, #00bfff 100%)',
                color: '#181c24',
                border: 'none',
                boxShadow: '0 4px 32px #00ffe7aa, 0 2px 8px #0008',
                cursor: 'pointer',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textShadow: '0 0 8px #fff, 0 0 16px #00ffe7',
                transition: 'background 0.2s, color 0.2s, transform 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00bfff 0%, #00ffe7 100%)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00ffe7 0%, #00bfff 100%)'}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
      {showEscapeMessage && (
        <div className="escape-message-overlay">
          <div className="escape-message-card">
            <h2>¡Felicidades! Has escapado del Escape Room Virtual 🎉</h2>
            <button className="play-btn" onClick={onRestart} style={{marginTop: 24}}>
              Volver al inicio
            </button>
          </div>
        </div>
      )}
      <style>{`
        .escape-message-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          pointer-events: none;
        }
        .escape-message-card {
          background: rgba(24, 28, 36, 0.92);
          border: 2.5px solid #00ffe7;
          border-radius: 22px;
          box-shadow: 0 8px 48px #00ffe799, 0 2px 8px #0008;
          padding: 48px 32px 32px 32px;
          text-align: center;
          max-width: 520px;
          min-width: 320px;
          color: #fff;
          font-size: 1.7em;
          font-family: Orbitron, Arial, sans-serif;
          pointer-events: auto;
        }
        .escape-message-card h2 {
          margin-bottom: 24px;
          font-size: 1.3em;
          font-weight: 900;
          color: #00ffe7;
          letter-spacing: 2px;
          text-shadow: 0 0 12px #00ffe7, 0 0 24px #00ffe7;
        }
        .escape-message-card .play-btn {
          font-size: 1.1em;
          font-weight: 700;
          padding: 16px 44px;
          border-radius: 14px;
          background: linear-gradient(90deg, #00ffe7 0%, #00bfff 100%);
          color: #181c24;
          border: none;
          box-shadow: 0 4px 32px #00ffe7aa, 0 2px 8px #0008;
          cursor: pointer;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-shadow: 0 0 8px #fff, 0 0 16px #00ffe7;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .escape-message-card .play-btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  );
}

export default RoomSelector3D; 