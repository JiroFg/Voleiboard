consultar()

function tabla(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj)
    let text = "<table class='table'><tbody>"
        text += "<thead><th>Nombre</th><th>Score</th></thead>"
    for (let x in myObj) {
        text += "<tr><td>" + myObj[x].nombre + "</td><td>" + myObj[x].score + "</td></tr>";
    }
    text += "</tbody></table>"    
    document.getElementById("tablaEjemplo").innerHTML = text;
}

function tablaEquipos(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let aux = document.getElementById("cuerpoTabla");
    let ranking = 1;
    for (let x in myObj) {
        let auxRow = aux.insertRow(-1);
        let auxCell = auxRow.insertCell(0);
        auxCell.textContent = ranking;
        let auxCell2 = auxRow.insertCell(1);
        auxCell2.textContent = myObj[x].nombre;
        let auxCell3 = auxRow.insertCell(2);
        auxCell3.textContent = myObj[x].score;
        ranking++;
    }
}

function consultar(){
    axios.get("https://backvolei-production.up.railway.app/")
        .then(function (response) {
            console.log(response);
            tablaEquipos(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}