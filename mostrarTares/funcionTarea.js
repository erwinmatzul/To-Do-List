export const mostrarTares = (listado) => {

    const listaTares = document.querySelector("#todo-list");

    listaTares.innerHTML = ""
    let listaTarea = ``

    listado.forEach(tarea => {

        listaTarea += `
       <div class="container">
      <div class="row">
        <li class="list-unstyled">
    
    <div class="form-control">
 
    <input disabled type="text" class="form-control w-75 rounded-3 disabled inputTarea ${tarea.completado ? "text-decoration-line-through" : ""}" value="${tarea.texto}">
  
    <button class="btn btn-danger mx-2 my-2 eliminar" data-id="${tarea.id}">Eliminar 🗑️</button>
    <button class="btn btn-warning my-2 completado" data-id="${tarea.id}">Completado ✔️</button>
</div>
    </li>
</div>
</div>
    `
    });
    listaTares.innerHTML = listaTarea
}