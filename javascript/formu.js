function iniciar() {

  document.getElementById('botonEnviar').addEventListener("click", validarFormu);
  document.getElementById('tituformu').focus();

}

var imagenes = new Array(
  ['img/castillo.jpg'],
  ['img/fondo.jpg'],
  ['img/habitacion.jpg'],
  ['img/foto1.jpg'],
  ['img/foto2.jpg'],
  ['img/foto3.jpg'],
  ['img/foto5.jpg'],
  ['img/foto6.jpg'],
  ['img/foto7.jpg'],
  ['img/foto8.jpg'],
  ['img/foto9.jpg'],
);

var contador = 0;

function rotarImagenes() {
  // cambiamos la imagen y la url
  contador++;
  document.getElementById("imagenes").src = imagenes[contador % imagenes.length][0];
  document.getElementById("banner").href = imagenes[contador % imagenes.length][1];
}


/* Validar formulario */
function validarFormu() {


  var formu = document.getElementById('miformulario');
  var terminos = document.getElementById('terminos');
  var indice = document.getElementById("opciones").selectedIndex;


  var edad = document.getElementById('edad').value;
  var txtArea = document.getElementById('txtArea');
  var f1 = document.getElementById('f1');
  valor = document.getElementById("email").value;


  if (formu[1].value == "" || formu[1].value == null || txtArea.value.length <= 100) {
    alert("El comentario deber tener 100 caracteres.");
    document.getElementById("txtArea").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
    document.getElementById("txtArea").focus();
  } else {
    document.getElementById("txtArea").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
    if (formu[2].value == "" || formu[2].value == null) {
      document.getElementById("f1").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
      document.getElementById("f1").focus();
    } else {
      document.getElementById("f1").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
      if (formu[3].value == "" || formu[3].value == null) {
        document.getElementById("f2").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
        document.getElementById("f2").focus();
      } else {
        document.getElementById("f2").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
        if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/.test(valor)) {
          document.getElementById("email").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
          document.getElementById("email").focus();
        } else {
          document.getElementById("email").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
          if (formu[5].value == "" || formu[5].value == null || isNaN(edad)) {
            document.getElementById("edad").style.backgroundColor = "rgb(255, 0, 0, 0.3)";
            document.getElementById("edad").focus();
          } else {
            document.getElementById("edad").style.backgroundColor = "rgb(0, 255, 0, 0.3)";
            if (formu[6].checked == false || formu[6].checked == null) {
              alert("Debes aceptar los términos.");
              document.getElementById("terminos").focus();
            } else {
              document.getElementById("terminos").style.color = "rgb(0, 255, 0, 0.3)";
              alert("Formulario rellenado");
              if (indice == null || indice == 0) {
                alert("Debes puntuar la pagina");
                return false;
              } else {
                if (indice == null || indice == 0) {
                  alert("Debes puntuar la pagina");
                  return false;
                } else {
                  var seccion = document.createElement('article');
                  var mensaje = document.getElementById("txtArea").value;
                  var nombre = document.getElementById("f1").value;
                  var email = document.getElementById("email").value;
                  var titulo = document.getElementById("tituformu").value;

                  var txtTitulo = document.createElement('h2');
                  txtTitulo.innerHTML = "Título: " + titulo;

                  var textoNombre = document.createElement('p');
                  textoNombre.innerHTML = "Nombre: " + nombre;

                  var textoMensaje = document.createElement('p');
                  textoMensaje.innerHTML = mensaje;

                  var textoEmail = document.createElement('p');
                  textoEmail.innerHTML = "Email: " + email;

                  var zona = document.getElementById("firmas");
                  seccion.appendChild(txtTitulo);
                  seccion.appendChild(textoMensaje);
                  seccion.appendChild(textoNombre);
                  seccion.appendChild(textoEmail);

                  zona.appendChild(seccion);

                  for (var i = 0; i < formu.length; i++) {
                    formu[i].value = "";
                    formu[i].style.backgroundColor = "white";
                    terminos.checked = 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function mueveReloj(){
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();
  horaImprimible = hora + " : " + minuto + " : " + segundo;
  document.form_reloj.reloj.value = horaImprimible;
  setTimeout("mueveReloj()",1000);
}

function almacenaMensaje(nombre, email, texto) {
  this.nombre = document.getElementById("f1").value;
  this.email = document.getElementById("email").value;
  this.texto = document.getElementById("txtArea").value;
}


window.onload = function () {
  this.iniciar();
  this.rotarImagenes();
  this.mueveReloj();
}