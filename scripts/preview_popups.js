
const links = document.querySelectorAll("#content a");

function togglePopup(event) {
    if(event.type === 'mouseenter') {
        // Find vertical coordinate
        let top_offset = this.getBoundingClientRect().bottom + 10;
        let elem_height = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top;

        let container_height = parseInt(this.previousSibling.style.height);
        let container_width = parseInt(this.previousSibling.style.width);

        let window_height = document.documentElement.clientHeight;
        if(top_offset + container_height > window_height) {
            top_offset -= elem_height;
            top_offset -= container_height;
            top_offset -= 20;
        }

        // Find horizontal coordinate
        let left_offset = this.getBoundingClientRect().left;
        let window_width = document.documentElement.clientWidth;


        if(left_offset + container_width > window_width) {
            let right_offset = window_width - this.getBoundingClientRect().right;
            this.previousSibling.style.right = right_offset + 'px'; 
            this.previousSibling.style.removeProperty('left');
        }
        else {
            this.previousSibling.style.left = left_offset + 'px'; 
            this.previousSibling.style.removeProperty('right');
        }

        this.previousSibling.style.top = top_offset + 'px';

        this.previousSibling.style.visibility = 'visible';
    }
    else {
        this.previousSibling.style.visibility = 'hidden';
    }
}

for(elem of links) {
    if(!elem.getAttribute('href').startsWith('http')) {
        let popup_child = document.createElement('span');
        popup_child.style.visibility = 'hidden';
        popup_child.style.position = 'absolute';
        popup_child.style.zIndex = '100';
        popup_child.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.30)';

        let popup_iframe = document.createElement('iframe');
        popup_iframe.setAttribute('src', elem.getAttribute('href'))
        popup_iframe.classList.add('preview');
        popup_child.appendChild(popup_iframe);

        let parent = elem.parentElement;
        parent.insertBefore(popup_child, elem);

        let frame_dimensions = popup_iframe.getBoundingClientRect();
        popup_child.style.width = frame_dimensions.width + 'px';
        popup_child.style.height = frame_dimensions.height + 'px';

        elem.addEventListener('mouseenter', togglePopup);
        elem.addEventListener('mouseleave', togglePopup);
    }   
}
