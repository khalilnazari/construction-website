let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');


// navbar toggle
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

// info toggle 
document.querySelector('#info-btn').onclick = () =>{
  contactInfo.classList.add('active');
}
document.querySelector('#close-contact-info').onclick = () =>{
  contactInfo.classList.remove('active');
}


// Search 
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
};


// login form toggle 
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active'); 
};


// home-slider
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 


// Review Slider 
var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// blog slider
var swiper = new Swiper(".blogs-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
});