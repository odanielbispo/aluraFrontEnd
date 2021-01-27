let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    let form = document.querySelector('#adiciona')
    let paciente = obtemInfoForm(form);

    

    let erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeErros(erros);
        return '';
    }
    
    if(!validaPaciente(paciente)){
        console.log('Paciente inválido');
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
});

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeErros(erros){
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemInfoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente (paciente){
    let erros = [];

    if(!validaPeso(paciente.peso)) {erros.push('O peso é inválido');}
    if(!validaAltura(paciente.altura)) {erros.push('A altura é inválida');}

    if(paciente.nome.length == 0){
        erros.push('Você precisa preencher o campo de nome!')
    }

    if(paciente.peso.length == 0){
        erros.push('Você precisa preencher o campo de peso!');
    }

    if(paciente.altura.length == 0){
        erros.push('Você precisa preencher o campo de altura')
    }

    if(paciente.gordura.length == 0){
        erros.push('Você precisa preencher o campo de % gordura')
    }
    
    return erros;
}