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

    if (!ValidaPeso(peso)) {

        imc.textContent = "Peso ínvalido!"
        paciente.classList.add("paciente-invalido");
    }
    else if (!ValidarAltura(altura)) {
        imc.textContent = "Altura ínvalida!"
        paciente.classList.add("paciente-invalido");
    }
    else {
        imc.textContent = calcularIMC(peso, altura);
    }
}

function ValidaPeso(peso) {
    if (peso > 200 || peso < 0)
        return false;
    else
        return true;
}

function ValidarAltura(altura) {
    if (altura > 3.20 || altura < 0)
        return false;
    else
        return true;
}

function calcularIMC(peso, altura) {
    var valorImc = peso / (altura * altura);
    return valorImc.toFixed(2);
}