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
    }
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

function delPartido(){
    let id = 9
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
}

function updatePartido(){
    let id = 1
    let equipo1 = "USA"
    let score1 = 2
    let equipo2 = "China"
    let score2 = 3
    let status = "En emisión"
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
}