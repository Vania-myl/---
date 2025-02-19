
   // filepath: /c:/Users/MYL/课程/前端/网易云/JS/swiper.js
document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = document.querySelector('.erea-left');
    const imageList = document.querySelector('.image-list');
    const images = document.querySelectorAll('.image-list li');
    const prevButton = document.querySelector('.s-button.left');
    const nextButton = document.querySelector('.s-button.right');
    const dots = document.querySelectorAll('.dots-list .item');
    let autoPlay=true;
    let autoPlayTimeout
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        imageList.style.transform = `translateX(${offset}%)`;
        updateDots(index);
    }
    function updateDots(index) {
        dots.forEach((item, i) => {
            if (i == index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    
    

    prevButton.addEventListener('click', function (e) {
        e.preventDefault();
        autoPlay=false;

        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showSlide(currentIndex);
        swiper.style.backgroundImage = `url(${image[currentIndex]})`;
        autoPlayTimeout = setTimeout(function () {
            autoPlay = true;
        }, 3000);

    });
   

    nextButton.addEventListener('click', function (e) {
        autoPlay=false;
        e.preventDefault();
        
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
        swiper.style.backgroundImage = `url(${image[currentIndex]})`;
        autoPlayTimeout = setTimeout(function () {
            autoPlay = true;
        }, 3000);
        

    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function (e) {
            e.preventDefault();
            autoPlay = false;
            currentIndex = index;
            showSlide(currentIndex);
        swiper.style.backgroundImage = `url(${image[currentIndex]})`;
            autoPlayTimeout = setTimeout(function () {
                autoPlay = true;
            }, 3000);
        });
    });

    // 自动轮播
    setInterval(function () {
        if(autoPlay){
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex)};
    }, 3000); // 每3秒切换一次;

// 背景图片
    const swiper = document.querySelector('.swiper');
    const image = [
        '../images/bc-images3.1.jpg',
        '../images/bc-images2.1.jpg',
        '../images/bc-images1.1.jpg',
        '../images/bc-images4.1.jpg',
        '../images/bc-images5.1.jpg'
    ];

    function changeBackgroundImage() {
        if(autoPlay){
        swiper.style.backgroundImage = `url(${image[currentIndex]})`;
        currentIndex = (currentIndex + 1) % image.length;
    }}

    // 初始化背景图片
    changeBackgroundImage();

    // 每3秒更改一次背景图片
    setInterval(changeBackgroundImage, 3000);
});


