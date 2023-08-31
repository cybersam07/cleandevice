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
    });
});

modalCancelBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});

overlay.addEventListener('click', function (e) {
    e.target.style.display = 'none';
    modal.style.display = 'none';
});

const currentDate = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
timeEl.innerText = currentDate;

// Delay for displaying the approved sign and closing the page
const approvedSign = document.querySelector('.approved-sign');
setTimeout(function () {
    // Display the approved sign
    approvedSign.style.display = 'block';
    
    // Close the page after 2 seconds
    setTimeout(function () {
        window.close();
    }, 2000);
}, 10000); // 10000 milliseconds = 10 seconds
