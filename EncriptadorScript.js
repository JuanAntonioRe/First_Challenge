var botonEncriptar = document.querySelector("#btnEncriptar");
var botonDesencriptar = document.querySelector("#btnDesencriptar")
var botonCopiar = document.querySelector(".copiar")

const mensajeEntrada = document.querySelector("#ingreseTexto");
const rectangulo = document.querySelector(".mensajeEncontrado");

const aviso = document.querySelector(".acentos");
const muneca = document.querySelector(".muneca");
const muneca2 = document.querySelector(".encriptarDesencriptar");

const copiar = document.querySelector(".copiar");

const acentos = /[áéíóú]/

function btnEncriptar(){

    const mensaje = encriptar(mensajeEntrada.value);

    if(mensajeEntrada.value == ""){
        alert("Por favor, escribe un mensaje a encriptar");
    } else{
        if(mensaje != ""){
            rectangulo.innerHTML = mensaje;
            mensajeEntrada.value = "";
            showMessage();
        }
    }
}

function encriptar(mensajeaEncriptar){

    let matrizMadre = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    if(acentos.test(mensajeaEncriptar)){
        alert("Se colocó una letra con acento");
        aviso.style.color = "red";
        mensajeaEncriptar = "";
    } else{

        for(let i = 0; i < matrizMadre.length; i++){
            if(mensajeaEncriptar.includes(matrizMadre[i][0])){
                mensajeaEncriptar = mensajeaEncriptar.replaceAll(matrizMadre[i][0], matrizMadre[i][1]);
            }
        }
    }
    return mensajeaEncriptar;
}

function btnDesencriptar(){

    const mensaje = desencriptar(mensajeEntrada.value);

    if(mensajeEntrada.value == ""){
        alert("Por favor, escribe un mensaje a desencriptar");
    } else{
        if(mensaje != ""){
            rectangulo.innerHTML = mensaje;
            mensajeEntrada.value = "";
            showMessage();
        }
    }
}

function desencriptar(mensajeaDesencriptar){

    let matrizMadre = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    if(acentos.test(mensajeaDesencriptar)){
        alert("Se colocó una letra con acento");
        aviso.style.color = "red";
        mensajeaDesencriptar = "";
    } else{

        for(let i = 0; i < matrizMadre.length; i++){
            if(mensajeaDesencriptar.includes(matrizMadre[i][1])){
                mensajeaDesencriptar = mensajeaDesencriptar.replaceAll(matrizMadre[i][1], matrizMadre[i][0]);
            }
        }
    }
    return mensajeaDesencriptar;
}

function showMessage(){
    muneca.style.display = "none";
    muneca2.style.display = "none";
    rectangulo.style.position = "unset";
    rectangulo.style.width = "auto";
    rectangulo.style.fontWeight = "400";
    rectangulo.style.textAlign = "left";
    rectangulo.style.margin = "10px 0px 10px 25px";
    aviso.style.color = "black";

    copiar.classList.replace("copiar","show");
}

function btnCopiar(){
    const inputoculto = document.createElement('input');
    inputoculto.setAttribute('value', rectangulo.innerText);
    document.body.appendChild(inputoculto);
    inputoculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputoculto);
}

botonEncriptar.onclick = btnEncriptar;
botonDesencriptar.onclick = btnDesencriptar;
botonCopiar.onclick = btnCopiar;