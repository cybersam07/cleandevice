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

// Delay for displaying the approved sign and redirecting to completed.html
const approvedSign = document.querySelector('.approved-sign');
setTimeout(function () {
    // Display the approved sign
    approvedSign.style.display = 'block';

    // Redirect to completed.html after 2 seconds
    setTimeout(function () {
        window.location.href = 'completed.html';
    }, 2000);
}, 10000); // 10000 milliseconds = 10 seconds
