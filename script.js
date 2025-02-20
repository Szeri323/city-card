const body = document.querySelector("body")
const toggleBtn = document.getElementById("toggle-btn")

toggleBtn.addEventListener("click", changeColorMode)

function setThemeFromLocalStorage() {
    if (localStorage.getItem("theme") != null && localStorage.getItem("theme") == "dark") {
        body.setAttribute("data-theme", "dark")
    }
    else {
        body.setAttribute("data-theme", "light")
    }
}

function changeColorMode() {

    if (body.getAttribute("data-theme") == "dark") {
        body.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
    }
    else {
        body.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }
    // console.log(body.getAttribute("data-theme"))
}
setThemeFromLocalStorage()