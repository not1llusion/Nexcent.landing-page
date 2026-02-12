const track = document.querySelector(".hero__track");
const dots = document.querySelectorAll(".hero__dot");
let index = 0;


function moveSlider(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove('hero__dot--active');
        dot.removeAttribute("aria-current");
    });
    dots[index].classList.add('hero__dot--active');   
    dots[index].setAttribute("aria-current", true); 
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        moveSlider(i);
    })
});

let autoplay;

function startAutoplay() {
    autoplay = setInterval(() => {
        index++;

        if (index >= dots.length) {
            index = 0;
        }
        
        moveSlider(index);

    }, 5000);
    
}

startAutoplay();

function pauseAutoplay() {
    clearInterval(autoplay);
}


track.addEventListener('mouseenter', () => pauseAutoplay());
track.addEventListener('mouseleave', () => startAutoplay());