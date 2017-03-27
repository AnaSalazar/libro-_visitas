function mostrar() {
  var textoInsertado = document.getElementById("contenido").value;
  var texto = document.getElementById("vistaPrevia");
  texto.innerHTML = textoInsertado;
}

function textoGrande() {
  var texto = document.getElementById("vistaPrevia");
  texto.style.fontSize = "50px";
}

function textoMediano(){
  var texto = document.getElementById("vistaPrevia");
  texto.style.fontSize = "35px";
}

function textoChico() {
  var texto = document.getElementById("vistaPrevia");
  texto.style.fontSize = "20px";
}

function colorTexto() {
  var texto = document.getElementById("vistaPrevia");
  var color = prompt("Por favor, ingresa el hexadecimal de tu color.");
  texto.style.color = color;
}

function colorFondo() {
  var texto = document.getElementById("vistaPrevia");
  var color = prompt("Por favor, ingresa el hexadecimal de tu color.");
  texto.style.backgroundColor = color;
}

function izquierdaTexto() {
  var texto = document.getElementById("vistaPrevia");
  texto.style.textAlign = "left";
}

function centrarTexto(){
  var texto = document.getElementById("vistaPrevia");
  texto.style.textAlign = "center";
}

function derechaTexto() {
  var texto = document.getElementById("vistaPrevia");
  texto.style.textAlign = "right";
}

function enviar() {
  var texto1 = document.getElementById("vistaPrevia");
  var parrafo = document.createElement("p");
  var textoClonado = texto1.cloneNode(true);

  parrafo.appendChild(textoClonado);
  document.getElementById("espacioComentarios").appendChild(parrafo);
}
