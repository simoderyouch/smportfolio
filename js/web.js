'use strict'
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


  //color

/*
  let sliderCheck = document.querySelectorAll(".swiper-slide");
  let back = document.querySelector('.webSection')
  let arrayColor = ["#cd3b12", "#efefef","#4d13d1","#fff1da","#8c8e8a","#f0f0f0"]
     for (let i = 0; i < sliderCheck.length; i++) {
    if(sliderCheck[i].classList.contains("swiper-slide-next"))  {
       console.log(arrayColor[i])
       back.style.backgroundColor = arrayColor[i]
    }
}
  */