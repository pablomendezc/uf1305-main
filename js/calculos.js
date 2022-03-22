// Definir variables
// var n = 0;

// Funcion para leer numeros Reales


//funcion para leeer texto

function leerTexto() {
    texto = prompt ("porfi, escribe un nombre del personaje");
        
   return texto;

}
function mostarInfo(id, tag, info, texto){
    var elemento = document.getElementById(id);

    var etiqueta = "<" + tag + ">";
    etiqueta += info;
    etiqueta += "</" + tag + "> ";
    etiqueta += texto;
   
    elemento.innerHTML = etiqueta;
}


//Function para insertar texto en html

function mostrarTexto( id, texto ){
var elemento = document.getElementById(id);


elemento.innerHTML = texto;

}


function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarMultiplo(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
}


function mostrarFactorial( n ) {
    document.getElementById('td21').innerHTML = n;
    document.getElementById('td22').innerHTML = factorial( n );
}


function mostrarResultados( op, n, m = 0 ) {

    switch (op) {
        case 'multiplo':
            document.getElementById('td11').innerHTML = n;
            document.getElementById('td12').innerHTML = m;
            document.getElementById('td13').innerHTML = multiplosDeHasta(n, m);
        break;

        case 'factorial' :
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial( n );
        break;
        default:
    }
}



function multiplosDeHasta(n, m) {
    mensaje = "Los múltiplo de " +
        n +
        " hasta " + m +
        " son: ";

    multiplo = 0;

    // for (i = 1; multiplo < m; i++) {
    //     multiplo = n * i;
    //     mensaje = mensaje + multiplo + " ";
    // }

    // Inicialización de la variable contador
    i = 1;

    // Condición
    while ( multiplo < m ) {
        multiplo = n * i;
        mensaje = mensaje + multiplo + " ";

        // Incremento
        i++;
    }



    return mensaje;
}

function factorial( n ) {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}

function sumar( s1, s2 ) {
    var suma = s1 + s2;
    return suma;
}


function multiplicar( f1, f2 ){
    var producto = f1 * f2;
    return producto;
}