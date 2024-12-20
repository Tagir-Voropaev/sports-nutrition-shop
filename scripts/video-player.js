document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.about-video-play');
    const videoPlayer = document.querySelector('.about-video-player');
    const videoPlayerBg = document.querySelector('.about-video-bg');
    
    playButton?.addEventListener('click', () => {
        // Проверяем существование элементов перед использованием
        if (!videoPlayer || !videoPlayerBg) return;

        // Создаем корректный URL для YouTube с автовоспроизведением
        const baseVideoSrc = 'https://www.youtube.com/embed/22xiS_hjM7I';
        videoPlayer.src = `${baseVideoSrc}?autoplay=1&enablejsapi=1`;
        
        // Показываем iframe
        videoPlayer.classList.add('active');
        
        // Скрываем превью с кнопкой
        videoPlayerBg.style.display = 'none';
    });
});