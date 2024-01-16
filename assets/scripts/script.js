const navbar_toggler = document.querySelector(".j_navbar_toggler"),
    adventure_tabs = document.querySelector(".j_adventure_tabs"),
    toggle_qt = document.querySelectorAll(".j_toggle_qt")

const adventure_tabs_links = adventure_tabs ? adventure_tabs.querySelectorAll(".nav-link") : null

navbar_toggler && navbar_toggler.addEventListener("click", ({ target }) => target.classList.toggle("active"))

adventure_tabs_links && adventure_tabs_links.forEach((link, i, arr) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        arr.forEach(item => link !== item && item.classList.remove("active"))
        link.classList.add("active")
    })
})

toggle_qt && toggle_qt.forEach(qt_item => {
    const btn_minus = () => qt_item.querySelector(".minus"),
        btn_plus = () => qt_item.querySelector(".plus"),
        qt_area = () => qt_item.querySelector(".num"),
        limit = 20

    let num = () => parseInt(qt_area().innerText)

    btn_minus().addEventListener("click", () => {
        qt_area().innerText = num() > 0 ? num() - 1 : num()
        num() === 0 && btn_minus().querySelector("i").classList.replace("text-pictonBlue", "text-gray")
        num() < limit && btn_plus().querySelector("i").classList.replace("text-gray", "text-pictonBlue")
    })

    btn_plus().addEventListener("click", () => {
        qt_area().innerText = num() < limit ? num() + 1 : num()
        num() > 0 && btn_minus().querySelector("i").classList.replace("text-gray", "text-pictonBlue")
        num() === limit && btn_plus().querySelector("i").classList.replace("text-pictonBlue", "text-gray")
    })
})