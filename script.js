//ส่วนของการทำให้เกิดหน้า สไลด์โชว์
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//ส่วนที่ทำให้ปุ่ม Hamburger Menu ขยับและใช้งานได้
function toggleHam(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById('myMenu');
  if (myMenu.className === 'menu'){
    myMenu.className +=  ' menu-active'
  }else{
    myMenu.className =  'menu'
  }
}


