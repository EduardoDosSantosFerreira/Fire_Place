const dialogos = [
  "Mais um cliente para minha loja você não parece ser daqui, espero que não estja perdido!",
  "Vou te dar algo mas você me fará um favor em troca.",
  "Bem de qualquer maneira poderá se encontrar por aqui, tome isso é um mapa para te ajudar se encontrar, não costumo ser tão bonzinho.",
  "Calma, não vou pedir nada demais para você, apenas que recupere um dos meus itens da minha loja.",
  "Um anel antigo ele é muito especial, mas não estava a venda. Eu fui roubado, então quero que você tome ele de volta para mim!.",
];

let indiceDialogoAtual = 0;

const proximoDialogo = () => {
  if (indiceDialogoAtual < dialogos.length - 1) {
    indiceDialogoAtual++;
    exibirDialogoAtual();
    exibirLoaderSeNecessario();
  }
};

const dialogoAnterior = () => {
  if (indiceDialogoAtual > 0) {
    indiceDialogoAtual--;
    exibirDialogoAtual();
    exibirLoaderSeNecessario();
  }
};

const exibirDialogoAtual = () => {
  const eldrystanDialogue = document.getElementById("Eldrystandialogue");
  eldrystanDialogue.innerHTML = `<p>${dialogos[indiceDialogoAtual]}</p>`;
};

const exibirLoaderSeNecessario = () => {
  const dialogoAlvo = "Vá para a biblioteca, minha amada Serana irá lhe recepcionar.";
  const loader = document.querySelector('.loader');
  if (dialogos[indiceDialogoAtual] === dialogoAlvo) {
    loader.style.display = 'block';
  } else {
    loader.style.display = 'none';
  }
};

document.querySelector('.dialogue-container').classList.add('show');
exibirDialogoAtual();
exibirLoaderSeNecessario();