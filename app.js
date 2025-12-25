
    // Mobile menu toggle
    
const menu= document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");
const locationbtn = document.getElementById("choose-location-btn");


menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    locationbtn.classList.toggle("active");
});


        // Contact button
        document.querySelector('.contact-btn').addEventListener('click', function() {
            alert('Contact form would open here!');
        });

        // Get in touch button
        document.querySelector('.get-touch-btn').addEventListener('click', function() {
            alert('Contact form would open here!');
        });

        // Search icon
        document.querySelector('.search-icon').addEventListener('click', function() {
            alert('Search functionality would open here!');
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


          // Explore solutions button
        document.querySelector('.explore-btn').addEventListener('click', function() {
            alert('Solutions page would open here!');
        });