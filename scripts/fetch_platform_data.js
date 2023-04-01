
const table = document.getElementsByClassName("platform_data")[0];

let request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1/platforms.xml', true);
request.onload = function() {
    if(this.status == 200) {
        let data = this.responseXML.getElementsByTagName('platform');
        
        let item = null;
        for(elem of data) {
            let name = elem.getElementsByTagName('name')[0];
            if(name.textContent == table.getAttribute('platform')) {
                item = elem;
                break;
            }
        }

        if(item != null) {

            let image_path = item.getElementsByTagName('image_path')[0];
            table.innerHTML += '<tr><td colspan="2"><img id="platform_image" src="' + image_path.textContent + '" alt="Imagen PS1"/></td></tr>';

            let name = item.getElementsByTagName('name')[0];
            table.innerHTML += '<tr><th>Nombre</th><td>' + name.textContent + '</td></tr>';

            let manufacturer = item.getElementsByTagName('manufacturer')[0];
            table.innerHTML += '<tr><th>Fabricante</th><td>' + manufacturer.textContent + '</td></tr>';

            let release_date = item.getElementsByTagName('release_date')[0];
            table.innerHTML += '<tr><th>Fecha de lanzamiento</th><td>' + release_date.textContent + '</td></tr>';

            let discontinuation_date = item.getElementsByTagName('discontinuation_date')[0];
            table.innerHTML += '<tr><th>Fecha de descontinuación</th><td>' + discontinuation_date.textContent + '</td></tr>';

            let units_sold = item.getElementsByTagName('units_sold')[0];
            table.innerHTML += '<tr><th>Unidades vendidas</th><td>' + units_sold.textContent + '</td></tr>';

            let architecture_name = item.getElementsByTagName('architecture')[0].getElementsByTagName('name')[0];
            let architecture_link = item.getElementsByTagName('architecture')[0].getElementsByTagName('link')[0];
            table.innerHTML += '<tr><th>Arquitectura empleada</th><td><a href="' + architecture_link.textContent + '">' + architecture_name.textContent + '</a></td></tr>';
        }
        else {
            table.innerHTML += '<tr><td colspan="2">Error cargando los datos.</td></tr>'
            console.error("No se ha encontrado los datos de la plataforma indicada en el archivo XML.");
        }
    }
    else {
        table.innerHTML += '<tr><td colspan="2">Error cargando los datos.</td></tr>'
        console.error("Se ha producido un error en la solicitud de datos sobre plataformas.");
    }
}
request.send();
