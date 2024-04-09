// Serana's Dialogue

const seranaDialogos = [
    "Oh, você é um novo rosto por aqui! Que alegria ter um visitante tão encantador. Poderia me contar seu nome?",
    "Bem-vindo(a), [Nome]. É um prazer conhecê-lo(a). Espero que tenha tido uma jornada agradável até aqui.",
    "Sinta-se à vontade para explorar nosso refúgio e conversar. Estou sempre interessada em conhecer novas histórias e experiências.",
    "Já sei que tal você pode conhecer nosso mercador bahaal, ele pode estar de bom humor e fazer um bom negócio com você!",
    "Foi muito legal te conhecer [Nome], até a próxima!"
  ];
  
  let indiceDialogoSeranaAtual = 0;
  let nomeUsuario = "";
  
  const proximoDialogoSerana = () => {
    if (indiceDialogoSeranaAtual === 0) {
      abrirDialog();
    } else if (indiceDialogoSeranaAtual === 1 && !nomeUsuario) {
      alert("Por favor, insira seu nome.");
      return;
    } else if (indiceDialogoSeranaAtual === 1 && nomeUsuario) {
      fecharDialog();
    } else {
      if (indiceDialogoSeranaAtual < seranaDialogos.length - 1) {
        indiceDialogoSeranaAtual++;
        exibirDialogoSeranaAtual();
        if (seranaDialogos[indiceDialogoSeranaAtual].includes("Foi muito legal te conhecer")) {
          exibirLoader(); // Exibe o loader quando o diálogo desejado é exibido
        }
      }
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
  
  const abrirDialog = () => {
    document.getElementById("dialog-overlay").style.display = "block";
  };
  
  const fecharDialog = () => {
    nomeUsuario = document.getElementById("nomeUsuarioInput").value;
    if (nomeUsuario) {
      document.getElementById("dialog-overlay").style.display = "none";
      
      // Substituir todos os [Nome] pelo nome do usuário
      seranaDialogos.forEach((dialogo, index) => {
        seranaDialogos[index] = dialogo.replace("[Nome]", nomeUsuario);
      });
      
      exibirDialogoSeranaAtual();
      indiceDialogoSeranaAtual++; // Avança para o próximo diálogo de Serana
      exibirDialogoSeranaAtual(); // Exibe o próximo diálogo de Serana
    } else {
      alert("Por favor, insira seu nome.");
    }
  };
  
  const exibirLoader = () => {
    document.querySelector('.loader').style.display = 'block'; // Torna o loader visível
  };
  
  document.querySelector('.dialogue-container').classList.add('show');
  