document.addEventListener("DOMContentLoaded", function () {
    const ring = document.querySelector('.ring');
    const approvedSign = document.querySelector('.approved-sign');

    ring.addEventListener('animationend', () => {
        // Create the pop-up container
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';
        
        // Create the pop-up message
        const popupMessage = document.createElement('div');
        popupMessage.className = 'popup-message';
        popupMessage.textContent = 'Click to Proceed';
        
        // Append the pop-up message to the pop-up container
        popupContainer.appendChild(popupMessage);
        
        // Append the pop-up container to the body
        document.body.appendChild(popupContainer);
        
        // Handle click event on the pop-up message
        popupMessage.addEventListener('click', () => {
            // Remove the pop-up container
            document.body.removeChild(popupContainer);
            
            // Display the approved sign
            approvedSign.style.display = 'block';
            
            // Close the page after a delay
            setTimeout(() => {
                window.close();
            }, 2000); // 2000 milliseconds = 2 seconds
        });
    });
});
