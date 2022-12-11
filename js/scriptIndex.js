//---------------- Ejecucion de la funcion consulta ----------------//
consultar()
//---------------- Llenado de la tabla establecida en index.html ----------------//
function tablaEquipos(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let aux = document.getElementById("cuerpoTabla");
    let ranking = 1;
// #---------------- Recorrido del obj ----------------# //
    for (let x in myObj) {
        let auxRow = aux.insertRow(-1);                                                                     
        let auxCell = auxRow.insertCell(0);
        auxCell.textContent = ranking;

        auxCell.setAttribute("tabIndex","4");
        auxCell.setAttribute("aria-label", "Posición número "+ranking);
        auxCell.setAttribute("role","cell");    
        
        let auxCell2 = auxRow.insertCell(1);
        auxCell2.textContent = myObj[x].nombre;
        auxCell2.setAttribute("tabIndex","4");
        auxCell2.setAttribute("aria-label", "Equipo "+(myObj[x].nombre));
        
        let auxCell3 = auxRow.insertCell(2);
        auxCell3.textContent = myObj[x].score;
        auxCell3.setAttribute("tabIndex","4");
        auxCell3.setAttribute("aria-label", "Puntuación de "+(myObj[x].score)+" puntos");
        
        ranking++;
    }
}
//---------------- Se consulta en el railway el backend del sistema ----------------//
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