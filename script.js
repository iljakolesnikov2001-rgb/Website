const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
};

const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);
toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Модалка расчёта
const calcModal = document.getElementById('calcModal');
const calcBtn = document.getElementById('calcBtn');
const closeCalc = document.querySelector('#calcModal .close');

calcBtn.onclick = () => calcModal.style.display = 'flex';
closeCalc.onclick = () => calcModal.style.display = 'none';

// Модалка контактов
const contactsModal = document.getElementById('contactsModal');
const contactsLink = document.getElementById('contactsLink');
const closeContacts = document.querySelector('.close-contacts');

contactsLink.onclick = (e) => {
    e.preventDefault();
    contactsModal.style.display = 'flex';
};
closeContacts.onclick = () => contactsModal.style.display = 'none';

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};
