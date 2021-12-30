let boton = document.querySelector ("#botoncito");
let lista  = document.querySelector("#lista");
let cargarLista = document.querySelector ("#cargarLista");
let tareas = [];


boton.addEventListener ("click",function (evento){
  evento.preventDefault();
  //console.log("Tocaste el boton");
  let nombreDeTarea = cargarLista.value;
  tareas.push(nombreDeTarea);
  lista.innerHTML ="";
  for (let i = 0; i < tareas.length; i++) {
    //console.log(tareas[i]);
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = `${tareas[i]} <button>eliminar</button>`
    lista.append(nuevoLi);

  }
})