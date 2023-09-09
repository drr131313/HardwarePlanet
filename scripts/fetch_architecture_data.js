const table = document.getElementsByClassName("platform_data")[0];

console.log(table);

fetch('../architectures.json').then(response => response.json()).then(data => {

    let item = null;
    let name = null;
    for(elem of Object.keys(data.Architectures)) {
        if(elem == table.getAttribute('platform')) {
            item = data.Architectures[elem];
            name = elem;
            break;
        }
    }

    if(item != null) {
        table.innerHTML += '<tr><td colspan="2"><img id="platform_image" src="' + item["Image path"] + '" alt="Imagen PS1"/></td></tr>';
        table.innerHTML += '<tr><th>Nombre</th><td>' + name + '</td></tr>';
        table.innerHTML += '<tr><th>Fabricante</th><td>' + item["Manufacturer"] + '</td></tr>';
        table.innerHTML += '<tr><th>Fecha de lanzamiento</th><td>' + item["Release date"] + '</td></tr>';
        table.innerHTML += '<tr><th>Frecuencia máxima</th><td>' + item["Frequency"] + '</td></tr>';
        table.innerHTML += '<tr><th>Tamaño de palabra</th><td>' + item["Word length"] + '</td></tr>';
        table.innerHTML += '<tr><th>Tamaño de dirección</th><td>' + item["Direction length"] + '</td></tr>';
        table.innerHTML += '<tr><th>Número de instrucciones</th><td>' + item["Instructions"] + '</td></tr>';
        table.innerHTML += '<tr><th>Categoría</th><td>' + item["Category"] + '</td></tr>';
    }
    else {
        table.innerHTML += '<tr><td colspan="2">Error cargando los datos.</td></tr>'
        console.error("No se ha encontrado los datos de la arquitectura indicada en el archivo json.");
    }

}).catch(err => {
    table.innerHTML += '<tr><td colspan="2">Error cargando los datos.</td></tr>';
    console.error("Se ha producido un error en la solicitud de datos sobre arquitecturas: " + err);
});
