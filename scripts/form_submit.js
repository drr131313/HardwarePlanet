
$(document).ready(function() {

    $('.form_submit').on('click', function() {

        let name_regex = new RegExp('^[a-zA-Z0-9_]{4,100}$');
        let name = $('form #fname').val();

        if(!name_regex.test(name)) {
            alert("El nombre no tiene un formato válido. Ha de estar compuesto por entre 4 y 100 letras, números o guiones bajos.");
            return;
        }

        let email_regex = new RegExp('^[a-zA-Z0-9_\.-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9]{2,4}')
        let email = $('form #email').val();

        if(!email_regex.test(email)) {
            alert("El correo electrónico no tiene un formato válido.");
            return;
        }

        alert('La función de contribución está temporalmente desactivada. Por favor, inténtalo de nuevo más tarde.')
    })

});

