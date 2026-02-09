const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = '01#@$%&<>[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height));

function draw() {
  // Fondo MUY transparente (casi invisible)
  ctx.fillStyle = 'rgba(5, 6, 10, 0.08)'; // ← CAMBIO: era 0.18
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Letras SUTILES en rojo/rosa
  ctx.fillStyle = 'rgba(255, 75, 129, 0.20)'; // ← CAMBIO: era 0.45
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reinicia gotas aleatoriamente
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(draw);
}

draw();
