document.addEventListener('DOMContentLoaded', function() {
    const ring = document.querySelector('.ring');
    const loadingText = document.getElementById('loading-text');
    const approvedSign = document.querySelector('.approved-sign');

    // Remove loading text and trigger approved sign after 12 seconds
    setTimeout(function () {
        loadingText.style.display = 'none';
        ring.style.animation = 'none'; // Pause the animation
        setTimeout(function () {
            approvedSign.style.display = 'block';
            ring.style.display = 'none'; // Hide the ring
            setTimeout(function () {
                window.close();
            }, 2000); // Close after 2 seconds
        }, 2000); // Display approved sign after 2 seconds
    }, 12000); // 12000 milliseconds = 12 seconds
});
