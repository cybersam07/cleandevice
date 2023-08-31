const links = document.querySelectorAll('.link');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalCancelBtn = document.querySelector('.alt-btn button');
const timeEl = document.querySelector('time');

links.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.style.display = 'block';
        modal.style.display = 'block';
        
        // Pause the animations
        document.querySelector('.ring').style.animationPlayState = 'paused';
        document.querySelector('span').style.animationPlayState = 'paused';
    });
});

modalCancelBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    
    // Resume the animations
    document.querySelector('.ring').style.animationPlayState = 'running';
    document.querySelector('span').style.animationPlayState = 'running';
});

overlay.addEventListener('click', function (e) {
    e.target.style.display = 'none';
    modal.style.display = 'none';
    
    // Resume the animations
    document.querySelector('.ring').style.animationPlayState = 'running';
    document.querySelector('span').style.animationPlayState = 'running';
});

const currentDate = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
timeEl.innerText = currentDate;

// Display the approved sign immediately and close the page
const approvedSign = document.querySelector('.approved-sign');
approvedSign.style.display = 'block';

// Close the page after 2 seconds
setTimeout(function () {
    window.close();
}, 2000);
