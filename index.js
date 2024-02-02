const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".links");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active")
})
