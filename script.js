document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Удаление класса "active" у всех кнопок и вкладок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.opacity = 0;
            });

            // Добавление класса "active" к выбранной кнопке и вкладке
            this.classList.add('active');
            const activeTabContent = document.getElementById(targetTab);
            activeTabContent.classList.add('active');

            // Плавное появление контента вкладки
            setTimeout(() => {
                activeTabContent.style.opacity = 1;
            }, 50);
        });
    });
});
