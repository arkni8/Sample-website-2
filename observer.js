
let landingBounceAnimation;
let headerSection;
let h2InPricing;
let hero;
let waveContainer;
let statsBox;

window.addEventListener("load", () => {
    landingBounceAnimation = document.querySelector('.img');
    hero = document.querySelector('.hero-section');
    headerSection = document.querySelector('.header');
    h2InPricing = document.querySelector('.pricing2 h2');
    sliderContainer = document.querySelector('.pricing2 .side-scroll2');
    waveContainer = document.querySelector('.wave-container');
    statsBox = document.querySelectorAll('.wave-container .stats');
});


// Car bouncing Animation
const bouncingAnimationOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

const bouncingCarObserver = new IntersectionObserver(function (entries, _bouncingCarObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            landingBounceAnimation.classList.add('animation-paused');
        } else {
            landingBounceAnimation.classList.remove('animation-paused');
        }
    });
}, bouncingAnimationOptions);

// Header Pulldown Animation
const headerScrolledOptions = {
    root: null,
    rootMargin: '0px 0px 200px 0px',
    threshold: 0.65
}

const headerScrolled = new IntersectionObserver(function (entries, _headerScrolled) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            headerSection.classList.add('header-scrolled');
        } else {
            headerSection.classList.remove('header-scrolled');
        }
    });
}, headerScrolledOptions);

// Fade-in animation of pricing page
const h2PricingOption = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.4
}

const fadeInAnimation = new IntersectionObserver(function (entries, fadeInAnimation) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            h2InPricing.classList.add('fadeIn');
            fadeInAnimation.unobserve(entry.target);
        }
    });
}, h2PricingOption);

// Pausing for css animation in pricing slider
const sliderObserverOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}

const sliderAnimationObserver = new IntersectionObserver(function (entries, _sliderAnimationObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add('animation-paused');
        } else {
            entry.target.classList.remove('animation-paused');
        }
    });
}, sliderObserverOption);

// Fade-in animation for testimonials stat boxes
const statsBoxObserverOption = {
    rot: null,
    rootMargin: '0px',
    threshold: 0.4
}

const statBoxObserver = new IntersectionObserver(function (entries, statBoxObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statsBox.forEach(stat => {
                stat.classList.add('slide-in-stats');
            })
            statBoxObserver.unobserve(entry.target);
        }
    });
}, statsBoxObserverOption);

// on load event
window.onload = () => {
    bouncingCarObserver.observe(hero);
    headerScrolled.observe(hero);
    fadeInAnimation.observe(h2InPricing);
    sliderAnimationObserver.observe(sliderContainer);
    statBoxObserver.observe(waveContainer);
    
}

