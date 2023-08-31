document.addEventListener("DOMContentLoaded", function () {
    const ring = document.querySelector('.ring');
    const approvedSign = document.querySelector('.approved-sign');

    ring.addEventListener('animationend', () => {
        // Display the 'Click to Proceed' message
        const clickToProceed = document.createElement('div');
        clickToProceed.className = 'click-to-proceed';
        clickToProceed.textContent = 'Click to Proceed';
        document.body.appendChild(clickToProceed);

        // Handle click event on the 'Click to Proceed' message
        clickToProceed.addEventListener('click', () => {
            // Remove the 'Click to Proceed' message
            document.body.removeChild(clickToProceed);

            // Display the approved sign
            approvedSign.style.display = 'block';

            // Close the page after a delay
            setTimeout(() => {
                window.close();
            }, 2000); // 2000 milliseconds = 2 seconds
        });
    });
});
