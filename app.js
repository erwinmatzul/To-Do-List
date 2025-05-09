let botton = document.querySelector("#btnAdd")
let ul = document.querySelector("ul")
let texto = document.querySelector("#texto-input")

const agregar = (event) => {

    event.preventDefault()

    let li = document.createElement("li")
    li.classList.add("list-unstyled")

    let div = document.createElement("div")

    div.classList.add("form-control")

    let input = document.createElement("input")
    
    input.disabled = true
    input.value = texto.value
    texto.value = ""
    input.classList.add("rounded-3", "color")

    let bot1 = document.createElement("button")
    bot1.classList.add("btn", "btn-danger", "mx-2", "my-2")
    bot1.innerText = "Eliminar 🗑️"

    bot1.addEventListener("click", (event) => {
        ul.removeChild(li)
    }) 
    let bot2 = document.createElement("button")
    bot2.classList.add("btn", "btn-warning", "my-2")
    bot2.innerText = "Completado ✔️"

    bot2.addEventListener("click", (event) => {
        input.classList.add("text-decoration-line-through")
    })

    ul = document.querySelector("ul")
    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(bot1)
    div.appendChild(bot2)
}
botton.addEventListener("click", (event) => {
    agregar(event)             
})

texto.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        agregar(event)
    }
})
