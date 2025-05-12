let botton = document.querySelector("#btnAdd")
let ul = document.querySelector("ul")
let texto = document.querySelector("#texto-input")
let filtro = document.querySelector("#filtro")

let tareas = []


const filtroTareas = (value) => {

    let filtro = []

    if (value == "Pendiente") {
        filtro = tareas.filter(item => item.isCompleted == false)
    } else if (value == "Completados") {
        filtro = tareas.filter(item => item.isCompleted == true)
    } else {
        filtro = tareas;
    }
    ul.innerHTML = ""

    filtro.forEach(item => {

        let li = document.createElement("li")
        li.classList.add("list-unstyled")

        let div = document.createElement("div")

        div.classList.add("form-control")

        let input = document.createElement("input")

        input.value = item.texto
        input.disabled = true
        input.value = item.texto

        input.classList.add("rounded-3", "color")

        let bot1 = document.createElement("button")
        bot1.classList.add("btn", "btn-danger", "mx-2", "my-2")
        bot1.innerText = "Eliminar 🗑️"

        let bot2 = document.createElement("button")
        bot2.classList.add("btn", "btn-warning", "my-2")
        bot2.innerText = "Completado ✔️"


        ul = document.querySelector("ul")
        ul.appendChild(li)
        li.appendChild(div)
        div.appendChild(input)
        div.appendChild(bot1)
        div.appendChild(bot2)


    })
    console.log(filtro)
}


const agregar = (event) => {

    event.preventDefault()

    let nuevaTarea = {

        texto: texto.value,
        isCompleted: false
    }

    let li = document.createElement("li")
    li.classList.add("list-unstyled")

    let div = document.createElement("div")

    div.classList.add("form-control")

    let input = document.createElement("input")


    input.disabled = true
    input.value = nuevaTarea.texto
    texto.value = ""
    input.classList.add("rounded-3", "color")

    let bot1 = document.createElement("button")
    bot1.classList.add("btn", "btn-danger", "mx-2", "my-2")
    bot1.innerText = "Eliminar 🗑️"

    bot1.addEventListener("click", (event) => {
        ul.removeChild(li)
        tareas = tareas.filter(item => item.texto != event.target.previousElementSibling.value)

        console.log(tareas)
    }
    )
    let bot2 = document.createElement("button")
    bot2.classList.add("btn", "btn-warning", "my-2")
    bot2.innerText = "Completado ✔️"

    bot2.addEventListener("click", (event) => {
        input.classList.add("text-decoration-line-through")

        tareas = tareas.map(item => {

            if (item.texto == event.target.previousElementSibling.previousElementSibling.value) {
                item.isCompleted = true
            }
            return item
        })
        console.log(tareas)
    })
    ul = document.querySelector("ul")
    ul.appendChild(li)
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(bot1)
    div.appendChild(bot2)

    tareas.push(nuevaTarea)
    console.log(tareas)
}
botton.addEventListener("click", (event) => {
    agregar(event)
})

texto.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        agregar(event)
    }
})

filtro.addEventListener("change", (event) => {

    filtroTareas(event.target.value)
})