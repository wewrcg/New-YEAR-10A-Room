const scene = document.getElementById('scene');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

const sidebarImg = document.getElementById('sidebarImg');
const sidebarTitle = document.getElementById('sidebarTitle');
const sidebarText = document.getElementById('sidebarText');
const sidebarAuthor = document.getElementById('sidebarAuthor');

const objectsData = [
  { top: 43, left: 10, title: 'Flying V', desc: 'Белая гитара... Ноябрь же...', img: '28.png', author: 'Егор С.'},
  { top: 27, left: 8, title: 'Гирлянда', desc: 'Голубая как я.', img: '19.png', author: 'Матвей Б.'},
  { top: 43, left: 23, title: 'ТВ', desc: 'Почему я ни разу не видел в продаже синих телевизоров?', img: '24.png', author: 'Артём' },
  { top: 48, left: 29, title: 'Волк', desc: 'Ну погоди!', img: '25.png', author: 'Иван' },
  { top: 31, left: 38, title: 'Самокат', desc: 'Как он смог пробить такую идеальную дыру на такой высоте?', img: '22.png', author: 'Егор Ш.' },
  { top: 49, left: 38, title: 'Аквариум', desc: 'А рыбки?', img: '17.png', author: 'Наталья' },
  { top: 24, left: 43, title: 'UnFlying V', desc: 'Это на римском или английском?', img: '20.png', author: 'Ярослав' },
  { top: 76, left: 9, title: 'Трещина напольная', desc: 'Круто, трещина на линолиуме.', img: '27.png', author: 'Виктория' },
  { top: 58, left: 21, title: 'Белый мишка', desc: 'Это и есть медведь из 2026?', img: '18.png', author: 'Евгения' },
  { top: 46, left: 15, title: 'Трещина настенная', desc: 'Ещё часть трещины скрыта за тумбой.', img: '26.png', author: 'Ольга Во.' },
  { top: 60, left: 15, title: 'XBOX SERIES X', desc: 'Плейстейшн.', img: '16.png', author: 'Данил' },
  { top: 58, left: 32, title: 'Тумба', desc: 'Открыта для диалога.', img: '23.png', author: 'Александра' },
  { top: 42, left: 45, title: 'Новогодняя ёлка', desc: 'В лесу родилась ёлочка а кто её родил?', img: '12.png', author: 'ДЕНИС ШКОДА' },
  { top: 42, left: 55, title: 'Украшения', desc: 'Крутые украшения всякие, жаль, что мне пришлось отказаться от своей "звезды"...', img: '13.png', author: 'Антон' },
  { top: 76, left: 23, title: 'ПК', desc: 'А где играть?.', img: '21.png', author: 'Вениамин' },
  { top: 20, left: 60, title: 'Снеговик', desc: 'А он не растает?', img: '10.png', author: 'Полина' },
  { top: 30, left: 66, title: 'Полка Z', desc: 'Россия Путин Победа.', img: '11.png', author: 'Дарья Шо.' },
  { top: 35, left: 68, title: 'Розовый монстр', desc: 'Как ты!', img: '9.png', author: 'Ника' },
  { top: 38, left: 84, title: 'Портрет Ёжика', desc: 'Символично, что ёжик будучи розовым висит рядом с розовым монстром.', img: '2.png', author: 'Денис З.' },
  { top: 42, left: 95, title: 'Голова зайца', desc: 'Просто зачем..?', img: '1.png', author: 'Ольга Ва.' },
  { top: 66, left: 13, title: 'Бас гитара', desc: 'Очень близкая к другой гитаре гитара, ну хоть не палитра.', img: '29.png', author: 'Ульяна' },
  { top: 52, left: 63, title: 'Подарки', desc: 'Ну хотя бы так...', img: '8.png', author: 'Дмитрий' },
  { top: 58, left: 57, title: 'Белая кошка', desc: 'Я назвал её R2-D2', img: '14.png', author: 'Маргарита' },
  { top: 70, left: 43, title: 'Диван', desc: 'Он мягок, НО Я МЯГЧЕ!', img: '15.png', author: 'Екатерина' },
  { top: 61, left: 47, title: 'Эльф', desc: 'Не знал, что они носят гольфы.', img: '15.png', author: 'Ева' },
  { top: 68, left: 83, title: 'Камин', desc: 'С носочками! Но без гномов, не зря камин горит.', img: '3.png', author: 'Дарья Ша.' },
  { top: 58, left: 95, title: 'Боксёрская груша', desc: 'Эльф занимается спортом?', img: '4.png', author: 'Алексей' },
  { top: 72, left: 71, title: 'Новогодний ковёр', desc: 'Ковёр. Спасибо, что не на стене.', img: '5.png', author: 'Александр' },
  { top: 80, left: 83, title: 'Лоток', desc: 'Стоит в левом углу на полу. А кто вам сказал где здесь право, а где лево?', img: '6.png', author: 'Евгений' },
  { top: 76, left: 85, title: 'Паяльник', desc: '😨😨😨😨😨😨😨😨', img: '7.png', author: 'Семён' },
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

  if (item.author) {
    sidebarAuthor.textContent = '💡 Придумал(а): ' + item.author;
    sidebarAuthor.style.display = 'inline-block';
  } else {
    sidebarAuthor.style.display = 'none';
  }

  // дальше ваш старый код загрузки картинки...


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

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

let lastSeconds = null;
let fullRotations = 0;

function updateClockHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // Чтобы секундная стрелка на 0-й секунде не крутилась назад через весь циферблат
  if (lastSeconds !== null && seconds < lastSeconds) {
    fullRotations++;
  }
  lastSeconds = seconds;

  const secDeg = (fullRotations * 60 + seconds) * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  if (secondHand) secondHand.style.transform = `rotate(${secDeg}deg)`;
  if (minuteHand) minuteHand.style.transform = `rotate(${minDeg}deg)`;
  if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

updateClockHands();
setInterval(updateClockHands, 1000);



