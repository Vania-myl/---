
   // filepath: /c:/Users/MYL/课程/前端/网易云/JS/swiper.js
document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = document.querySelector('.erea-left');
    const imageList = document.querySelector('.image-list');
    const images = document.querySelectorAll('.image-list li');
    const prevButton = document.querySelector('.button.left');
    const nextButton = document.querySelector('.button.right');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        imageList.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // 自动轮播
    setInterval(function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    }, 3000); // 每3秒切换一次
});
