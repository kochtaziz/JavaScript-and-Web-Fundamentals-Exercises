function msg() {
    alert('Bienvenue dans notre page');
}

function grandir() {
    document.getElementById('img1').style.width = "200px";
}

function reduire() {
    document.getElementById('img1').style.width = "150px";
}

function changerImg() {
    document.getElementById('img1').src = "img2.jpg"; // Example change image on hover
}

function imgInit() {
    document.getElementById('img1').src = "img1.jpg";
}
