var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(paciente => {
        var nome = paciente.querySelector(".info-nome").textContent.toUpperCase();
        if (filtro.value == "") invisivel(paciente, false);
        else if (new RegExp(this.value, "i").test(nome)) invisivel(paciente, false);
        else invisivel(paciente, true);
    });
});

function invisivel(paciente, invisivel) {
    if (invisivel) paciente.classList.add("invisivel");
    else paciente.classList.remove("invisivel");
}