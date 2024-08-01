import "./style.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAboutUs from "./about.js";

renderHome()

const handleClick = (e) => {
    const elementId = e.target.id

    switch (elementId) {
        case 'menu':
            renderMenu()
            break;
        case 'about':
            renderAboutUs()
            break;
        default:
            renderHome()
    }
}

const buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => {
    btn.addEventListener("click", e => handleClick(e))
})


