//Selecting closead
var closead = document.querySelector(".closead")
var add = document.querySelector(".add")

closead.addEventListener("click", function () {
   add.style.display = "none"
})

// Show Sidenav

var menuicon = document.querySelector(".menuicon")
var sidenav = document.querySelector(".sidenav")

menuicon.addEventListener("click", function () {
   sidenav.style.display = "block"
})

//Close Sidenav
var closenav = document.querySelector(".closenav")
closenav.addEventListener("click", function () {
   sidenav.style.display = "none"
})



//Image Slide
var slideImages = document.querySelector(".slide__images img")
var rBtn = document.getElementById("slider-right-activate")
var lBtn = document.getElementById("slider-left-activate")
var imgList = ["images/slider-one.jpg", "images/slider-one.jpg", "images/slider-one.jpg"]
var count = 0

rBtn.addEventListener("click", function () {
  count = (count + 1) % imgList.length
  updateImage()
})

lBtn.addEventListener("click", function () {
  count = (count - 1 + imgList.length) % imgList.length
  updateImage()
})

function updateImage() {
  slideImages.style.opacity = 0
  setTimeout(() => {
    slideImages.src = imgList[count]
    slideImages.style.opacity = 1
  }, 500)
}
