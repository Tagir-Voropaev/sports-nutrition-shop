document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.stories-carousel-wrapper');
    const buttonLeft = document.querySelector('.stories-carousel-button-left');
    const buttonRight = document.querySelector('.stories-carousel-button-right');
    
    let position = 0; // Начинаем с первой позиции
    
    // Получаем ширину одного слайда
    function getSlideWidth() {
        const slide = document.querySelector('.stories-carousel-item-block');
        return slide.offsetWidth;
    }
    
    buttonRight.addEventListener('click', () => {
        const slideWidth = getSlideWidth();
        position -= slideWidth;
        
        // Проверяем, достигли ли мы конца (второй позиции)
        const limit = -(slideWidth); // Одна ширина слайда (для второй позиции)
        if (position < limit) {
            position = slideWidth; // Переходим к крайней левой позиции
        }
        
        wrapper.style.transform = `translateX(${position}px)`;
    });
    
    buttonLeft.addEventListener('click', () => {
        const slideWidth = getSlideWidth();
        position += slideWidth;
        
        // Проверяем, находимся ли мы в начале
        if (position > slideWidth) { // Увеличили на одну позицию
            position = -(slideWidth); // Переходим ко второй позиции
        }
        
        wrapper.style.transform = `translateX(${position}px)`;
    });
});