
//preload
window.onload = () => {
  setTimeout(function () {
    document.querySelector(".loader-wrapper").classList.add("hidden");
  }, 2000);
};



//next list
let firstClick = document.querySelector('.n1');
let backBtn = document.querySelector('.b1');
let list = document.querySelectorAll("li");
firstClick.addEventListener('click', function() {
  firstClick.classList.add("hide")
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("sh")
  }
})
backBtn.addEventListener('click', function() {
  firstClick.classList.remove("hide")
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("sh")
  }
})

let 