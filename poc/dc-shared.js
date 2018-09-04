export const restoreValues = function(imgObject) {
    if (!imgObject) return {};
    
    var originalValues = JSON.parse(sessionStorage.getItem(imgObject.id)) || {};
    return {
        src: originalValues ? originalValues.src : imgObject.src,
        width: originalValues ? originalValues.width : imgObject.width,
        height: originalValues ? originalValues.height : imgObject.height
    }
}