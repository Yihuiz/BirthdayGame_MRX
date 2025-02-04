const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw a grid with a 3D effect
function draw3DGraph() {
    const width = canvas.width;
    const height = canvas.height;
    const cellSize = 50;

    // Draw the grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += cellSize) {
        for (let y = 0; y < height; y += cellSize) {
            // Draw grid lines with perspective effect
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize / 2, y + cellSize / 2);
            ctx.stroke();
        }
    }

    // Add 3D-looking shapes (e.g., bars)
    ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
    for (let i = 0; i < 5; i++) {
        const barX = Math.random() * width;
        const barHeight = Math.random() * 150 + 50;
        ctx.save();
        ctx.translate(barX, height / 2);
        ctx.rotate(-Math.PI / 6); // Tilt the bar for 3D effect
        ctx.fillRect(0, 0, 20, -barHeight);
        ctx.restore();
    }
}

// Draw the graph initially
draw3DGraph();

// Handle window resize to adjust the canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw3DGraph();
});
