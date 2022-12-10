consultarEquipo();
agregarEquipo();
delEquipo();
updateEquipo();

let id = 0

function consultarEquipo(){
    axios.get("https://backvolei-production.up.railway.app/allEquipos")
        .then(function (response) {
            console.log(response);
            allTablaEquipos(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function allTablaEquipos(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let aux = document.getElementById("cuerpoTabla");
    for (let x in myObj) {
        let boton = document.createElement("button"); 
        boton.setAttribute("class", "btn btn-outline-primary");
        boton.setAttribute("type", "button");
        boton.setAttribute("id","equipo"+(myObj[x].id));
        boton.setAttribute("title", "Boton de seleccion de ID "+ (myObj[x].id)+" del equipo "+ (myObj[x].nombre)+" con puntuación de " + (myObj[x].score)+" puntos");
        //boton.setAttribute("aria-label", "Boton de seleccion de "+ (myObj[x].id));
        boton.innerHTML = "Seleccionar";
        
        let auxRow = aux.insertRow(-1);
        let auxCell = auxRow.insertCell(0);
        auxCell.textContent = myObj[x].id;
        let auxCell2 = auxRow.insertCell(1);
        auxCell2.textContent = myObj[x].nombre;
        let auxCell3 = auxRow.insertCell(2);
        auxCell3.textContent = myObj[x].score;
        let auxCell4 = auxRow.insertCell(3);
        auxCell4.appendChild(boton);
        let obtenerBoton = document.getElementById("equipo"+(myObj[x].id));
        obtenerBoton.addEventListener("click", function () {
            id = myObj[x].id;
            console.log(id);
            let text = document.getElementById("textEliminarEquipo");
            let text2 = document.getElementById("textModificarEquipoId");
            text.setAttribute("value",id);
            text2.setAttribute("value",id);
            let toast = document.getElementById("liveToast")
            let bs = new bootstrap.Toast(toast);
            bs.show()
        });
    }
}

function agregarEquipo() {
    let btn = document.getElementById("btn-Agregar1")
    btn.addEventListener("click",function(){
        let id = 1
        let nombre = document.getElementById("agregarPais").value
        let score = document.getElementById("agregarPuntaje").value
        console.log("DATOS: "+id+" "+nombre+" "+score)
        axios.post("https://backvolei-production.up.railway.app/addEquipo", {
        id: id,
        nombre: nombre,
        score: score
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}

function updateEquipo() {
    let btn = document.getElementById("submitModificarEquipo")
    btn.addEventListener("click",function(){
    let id = document.getElementById("textModificarEquipoId").value
    let nombre = document.getElementById("textModificarEquipoNombre").value
    let score = document.getElementById("textModificarEquipoScore").value
    axios.post("https://backvolei-production.up.railway.app/updateEquipo", {
        id: id,
        nombre: nombre,
        score: score
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}

function delEquipo() {
    let btn = document.getElementById("submitEliminarEquipo")
    btn.addEventListener("click",function(){
    let id = document.getElementById("textEliminarEquipo").value
    let nombre = "China"
    let score = 100
    axios.post("https://backvolei-production.up.railway.app/delEquipo", {
        id: id,
        nombre: nombre,
        score: score
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    })
}


