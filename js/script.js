const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

const sidebarImg = document.getElementById('sidebarImg');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarText = document.getElementById('sidebarText');

const objectsData = [
  { top: 43, left: 10, title: 'Flying V', desc: 'Белая гитара.', img: '28.png'},
  { top: 27, left: 8, title: 'Гирлянда', desc: 'Голубая как я.', img: '19.png'},
  { top: 43, left: 23, title: 'ТВ', desc: 'ШО откуда тут связь', img: '24.png' },
  { top: 48, left: 29, title: 'Волк', desc: 'Ну погоди', img: '25.png' },
  { top: 31, left: 38, title: 'Самокат', desc: 'Летит на самокате идиот', img: '22.png' },
  { top: 49, left: 38, title: 'Аквариум', desc: 'Что стало с рыбкой?', img: '17.png' },
  { top: 24, left: 43, title: 'UnFlying V', desc: 'Это на римском или англиском?', img: '20.png' },
  { top: 76, left: 9, title: 'Трещина напольная', desc: 'трещина на полу.', img: '27.png' },
  { top: 58, left: 21, title: 'Белый мишка', desc: 'Не внушает мне доверия.', img: '18.png' },
  { top: 46, left: 15, title: 'Трещина настенная', desc: 'трещина на стене.', img: '26.png' },
  { top: 60, left: 15, title: 'XBOX SERIES X', desc: 'Плейстейшн', img: '16.png' },
  { top: 58, left: 32, title: 'Тумбы', desc: 'taph.', img: '23.png' },
  { top: 42, left: 45, title: 'Новогодняя ёлка', desc: 'В лесу родилась ёлочка а кто её родил.', img: '12.png' },
  { top: 42, left: 55, title: 'Украшения', desc: 'Крутые украшения всякие', img: '13.png' },
  { top: 76, left: 23, title: 'ПК', desc: 'А где играть?.', img: '21.png' },
  { top: 20, left: 60, title: 'Снеговик', desc: 'А он не растает?', img: '10.png' },
  { top: 30, left: 66, title: 'Полка Z', desc: 'Россия Путин Победа', img: '11.png' },
  { top: 35, left: 68, title: 'Розовый монстр', desc: 'Как ты', img: '9.png' },
  { top: 38, left: 84, title: 'Портрет Ёжика', desc: 'Картина с Ёжиком на правой стене.', img: '2.png' },
  { top: 42, left: 95, title: 'Голова зайца', desc: 'офигееет.', img: '1.png' },
  { top: 66, left: 13, title: 'Бас гитара', desc: 'шо это гитара.', img: '29.png' },
  { top: 52, left: 63, title: 'Подарки', desc: 'Во имя перпендикуляра', img: '8.png' },
  { top: 58, left: 57, title: 'Кошка', desc: 'Zip zip', img: '14.png' },
  { top: 70, left: 43, title: 'Диван', desc: 'Он мягок', img: '15.png' },
  { top: 61, left: 47, title: 'Эльф', desc: 'Сидит в чулочках.', img: '15.png' },
  { top: 68, left: 83, title: 'Камин', desc: 'С носочками!.', img: '3.png' },
  { top: 58, left: 95, title: 'Боксёрская груша', desc: 'Висит груша нельзя скушать', img: '4.png' },
  { top: 72, left: 71, title: 'Новогодний ковёр', desc: 'Круглый ковёр с ёлочками.', img: '5.png' },
  { top: 80, left: 83, title: 'Лоток', desc: 'Стоит в левом углу на полу.', img: '6.png' },
  { top: 76, left: 85, title: 'Паяльник', desc: 'лежит нафиг.', img: '7.png' },
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

  // Прячем картинку, пока новая не прогрузится (чтобы не мелькала старая)
  sidebarImg.style.opacity = '0';
  sidebarImg.onload = () => {
    sidebarImg.style.opacity = '1';
  };
  sidebarImg.src = 'images/' + item.img;

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

  // Сбрасываем картинку после того, как сайдбар уехал за экран (через 300 мс)
  setTimeout(() => {
    sidebarImg.src = '';
  }, 300);
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

const darkImage = document.getElementById('darkImage');
const switchSceneBtn = document.getElementById('switchSceneBtn');

if (switchSceneBtn && darkImage) {
  switchSceneBtn.addEventListener('click', () => {
    darkImage.classList.toggle('active');
    switchSceneBtn.classList.toggle('active');
  });
}


// Предзагрузка всех картинок объектов в кэш браузера
window.addEventListener('load', () => {
  objectsData.forEach((item) => {
    const preloadImg = new Image();
    preloadImg.src = 'images/' + item.img;
  });
});



