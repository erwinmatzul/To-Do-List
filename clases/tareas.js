
    export class Tareas {
        constructor() {

            this.tareas = JSON.parse(localStorage.getItem("tarea")) || []
        }
        guardarEnStorage() {
            localStorage.setItem("tarea", JSON.stringify(this.tareas))
        }
        agregar(tarea) {

            this.tareas.push(tarea)
            this.guardarEnStorage()
            return this.tareas
        }
        eliminar(id) {

            this.tareas = this.tareas.filter(elemento => elemento.id != id)
            this.guardarEnStorage()
            return this.tareas
        }
        completado(id) {

            this.tareas = this.tareas.map(elemento => {

                if (elemento.id == id) {

                    elemento.completado = !elemento.completado
                }
                return elemento
            })
            this.guardarEnStorage()
            return this.tareas
        }
        buscarTarea(textoDeTarea) {

            return this.tareas.filter(elemento => elemento.texto.toLowerCase().startsWith(textoDeTarea.toLowerCase()))

        }
        filtrarTareas(categor) {

            return this.tareas.filter(elemento => elemento.categoria == categor)
        }
        todasLasTares() {
            return this.tareas
        }
    }