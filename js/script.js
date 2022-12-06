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

function consultar(){
    axios.get("https://backvolei-production.up.railway.app/")
        .then(function (response) {
            console.log(response);
            tabla(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}