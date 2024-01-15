const navbar_toggler = document.querySelector(".j_navbar_toggler"),
    adventure_tabs = document.querySelector(".j_adventure_tabs")

const adventure_tabs_links = adventure_tabs ? adventure_tabs.querySelectorAll(".nav-link") : null

navbar_toggler && navbar_toggler.addEventListener("click", ({ target }) => {
    target.classList.toggle("active")
})

adventure_tabs_links && adventure_tabs_links.forEach((link, i, arr) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        arr.forEach(item => link !== item && item.classList.remove("active"))
        link.classList.add("active")
    })
})