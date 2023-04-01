
// Obtenemos los elementos cuyo color queremos modificar
const body = document.getElementsByTagName("body")[0];
const platform_data = document.getElementsByClassName("platform_data")[0];

function handleKey(event) {
    if(event.key === "n" && event.getModifierState("Alt")) {
        if(body.classList.contains("night_mode")) {             // El modo noche ya está activo y queremos eliminarlo
            body.classList.remove("night_mode");
            platform_data.classList.remove("night_mode");
            
        }
        else {
            body.classList.add("night_mode");
            platform_data.classList.add("night_mode");
        }
    }
}

body.addEventListener("keydown", handleKey);    // Cuando se pulsa alguna tecla, llamamos a la función callback handleKey()

