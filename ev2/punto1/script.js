"use strict";

let btnSumar =document.getElementById("btnSumar");
btnSumar.addEventListener("click",sumar);

let btnRestar = document.getElementById("btnRestar");
btnRestar.addEventListener("click",restar);





function sumar() {
    
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let divResultado = document.getElementById("divResultado");

    let resultado = document.createElement("p");

    resultado.innerHTML = "el resultado de la suma es : " + (Number(input1.value) + Number(input2.value));

    divResultado.appendChild(resultado);

    btnSumar.classList.add("rojo");
    resultado.classList.add("rojo");

}

function restar() {
    
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let divResultado = document.getElementById("divResultado");

    let resultado = document.createElement("p");

    resultado.innerHTML = "el resultado de la resta es : " + (Number(input1.value) - Number(input2.value));
    

    divResultado.appendChild(resultado);

    btnRestar.classList.add("azul");
    resultado.classList.add("azul");

    

}