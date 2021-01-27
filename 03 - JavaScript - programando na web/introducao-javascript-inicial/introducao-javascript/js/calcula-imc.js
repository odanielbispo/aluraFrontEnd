let titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;
    
    let tdImc = paciente.querySelector('.info-imc');
    //let imcDaLinha = tdImc.textContent;

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        console.log('Peso inválido');
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido';
        paciente.classList.add('paciente-invalido');
    } 
    if(!alturaValida){
        console.log('Altura Inválida');
        alturaValida = false;
        tdImc.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido');
    }
    if(pesoValido && alturaValida){
        let imc = calculaImc(peso, altura)
        tdImc.textContent = imc.toFixed(2);
    }
}

titulo.addEventListener('click', function (){
    console.log('Olha só, posso chamar uma função anonima');
});

function validaPeso(peso){
    if(peso >=0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3.0){
        return true
    }
    else{return false}
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc;
}