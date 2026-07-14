console.log('Pharma Excel Solution');
function openPreview(image){

document.getElementById("lightbox").style.display="flex";

document.getElementById("previewImage").src=image;

}

function closePreview(){

document.getElementById("lightbox").style.display="none";

}