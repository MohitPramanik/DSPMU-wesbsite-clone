const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slides')
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')

const totalLength = slides.length
let currentIndex = 0;
const sliderWidth = slides[0].clientWidth;


const animationNone = () => {
    slides.forEach(element => {
        element.style.animationName = 'none';
    });
}

const increment = () => {
    if (currentIndex < totalLength - 1)
        currentIndex++;
    else
        currentIndex = 0;
}

const decrement = () => {
    if (currentIndex > 0)
        currentIndex--;
    else
        currentIndex = totalLength - 1;
}

setInterval(() => {
    animationNone();
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`
    slides[currentIndex].style.animationName = 'zoom-out'
    increment();
}, 5000);

button1.onclick = () => {
    increment();
    animationNone();
    slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`
    slides[currentIndex].style.animationName = 'zoom-out'
}

button2.onclick = () => {
    decrement();
    animationNone();
    slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`
    slides[currentIndex].style.animationName = 'zoom-out'
}
