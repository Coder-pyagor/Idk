const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

const GAME_WIDTH = gameContainer.offsetWidth;
const GAME_HEIGHT = gameContainer.offsetHeight;

// Function to create a new target
function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    
    // Random starting X position
    const startX = Math.random() * (GAME_WIDTH - 30); // 30 is target width
    target.style.left = `${startX}px`;
    target.style.top = '0px'; // Start at the top

    // Randomize animation duration for variety
    target.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2 to 5 seconds
    target.style.animationDelay = `${Math.random() * 2}s`; // Stagger start times

    // Click handler for targets
    target.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent container click from registering
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        target.remove(); // Remove target when clicked
    });

    gameContainer.appendChild(target);

    // Remove target if it reaches the bottom without being shot
    setTimeout(() => {
        if (gameContainer.contains(target)) {
            target.remove();
        }
    }, parseFloat(target.style.animationDuration) * 1000 + parseFloat(target.style.animationDelay) * 1000 + 500); // Add a small buffer
}

// Spawn targets periodically
setInterval(createTarget, 1500); // Create a new target every 1.5 seconds

// Initial targets
for (let i = 0; i < 5; i++) {
    createTarget();
}

console.log("Game Loaded!");
