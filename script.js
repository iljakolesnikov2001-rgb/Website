const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const closeDrawer = document.getElementById('closeDrawer');
const calcModal = document.getElementById('calcModal');
const calcBtn = document.getElementById('openModalBtn');
const closeModal = document.querySelector('.modal .close');

hamburger.addEventListener('click', () => drawer.style.width = '280px');
closeDrawer.addEventListener('click', () => drawer.style.width = '0');
window.addEventListener('click', e => {
    if (e.target === drawer) drawer.style.width = '0';
});

calcBtn.addEventListener('click', () => calcModal.style.display = 'flex');
closeModal.addEventListener('click', () => calcModal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) calcModal.style.display = 'none';
});
