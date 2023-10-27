var selcolor = ""; // Color almacenado en una variable
var pincel = document.getElementById("pincel"); // definimos el pincel
var punta = pincel.getElementById("punta"); // definimos la punta del pincel
var posx = 0, posy = 0;
agregarEventoClick() // Le añadimos un onclick a todos los paths del dibujo
// hace que le pincel siga al cursor
document.addEventListener('mousemove', function() {
  e = window.event;
  // Guardamos la posicion actual y la anterior
  posx = e.clientX;
  posy = e.clientY;
  // Establecer la nueva posición del elemento
  pincel.style.left = posx-(pincel.clientWidth-(pincel.clientWidth*96/100)) + "px"
  pincel.style.top = posy-(pincel.clientWidth-(pincel.clientWidth*25/100)) + "px"
})
// Le añadimos un onclick a todos los paths del dibujo
function agregarEventoClick() {
  var svg = document.getElementById("elpenat");
  var paths = svg.querySelectorAll("path:not(.nofill)"); // Los path con la clase .nofill no se podrán pintar
  // Al hacer click en un path cambia el color de su fill
  paths.forEach(function(path) {
    path.addEventListener("click", function() {
      this.style.fill = selcolor; // Pinta el path del color almacenado en la variable
    });
  });
}
// Cambia el color seleccionado
function cambiarColor(color) {
  selcolor = color
  punta.style.fill = color; // cambia el color de la punta del pincel
}
// Imprime la imagen
function printImg() {
  var win = window.open('');
  win.document.write('<img src="img/Superpenat.svg" onload="window.print();window.close()" />');
  win.focus();
}