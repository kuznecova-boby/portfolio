// Валидация поля
const subscribe = document.querySelector('.contacts__form');
if (subscribe) { // Проверка на существование элемента
  const sendButton = subscribe.querySelector('.send'); // Предполагаем, что у вас есть класс .send для кнопки
  if (sendButton) {
    sendButton.addEventListener('click', () => {
      // отправка разрешена
      let send = true;
      // проверка имени
      if (subscribe.name.value === '') {
        subscribe.name.classList.add('invalid');
        send = false;
      } else {
        subscribe.name.classList.remove('invalid');
      }
      // проверка email
      if (!subscribe.email.value.includes('@')) {
        subscribe.email.classList.add('invalid');
        send = false;
      } else {
        subscribe.email.classList.remove('invalid');
      }
      if (send) {
        // отправка формы
        subscribe.submit();
      } else {
        // Добавляем обработчик событий только если форма не будет отправлена
        subscribe.addEventListener('submit', function (event) {
          // блокировка отправки
          event.preventDefault();
        });
      }
    });
  }
}

// Кнопка «наверх»
document.addEventListener("DOMContentLoaded", function () {
  const top = document.getElementById("top");
  if (top) { // Проверка на существование элемента
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    });
    // Плавная прокрутка при клике на кнопку
    top.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

const skillsContainer = document.querySelector('.skills');
const skillBars = skillsContainer.querySelectorAll('.skill-bar');

skillBars.forEach(skillBar => {
  skillBar.addEventListener('mouseover', () => {
    const skillPer = skillBar.querySelector('.skill-per');
    const perValue = parseInt(skillPer.getAttribute('per'), 10);
    skillPer.style.width = `${perValue}%`;
  });

  skillBar.addEventListener('mouseout', () => {
    const skillPer = skillBar.querySelector('.skill-per');
    skillPer.style.width = '%';
  });
});


const communicativeContainer = document.querySelector('.communicative');
const communicativeBars = communicativeContainer.querySelectorAll('.communicative-bar');

communicativeBars.forEach(communicativeBar => {
  communicativeBar.addEventListener('mouseover', () => {
    const communicativePer = communicativeBar.querySelector('.communicative-per');
    const perValue = parseInt(communicativePer.getAttribute('per'), 10);
    communicativePer.style.width = `${perValue}%`;
  });

  communicativeBar.addEventListener('mouseout', () => {
    const communicativePer = communicativeBar.querySelector('.communicative-per');
    communicativePer.style.width = '%';
  });
});



