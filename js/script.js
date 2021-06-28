const elOpen = document.querySelector(".mobile-open__button")
const elClose = document.querySelector(".mobile-close__button")
const elOpenDiv = document.querySelector(".mobile-open")
const elNav = document.querySelector(".site-nav")


elOpen.addEventListener("click", function(){
    elOpenDiv.classList.add("mobile-content__hidden")
    elNav.classList.remove("mobile-content__hidden")
})

elClose.addEventListener("click", function(){
    elOpenDiv.classList.remove("mobile-content__hidden")
    elNav.classList.add("mobile-content__hidden")
})