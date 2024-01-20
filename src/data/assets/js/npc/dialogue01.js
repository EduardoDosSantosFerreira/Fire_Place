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
  }
};

const dialogoAnterior = () => {
  if (indiceDialogoAtual > 0) {
    indiceDialogoAtual--;
    exibirDialogoAtual();
  }
};

const exibirDialogoAtual = () => {
  const eldrystanDialogue = document.getElementById("Eldrystandialogue");
  eldrystanDialogue.innerHTML = `<p>${dialogos[indiceDialogoAtual]}</p>`;
};

document.querySelector('.dialogue-container').classList.add('show');

// Serana's Dialogue

const seranaDialogos = [
  "Oh, você é um novo rosto por aqui! Que alegria ter um visitante tão encantador. Poderia me contar seu nome?",
  "Bem-vindo(a), [Nome]. É um prazer conhecê-lo(a). Espero que tenha tido uma jornada agradável até aqui.",
  "Sinta-se à vontade para explorar nosso refúgio e conversar. Estou sempre interessada em conhecer novas histórias e experiências."
];

let indiceDialogoSeranaAtual = 0;

const proximoDialogoSerana = () => {
  if (indiceDialogoSeranaAtual < seranaDialogos.length - 1) {
    indiceDialogoSeranaAtual++;
    exibirDialogoSeranaAtual();
  }
};

const dialogoAnteriorSerana = () => {
  if (indiceDialogoSeranaAtual > 0) {
    indiceDialogoSeranaAtual--;
    exibirDialogoSeranaAtual();
  }
};

const exibirDialogoSeranaAtual = () => {
  const seranaDialogue = document.getElementById("Seranadialogue");
  seranaDialogue.innerHTML = `<p>${seranaDialogos[indiceDialogoSeranaAtual]}</p>`;
};

document.querySelector('.dialogue-container').classList.add('show');
