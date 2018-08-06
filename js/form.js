
var btnAdcionarPaciente =
    document.querySelector("#adicionar-paciente").addEventListener("click", adicionarPaciente);

function adicionarPaciente() {
    event.preventDefault();
    var formAdicoinar = document.querySelector("#form-adicionar");
    
    var paciente = obterDadosDoForm(formAdicoinar);
    var pacienteTr = MontarTr(paciente, pacienteTr);

    var tabelaPaciente = document.querySelector("#tabela-pacientes");
    tabelaPaciente.appendChild(pacienteTr);
}


function MontarTr(paciente) {

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(paciente.peso, paciente.altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function obterDadosDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        IMC: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}