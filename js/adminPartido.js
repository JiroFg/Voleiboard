consultarPartido();
agregarPartido();
updatePartido();
delPartido();

let id2 = 0

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
        boton.setAttribute("title", "Boton de seleccion de ID "+ (myObj[x].id)+" del equipo "+ (myObj[x].equipo1)+" y " + (myObj[x].equipo2));
       //boton.setAttribute("aria-label", "Boton de seleccion de "+ (myObj[x].id));
        boton.setAttribute("id", "partido"+myObj[x].id);
        boton.innerHTML = "Seleccionar";

        let auxRow = aux.insertRow(-1);
        let auxCell = auxRow.insertCell(0);
        auxCell.textContent = myObj[x].id;
        auxCell.setAttribute("tabIndex","5");
        auxCell.setAttribute("aria-label", "ID "+(myObj[x].id));
        let auxCell2 = auxRow.insertCell(1);
        auxCell2.textContent = myObj[x].equipo1;
        auxCell2.setAttribute("tabIndex","5");
        let auxCell3 = auxRow.insertCell(2);
        auxCell3.textContent = myObj[x].score1;
        auxCell3.setAttribute("tabIndex","5");
        let auxCell4 = auxRow.insertCell(3);
        auxCell4.textContent = myObj[x].equipo2;
        auxCell4.setAttribute("tabIndex","5");
        let auxCell5 = auxRow.insertCell(4);
        auxCell5.textContent = myObj[x].score2;
        auxCell5.setAttribute("tabIndex","5");
        let auxCell6 = auxRow.insertCell(5);
        auxCell6.textContent = myObj[x].status;
        auxCell6.setAttribute("tabIndex","5");
        let auxCell7 = auxRow.insertCell(6);
        auxCell7.appendChild(boton);
        boton.setAttribute("tabIndex","5");
        let obtenerBoton = document.getElementById("partido"+(myObj[x].id));
        obtenerBoton.addEventListener("click", function () {
            id2 = myObj[x].id;
            console.log(id2);
            let text = document.getElementById("textEliminarPartido");
            let text2 = document.getElementById("textModPartido");
            text.setAttribute("value",id2);
            text2.setAttribute("value",id2);
            let toast = document.getElementById("liveToast")
            let bs = new bootstrap.Toast(toast);
            bs.show()
        });
    }
}

function agregarPartido(){
    let btn = document.getElementById("btnSubmitAddPartido")
    btn.addEventListener("click",function(){
        let id = 1
        let equipo1 = document.getElementById("textEquipo1").value
        let score1 = document.getElementById("textScore1").value
        let equipo2 = document.getElementById("textEquipo2").value
        let score2 = document.getElementById("textScore2").value
        let status = document.getElementById("comboBox").value
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
    })
}

function updatePartido(){
    let btn = document.getElementById("btnSubmitModPartido")
    btn.addEventListener("click",function(){
        let id = document.getElementById("textModPartido").value
        let equipo1 = document.getElementById("textEquipo1mod").value
        let score1 = document.getElementById("textScore1mod").value
        let equipo2 = document.getElementById("textEquipo2mod").value
        let score2 = document.getElementById("textScore2mod").value
        let status = document.getElementById("comboBoxMod").value
        console.log(id+" "+equipo1+" "+score1+" "+equipo2+" "+score2+" "+status)
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

function delPartido(){
    let btn = document.getElementById("btnSubmitEliminarPartido")
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
