import { Tarea } from "./clases/tarea.js"
import { Tareas } from "./clases/tareas.js"
import { mostrarTares } from "./mostrarTares/funcionTarea.js"

const tareas = new Tareas()

const nuevaTarea = document.querySelector("#texto-input")
const filtroTareas = document.querySelector("#filtro")
const buscarTarea = document.querySelector("#buscar")
const listaTares = document.querySelector("#todo-list")
const form = document.querySelector("#form")

form.addEventListener("submit", (event) => {

    event.preventDefault()

    let tareaNueva = nuevaTarea.value
    let filtro = filtroTareas.value

    if (tareaNueva == "") {
        alert("No hay tarea asignada")
        return
    }
    const tarea = new Tarea(tareaNueva, filtro)

    tareas.agregar(tarea)
  mostrarTares(tareas.todasLasTares());

    nuevaTarea.value = ""
})

listaTares.addEventListener("click", (e) => {

    if (e.target.classList.contains("eliminar")) {

        const id = e.target.dataset.id;
        tareas.eliminar(id)

    } else if (e.target.classList.contains("completado")) {

        let input = e.target.parentElement.querySelector(".inputTarea");

        input.classList.toggle("text-decoration-line-through");

        const id = e.target.dataset.id;
        tareas.completado(id)
    }
   mostrarTares(tareas.todasLasTares());
})

filtroTareas.addEventListener("change", () => {
    const valor = filtroTareas.value;
    let tareasFiltradas = tareas.todasLasTares();

    if (valor == "Completados") {
        tareasFiltradas = tareasFiltradas.filter(tarea => tarea.completado == true);
    } else if (valor == "Pendiente") {
        tareasFiltradas = tareasFiltradas.filter(tarea => tarea.completado == false);
    }

    mostrarTares(tareasFiltradas);
});

buscarTarea.addEventListener("keyup", () => {
    let buscado = tareas.buscarTarea(buscarTarea.value)

    mostrarTares(buscado)
})

document.addEventListener("DOMContentLoaded", () => {
  mostrarTares(tareas.todasLasTares());
})
