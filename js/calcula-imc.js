// var titulo = document.querySelector(".titulo");
// titulo.textContent = "Aparecida Nutricionista";
// console.log(titulo.textContent);

// var paciente = document.querySelector("#primeiro-paciente");
// var peso = paciente.querySelector(".info-peso").textContent;
// var altura = paciente.querySelector(".info-altura").textContent;
// var imc = peso / (altura * altura);

// paciente.querySelector(".info-imc").textContent = imc;
// console.log(imc);


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");

    if (peso > 200 || peso < 0) {

        imc.textContent = "Peso ínvalido!"
        paciente.classList.add("paciente-invalido");
        // paciente.style.backgroundColor="red";
    }
    else if (altura > 3.20 || altura < 0) {
        imc.textContent = "Altura ínvalida!"
        paciente.classList.add("paciente-invalido");
    }
    else {
        imc.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura)
{
    var valorImc = peso / (altura * altura);
    return valorImc.toFixed(2);
}