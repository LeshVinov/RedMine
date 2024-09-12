

// показываем и скрываем символы пароля
const togglePasswords = document.querySelectorAll('.toggle-password');
togglePasswords.forEach(togglePassword => {
    const passwordField = togglePassword.previousElementSibling;
    const formGroup = passwordField.parentElement;

    togglePassword.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            formGroup.classList.add('active');
        } else {
            passwordField.type = 'password';
            formGroup.classList.remove('active');
        }
    });
});


// страница с выбором тарифа
(function() {
    // Получаем родительский элемент с классом payment__rate
    const paymentRateContainer = document.querySelector('.payment__rate');

    // Если контейнер существует на странице
    if (paymentRateContainer) {
        // Получаем все элементы с классом item внутри этого контейнера
        const items = paymentRateContainer.querySelectorAll('.item');

        // Функция для установки класса active первому элементу
        function activateFirstItem() {
            if (window.innerWidth < 992) {
                items[0].classList.add('active');
            }
        }

        // Выполняем функцию при загрузке страницы
        activateFirstItem();

        // Добавляем обработчик события клика для каждого элемента
        items.forEach(item => {
            item.addEventListener('click', () => {
                // Убираем класс active у всех элементов внутри контейнера
                items.forEach(i => i.classList.remove('active'));

                // Добавляем класс active текущему элементу
                item.classList.add('active');
            });
        });

        // Обновляем состояние при изменении размеров окна
        window.addEventListener('resize', () => {
            if (window.innerWidth < 992) {
                // Если экран меньше 992px, активируем первый элемент, если нет активного
                if (!paymentRateContainer.querySelector('.item.active')) {
                    items[0].classList.add('active');
                }
            } else {
                // Удаляем класс active у всех элементов при расширении экрана
                items.forEach(i => i.classList.remove('active'));
            }
        });
    }
})();