let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Function to start the slideshow with auto play
function startSlideshow() {
    showSlides(); // Show initial slide
    slideInterval = setInterval(showSlides, 4000); // Change image every 4 seconds
}

// Function to change slide manually
function plusSlides(n) {
    clearInterval(slideInterval); // Stop the autoplay
    slideIndex += n;
    if (slideIndex < 1) slideIndex = document.getElementsByClassName("mySlides").length;
    if (slideIndex > document.getElementsByClassName("mySlides").length) slideIndex = 1;
    showSlides();
    startSlideshow(); // Restart autoplay
}

// Function to set the current slide
function currentSlide(n) {
    clearInterval(slideInterval); // Stop the autoplay
    slideIndex = n;
    showSlides();
    startSlideshow(); // Restart autoplay
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", startSlideshow);
