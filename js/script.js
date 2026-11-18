const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

const sidebarImg = document.getElementById('sidebarImg');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarText = document.getElementById('sidebarText');

const objectsData = [
  { top: 43, left: 12, title: 'Flying V', desc: 'Белая гитара.', img: ' '},
  { top: 40, left: 28, title: 'Картина / Экран', desc: 'Волк из «Ну, погоди!» на пляже.', img: ' ' },
  { top: 75, left: 10, title: 'Лоток', desc: 'Стоит в левом углу на полу.', img: ' ' },
  { top: 73, left: 10, title: 'Паяльник', desc: 'лежит нафиг.', img: ' ' },
  { top: 60, left: 23, title: 'Белый мишка', desc: 'Игрушка в новогодней шапочке.', img: ' ' },
  { top: 75, left: 38, title: 'Боксёрская груша', desc: 'Напольная груша на стойке.', img: ' ' },
  { top: 42, left: 50, title: 'Новогодняя ёлка', desc: 'Зелёная ёлка в центре комнаты.', img: ' ' },
  { top: 32, left: 66, title: 'Банка на полке', desc: 'Энергетик на зигзагообразной полке.', img: ' ' },
  { top: 36, left: 78, title: 'Портрет Ёжика', desc: 'Картина с Ёжиком на правой стене.', img: ' ' },
  { top: 50, left: 89, title: 'Заяц', desc: 'Декор с Зайцем справа.', img: ' ' },
  { top: 52, left: 63, title: 'Подарки', desc: 'Разноцветные кубики за диваном.', img: ' ' },
  { top: 61, left: 72, title: 'Персонаж на диване', desc: 'Сидит на белом диване.', img: ' ' },
  { top: 71, left: 67, title: 'Новогодний ковёр', desc: 'Круглый ковёр с ёлочками.', img: ' ' }
];

let activeButton = null;

objectsData.forEach((item) => {
  const btn = document.createElement('button');
  btn.className = 'target-object';
  btn.style.top = item.top + '%';
  btn.style.left = item.left + '%';

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openFocus(btn, item);
  });

  scene.appendChild(btn);
});

function openFocus(btn, item) {
  sidebarTitle.textContent = item.title;
  sidebarText.textContent = item.desc;
  sidebarImg.src = 'images/main-image.webp';
  sidebarImg.style.transformOrigin = `${item.left}% ${item.top}%`;

  btn.classList.add('active');
  activeButton = btn;

  overlay.classList.add('active');
  sidebar.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeFocus() {
  if (activeButton) {
    activeButton.classList.remove('active');
    activeButton = null;
  }
  overlay.classList.remove('active');
  sidebar.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

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
