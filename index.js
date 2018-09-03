const imageBarTag = 'dc-image-bar';
const imageChangeSrcTag = 'dc-image-change';
const imageResizeTag = 'dc-image-resize';
const imgTag = 'img';
const dynamicContentImageTags = [imageBarTag, imageChangeSrcTag, imageResizeTag];
const dynamicContentPrefix = 'dynamicContent';
const escKey = 27;

function resetImageBarElements() {
    dynamicContentImageTags.forEach(tag => {
        var imageBarElement = document.getElementsByTagName(tag);
        for (var i = imageBarElement.length - 1; i >= 0; i--) {
            if (imageBarElement[i]) {
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
    if (e.keyCode == escKey) {
        resetImageBarElements();
    }
}

function generateGuid() {
    var result, i, j;
    result = '';
    for (j = 0; j < 32; j++) {
        if (j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
        i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
        result = result + i;
    }
    return `${dynamicContentPrefix}${result}`;
}

function cleanAllDynamicContentKeys() {
    for (i = 0; i < sessionStorage.length; i++) {
        dcKey = sessionStorage.key(i);
        if (dcKey.includes(dynamicContentPrefix)) {
            sessionStorage.removeItem(dcKey);
        };        
    }
}

function storeImages() {
    cleanAllDynamicContentKeys();
    var images = document.getElementsByTagName(imgTag);
    for (var i = images.length - 1; i >= 0; i--) {
        if (images[i]) {
            // clear session storage items with original img id
            sessionStorage.removeItem(images[i].id);

            // generate id            
            images[i].id = images[i].id ? images[i].id : generateGuid();

            // store image
            sessionStorage.setItem(images[i].id, JSON.stringify({ src: images[i].src, width: images[i].width, height: images[i].height }));
        }
    }
}

document.addEventListener('click', manageImageBarElement, false);
window.addEventListener('keydown', isEscKeyPressed, false);
window.addEventListener('load', storeImages, false);