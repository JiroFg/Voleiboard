consultar()

function consultar(){
    axios.get("https://backvolei-production.up.railway.app/")
        .then(function (response) {
            console.log(response);
            graficar(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function graficar(response){
    const myObj = JSON.parse(JSON.stringify(response));
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [myObj[0].nombre, myObj[1].nombre, myObj[2].nombre, myObj[3].nombre,
        myObj[4].nombre, myObj[5].nombre, myObj[6].nombre, myObj[7].nombre, myObj[8].nombre, myObj[9].nombre],
        datasets: [{
          label:'Puntos',
          data: [myObj[0].score, myObj[1].score, myObj[2].score, myObj[3].score, myObj[4].score,
          myObj[5].score, myObj[6].score, myObj[7].score, myObj[8].score, myObj[9].score],
          backgroundColor:[
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
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
}