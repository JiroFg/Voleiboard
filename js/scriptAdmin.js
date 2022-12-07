consultarEquipo();
consultarPartido();

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
        boton.setAttribute("id", myObj[x].id);
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

        // let obtenerBoton = document.getElementById(myObj[x].id);
        // obtenerBoton.addEventListener("click", function () {
        //     $(".liveToast")
        // }
    }
}

function allTablaEquipos(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let aux = document.getElementById("cuerpoTabla");
    for (let x in myObj) {
        let boton = document.createElement("button"); 
        boton.setAttribute("class", "btn btn-outline-primary");
        boton.setAttribute("type", "button");
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
    }
}

function agregarEquipo() {
    let id = 1
    let nombre = "China"
    let score = 100
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
}

function delEquipo() {
    let id = 12
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
}

function updateEquipo() {
    let id = 11
    let nombre = "Peru"
    let score = 500
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
}

function agregarPartido(){
    let id = 1
    let equipo1 = "USA"
    let score1 = 2
    let equipo2 = "Cuba"
    let score2 = 1
    let status = "En emisión"
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
}

