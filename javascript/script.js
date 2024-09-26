function iniciaJava() {
    document.body.addEventListener("keypress", musica);
    document.getElementById('btnLeer').addEventListener("click", masTexto);
    document.getElementById("padre").addEventListener("click", infoPadre);
    document.getElementById("madre").addEventListener("click", infoMadre);
    document.getElementById("javi").addEventListener("click", infoJavi);
    document.getElementById("jaume").addEventListener("click", infoJaume);
    document.getElementById("tonet").addEventListener("click", infoTonet);
}

function alertarJava() {
     /* Alerta a los usuarios */
     alert("Pulsa M - para escuchar música");
}
/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */
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

/**
 * Funcion para cambiar la imagen del banner
 */
function rotarImagenes() {
    // cambiamos la imagen y la url
    contador++;
    document.getElementById("imagenes").src = imagenes[contador % imagenes.length][0];
    document.getElementById("banner").href = imagenes[contador % imagenes.length][1];
}

/**
 * Función para añadir texto
 */
function masTexto() {
    var texto = document.createTextNode(" A pocos pasos del establecimiento hay varios supermercados, restaurantes y tiendas. El personal de recepción proporciona información turística. Los Apartamentos Turisticos Isa i Toni están en Sella, cerca de la Ermita de Santa Bárbara. Se encuentran a 30 minutos en coche de las playas más cercanas, ubicadas en Villa Joyosa, y a 60 km del aeropuerto de Alicante. Se ofrece conexión Wi-Fi gratuita. A las parejas les encanta la ubicación — Le han puesto un 9,0 para viajes de dos personas. ¡Hablamos tu idioma!");
    var boton = document.getElementById("btnLeer");
    document.getElementById("anyadeTexto").appendChild(texto);
    boton.style.display = "none";

}

function musica(elEvento) {
    var evento = elEvento || window.event;
    var caracter = evento.charCode || evento.keyCode || evento.altKey || evento.ctrlKey;
    var audio = document.getElementById("audio");
    if(String.fromCharCode(caracter) == "m") {
        alert("Pulsa N - Para quitar la música.");
        audio.play();
    }
    else if(String.fromCharCode(caracter) == "n") {
        alert("Pulsa M - Para reanudar la múscia.");
        audio.pause();
    }
}

function infoPadre() {
    window.open("https://www.facebook.com/AMS.hosteleria");
}

function infoJavi() {
    window.open("https://www.facebook.com/javi.morenocanto");
}

function infoJaume() {
    window.open("https://www.facebook.com/jaume.morenocanto");
}

function infoTonet() {
    window.open("https://www.facebook.com/iLuSiOnSs");
}

function infoMadre() {
    alert("No hay info.");
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

/**
 * Función que se ejecuta una vez cargada la página
 */

window.onload = function () {
    // Cargamos una imagen aleatoria
    rotarImagenes();
    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes, 5000);
    this.iniciaJava();
    this.alertarJava();
    this.mueveReloj();
}

