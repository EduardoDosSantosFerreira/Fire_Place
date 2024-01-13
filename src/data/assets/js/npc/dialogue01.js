var dialogos = [
  "Oh, olá, adorável viajante ! Que alegria ter você em minha humilde morada! Bem-vindo ao meu cantinho aconchegante. Espero que sua jornada tenha sido segura e repleta descobertas!",
  "Ah, vejo que você é uma alma curiosa, sempre em busca de novas experiências. Que tal fazermos trocas de histórias e conhecimento? Aqui, no meu lar, compartilhamos alegrias e cuidamos uns dos outros como uma grande família. ",
  "Vá para a biblioteca, minha amada Serana ira lhe recepcionar. ",

];

var indiceDialogoAtual = 0;

function proximoDialogo() {
  if (indiceDialogoAtual < dialogos.length - 1) {
    indiceDialogoAtual++;
    exibirDialogoAtual();
  }
}

function dialogoAnterior() {
  if (indiceDialogoAtual > 0) {
    indiceDialogoAtual--;
    exibirDialogoAtual();
  }
}

function exibirDialogoAtual() {
  document.getElementById("Eldrystandialogue").innerHTML =
    "<p>" + dialogos[indiceDialogoAtual] + "</p>";
}

document.querySelector('.dialogue-container').classList.add('show');