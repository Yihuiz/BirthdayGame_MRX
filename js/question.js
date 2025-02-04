// Select all logos and the question box elements
const logos_a = document.querySelectorAll('.logo');
const questionBox_a = document.getElementById('question-box');
const questionText = document.getElementById('question-text');
const answerBox = document.getElementById('answer-box');
const submitAnswer = document.getElementById('submit-answer');

// Variable to track the current question
let currentQuestion = "";
let answeredQuestions = 0;
const totalQuestions = logos.length;


// Show the question box when clicking a logo
logos_a.forEach((logo) => {
    logo.addEventListener('click', (e) => {
        if (logo.dataset.answered) {
            alert("You have already answered this question!");
            return;
        }


        const rect = logo.getBoundingClientRect();

        // Get the question from the data attribute
        currentQuestion = logo.getAttribute('data-question');
        questionText.textContent = currentQuestion;

        // Set the question as a placeholder in the answer box
        answerBox.setAttribute('placeholder', currentQuestion);

        // Position the question box near the logo
        questionBox_a.style.left = `${rect.left + rect.width / 2}px`;
        questionBox_a.style.top = `${rect.top + rect.height + 10}px`; // Position below the logo
        questionBox_a.style.display = 'block';

        // Focus the input box for user convenience
        answerBox.focus();

        // Attach the current logo to track which question is being answered
        questionBox_a.dataset.currentLogo = logo.dataset.logoId;
    });
});

// Handle answer submission
submitAnswer.addEventListener('click', () => {
    const userAnswer = answerBox.value.trim();

// Define the feedback function
function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.top = '10px';
    feedback.style.left = '50%';
    feedback.style.transform = 'translateX(-50%)';
    feedback.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
    feedback.style.color = 'white';
    feedback.style.padding = '10px 20px';
    feedback.style.borderRadius = '5px';
    feedback.style.zIndex = '1000';
    feedback.style.fontFamily = 'Arial, sans-serif';
    feedback.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';

    // Append the feedback to the body
    document.body.appendChild(feedback);

    // Remove the feedback after 3 seconds
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

    if (userAnswer) {
  // Retrieve the current logo ID and find the associated logo element
        const currentLogoId = questionBox_a.dataset.currentLogo;
        const currentLogo = document.querySelector(`[data-logo-id="${currentLogoId}"]`);

        if (!currentLogo) {
            alert("Error: Could not find the current logo.");
            return; // Exit to prevent further execution
        }

        // Mark the logo as answered
        currentLogo.dataset.answered = true;

        // Hide the question box and reset input
        questionBox.style.display = 'none';
        answerBox.value = "";

        // Increment answered questions count
        answeredQuestions++;

 	// Provide feedback to the user
        showFeedback(`Your answer "${userAnswer}" has been received!`);




function showWinningMessage() {
    // Create a message container
    const message = document.createElement('div');
    message.textContent = "Lucky You! You win a coupon from Dolo Group 🎉";
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '4rem'; // Large text
    message.style.fontWeight = 'bold';
    message.style.textAlign = 'center';
    message.style.background = 'orange'; // Orange background
    message.style.color = 'transparent'; // Text color is transparent to allow gradient
    message.style.webkitBackgroundClip = 'text';
    message.style.webkitTextFillColor = 'transparent';
    message.style.backgroundImage = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
    message.style.webkitBackgroundClip = 'text'; // Makes text show the gradient
    message.style.borderRadius = '10px';
    message.style.padding = '30px 40px'; // Padding for spacing
    message.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)'; // Shadow for emphasis
    message.style.zIndex = '1000';

    // Append to the body
    document.body.appendChild(message);

    // Automatically remove the message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}



        // Check if all questions are answered
        if (answeredQuestions === totalQuestions) {
            // Show the winning message
		 showWinningMessage();
           <!-- alert("Lucky You! You win a coupon from Dolo Group 🎉"); -->
        }
    } else {
        alert("Please enter an answer before submitting!");
    }
});
