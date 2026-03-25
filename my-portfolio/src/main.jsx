import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// for the background cursor effect
let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

window.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  // Lerp: adjust 0.1 for more/less lag (lower = more lag)
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);

  requestAnimationFrame(animate);
}
animate();