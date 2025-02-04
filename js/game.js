const gamePage = document.getElementById('game-page');
const interactiveArea = document.getElementById('interactive-area');

// Example questions
const questions = [
    { text: "What is your favorite color?", x: 200, y: 150 },
    { text: "Name a place you want to visit?", x: 400, y: 300 },
    { text: "What is your favorite hobby?", x: 600, y: 450 }
];

// Create question elements
questions.forEach((question, index) => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');
    questionBox.textContent = question.text;
    questionBox.style.left = `${question.x}px`;
    questionBox.style.top = `${question.y}px`;

    interactiveArea.appendChild(questionBox);

    // Show the question box on hover
    gamePage.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Check if the mouse is near the question coordinates
        const distance = Math.sqrt(
            Math.pow(mouseX - question.x, 2) + Math.pow(mouseY - question.y, 2)
        );

        if (distance < 50) { // Adjust sensitivity range
            questionBox.style.display = 'block';
            questionBox.style.left = `${mouseX + 10}px`; // Adjust position near the cursor
            questionBox.style.top = `${mouseY + 10}px`;
        } else {
            questionBox.style.display = 'none';
        }
    });
});
