const containerInicio = document.querySelector('.container__conteudo-inicio');

const containerErro = document.querySelector('.container__conteudo-errou');
containerErro.style.display = 'none';

const containerAcerto = document.querySelector('.container__conteudo-acertou');
containerAcerto.style.display = 'none';

const numeroMaximo = 500;
let numSecreto = parseInt(Math.random() * numeroMaximo + 1)

const inputNumeroSecretoValue = document.getElementById('input-numero-secreto')

function validaNumeroSecreto() {
    if(inputNumeroSecretoValue.value == numSecreto) {
        containerInicio.style.display = 'none';
        containerAcerto.style.display = 'block';
    } else {
        containerErro.style.display = 'block'
        containerInicio.style.display = 'none';
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