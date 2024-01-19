  // Show Sidenav                 
 var menuicon=document.querySelector(".menuicon")
 var sidenav=document.querySelector(".sidenav")
 
 menuicon.addEventListener("click",function()
{
   sidenav.style.left="0"
})

//Close Sidenav
 var closenav=document.querySelector(".closenav")
 closenav.addEventListener("click",function()
 {
   sidenav.style.left="-60%"
 })





 //Form Validation 
 
var submit=document.getElementById("submit")
submit.addEventListener("click",function(){
    event.preventDefault()
    var emailRegex=/^[a-zA-z0-9]+@gmail\.com/
    var subjectRegex=/^[a-zA-Z]+$/
    var messageRegex=/^[a-zA-Z]+$/
    var email=document.getElementById("email") 
    var subject=document.getElementById("subject") 
    var message=document.getElementById("message") 
    var validate=true
    
            if(emailRegex.test(email.value)==false)
            {
                document.querySelector(".emailError").style.display="block"
                validate=false
            }
            else{
                document.querySelector(".emailError").style.display="none"
            }
            
            if(subjectRegex.test(subject.value)==false)
            {
                document.querySelector(".subjectError").style.display="block"
                validate=false
            }
            else{
                document.querySelector(".subjectError").style.display="none"
            }
            if(messageRegex.test(message.value)==false)
            {
                document.querySelector(".massegeError").style.display="block"
                validate=false
            }
            else{
                document.querySelector(".massegeError").style.display="none"
            }


    if(validate==true)
        {
            alert("Form submitted successfully")
        }
})
 