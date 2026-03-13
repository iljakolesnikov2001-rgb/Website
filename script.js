// Drawer
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const closeDrawer = document.getElementById('closeDrawer');

hamburger.onclick = () => { drawer.style.width = '280px'; }
closeDrawer.onclick = () => { drawer.style.width = '0'; }
window.onclick = (e) => {
    if (e.target === drawer) drawer.style.width = '0';
};

// Модалка расчёта
const calcModal = document.getElementById('calcModal');
const calcBtn = document.getElementById('openModalBtn');
const calcClose = document.querySelector('#calcModal .close');

calcBtn.onclick = () => { calcModal.style.display = 'flex'; }
calcClose.onclick = () => { calcModal.style.display = 'none'; }

// Модалка заказчика
const clientModal = document.getElementById('clientLoginModal');
const clientBtn = document.getElementById('clientLoginBtn');
const clientClose = document.querySelector('.close-client');

clientBtn.onclick = (e) => { e.preventDefault(); clientModal.style.display = 'flex'; }
clientClose.onclick = () => { clientModal.style.display = 'none'; }

// Модалка сотрудников
const staffModal = document.getElementById('staffLoginModal');
const staffBtn = document.getElementById('staffLoginBtn');
const staffClose = document.querySelector('.close-staff');

staffBtn.onclick = (e) => { e.preventDefault(); staffModal.style.display = 'flex'; }
staffClose.onclick = () => { staffModal.style.display = 'none'; }

// Закрытие всех модалок по клику вне
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
    if (e.target === drawer) drawer.style.width = '0';
}
