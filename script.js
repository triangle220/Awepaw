const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;
const nav = document.querySelector('nav');
const darkModeSwitch = darkModeBtn.querySelector('.switch');

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    darkModeSwitch.classList.toggle('active');

    // Сохранение текущей темы в localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Проверка текущей темы в localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        darkModeSwitch.classList.add('active');
    }
});