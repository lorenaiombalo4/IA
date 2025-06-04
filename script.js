const caixaPrincipal = document.queryconst caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como podemos relacionar a preservação ambiental com a Semana Farroupilha?",
        alternativas: [
            {
                texto: " Incentivando festas e eventos sustentáveis durante as comemorações.",
                afirmacao: "Reduz o impacto ambiental das celebrações (menos lixo, menos desperdício)."
            },
            {
                texto: " Valorizando práticas antigas de convivência com a natureza, como o uso racional de recursos.",
                afirmacao: "Ensina que os povos antigos também tinham sabedoria ecológica."
            }
        ]
    },
    {
        enunciado: "Como podemos promover a valorização cultural durante a Semana Farroupilha, respeitando a diversidade e combatendo a homofobia?",
        alternativas: [
            {
                texto: "Incentivar eventos que incluam apresentações de grupos LGBTQIA+ na Semana Farroupilha, mostrando que a diversidade faz parte da cultura gaúcha.",
                afirmacao: " O Movimento LGBTQIA+ tem contribuído para a valorização da cultura local com novas expressões artísticas."
            },
            {
                texto: "Focar nas tradições clássicas da Semana Farroupilha, mas implementando campanhas de conscientização contra a homofobia para educar o público.",
                afirmacao: " A Semana Farroupilha celebra a história e tradições do Rio Grande do Sul, e a educação é uma ferramenta poderosa para combater preconceitos.
            }
        ]
    },
    {
        enunciado: "Qual a relação entre a conservação da fauna gaúcha e a promoção de um ambiente livre de homofobia?",
        alternativas: [
            {
                texto: " Estimular grupos de conservação ambiental que incluam ativistas LGBTQIA+, promovendo inclusão em causas sociais e ambientais.",
                afirmacao: " A diversidade social fortalece movimentos ambientais, trazendo diferentes perspectivas e maior engajamento."
            },
            {
                texto: "Priorizar ações de proteção animal com políticas públicas, assegurando que essas ações sejam igualmente respeitosas e inclusivas para todas as pessoas, independentemente de orientação sexual.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
