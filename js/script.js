const objectBtn = document.getElementById('objectBtn');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

function openFocus() {
  objectBtn.classList.add('active');
  overlay.classList.add('active');
  sidebar.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeFocus() {
  objectBtn.classList.remove('active');
  overlay.classList.remove('active');
  sidebar.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

objectBtn.addEventListener('click', openFocus);
overlay.addEventListener('click', closeFocus);
closeBtn.addEventListener('click', closeFocus);


const countdownEl = document.getElementById('countdown');

function updateNewYearTimer() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
  
  const diff = newYearDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Добавляем ноль перед однозначными числами (например, 05 вместо 5)
  const h = hours < 10 ? '0' + hours : hours;
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.textContent = `${days}д ${h}ч ${m}м ${s}с`;
}

// Запускаем сразу и обновляем каждую секунду
updateNewYearTimer();
setInterval(updateNewYearTimer, 1000);

// Список объектов (только координаты, название и описание)
const objectsData = [
  { top: 43, left: 13, title: 'Электрогитара', desc: 'Белая гитара на левой стене.' },
  { top: 38, left: 28, title: 'Картина / Экран', desc: 'Волк из «Ну, погоди!» на пляже.' },
  { top: 64, left: 15, title: 'Миска / Лоток', desc: 'Стоит в левом углу на полу.' },
  { top: 60, left: 23, title: 'Белый мишка', desc: 'Игрушка в новогодней шапочке.' },
  { top: 56, left: 29, title: 'Боксёрская груша', desc: 'Напольная груша на стойке.' },
  { top: 42, left: 50, title: 'Новогодняя ёлка', desc: 'Зелёная ёлка в центре комнаты.' },
  { top: 32, left: 66, title: 'Банка на полке', desc: 'Энергетик на зигзагообразной полке.' },
  { top: 36, left: 78, title: 'Портрет Ёжика', desc: 'Картина с Ёжиком на правой стене.' },
  { top: 50, left: 89, title: 'Заяц', desc: 'Декор с Зайцем справа.' },
  { top: 52, left: 63, title: 'Кубики', desc: 'Разноцветные кубики за диваном.' },
  { top: 61, left: 72, title: 'Персонаж на диване', desc: 'Сидит на белом диване.' },
  { top: 71, left: 67, title: 'Новогодний ковёр', desc: 'Круглый ковёр с ёлочками.' }
];

function openFocus(btn, item) {
  sidebarTitle.textContent = item.title;
  sidebarText.textContent = item.desc;
  
  // Берем вашу единственную общую картинку
  sidebarImg.src = 'images/main-image.png';
  // Наводим центр увеличения точно в точку клика (top% и left%)
  sidebarImg.style.transformOrigin = `${item.left}% ${item.top}%`;

  btn.classList.add('active');
  activeButton = btn;

  overlay.classList.add('active');
  sidebar.classList.add('active');
  document.body.classList.add('no-scroll');
}
