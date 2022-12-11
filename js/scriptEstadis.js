//---------------- Ejecución de la función de consulta ----------------//
consultar()
//---------------- Se consulta en el railway el backend del sistema ----------------//
function consultar() {
  axios.get("https://backvolei-production.up.railway.app/")
    .then(function (response) {
      console.log(response);
      graficar(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}
//---------------- Se grafica el contenido de la consulta previa ----------------//
function graficar(response) {
  const myObj = JSON.parse(JSON.stringify(response));

  const ctx = document.getElementById('myChart');

/* 
## La clase mychart no posee un elemento de accesibilidad como tal, por ende,                 ##
## para asignar un medio de lectura es necesario usar la posición exacta de los elementos del ##
## arreglo de objetos, del mismo modo que al agregar la informacion a la tablas.              ##
*/

  ctx.setAttribute("aria-label", "El equipo " + myObj[0].nombre + " obtuvo " + myObj[0].score + " puntos" + "El equipo " + myObj[1].nombre + " obtuvo " + myObj[1].score + " puntos" + "El equipo " + myObj[2].nombre + " obtuvo " + myObj[2].score + " puntos" + "El equipo " + myObj[3].nombre + " obtuvo " + myObj[3].score + " puntos" + "El equipo " + myObj[4].nombre + " obtuvo " + myObj[4].score + " puntos" + "El equipo " + myObj[5].nombre + " obtuvo " + myObj[5].score + " puntos" + "El equipo " + myObj[6].nombre + " obtuvo " + myObj[6].score + " puntos" + "El equipo " + myObj[7].nombre + " obtuvo " + myObj[7].score + " puntos" + "El equipo " + myObj[8].nombre + " obtuvo " + myObj[8].score + " puntos" + "El equipo " + myObj[9].nombre + " obtuvo " + myObj[9].score + " puntos");

//---------------- Creacion de la gráfica de barras ----------------//
  new Chart(ctx, {
    type: 'bar',
    data: {
// #---------------- Se agrega la información de los nombres ----------------# //
      labels: [myObj[0].nombre, myObj[1].nombre, myObj[2].nombre, myObj[3].nombre,
      myObj[4].nombre, myObj[5].nombre, myObj[6].nombre, myObj[7].nombre, myObj[8].nombre, myObj[9].nombre],
// #--------- Se agrega los valores que mostrará la grafica (en este caso los puntos obtenidos) ---------# //
      datasets: [{
        label: 'Puntos',
        data: [myObj[0].score, myObj[1].score, myObj[2].score, myObj[3].score, myObj[4].score,
        myObj[5].score, myObj[6].score, myObj[7].score, myObj[8].score, myObj[9].score],
// #----------------- Se establecen los colores que contendrá cada barra de la tabla ----------------# //
        backgroundColor: [
          'rgb(51, 204, 51)',
          'rgb(255, 0, 255)',
          'rgb(51, 204, 204)',
          'rgb(255, 255, 0)',
          'rgb(255, 80, 80)',
          'rgb(51, 102, 255)',
          'rgb(255, 153, 51)',
          'rgb(0, 153, 255)',
          'rgb(204, 255, 204)',
          'rgb(255, 204, 255)'
        ]

      }]

    },
    options: {
 //#------ Se declara la escala, en este caso restringiendo los valores negativos ------# //
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });

}