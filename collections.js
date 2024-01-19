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
   sidenav.style.left = "0"
})

//Close Sidenav
var closenav = document.querySelector(".closenav")
closenav.addEventListener("click", function () {
   sidenav.style.left = "-60%"
})

//Collections

// //Filters

// var check = document.getElementsByName("check")
// var container = document.querySelector(".product__pics")
// var  divlist= container.querySelectorAll("div")
// var summer = container.getElementById("summer")


// // skill = []

// for (count = 0; count < check.length; count++) {
//    check[count].addEventListener("click", function () {
//       if (event.target.checked) {
//          console.log(event.target.value)
//          // skill.push(event.target.value)
//          var enteredvalue = event.target.value

//          if (divlist.textContent==enteredvalue) {
//             divlist.style.display = "none"
//          }
//          else {
//             divlist.style.display = "block"
//          }


//       }
//       // else {
//       //    console.log("unchecked")
//       //    //find index
//       //    var index = skill.indexOf(event.target.value)
//       //    // skill.splice(index, 1)
//       //    enteredvalue = event.target.checked
//       //    for (i = 0; i < h2list.length; i++) {
//       //       if (h2list[i].textContent.indexOf(enteredvalue) < 0) {
//       //          h2list[i].style.display = "none"
//       //       }
//       //       else {
//       //          h2list[i].style.display = "block"
//       //       }
//       //    }
//       // }

//    }
//    )

// }








//Product List

var search = document.getElementById("search")
var container = document.querySelector(".product__pics")
var divlist = container.querySelectorAll("div")

search.addEventListener("keyup", function () { // var enteredvalue=search.value

   var enteredvalue = event.target.value.toUpperCase()
   for (count = 0; count < divlist.length; count++) {
      if (divlist[count].textContent.toUpperCase().indexOf(enteredvalue) < 0) {
         divlist[count].style.display = "none"

      }
      else {
         divlist[count].style.display = "block"
      }
   }
})