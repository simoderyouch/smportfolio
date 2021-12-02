//preload
window.onload = () => {
    setTimeout(function () {
      document.querySelector(".loader-wrapper").classList.add("hidden");
    }, 2000);
  };
  
//swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });