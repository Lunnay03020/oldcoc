let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let monElementAudio = document.getElementById('musique');
let scrollToTopBtn = document.getElementById('scrollup');

monElementAudio.volume = 0.25;

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const sr = ScrollReveal ({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
sr.reveal('.scroll-up',{delay:500, origin:'right'});