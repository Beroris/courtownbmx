document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
      // Mobile nav
    hamburgerIcon.addEventListener('click', ()=>{
         nav.classList.toggle('active')
    })
  
  
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
  
  
  });