const darkMode = document.querySelector(".dark-theme")
const nav = document.querySelector(".navbar")
const hero = document.querySelector(".hero")


function enableDarkMode(){
    document.body.classList.toggle("dark-theme")
    nav.classList.toggle("dark-theme")
    hero.classList.toggle("dark-theme")
    document.body.style.transition = "2s"
    nav.style.transition = "2s"
    hero.style.transition = "2s"



    if( document.body.classList.contains("dark-theme")){
        darkMode.src = "img/clear.png"

    }else{
        darkMode.src = "img/moon.png"
    }
}


darkMode.addEventListener("click", enableDarkMode)