var tabelaPaciente = document.querySelector("#tabela-pacientes");

tabelaPaciente.addEventListener("dblclick", function (event) {
    event.target.parentNode.remove();
});