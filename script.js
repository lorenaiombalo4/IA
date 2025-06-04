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
                afirmacao: "Políticas públicas podem integrar combate à homofobia e conservação ambiental, promovendo igualdade e sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Durante a Semana Farroupilha, como podemos usar a narrativa histórica para combater a homofobia e também destacar a importância da biodiversidade do Rio Grande do Sul?",
        alternativas: [
            {
                texto: "Contar histórias de figuras históricas da região que tenham relação com a luta por direitos e respeito à diversidade, vinculando isso à preservação dos animais locais.",
                afirmacao: "Personagens históricos podem ser inspiração para promover valores de respeito e proteção ambiental."
            },
            {
                texto: "Utilizar símbolos tradicionais da Semana Farroupilha para promover mensagens de respeito e inclusão, enquanto destacamos espécies ameaçadas da fauna local como patrimônio a ser preservado.",
                afirmacao: "O símbolo do chimarrão, por exemplo, representa união cultural e pode ser usado para sensibilizar sobre inclusão e conservação."
            }
        ]
    },
    {
        enunciado: "Como o combate à homofobia pode influenciar positivamente a conscientização sobre a extinção de animais no Rio Grande do Sul?",
        alternativas: [
            {
                texto: " Construir uma cultura de respeito e empatia, que valorize todas as formas de vida, tanto humana quanto animal, criando assim um ambiente mais inclusivo e consciente.",
                afirmacao: "A empatia contra o preconceito social está ligada à valorização da vida em geral, incluindo espécies ameaçadas."
            },
            {
                texto: " Incluir comunidades LGBTQIA+ nas campanhas ambientais, reforçando que o engajamento social diverso fortalece as ações contra a extinção de espécies.",
                afirmacao: 'A diversidade nos grupos de defesa ambiental contribui para estratégias mais criativas e efetivas.'
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
