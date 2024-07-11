
// Sticky Navigation Effect On Scroll

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


// Responsive Slide-In Navigation Bar Effect

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', function(){
  menu.classList.add('active');
});

closeBtn.addEventListener('click', function(){
  menu.classList.remove('active');
});