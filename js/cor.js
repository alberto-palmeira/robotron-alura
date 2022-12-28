// ---------------- Funções ----------------

function mudaCor (cor) {
    const cores = ['amarelo', 'azul', 'branco', 'preto', 'rosa', 'vermelho'];

    for (let indice = 0; indice < cores.length; indice++) {
        if (cor == cores[indice]) {
            robotron.setAttribute('src', `img/robotron-${cor}.png`);
        }
    }
}

// ---------------- Lógica ----------------

const robotron = document.querySelector('#robotron');
const botaoCor = document.querySelectorAll('.botao__cor');

botaoCor.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();

        const cor = evento.target.dataset.cor;
        
        mudaCor(cor);
    })
});
