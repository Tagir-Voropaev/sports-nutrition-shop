document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.partners-slider-wrapper');
    const buttonLeft = document.querySelector('.partners-slider-button.partners-button-left');
    const buttonRight = document.querySelector('.partners-slider-button.partners-button-right');
    
    // Перемещаем последние 3 слайда в начало
    const slides = wrapper.querySelectorAll('.partners-slide');
    const lastThreeSlides = Array.from(slides).slice(-3);
    lastThreeSlides.reverse().forEach(slide => {
        wrapper.insertBefore(slide, wrapper.firstChild);
    });
    
    let position = 0; // Начальная позиция уже задана в CSS
    
    // Получаем ширину одного слайда
    function getSlideWidth() {
        const slide = wrapper.querySelector('.partners-slide');
        const style = window.getComputedStyle(slide);
        const margin = parseFloat(style.marginRight) || 0;
        return slide.offsetWidth + margin;
    }
    
    buttonRight.addEventListener('click', () => {
        const slideWidth = getSlideWidth();
        position -= slideWidth;
        
        // Проверяем, достигли ли мы предела (3 клика вправо от начальной позиции)
        const limit = -slideWidth * 3;
        if (position < limit) {
            position = 0; // Возвращаемся к начальной позиции
        }
        
        wrapper.style.transform = `translateX(${position}px)`;
    });
    
    buttonLeft.addEventListener('click', () => {
        const slideWidth = getSlideWidth();
        position += slideWidth;
        
        // Проверяем, достигли ли мы предела (3 клика влево от начальной позиции)
        if (position > slideWidth * 3) {
            position = 0; // Возвращаемся к начальной позиции
        }
        
        wrapper.style.transform = `translateX(${position}px)`;
    });
});