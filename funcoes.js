let fotos = [ "foto1.png", "foto2.png", "foto3.png" ];
let fotoatual =0;


function trocarfoto(foto){
document.querySelector(".rotativa").src=fotos[foto];
}
trocarfoto(fotoatual);

setInterval(function(){
    fotoatual++
    if (fotoatual > 2) {
        fotoatual=0;
    }
    trocarfoto(fotoatual);
},3000)