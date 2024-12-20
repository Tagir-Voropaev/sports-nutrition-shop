document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.product-carousel-wrapper');
    const buttonLeft = document.querySelector('.product-button-left');
    const buttonRight = document.querySelector('.product-button-right');
    
    wrapper.style.transition = 'transform 0.3s ease-in-out';
    
    setTimeout(() => {
        const slideWidth = document.querySelector('.product-carousel-img').offsetWidth;
        const gap = 34;
        const slideFullWidth = slideWidth + gap;
        
        // Начинаем с первой позиции
        let currentPosition = 0;
        wrapper.style.transform = `translateX(${currentPosition}px)`;
        
        const slidesCount = 5; // Всего 5 позиций
        const maxOffset = -(2 * slideFullWidth); // Ограничиваем перемещение вправо двумя слайдами

        buttonRight?.addEventListener('click', () => {
            if (currentPosition > maxOffset) {
                currentPosition -= slideFullWidth;
                wrapper.style.transform = `translateX(${currentPosition}px)`;
            }
        });

        buttonLeft?.addEventListener('click', () => {
            // Позволяем листать влево на 2 позиции от начальной
            if (currentPosition < (2 * slideFullWidth)) {
                currentPosition += slideFullWidth;
                wrapper.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    }, 100);
});