let nfe2 = document.querySelector('.nfe2')
let ecpf2 = document.querySelector('.ecpf2')
let ecnpj2 = document.querySelector('.ecnpj2')
function ecpf(){
    ecpf2.style.display = 'flex';
    nfe2.style.display = 'none';
    ecnpj2.style.display = 'none';
    a1cpf.style.display = "none"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "none"
}
function ecnpj(){
    ecpf2.style.display = 'none';
    nfe2.style.display = 'none';
    ecnpj2.style.display = 'flex';
    a1cpf.style.display = "none"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "none"

}
function nfe(){
    ecpf2.style.display = 'none';
    nfe2.style.display = 'flex';
    ecnpj2.style.display = 'none';
    a1cpf.style.display = "none"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "none"
}
/*ecpf*/

let a1cpf = document.querySelector('.validade1');
let a1cpf1 = document.querySelector('.validade2');
let a1cpf2 = document.querySelector('.validade3');
let a1cpf3 = document.querySelector('.validade4');
let mensagem = document.querySelector('.mensagem');

function valEcpfA1 (){
    a1cpf.style.display = "flex"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "none"

}
function valEcpfA12 (){
    a1cpf.style.display = "none"
    a1cpf1.style.display = "flex"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "none"
}
function valEcpfA13 (){
    a1cpf.style.display = "none"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "flex"
    a1cpf3.style.display = "none"
}
function valEcpfA14 (){
    a1cpf.style.display = "none"
    a1cpf1.style.display = "none"
    a1cpf2.style.display = "none"
    a1cpf3.style.display = "flex"
}