function cargarTabla(){
    readTextFile("https://github.com/Luiskr1993/vsquiniela2022/blob/main/jugadores.txt");
}

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if (rawFile.readyState === 4){
            if (rawFile.status === 200 || rawFile.status === 0){
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }

    rawFile.send(null);
}

//prueba