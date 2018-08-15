
var btnAdcionarPaciente =
    document.querySelector("#adicionar-paciente").addEventListener("click", adicionarPaciente);

function adicionarPaciente() {

    event.preventDefault();
    var formAdicoinar = document.querySelector("#form-adicionar");
    var paciente = obterDadosDoForm(formAdicoinar);

    var erros = ValidarPaciente(paciente);
    if (erros.length > 0) {
        return ExibiMensagemErro(erros);
    }

    var pacienteTr = AdcionarPaciente(paciente, pacienteTr);
}


function ExibiMensagemErro(erros) {
    var listaErro = document.querySelector("#mensagemErro");
    listaErro.innerHTML = "";
    erros.forEach(erro => {
        var liErro = document.createElement("li");
        liErro.textContent = erro;
        listaErro.appendChild(liErro);
    });
    return;
}

function AdcionarPaciente(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    var tabelaPaciente = document.querySelector("#tabela-pacientes");
    tabelaPaciente.appendChild(pacienteTr);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function ValidarPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco.");
    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco.");
    if (!ValidaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso é Inválido!");
    if (!ValidarAltura(paciente.altura) || paciente.altura.length == 0) erros.push("Altura é Inválido!");
    return erros;
}

function obterDadosDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularimc(form.peso.value, form.altura.value)
    }
    return paciente;
}