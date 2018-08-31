const imageBarTag = 'dc-image-bar';
const imgTag = 'img';

function resetImageBarElement() {
    var imageBarElement = document.getElementsByTagName(imageBarTag);
    for(var i = imageBarElement.length - 1; i >= 0; i--) {
        if(imageBarElement[i]) {
            document.body.removeChild(imageBarElement[i]);
        }
    }
}

function createImageBarElement(target) {
    var newImageBarElement = document.createElement(imageBarTag);
    newImageBarElement.targetImage = target;
    document.body.appendChild(newImageBarElement);
}

document.addEventListener('click', function(e) {    
    if (e.target && e.target.tagName.toLowerCase() === imgTag) {       
        resetImageBarElement();
        createImageBarElement(e.target);        
    }   
}, false);