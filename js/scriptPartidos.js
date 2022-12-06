consultar()

function agregarPartido(response) {
    const myObj = JSON.parse(JSON.stringify(response));
    console.log(myObj);
    let cont = 1
    for (let x in myObj) {
        let text = ""
        console.log(myObj[x].equipo1+" "+myObj[x].score1+" "+myObj[x].equipo2+" "+myObj[x].score2+" "+myObj[x].status)
        text += "<div class='p-4 rounded' style='background-color: white;'>"
        text += "<h6>"
        text += myObj[x].equipo1 + " - " + myObj[x].equipo2;
        text += "</h6>"
        text += "<h6 class='text-success'>Finalizado</h6>"
        text += "<table class='table text-center table-bordered'>"
        text += "<thead class ='thead'>"
        text += "<tr>"
        text += "<th>" + myObj[x].score1 + "</th>"
        text += "<th>" + myObj[x].score2 + "</th>"
        text += "</tr>"
        text += "</thead>"
        text += "</table>"
        text += "<button type='Button' class='btn btn-primary'>Más info</button>"
        text += "</div>"
        document.getElementById("bloque"+cont).innerHTML = text;
        cont ++
    }
}

/* <div class="col rounded m-3" style="background-color: lightblue;">
          <div class="p-4 rounded" style="background-color: white;">
            <h6>
               USA - Cuba 
            </h6>
            <h6 class="text-success">Finalizado</h6>
            <!-- tabla del bloque -->
            <table class="table text-center table-bordered">
              <thead class="thead">
                <tr>
                  <th>2</th>
                  <th>1</th>
                </tr>
              </thead>
            </table>
            <!-- fin tabla -->
            <button type="Button" class="btn btn-primary">Más info</button>
          </div>
        </div> */

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