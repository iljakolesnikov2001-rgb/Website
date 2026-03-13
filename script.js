// Переключение темы
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleBtn.textContent = '🌙 Тёмная тема';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleBtn.textContent = '☀️ Светлая тема';
        localStorage.setItem('theme', 'dark');
    }
};

// Загрузка сохранённой темы
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);
toggleBtn.textContent = savedTheme === 'dark' ? '☀️ Светлая тема' : '🌙 Тёмная тема';

// Модальное окно расчёта
const modal = document.getElementById('calcModal');
const calcBtn = document.getElementById('calcBtn');
const close = document.querySelector('.close');

calcBtn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};
