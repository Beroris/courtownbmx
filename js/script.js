document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navbar = document.getElementById("navbar");
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    let lastScrollY = window.scrollY;
    let isHidden = false;

    // Mobile nav toggle
    hamburgerIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Image carousel
    const carouselImages = document.querySelectorAll('.image-carousel img');
    let currentImageIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 5000); // Change image every 5 seconds

    // Navbar hide/show on scroll
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50 && !isHidden) {
            // Scrolling down past 50px - hide navbar
            navbar.style.top = "-80px"; // Move it up out of view
            isHidden = true;
        } else if (currentScrollY < lastScrollY && isHidden) {
            // First scroll up - show navbar
            navbar.style.top = "0";
            isHidden = false;
        }

        lastScrollY = currentScrollY; // Update last scroll position
    });
});
