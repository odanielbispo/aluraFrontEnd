let buscarPacientes = document.querySelector('#buscar-paciente');
buscarPacientes.addEventListener('click', function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        let erroAjax = document.querySelector('#erro-ajax');
        if(xhr.status == 200){
            erroAjax.classList.add('invisivel')
            let resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel');
        }

    });

    xhr.send();
});