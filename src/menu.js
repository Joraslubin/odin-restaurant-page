import beefMachado from "./assets/img/beef-mechado.jpg"
import breadOmelette from "./assets/img/bread-omelette.jpg"
import chickenEnchilada from "./assets/img/chicken-enchilada.jpg"
import pancakes from "./assets/img/pancakes.jpg"
import potatoSalad from "./assets/img/potato-salad.jpg"
import salmonPawnRisotto from "./assets/img/salmon-prawn-risotto.jpg"
import spaghettiBolognese from "./assets/img/spaghetti-bolognese.jpg"
import veganChocolateCake from "./assets/img/vegan-chocolate-cake.jpg"

const images = [ beefMachado,breadOmelette,chickenEnchilada,pancakes,potatoSalad,salmonPawnRisotto,spaghettiBolognese,veganChocolateCake]


const renderMenu = () => {

    const container = document.getElementById("content")
    const element = document.createElement("div")

    element.classList.add("menu-container")

    images.forEach(item => {

        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")

        const imgContainer = document.createElement("div")
        imgContainer.classList.add("img-container")

        const img = document.createElement("img")
        img.src = item
        img.loading = "lazy"

        const descriptionContainer = document.createElement("div")
        descriptionContainer.classList.add("description-container")

        const title = document.createElement("h2")
        title.classList.add("menu-item-title")
        title.innerText = 'fried chicken'

        const description = document.createElement("p")
        description.classList.add("menu-item-description")
        description.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime nulla delectus accusamus illum reprehenderit nisi consectetur repellat recusandae.`

        imgContainer.appendChild(img)
        descriptionContainer.append(title,description)
        menuItem.append(imgContainer,descriptionContainer)

        element.appendChild(menuItem)
    })

    container.innerHTML = ''
    container.appendChild(element)

}



export default renderMenu;