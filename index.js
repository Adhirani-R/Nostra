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
   sidenav.style.left = "0%"
})

//Close Sidenav
var closenav = document.querySelector(".closenav")
closenav.addEventListener("click", function () {
  sidenav.style.left = "-60%"
})

//Image Slide

let cur_slide=0 
const total_slide=3
function showslide(index)
{
  const carousel=document.querySelector('.slide__images')
  const offset=-index*100
  carousel.style.transform=`translateX(${offset}%)`
  cur_slide=index
}
function next()
{
  cur_slide=(cur_slide+1)%total_slide
  showslide(cur_slide)
}
function prev()
{
  cur_slide=(cur_slide-1 + total_slide) % total_slide
  showslide(cur_slide)
}

