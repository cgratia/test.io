window.addEventListener('load', () => {
    const slider = document.querySelector('.logo-slider');
    const slide = document.querySelector('.logo-slide');

    // Clone the slide content to create a seamless loop effect
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
});

