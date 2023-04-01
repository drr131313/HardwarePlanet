
if(!localStorage.getItem('cookies_shown')) {

    let cookie_notice = document.createElement('div');
    
    cookie_notice.style.height = '6vh';
    cookie_notice.style.width = '100vw';
    cookie_notice.style.backgroundColor = '#202020';
    cookie_notice.style.position = 'fixed';
    cookie_notice.style.bottom = '0px';
    cookie_notice.style.left = '0px';
    cookie_notice.style.zIndex = '2';
    cookie_notice.style.display = 'flex';
    cookie_notice.style.flexDirection = 'row';
    cookie_notice.style.alignItems = 'center';
    cookie_notice.style.justifyContent = 'center';

    let cookie_text = document.createElement('p');
    cookie_text.innerText = 'La legislación europea nos obliga a avisarte de que este sitio podría hacer uso de cookies para mejorar tu experiencia.';
    cookie_text.style.color = '#DDDDDD';

    let cookie_ignore_button = document.createElement('img');

    let current_script = document.currentScript.src;

    let re = new RegExp(/^(.*)\/.*\//);
    let root_path = re.exec(current_script)[1];
    
    cookie_ignore_button.src = root_path + '/images/close.png';
    cookie_ignore_button.style.height = '3vh';
    cookie_ignore_button.style.width = '3vh';
    cookie_ignore_button.style.cursor = 'pointer';
    cookie_ignore_button.style.marginLeft = '1vw';

    cookie_ignore_button.addEventListener('click', ev => {
        cookie_notice.style.display = 'none';
        localStorage.setItem('cookies_shown', 'yes');
    });

    window.addEventListener('load', ev => {
        cookie_notice.appendChild(cookie_text);
        cookie_notice.appendChild(cookie_ignore_button);
        document.getElementsByTagName('body')[0].appendChild(cookie_notice);
    });

}


