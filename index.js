
// Navbar
const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".links");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active")
})


// tabs

let tabbtn=document.querySelectorAll(".tab-btn");
let all_content=document.querySelectorAll(".content");

tabbtn.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        tabbtn.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active");

        all_content.forEach(content=>{content.classList.remove("active2")})
        all_content[index].classList.add("active2");
    })
})

