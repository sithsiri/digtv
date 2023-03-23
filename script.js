var slideIndex = 0;

var slides = document.getElementsByClassName("mySlides");
carousel();

function carousel() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  if (slideIndex > slides.length) {slideIndex = 0} 
  slides[slideIndex].style.display = "block"; 
  slideIndex++;
  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
