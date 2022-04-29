
let fotos = ["foto1.png","foto2.png","foto3.png"];
let fotoatual = 1;

let banner = document.querySelector(".principal");

setInterval(function(){
    banner.style.backgroundImage = 'url('+fotos[fotoatual]+')'; 
    banner.style.backgroundSize = 'cover';
    fotoatual++
    if(fotoatual>2){
        fotoatual=0;
    }
},3000)