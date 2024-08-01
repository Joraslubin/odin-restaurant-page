const renderHome = () => {

    const container = document.getElementById("content")

    const element = document.createElement("div")
    element.classList.add("hero")

    const title = document.createElement("h1")
    title.classList.add("hero__title")
    title.innerText = "enjoy our food"

    const text = document.createElement("p")
    text.classList.add("hero__text")
    text.innerText = "Only the best ingredients for our dishes"

    element.append(title,text)    
    
    container.innerHTML = ''
    container.appendChild(element)

}

export default renderHome;