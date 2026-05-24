var modal = document.getElementById("contactModal");
var overlay = document.getElementById("overlay");

var openContact = document.getElementById("openContact");
var openContactBtn = document.getElementById("openContactBtn");

var closeModal = document.getElementById("closeModal");

var downloadApp = document.getElementById("downloadApp");
var downloadHeader = document.getElementById("downloadHeader");

openContact.onclick = function(e){

    e.preventDefault();

    modal.style.display = "block";
    overlay.style.display = "block";
}

openContactBtn.onclick = function(){

    modal.style.display = "block";
    overlay.style.display = "block";
}

closeModal.onclick = function(){

    modal.style.display = "none";
    overlay.style.display = "none";
}

overlay.onclick = function(){

    modal.style.display = "none";
    overlay.style.display = "none";
}

downloadApp.onclick = function(){

    alert("O protótipo mobile ainda está em desenvolvimento.");
}

downloadHeader.onclick = function(){

    alert("O protótipo mobile ainda está em desenvolvimento.");
}