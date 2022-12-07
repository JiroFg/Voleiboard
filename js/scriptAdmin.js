agregarPartido()
//agregarEquipo()

function agregarEquipo() {
    //ejemplos de datos, debe tomar los del formulario
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