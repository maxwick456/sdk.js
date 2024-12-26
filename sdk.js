console.log("@2024 Maximus Weichers")
console.log("SDK.JS v0.01")
// Create a style element and add CSS styles
const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        overflow: hidden; /* Prevent scrolling during intro */
    }

    .intro {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2196F3;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        opacity: 1; /* Start fully visible */
        transition: transform 1s ease, opacity 1s ease; /* Smooth transition */
        z-index: 10; /* Ensure it is above other content */
    }

    .content {
        display: none; /* Hidden until intro is done */
        padding: 20px;
        text-align: center;
    }
`;
document.head.appendChild(style);

// Function to hide the intro and show the main content
function hideIntro() {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');

    // Set styles to trigger the sliding effect
    intro.style.transform = 'translateY(-100%)'; // Slide out of view
    intro.style.opacity = '0'; // Fade out

    // Wait for the animation to finish before hiding the intro and showing the content
    setTimeout(() => {
        intro.style.display = 'none'; // Hide the intro
        content.style.display = 'block'; // Show the main content
    }, 1000); // Match this duration with the CSS transition duration
}

// Set a timeout to hide the intro after 3 seconds
setTimeout(hideIntro, 3000);
