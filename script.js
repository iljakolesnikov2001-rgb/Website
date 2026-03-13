const panel = document.getElementById('sidePanel');
const openBtn = document.getElementById('contactBtn');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click', () => panel.classList.add('active'));
closeBtn.addEventListener('click', () => panel.classList.remove('active'));

// Закрытие по клику вне панели
document.addEventListener('click', e => {
    if (!panel.contains(e.target) && !openBtn.contains(e.target)) {
        panel.classList.remove('active');
    }
});

// Простой свайп вправо для открытия (на мобильных)
let touchStartX = 0;
document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 80 && window.innerWidth < 768) {
        panel.classList.add('active');
    }
});
