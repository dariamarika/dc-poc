const imageBarTag = 'dc-image-bar';
const imageChangeSrcTag = 'dc-image-change';
const imageResizeTag = 'dc-image-resize';
const imgTag = 'img';
const escKey = 27;

function resetImageBarElements() {
    var tagsToReset = [];
    tagsToReset.push(imageBarTag);
    tagsToReset.push(imageChangeSrcTag);
    tagsToReset.push(imageResizeTag);

    tagsToReset.forEach(tag => {
        var imageBarElement = document.getElementsByTagName(tag);
        for(var i = imageBarElement.length - 1; i >= 0; i--) {
            if(imageBarElement[i]) {
                document.body.removeChild(imageBarElement[i]);
            }
        }
    });    
}

function createImageBarElement(target) {
    var newImageBarElement = document.createElement(imageBarTag);
    newImageBarElement.targetImage = target;
    document.body.appendChild(newImageBarElement);
}

function manageImageBarElement(e) {
    if (e.target && e.target.tagName.toLowerCase() == imgTag) {       
        resetImageBarElements();
        createImageBarElement(e.target);        
    } 
}

function isEscKeyPressed(e) {
    if(e.keyCode == escKey) {        
        resetImageBarElements();                    
    }
}

document.addEventListener('click', manageImageBarElement, false);
window.addEventListener('keydown', isEscKeyPressed, false);