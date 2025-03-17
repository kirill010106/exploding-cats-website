document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий путь страницы
    const currentPath = window.location.pathname;
    
    // Находим все ссылки меню
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        // Получаем путь из атрибута href ссылки
        const linkPath = new URL(link.href, window.location.origin).pathname;
        
        // Проверяем, соответствует ли путь ссылки текущему пути
        if (currentPath === linkPath || 
            (currentPath.endsWith('/') && linkPath === currentPath + 'index.html') ||
            (linkPath.endsWith('/') && currentPath === linkPath + 'index.html')) {
            
            // Удаляем класс 'active' у всех ссылок
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Добавляем класс 'active' к текущей ссылке
            link.classList.add('active');
            
            // Если ссылка находится в выпадающем меню, также активируем родительский элемент
            if (link.classList.contains('dropdown-item')) {
                const dropdownToggle = link.closest('.dropdown').querySelector('.dropdown-toggle');
                if (dropdownToggle) {
                    dropdownToggle.classList.add('active');
                }
            }
        }
    });
});
