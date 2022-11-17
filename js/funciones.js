function cargarTabla(){
    readTextFile("https://drive.google.com/drive/u/1/folders/1BGEmdnK1IZB6DtaAg6Snn1dwRTQTiEFa");
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