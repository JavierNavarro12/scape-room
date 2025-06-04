import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = ({ showPlayButton = false, onPlay }) => (
  <StyledWrapper>
    <div className="card">
      <h1 className="welcome-title">Bienvenido a Coding Room</h1>
      {!showPlayButton ? (
        <div className="loader-content">
          <div className="rings">
            <div id="ring" />
            <div id="ring" />
            <div id="ring" />
            <div id="ring" />
          </div>
          <div className="loading-text">loading</div>
        </div>
      ) : (
        <button className="play-btn" onClick={onPlay}>Jugar</button>
      )}
    </div>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
    `}</style>
  </StyledWrapper>
);

const neonGlow = keyframes`
  0%, 100% { text-shadow: 0 0 8px #00ffe7, 0 0 24px #00ffe7, 0 0 48px #00ffe7; }
  50% { text-shadow: 0 0 16px #00ffe7, 0 0 32px #00ffe7, 0 0 64px #00ffe7; }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #181c24 0%, #232946 100%);
  font-family: 'Orbitron', Arial, sans-serif;
  position: relative;

  .card {
    background: rgba(30, 34, 44, 0.92);
    border-radius: 28px;
    box-shadow: 0 8px 48px #00ffe733, 0 1.5px 8px #0008;
    padding: 48px 36px 44px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    max-width: 900px;
    min-height: 220px;
    border: 2.5px solid #00ffe7;
    position: relative;
    z-index: 2;
  }

  .welcome-title {
    font-size: clamp(0.7em, 3vw, 2.5em);
    font-weight: 700;
    color: #00ffe7;
    margin-bottom: 38px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    animation: ${neonGlow} 2.2s infinite alternate;
    font-family: 'Orbitron', Arial, sans-serif;
    text-shadow: 0 0 8px #00ffe7, 0 0 24px #00ffe7, 0 0 48px #00ffe7;
    white-space: nowrap;
    max-width: 100%;
  }

  .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .rings {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 18px;
    background: rgba(0,0,0,0.18);
    border-radius: 50%;
    box-shadow: 0 0 32px #00ffe7aa, 0 0 8px #fff2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-text {
    color: #00ffe7;
    font-size: 1.3em;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-align: center;
    margin-top: 0;
    text-shadow: 0 0 8px #00ffe7, 0 0 16px #00ffe7;
    font-family: 'Orbitron', Arial, sans-serif;
  }

  #ring {
    width: 120px;
    height: 120px;
    border: 1px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 0; left: 0;
  }

  #ring:nth-child(1) {
    border-bottom: 8px solid #00ffe7;
    animation: rotate1 2s linear infinite;
  }
  @keyframes rotate1 {
    from { transform: rotateX(50deg) rotateZ(110deg); }
    to { transform: rotateX(50deg) rotateZ(470deg); }
  }
  #ring:nth-child(2) {
    border-bottom: 8px solid #ff00e7;
    animation: rotate2 2s linear infinite;
  }
  @keyframes rotate2 {
    from { transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg); }
    to { transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg); }
  }
  #ring:nth-child(3) {
    border-bottom: 8px solid #00ffae;
    animation: rotate3 2s linear infinite;
  }
  @keyframes rotate3 {
    from { transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg); }
    to { transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg); }
  }
  #ring:nth-child(4) {
    border-bottom: 8px solid #ffe700;
    animation: rotate4 2s linear infinite;
  }
  @keyframes rotate4 {
    from { transform: rotateX(70deg) rotateZ(270deg); }
    to { transform: rotateX(70deg) rotateZ(630deg); }
  }

  .play-btn {
    margin-top: 32px;
    font-size: 1.2em;
    padding: 12px 24px;
    border-radius: 16px;
    background: linear-gradient(90deg, #00ffe7 0%, #00bfff 100%);
    color: #181c24;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 32px #00ffe7aa, 0 2px 8px #0008;
    font-weight: 900;
    letter-spacing: 2.5px;
    transition: background 0.2s, color 0.2s, transform 0.15s;
    display: block;
    font-family: 'Orbitron', Arial, sans-serif;
    text-transform: uppercase;
    text-shadow: 0 0 8px #fff, 0 0 16px #00ffe7;
  }
  .play-btn:hover {
    background: linear-gradient(90deg, #00bfff 0%, #00ffe7 100%);
    color: #fff;
    transform: scale(1.06);
    box-shadow: 0 6px 40px #00ffe7cc, 0 2px 8px #0008;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 100vh !important;
    padding: 0 !important;
    .card {
      min-width: 260px;
      min-height: 180px;
      max-width: 80vw;
      max-height: 80vh;
      padding: 18px 4vw 18px 4vw;
      margin: 0 auto;
    }
    .welcome-title {
      font-size: 1.35em;
      margin-bottom: 18px;
    }
    .rings {
      width: 100px;
      height: 100px;
      margin-bottom: 14px;
    }
    #ring {
      width: 100px;
      height: 100px;
    }
    .play-btn {
      font-size: 1.15em;
      padding: 12px 8vw;
      margin-top: 18px;
    }
  }
`;

export default Loader; 