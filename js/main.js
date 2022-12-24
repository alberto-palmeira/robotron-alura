function customizaRobotron (operacao, controle, peca) {
    const quantidadePeca = controle.querySelector('[data-contador]');
    
        if (operacao === '+') {
            estatisticas.forEach( (elemento) => {
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
            });
            quantidadePeca.value = parseInt(quantidadePeca.value) + 1;
        } else if (operacao === '-' && quantidadePeca.value > 0) {
            estatisticas.forEach((elemento) => {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
            })
            quantidadePeca.value = parseInt(quantidadePeca.value) - 1;
        };
    }

const botao = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botao.forEach(function(elemento){ 
    elemento.addEventListener('click', (evento) => {
        const operacao = evento.target.dataset.controle;
        const controle = evento.target.parentNode;
        const peca = evento.target.dataset.peca;

        customizaRobotron(operacao, controle, peca);
    });
});
