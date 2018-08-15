var botaoAdicionarPaciente = document.querySelector("#buscar-pacientes");

botaoAdicionarPaciente.addEventListener("click", function () {
    console.log("Buscando pacientes...");
    //http://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                AdcionarPaciente(paciente);
            });
            document.querySelector("#erro-ajax").classList.add("invisivel");
        }
        else
        {
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
    });

    xhr.send();
});
