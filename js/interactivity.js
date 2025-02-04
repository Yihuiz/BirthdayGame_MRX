// Get all the logos and the question box
const logos = document.querySelectorAll('.logo');
const questionBox = document.getElementById('question-box'); // Ensure this references your question box element


// Add hover event listeners to each logo
logos.forEach((logo) => {
    logo.addEventListener('mouseenter', (e) => {
        // Get the question from the data attribute
        const question = logo.getAttribute('data-question');



    });

    logo.addEventListener('mouseleave', () => {
        // Hide the question box when the mouse leaves
    });
});
