const imageBarTag = 'dc-image-bar';
const imgTag = 'img';

function resetImageBarElement() {
    var imageBarToRemove = document.getElementsByTagName(imageBarTag);
    for(var i = imageBarToRemove.length - 1; i >= 0; i--) {
        if(imageBarToRemove[i]) {
            document.body.removeChild(imageBarToRemove[i]);
        }
    }
}

function createImageBarElement(target) {
    var newImageBar = document.createElement(imageBarTag);
    newImageBar.targetImage = target;
    document.body.appendChild(newImageBar);
}

document.addEventListener('click', function(e) {    
    if (e.target && e.target.tagName.toLowerCase() === imgTag) {       
        resetImageBarElement();
        createImageBarElement(e.target);        
    }   
}, false);

