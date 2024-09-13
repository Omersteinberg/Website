document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.hidden');
    animateElements.forEach((el) => observer.observe(el));
});
