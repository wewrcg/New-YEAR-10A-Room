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
