const questionBlock = document.querySelector('.question-content');
const headerBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');

// Бургер-меню в мобильной версии
headerBurger.addEventListener('click', () => {
  header.classList.toggle('active');
});

// Вспомогательная функция, добавляющая/убирающая полученный в аргументе класс у полученного элемента
 const classToggleFunc = (element, className) => {
     element.classList.toggle(className);
 };
// Обработчик события, который добавляет/убирает класс "Актив" с помощью вспомогательной функции
 questionBlock.addEventListener('click', (e) => {
     if (e.target.closest('.question-item__marker')) {
         const parentElement = e.target.closest('.question-item')
         classToggleFunc(parentElement, 'question-item_active');
     }
 });