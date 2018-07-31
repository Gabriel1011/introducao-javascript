var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var imc = peso / (altura * altura);

paciente.querySelector(".info-imc").textContent = imc;
console.log(imc);


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
        var valorImc = peso / (altura * altura);
        imc.textContent = valorImc.toFixed(2);
        console.log(valorImc);
    }
}


titulo.addEventListener("click", function () {
    console.log("teste função anonima");
});

var formAdicoinar = document.querySelector("#form-adicionar");

var btnAdcionarPaciente =
    document.querySelector("#adicionar-paciente").addEventListener("click", adicionarPaciente);

function adicionarPaciente() {
    event.preventDefault();
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    
    nomeTd.textContent = formAdicoinar.nome.value;
    pesoTd.textContent = formAdicoinar.peso.value;
    alturaTd.textContent = formAdicoinar.altura.value;
    gorduraTd.textContent = formAdicoinar.gordura.value;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabelaPaciente = document.querySelector("#tabela-pacientes");
    tabelaPaciente.appendChild(pacienteTr);
    console.log(pacienteTr);
}



 

