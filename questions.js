const buttons = document.querySelectorAll(".btn");
const title = document.querySelector("#title");
const gameTitle = document.querySelector('#game-title')
const alternativeA = document.querySelector(".a");
const alternativeB = document.querySelector(".b");
const alternativeC = document.querySelector(".c");
const modal = document.querySelector("#modal");

const pointElement = document.querySelector("#point");



const setQuestions = () => {

  console.log(gameTitle.getAttribute('data-value'))
  if (gameTitle.getAttribute("data-value") === "cinema") {
    // cinema
    return [
      {
        title: "Qual o nome do filme com a maior bilheria mundial e quanto ele arrecadou?",
        a: " Avatar, arrecadou US$ 2,847 bilhões",
        b: "Vingadores Ultimato, arrecadou US$ 5,987 bilhões",
        c: "Avatar 2, arrecadou US$ 2,847 bilhões",
        correctAnswer: "a",
      },
      {
        title: "Onde estava o personagem 'Homem-Formiga' no filme 'Vingadores: Guerra Infinita' e quanto tempo ele ficou desaparecido?",
        a: "Ele estava no reino quântico e ficou lá por 5 anos.",
        b: "Ele estava em uma fazenda com a família e ficou lá por 2 anos.",
        c: "Ele estava sendo preso pelo vilão Kang e ficou lá por 6 meses.",
        correctAnswer: "a",
      },
      {
        title: "Qual foi a única atriz brasileira a concorrer à categoria máxima de atuação no Oscar? E em qual ano ela concorreu?",
        a: "Carolina Dieckman, em 2001.",
        b: "Alice Braga, em 2003.",
        c: "Fernanda Montenegro, em 1999.",
        correctAnswer: "c",
      },
      {
        title: "Quantos atores já interpretaram o coringa no cinema? E quais seus nomes respectivamente?",
        a: "5, Cesar Romero, Jack Nicholson, Heath Ledger, Jared Leto e Joaquin Phoenix.",
        b: "5, Jack Nicholson, Heath Ledger, Jared Leto, Joaquin Phoenix e Barry Keoghan.",
        c: "6, Cesar Romero, Jack Nicholson, Heath Ledger, Jared Leto, Joaquin Phoenix e Barry Keoghan.",
        correctAnswer: "b",
      },
      {
        title: "No filme 'O Diabo Veste Prada' quanto foi necessário para adquirir o figurino?",
        a: "3 milhões de dólares.",
        b: "1,7 milhões de dólares.",
        c: "1 milhão de dólares.",
        correctAnswer: "c",
      },
       {
        title: "Segundo 'Quentin Tarantino' quantos filmes ele dirigiu?",
        a: "10 Filmes.",
        b: "9 Filmes.",
        c: "17 Filmes.",
        correctAnswer: "b",
      },
    ];
  } else if (gameTitle.getAttribute("data-value") === "mat") {
    // matematica
    return [
      {
        title: "No quintal, 4 gatinhos estavam correndo atrás de uma bola. Que horas são?",
        a: "12:56        ",
        b: "17:23        ",
        c: "15:04        ",
        correctAnswer: "a",
      },
      {
        title: "Um tio tem 30 pirulitos para dividir entre duas sobrinhas. Que horas são?",
        a: "11:50",
        b: "13:45",
        c: "09:30        ",
        correctAnswer: "b",
      },
      {
        title: "Ana tem 2 reais a mais que Lavínia, Lavínia tem dois reais a mais que Vic e Vic tem dois reias a mais que Bruna. O grupo das 4 ao todo possui 48 reais. Quanto cada uma delas tem?",
        a: "Bruna tem 9, Vic tem 11, Lavínia tem 13 e Ana tem 15",
        b: "Ana tem 14, Lavínia tem 12, Vic tem 10 e Bruna tem 8",
        c: "Bruna tem 8, Vic tem 10, Lavínia tem 12 e Ana tem 14",
        correctAnswer: "a",
      },
      {
        title: "Em uma festa onde estão 100 pessoas, sabe-se que 99% são adultos. Quantas adultos devem ir embora para que a porcentagem de adultos na festa passe a ser 98%?",
        a: "1",
        b: "25",
        c: "50",
        correctAnswer: "c",
      },
      {
        title: "O dobro de um determinado número somado com seu triplo, resulta em 65. Qual é esse número?        ",
        a: "15",
        b: "13",
        c: "-13",
        correctAnswer: "b",
      },
      {
        title: "Qual o resultado da expressão abaixo: 120 + {560 / [40 + (300 / 10)] - 19}",
        a: "109",
        b: "105",
        c: "112",
        correctAnswer: "a",
      },
    ];
  } else if (gameTitle.getAttribute("data-value") === "barbie") {
    
    // barbie
    return [
      {
        title: "Quantas são as protagonistas de “Barbie - O Castelo de Diamantes”, e qual o nome delas?",
        a: "2. Liana e Alexa",
        b: "3. Merliah, Elina e Diana.         ",
        c: "2. Corinne e Alexa.         ",
        correctAnswer: "a",
      },
      {
        title: "Em que ano foi lançado o filme “Barbie - Escola de Princesas”?",
        a: "2008",
        b: "2010         ",
        c: "2011         ",
        correctAnswer: "c",
      },
      {
        title: "Quantas fadas saíram de dentro do guarda-roupa mágico, em 'Barbie - Moda e Magia'?",
        a: "4",
        b: "3      ",
        c: "5        ",
        correctAnswer: "b",
      },
      {
        title: "Em quantos filmes a Barbie é uma atriz? ",
        a: "1",
        b: "5         ",
        c: "2         ",
        correctAnswer: "c",
      },
      {
        title: "Em 'Barbie - A Canção de Natal', quantos espíritos aparecem para a protagonista Eden?",
        a: "3",
        b: "6         ",
        c: "2      ",
        correctAnswer: "a",
      },
      {
        title: "Quantos animais a Corinne tinha em 'Barbie e as Três Mosqueteiras', e quais os nomes deles? ",
        a: "3. Sparkles, Miette e Jeremy. ",
        b: "2. Miette e Alexsander.        ",
        c: "1. Alexsander.        ",
        correctAnswer: "b",
      },
    ];
  }
};

let questions = setQuestions();

var point = 0;
var i = 0;
var amountQuestions = questions.length;
const setNewQuestions = () => {
  if (amountQuestions === i) {
    modal.classList.add("modal-appearence");
    modal.classList.remove("modal-none");
  } else {
    title.innerHTML = questions[i].title;
    alternativeA.innerHTML = questions[i].a;
    alternativeB.innerHTML = questions[i].b;
    alternativeC.innerHTML = questions[i].c;
  }
};

setNewQuestions();
const checkQuestions = (answer, questions) => {
  // pegar as questoes e verificar qual esta correta e dps se tiver correta soma 5 pontos
  if (questions[i].correctAnswer === answer) {
    // resposta certa

    i++;
    point += 5;

    setNewQuestions();
    pointElement.innerHTML = point.toString();
  } else if (questions[i].correctAnswer !== answer) {
    // resposta errada

    i += 1;

    setNewQuestions();
    pointElement.innerHTML = point.toString();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkQuestions(button.value, questions);
  });
});
