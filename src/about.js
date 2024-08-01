const renderAboutUs = () =>{

    const container = document.getElementById("content")

    const element = document.createElement("div")
    element.classList.add("about-us-container")

    const title = document.createElement("h1")
    title.classList.add("about-us-title")
    title.innerText = "about us"

    const text = document.createElement("p")
    text.classList.add("about-us-text")
    text.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Commodi repellat id dolores culpa consectetur officia impedit, distinctio nulla
     sint dicta quaerat voluptas soluta ipsa debitis dolorem aperiam velit! Vero, repellat.
      Amet perspiciatis minus perferendis incidunt ex omnis nihil eum saepe, recusandae officiis 
      esse nesciunt ipsa illum excepturi ab temporibus iusto tenetur id.`

     element.append(title,text)

    container.innerHTML = ''
    container.appendChild(element)

}

export default renderAboutUs;