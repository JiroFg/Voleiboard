//-----------Variables para los botones-----------------------\\
var btnAg1 = document.getElementById('btn-Agregar1');
//-----------Variables para los datos-----------------------\\
var pais = document.getElementById('agregarPais').value,
    puntaje = document.getElementById('agregaPuntaje').value;

btnAg1.addEventListener('click', function(){
    console.log(pais);
    console.log(puntaje);
});


