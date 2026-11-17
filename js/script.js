const objectBtn = document.getElementById('objectBtn');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Функция открытия
function openFocus() {
  objectBtn.classList.add('active');
  overlay.classList.add('active');
  sidebar.classList.add('active');
}

// Функция закрытия
function closeFocus() {
  objectBtn.classList.remove('active');
  overlay.classList.remove('active');
  sidebar.classList.remove('active');
}

// Клик по объекту открывает панель
objectBtn.addEventListener('click', openFocus);

// Клик по темному фону или крестику закрывает панель
overlay.addEventListener('click', closeFocus);
closeBtn.addEventListener('click', closeFocus);