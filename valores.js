/*tipo do certificado*/
let ecpf  = document.getElementById('tab1');
let ecnpj = document.getElementById('tab2');
let nfe   = document.getElementById('tab3');
/*tipo do dispositivo  */
let arquivo   = document.getElementById('tab4');
let cartao    = document.getElementById('tab5');
let leitora   = document.getElementById('tab6');
let token     = document.getElementById('tab7');
/*tipo de validade*/
let meses12     = document.getElementById('tab8');
let meses24     = document.getElementById('tab9');
let meses36     = document.getElementById('tab10');

/*validade input */
let meses12in = document.querySelector('.val1txt'); 
let meses24in = document.querySelector('.val2txt'); 
let meses36in = document.querySelector('.val3txt'); 
/*botao  */
let link = document.querySelector('.link');
/*valores */
let linha1 = document.querySelector('.dep');
let linha2 = document.querySelector('.valor');
let linha3 = document.querySelector('.parcela');
/*funcao */
setInterval(
function (){
    /*verificandp se é ecnpj */
        if(ecnpj.checked == true){
            if(arquivo.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"    
                    linha1.innerHTML = 'de R$ 240,00 por'
                    linha2.innerHTML = 'R$ 206,10'
                    linha3.innerHTML = '12x de R$17,18'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0761/E-CNPJ-A1-12-MESES-SEM-MIDIAL?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
            }/*feito*/
            else if(cartao.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 329,00 por'
                    linha2.innerHTML = 'R$ 256,50'
                    linha3.innerHTML = '12x de R$21,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3366/e-CNPJ-A3-12-MESES-CARTAO?coupon=LPARM28688'

                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 375,00 por'
                    linha2.innerHTML = 'R$ 292,50'
                    linha3.innerHTML = '12x de R$24,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0780/e-CNPJ-A3-24-MESES-CARTAO?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 419,00 por'
                    linha2.innerHTML = 'R$ 341,10'
                    linha3.innerHTML = '12x de R$28,43'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0648/e-CNPJ-A3-36-MESES-CARTAO?coupon=LPARM28688'
                }
            }/*feito */
            else if(leitora.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 465,00 por'
                    linha2.innerHTML = 'R$ 364,50'
                    linha3.innerHTML = '12x de R$30,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3140/e-CNPJ-A3-12-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 529,00 por'
                    linha2.innerHTML = 'R$ 413,10'
                    linha3.innerHTML = '12x de R$34,43'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0762/e-CNPJ-A3-24-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 589,00 por'
                    linha2.innerHTML = 'R$ 463,50'
                    linha3.innerHTML = '12x de R$38,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0649/e-CNPJ-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                } 
            }/*feito */
            else if(token.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 465,00 por'
                    linha2.innerHTML = 'R$ 364,50'
                    linha3.innerHTML = '12x de R$30,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3141/e-CNPJ-A3-12-MESES-TOKEN?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 529,00 por'
                    linha2.innerHTML = 'R$ 413,10'
                    linha3.innerHTML = '12x de R$34,43'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0785/e-CNPJ-A3-24-MESES-TOKEN?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 619,00 por'
                    linha2.innerHTML = 'R$ 485,10'
                    linha3.innerHTML = '12x de R$40,43'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0650/e-CNPJ-A3-36-MESES-TOKEN?coupon=LPARM28688'
                }
            }/*feito */
        }



    /*verificandp se é ecpf */
        else if(ecpf.checked == true){
            if(arquivo.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'Por'
                    linha2.innerHTML = 'R$ 139,50'
                    linha3.innerHTML = '12x de R$11,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0769/e-CPF-A1-12-MESES-SEM-MIDIA?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
            }
            else if(cartao.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 235,00 por'
                    linha2.innerHTML = 'R$ 184,50'
                    linha3.innerHTML = '12x de R$15,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/1471/e-CPF-A3-12-MESES-CARTAO?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 275,00 por'
                    linha2.innerHTML = 'R$ 215,10'
                    linha3.innerHTML = '12x de R$17,93'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0752/e-CPF-A3-24-MESES-CARTAO?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 305,00 por'
                    linha2.innerHTML = 'R$ 256,50'
                    linha3.innerHTML = '12x de R$21,38'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0644/e-CPF-A3-36-MESES-CARTAO?coupon=LPARM28688'
                }
            }
            else if(leitora.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 409,00 por'
                    linha2.innerHTML = 'R$ 319,50'
                    linha3.innerHTML = '12x de R$26,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/1652/e-CPF-A3-12-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                }
                else if(meses24.checked == true){ 
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 455,00 por'
                    linha2.innerHTML = 'R$ 355,50'
                    linha3.innerHTML = '12x de R$29,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0768/e-CPF-A3-24-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 479,00 por'
                    linha2.innerHTML = 'R$ 373,50'
                    linha3.innerHTML = '12x de R$31,13'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0645/e-CPF-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                } 
            }
            else if(token.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 409,00 por'
                    linha2.innerHTML = 'R$ 319,50'
                    linha3.innerHTML = '12x de R$26,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/3139/e-CPF-A3-12-MESES-TOKEN?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 455,00 por'
                    linha2.innerHTML = 'R$ 355,50'
                    linha3.innerHTML = '12x de R$29,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0784/e-CPF-A3-24-MESES-TOKEN?coupon=LPARM28688'
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "flex"
                    meses36in.style.display = "flex"
                    linha1.innerHTML = 'de R$ 505,00 por'
                    linha2.innerHTML = 'R$ 395,10'
                    linha3.innerHTML = '12x de R$32,93'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0646/e-CPF-A3-36-MESES-TOKEN?coupon=LPARM28688'
                }
            }
        }


    /*verificandp se é nfe */
        else if(nfe.checked == true){
            if(arquivo.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 270,00 por'
                    linha2.innerHTML = 'R$ 206,10'
                    linha3.innerHTML = '12x de R$17,18'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1296/NF-e-A1-12-MESES-SEM-MIDIA?coupon=LPARM28688'
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "flex"
                    meses24in.style.display = "none"
                    meses36in.style.display = "none"
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
            }
            else if(cartao.checked == true){
                if(meses12.checked == true){
                    meses24in.style.display = "none";
                    meses12in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses24.checked == true){
                    meses24in.style.display = "none";
                    meses12in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses36.checked == true){
                    meses24in.style.display = "none";
                    meses12in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 454,00 por'
                    linha2.innerHTML = 'R$ 355,50'
                    linha3.innerHTML = '12x de R$29,63'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1460/NF-e-A3-36-MESES-CARTAO?coupon=LPARM28688'
                }
            }
            else if(leitora.checked == true){
                if(meses12.checked == true){
                    meses12in.style.display = "none"
                    meses24in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses24.checked == true){
                    meses12in.style.display = "none"
                    meses24in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 0,00 por'
                    linha2.innerHTML = 'R$ 0,00'
                    linha3.innerHTML = '12x de R$00,00'
                    link.href = ''
                }
                else if(meses36.checked == true){
                    meses12in.style.display = "none"
                    meses24in.style.display = "none";
                    meses36in.style.display = "flex";
                    linha1.innerHTML = 'de R$ 655,00 por'
                    linha2.innerHTML = 'R$ 512,10'
                    linha3.innerHTML = '12x de R$42,68'
                    link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1461/NF-e-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPARM28688'
                } 
            }
            else if(token.checked == true){
               if(meses36.checked == true){
                   console.log('ok') 
                   meses12in.style.display = "none"
                    meses24in.style.display = "none";
                    meses36in.style.display = "flex";     
                }
                else{
                    meses36.checked = true
                    console.log('feito')
                    meses12in.style.display = "none"
                    meses24in.style.display = "none";
                    meses36in.style.display = "flex";
                }
            }
        }


    },2)


    if(meses12.checked == true){
        meses12in.style.display = "none"
        meses24in.style.display = "none";
        meses36in.style.display = "flex";
        linha1.innerHTML = 'de R$ 0,00 por'
        linha2.innerHTML = 'R$ 0,00'
        linha3.innerHTML = '12x de R$00,00'
        link.href = ''
    }
    else if(meses24.checked == true){
        meses12in.style.display = "none"
        meses24in.style.display = "none";
        meses36in.style.display = "flex";
        linha1.innerHTML = 'de R$ 0,00 por'
        linha2.innerHTML = 'R$ 0,00'
        linha3.innerHTML = '12x de R$00,00'
        link.href = ''
    }
    else if(meses36.checked == true){
        meses12in.style.display = "none"
        meses24in.style.display = "none";
        meses36in.style.display = "flex";
        linha1.innerHTML = 'de R$ 655,00 por'
        linha2.innerHTML = 'R$ 512,10'
        linha3.innerHTML = '12x de R$42,68'
        link.href = 'https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1676/NF-e-A3-36-MESES-TOKEN?coupon=LPARM28688'
    }