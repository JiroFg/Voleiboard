consultarPartido();

function consultarPartido(){
    axios.get("https://backvolei-production.up.railway.app/allPartidos")
        .then(function (response) {
            console.log(response);
            allTablaPartidos(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function allTablaPartidos(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let aux = document.getElementById("cuerpoPartidos");
    for (let x in myObj) {
        let boton = document.createElement("button"); 
        boton.setAttribute("class", "btn btn-outline-primary");
        boton.setAttribute("type", "button");
        boton.setAttribute("id","partido"+(myObj[x].id));
        boton.innerHTML = "Seleccionar";
        let auxRow = aux.insertRow(-1);
        let auxCell = auxRow.insertCell(0);
        auxCell.textContent = myObj[x].id;
        let auxCell2 = auxRow.insertCell(1);
        auxCell2.textContent = myObj[x].equipo1;
        let auxCell3 = auxRow.insertCell(2);
        auxCell3.textContent = myObj[x].score1;
        let auxCell4 = auxRow.insertCell(3);
        auxCell4.textContent = myObj[x].equipo2;
        let auxCell5 = auxRow.insertCell(4);
        auxCell5.textContent = myObj[x].score2;
        let auxCell6 = auxRow.insertCell(5);
        auxCell6.textContent = myObj[x].status;
        let auxCell7 = auxRow.insertCell(6);
        auxCell7.appendChild(boton);
        let obtenerBoton = document.getElementById("partido"+(myObj[x].id));
        obtenerBoton.addEventListener("click", function () {
            id = myObj[x].id;
            console.log(id);
            let text = document.getElementById("textEliminarPartido");
            let text2 = document.getElementById("textModificarPartidoID");
            text.setAttribute("value",id);
            text2.setAttribute("value",id);
            let toast = document.getElementById("liveToast")
            var option={animation: true, delay:1000};
            let bs = new bootstrap.Toast(toast, option);
            bs.show()
        });
    }
}

function agregarPartido(){
    let btn = document.getElementById("submitAgregarPartido");
    btn.addEventListener("click",function(){
    let id = 1
    let equipo1 = document.getElementById("textAgregarPartidoNombre1").value
    let score1 = document.getElementById("textAgregarPartidoPuntuacion1").value
    let equipo2 = document.getElementById("textAgregarPartidoNombre2").value
    let score2 = document.getElementById("textAgregarPartidoPuntuacion2").value
    let status = document.getElementById("seleccionAgregar").value
    axios.post("https://backvolei-production.up.railway.app/addPartido", {
        id:id,
        equipo1: equipo1,
        score1: score1,
        equipo2: equipo2,
        score2: score2,
        status: status
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}

function delPartido(){
    let btn = document.getElementById("submitEliminarPartido")
    btn.addEventListener("click",function(){
    let id = document.getElementById("textEliminarPartido").value
    let equipo1 = "USA"
    let score1 = 2
    let equipo2 = "Cuba"
    let score2 = 1
    let status = "En emisión"
    axios.post("https://backvolei-production.up.railway.app/delPartido", {
        id:id,
        equipo1: equipo1,
        score1: score1,
        equipo2: equipo2,
        score2: score2,
        status: status
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}

function updatePartido(){
    let btn = document.getElementById("submitModificarPartido")
    btn.addEventListener("click",function(){
    let id = document.getElementById("textModificarPartidoID").value
    let equipo1 = document.getElementById("textModificarPartidoNombre1").value
    let score1 = document.getElementById("textModificarPartidoPuntuacion1").value
    let equipo2 = document.getElementById("textModificarPartidoNombre2").value
    let score2 = document.getElementById("textModificarPartidoPuntuacion2").value
    let status = document.getElementById("seleccionModificar").value
    axios.post("https://backvolei-production.up.railway.app/updatePartido", {
        id:id,
        equipo1: equipo1,
        score1: score1,
        equipo2: equipo2,
        score2: score2,
        status: status
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}