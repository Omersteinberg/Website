function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Add event listener to the hamburger menu
document.getElementById('hamburger').addEventListener('click', toggleMenu);

// Function to handle scroll and change navbar background
function handleScroll() {
    var navbar = document.querySelector('.nav_container');
    if (window.scrollY > 600) { //scroll threshold
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);