const dialogos = [
  "Oh, olá, adorável viajante! Que alegria ter você em minha humilde morada! Bem-vindo ao meu cantinho aconchegante. Espero que sua jornada tenha sido segura e repleta de descobertas!",
  "Ah, vejo que você é uma alma curiosa, sempre em busca de novas experiências. Que tal fazermos trocas de histórias e conhecimento? Aqui, no meu lar, compartilhamos uns com os outros como uma grande família.",
  "Vá para a biblioteca, minha amada Serana irá lhe recepcionar."
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
