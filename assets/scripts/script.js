const navbar_toggler = document.querySelector(".j_navbar_toggler")

navbar_toggler.addEventListener("click", ({ target }) => {
    target.classList.toggle("active")
})