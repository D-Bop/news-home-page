const navSlide = () => {
    const menu = document.querySelectorAll(".menu") 
    const nav = document.querySelectorAll(".nav-links")
    menu.addEventListener("click", () => {
        nav.classList.toggle('nav-active')
    })
}
navSlide();