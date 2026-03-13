// Тема
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

if (toggleBtn) {
    toggleBtn.onclick = () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    };
}

const saved = localStorage.getItem('theme') || 'light';
body.classList.add(saved);
if (toggleBtn) toggleBtn.textContent = saved === 'dark' ? '☀️' : '🌙';

// Модалка расчёта
const calcModal = document.getElementById('calcModal');
const calcBtn = document.getElementById('calcBtn');
const closeCalc = document.querySelector('#calcModal .close');

if (calcBtn) calcBtn.onclick = () => calcModal.style.display = 'flex';
if (closeCalc) closeCalc.onclick = () => calcModal.style.display = 'none';

// Модалка контактов
const contactsModal = document.getElementById('contactsModal');
const contactsLink = document.getElementById('contactsLink');
const closeContacts = document.querySelector('.close-contacts');

if (contactsLink) {
    contactsLink.onclick = (e) => {
        e.preventDefault();
        contactsModal.style.display = 'flex';
    };
}
if (closeContacts) closeContacts.onclick = () => contactsModal.style.display = 'none';

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};
