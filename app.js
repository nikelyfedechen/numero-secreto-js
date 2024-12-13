const containerInicio = document.querySelector('.container__conteudo-inicio');

const containerErro = document.querySelector('.container__conteudo-errou');
containerErro.style.display = 'none';

const containerAcerto = document.querySelector('.container__conteudo-acertou');
containerAcerto.style.display = 'none';

const numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)

const inputNumeroSecretoValue = document.getElementById('input-numero-secreto')

function mensagemDicaNumeroSecreto() {
    const mensagemDica = document.getElementById('dica-numero-secreto');

    if(inputNumeroSecretoValue.value > numeroSecreto) {
        mensagemDica.innerHTML = 'O número secreto é menor.';
    } else {
        mensagemDica.innerHTML = 'O número secreto é maior.';
    }
}

function validaNumeroSecreto() {
    if(inputNumeroSecretoValue.value == numeroSecreto) {
        containerInicio.style.display = 'none';
        containerAcerto.style.display = 'block';
    } else {
        containerInicio.style.display = 'none';
        containerErro.style.display = 'block'
        mensagemDicaNumeroSecreto()
    }
}

function retornaParaInicio() {
    containerInicio.style.display = 'block';
    inputNumeroSecretoValue.value = '';
}

document.getElementById('btn-descobrir-numero').addEventListener('click', validaNumeroSecreto)

document.getElementById('btn-tentar-novamente').addEventListener('click', function() {
    containerErro.style.display = 'none';
    retornaParaInicio();
})

document.getElementById('btn-jogar-novamente').addEventListener('click', function() {
    containerAcerto.style.display = 'none';
    retornaParaInicio();
})