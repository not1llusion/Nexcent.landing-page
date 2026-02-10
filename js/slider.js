const track = document.querySelector(".hero__track");
const dots = document.querySelectorAll(".hero__dot");
let index = 0;


function moveSlider(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('hero__dot--active'));
    dots[index].classList.add('hero__dot--active');    
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        moveSlider(i);
    })
});

function restartAutoplay() {
    let autoplay = setInterval(() => {
        index++;

        if (index >= dots.length) {
            index = 0;
        }
        
        moveSlider(index);

    }, 1000);
}

restartAutoplay();


// track.addEventListener('mouseenter', () => clearInterval(autoplay));
// track.addEventListener('mouseleave', () => restartAutoplay());