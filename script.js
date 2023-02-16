// carousal
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
let lastTime=0;
function slideChange(time){
    if(time-lastTime>8500){
        lastTime=time;
        plusSlides(1);
    }
    requestAnimationFrame(slideChange)
}
requestAnimationFrame(slideChange)

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// carousal