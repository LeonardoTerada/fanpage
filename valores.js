let nfe2 = document.querySelector('.nfe2')
let ecpf2 = document.querySelector('.ecpf2')
let ecnpj2 = document.querySelector('.ecnpj2')
function ecpf(){
    ecpf2.style.display = 'block';
    nfe2.style.display = 'none';
    ecnpj2.style.display = 'none';
}
function ecnpj(){
    ecpf2.style.display = 'none';
    nfe2.style.display = 'none';
    ecnpj2.style.display = 'block';
}
function nfe(){
    ecpf2.style.display = 'none';
    nfe2.style.display = 'block';
    ecnpj2.style.display = 'none';
}