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
