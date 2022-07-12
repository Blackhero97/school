window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
   });
   const menubtn = document.querySelector('.nav-menu-btn');
   const navclose = document.querySelector('.nav-close-btn');
   const navigation = document.querySelector('.navigation');
   
   menubtn.addEventListener('click', ()=>{
     navigation.classList.add('active')
   });
   navclose.addEventListener('click', ()=>{
     navigation.classList.remove('active')
   });
   
   var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });