var slideIndex = 0;

var slides = document.getElementsByClassName("mySlides");
carousel();

function carousel() {
  if (!slides[slideIndex].complete) {
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0;}
    setTimeout(carousel, 100); // wait a little before checking the next image
    return;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex].style.display = "block";
  
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0;}
  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
