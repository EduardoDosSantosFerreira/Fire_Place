const dialogos = [
  "Bem-vindo à minha humilde loja. Me chamo Bahaal. Você parece um estranho por aqui. Espero que não esteja perdido.",
  "Vou lhe oferecer algo, mas em troca, preciso de um favor seu.",
  "De qualquer forma, aqui está um mapa para ajudá-lo a se orientar. Não costumo ser tão generoso.",
  "Não se preocupe, não vou pedir nada impossível. Apenas preciso que recupere um dos meus itens que foram roubados.",
  "Trata-se de uma moeda antiga, extremamente especial para mim. Fui vítima de um roubo e quero que a recupere para mim.",
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