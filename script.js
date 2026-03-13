// Открытие модалки
document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('myModal').style.display = 'block';
};

// Закрытие по крестику
document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
};

// Закрытие по клику вне окна
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
