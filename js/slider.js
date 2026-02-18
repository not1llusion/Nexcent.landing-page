const track = document.querySelector(".hero__track");
const dots = document.querySelectorAll(".hero__dot");
const slider = document.querySelector(".hero__slider");
let index = 0;


function moveSlider(i) {
    index = i;

    const w = slider.clientWidth;
    track.style.transform = `translateX(-${index * w}px)`;

    dots.forEach(dot => {
        dot.classList.remove('hero__dot--active');
        dot.removeAttribute("aria-current");
    });
    dots[index].classList.add('hero__dot--active');   
    dots[index].setAttribute("aria-current", "true"); 
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        moveSlider(i);
    })
});

let autoplay;

function startAutoplay() {
     autoplay = setInterval(() => moveSlider((index + 1) % dots.length), 5000);
    
}

startAutoplay();

function pauseAutoplay() {
    clearInterval(autoplay);
}


track.addEventListener('mouseenter', () => pauseAutoplay());
track.addEventListener('mouseleave', () => startAutoplay());


const openBurger = document.querySelector(".btn--burger");
const closeBurger = document.querySelector(".btn-close");

const burgerMenu = document.querySelector(".mobile-menu");

openBurger.addEventListener("click", () => {
    burgerMenu.classList.add("is-open");
    console.log("opened")
})

closeBurger.addEventListener("click", () => {
    burgerMenu.classList.remove("is-open");
    console.log("closed")
});