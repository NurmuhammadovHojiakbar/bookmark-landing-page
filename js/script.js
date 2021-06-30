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



const elTabs = document.querySelector(".tabs-content__list");
const elTabsLink = elTabs.querySelectorAll(".tabs-content__link");
const elPanel = document.querySelectorAll(".tabs-content__panel-container")

if(elTabsLink.length > 0){
    elTabsLink.forEach(function(link){
        link.addEventListener("click", function(evt){
            evt.preventDefault();
            
            elTabsLink.forEach(function(linkremove){
                linkremove.classList.remove("tabs-content__link-active")
            })

            link.classList.add("tabs-content__link-active")

            elPanel.forEach(function(panel){
                panel.classList.remove("tabs-content__panel-container-active")
            })

            document.querySelector(link.getAttribute("href")).classList.add("tabs-content__panel-container-active")
        })

    })
}


const elQuestion = document.querySelectorAll(".question__link")
const elQuestionText = document.querySelectorAll(".question__text")

if(elQuestion.length > 0){
    elQuestion.forEach(question =>{
        question.addEventListener("click", function(evt){
            evt.preventDefault();

            elQuestionText.forEach(function(textremove){
                textremove.classList.remove("question__text-active")
            })

            question.nextElementSibling.classList.add("question__text-active")
            
        })
    })
}