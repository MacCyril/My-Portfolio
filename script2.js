// var slideIndex = 1;
// showSlides(slideIndex);

// function showSlides(C){
// var slides = document.getElementsByClassName(text1);
// var C;

// for (C=0;C<slides.length;C++){
//     slides[C].className.replace('active',"");
// }

// slides[slideIndex-1].style.display = "block";
// dots[slideIndex-1].className += " active";
// }



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("text1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,5500); // Change image every 2 seconds
}
function  drawWhenScroll(){
    var speed = 100; // adjust speed accordingly
    var offset = speed/window.top;
    if(offset < LOGOLENGTH) {
    SVGLOGO.style.strokeDashoffset = LOGOLENGTH - offset;
    console.log(window.top)
  }
}
window.scroll

// slide on viewport
// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 100;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);


// phone nav display================================11111
barX = document.getElementById('barX');
nav = document.getElementById("NavBar");
bars = document.getElementById('bars');
let lsit__a = document.querySelector('[mdn1]');


bars.addEventListener('click', () =>{
    nav.classList.toggle('active');
    bars.classList.toggle('active');
} )

function home(){
    // nav.style.left="-150px";
    nav.classList.toggle('active');
    bars.classList.toggle('active');
}

// ============================map addition...... problem not showing=======================
function myMap(){
    mapCanvas = document.getElementsByClassName("maps");
    map0ptions={
        center: new goggle.maps.LatLng(12.7,22.3), zoom:10
    };
    var map = myMap(mapCanvas,map0ptions);
}


// function showNav(){
//     nav.style.left="0px";
//     bars.style.display="none";
//     barX.style.display="block";
    
// }
// function hideNav(){
//     nav.style.left="-150px";
//     bars.style.display="block";
//     barX.style.display="none";
// }
// phone nav display==========================2222=========================

