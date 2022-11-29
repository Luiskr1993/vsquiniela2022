var jugador = [];


function llenarJugadores(){

    //limpiar el array
    reiniciaListadoJugadores();

    //vuelve a escribir los jugadores

    let jugador = [
        ["Luiscar"       , 106],
        ["Juli"          , 73],
        ["María"         , 73],
        ["Memo"          , 94],
        ["Luis Valiente" , 115],
        ["Nono"          , 53],
        ["Byron"         , 68],
        ["Karlita"       , 82],
        ["Amis"          , 55],
        ["Kevin"         , 74],
        ["Chino"         ,  0],
        ["Josué"         , 66],
        ["Carlos Salazar", 82]
    ]
    sortByCol(jugador, 1);
    dibujarTabla(jugador);
}

function reiniciaListadoJugadores(){

    var cantidadJugadores = jugador.length;

    if (cantidadJugadores > 0){
        console.log("<<Se reiniciará el listado de jugadores>>\n");
        while(jugador.length > 0){
            jugador.pop();
        }
    }
}

function sortByCol(arr, colIndex){
    arr.sort(sortFunction)
    function sortFunction(a, b) {
        a = a[colIndex]
        b = b[colIndex]
        return (a === b) ? 0 : (b < a) ? -1 : 1
    }
}


function dibujarTabla(arr){
    var ss = "";
    ss += "<div class='table-responsive'>"
    ss += "<table class='table table-hover table-sm table-borderless'>\n";
    ss += "<thead>\n";
    ss += "<tr>\n";
    ss += "<th scope='col'>POSICIÓN</th>\n";
    ss += "<th scope='col'>PARTICIPANTE</th>\n";
    ss += "<th scope='col'>PUNTEO</th>\n";
    ss += "</tr>\n";
    ss += "</thead>\n";
    ss += "<tbody>\n";

    for(var i=0; i<arr.length;i++){
        ss += "<tr>\n";
        ss += "<th scope='row'>" + (i+1).toString() + "</th>\n";
        ss += "<td>" + arr[i][0].toString() + "</td>\n";
        ss += "<td>" + arr[i][1].toString() + "</td>\n";
        ss += "</tr>\n";
    }

    ss += "</tbody>\n";
    ss += "</table>\n";
    ss += "</div>";

    console.log(ss);
    document.getElementById('spanTabla').innerHTML = ss;
    
}
