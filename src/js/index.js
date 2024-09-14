/*
Objetivo quando a gente clicar no botao temos que mostrar a imagem de fundo correspondente
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        destivarBotaoSelecionado();
        
        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();
        
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function destivarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
