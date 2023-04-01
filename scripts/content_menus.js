
$(document).ready(function() {

    $('#active_item').css('color', '#abed40');

    $('.content_menu').on('click', function() {

        let elem = $(this).next();

        let contains_current = false;

        while($(elem).prop('tagName').toLowerCase() == 'dd') {
            let curr = elem;
            if($(elem).css('display') != 'none') {
                $(curr).slideUp(1000, () => $(curr).css('display', 'none'));
            }
            else {
                $(curr).slideDown(1000, () => $(curr).css('display', 'block'));
            }

            if($(curr).attr('id') == 'active_item') {
                contains_current = true;
            }

            elem = $(elem).next();
        }

        if(contains_current && $(this).css('color') !== 'rgb(' + 0xAB + ', ' + 0xED + ', ' + 0x40 + ')') {
            $(this).animate({color: '#ABED40'}, 1000);
        }
        else {
            $(this).animate({color: '#FAFAFA'}, 1000);
        }

    });

});

