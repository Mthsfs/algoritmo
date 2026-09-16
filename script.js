// Array que guarda todas as cenas do jogo
const cenas = [
    {
        id: 0,
        texto: "Você acorda na entrada de uma floresta escura. À sua frente há dois caminhos.",
        opcoes: [
            { texto: "Seguir pela trilha iluminada", proximaCena: 1 },
            { texto: "Entrar na caverna sombria", proximaCena: 2 }
        ]
    },
    {
        id: 1,
        texto: "A trilha te leva a um lindo castelo abandonado. Você venceu a aventura com segurança!",
        opcoes: [
            { texto: "Jogar novamente", proximaCena: 0 }
        ]
    },
    {
        id: 2,
        texto: "Dentro da caverna, você dá de cara com um dragão adormecido! Fim de jogo.",
        opcoes: [
            { texto: "Tentar novamente", proximaCena: 0 }
        ]
    }
];

// Seleção dos elementos do HTML
const elementoTextoCena = document.getElementById("texto-cena");
const elementoCaixaBotoes = document.getElementById("caixa-botoes");

// Função para carregar uma cena na tela
function iniciarCena(cenaId) {
    const cenaAtual = cenas.find(cena => cena.id === cenaId);
    
    // Atualiza o texto da história
    elementoTextoCena.innerText = cenaAtual.texto;
    
    // Limpa os botões anteriores
    elementoCaixaBotoes.innerHTML = "";
    
    // Cria um novo botão para cada opção disponível
    cenaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opacity = opcao.texto;
        botao.addEventListener("click", () => iniciarCena(opcao.proximaCena));
        elementoCaixaBotoes.appendChild(botao);
    });
}

// Inicia o jogo na primeira cena (id 0)
iniciarCena(0);
