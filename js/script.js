const hotspots = document.querySelectorAll('.hotspot');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalDesc = document.getElementById('modal-desc');

// Открываем окно при клике на любую метку
hotspots.forEach(button => {
    button.addEventListener('click', () => {
        modalTitle.textContent = button.getAttribute('data-title');
        modalAuthor.textContent = button.getAttribute('data-author');
        modalDesc.textContent = button.getAttribute('data-desc');
        modal.classList.remove('hidden');
    });
});

// Закрываем окно по крестику
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Закрываем окно при клике мимо карточки
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});