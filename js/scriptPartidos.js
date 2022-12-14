//---------------- Ejecucion de la función consulta ----------------//
consultar()
//---------------- Función para agregar partidos ----------------//
function agregarPartido(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let cont = 1
// #----------- cont2 es una variable auxiliar para implementar la secuencia de tabindex -----------# //
    let cont2=4
//---------------- Recorrido del obj ----------------//
    for (let x in myObj) {
        let text = ""
        console.log(myObj[x].equipo1+" "+myObj[x].score1+" "+myObj[x].equipo2+" "+myObj[x].score2+" "+myObj[x].status)
        text += "<div class='p-4 rounded' style='background-color: white;' tabindex= '"+cont2+1+"'>"
        text += "<h6>"
        text += myObj[x].equipo1 + " - " + myObj[x].equipo2;
        text += "</h6>"
        text += "<h6 class='text-success' aria-label='Finalizado... Resultado de "+myObj[x].equipo1 + " - "+myObj[x].equipo2+" fué de"+myObj[x].score1+" a " +myObj[x].score2 +"'>Finalizado</h6>"
        text += "<table class='table text-center table-bordered'>"
        text += "<thead class ='thead'>"
        text += "<tr>"
        text += "<th>" + myObj[x].score1 + "</th>"
        text += "<th>" + myObj[x].score2 + "</th>"
        text += "</tr>"
        text += "</thead>"
        text += "</table>"
        text += "<button type='Button' class='btn btn-primary' aria-label='Mas información sobre el partido"+ myObj[x].equipo1 + myObj[x].equipo2+"' tabindex= '"+ cont2+1 +"'>Más info "+ myObj[x].equipo1 + " - "+myObj[x].equipo2+"</button>"
        text += "</div>"
        document.getElementById("bloque"+cont).innerHTML = text;
        cont ++
    }
}
//---------------- Se consulta en el railway el backend del sistema ----------------//
function consultar(){
    axios.get("https://backvolei-production.up.railway.app/partidos")
        .then(function (response) {
            console.log(response);
            agregarPartido(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}