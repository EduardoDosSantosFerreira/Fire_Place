document.addEventListener("DOMContentLoaded", function () {
    // Referências aos elementos de áudio
    var audioChuva = document.getElementById("audioChuva");
    var audioFloresta = document.getElementById("audioFloresta");
    var audioFogueira = document.getElementById("audioFogueira");
  
    // Referência à imagem clicável
    var jukeboxImage = document.getElementById("jkbx");
  
    // Estado para controlar se o áudio está ativado
    var audioAtivado = true;
  
    // Ajustar os volumes iniciais (um valor entre 0 e 1)
    var volumeChuva = 0.01;  // Ajuste conforme necessário
    var volumeFloresta = 0.005;  // Ajuste conforme necessário
    var volumeFogueira = 0.01;  // Ajuste conforme necessário
  
    // Ajustar os volumes dos áudios
    audioChuva.volume = volumeChuva;
    audioFloresta.volume = volumeFloresta;
    audioFogueira.volume = volumeFogueira;
  
    // Função para iniciar a reprodução com atraso de 1 segundo
    function iniciarReproducaoComAtraso() {
      setTimeout(function () {
        // Iniciar a reprodução
        audioChuva.play();
        audioFloresta.play();
        audioFogueira.play();
      }, 1000); // Atraso de 1 segundo
    }
  
    // Iniciar a reprodução automaticamente com atraso de 1 segundo
    iniciarReproducaoComAtraso();
  
    // Adicionar evento de clique à imagem
    jukeboxImage.addEventListener("click", alternarAudioEImagem);
  
    // Adicionar efeito de hover à imagem
    jukeboxImage.addEventListener("mouseover", function () {
      jukeboxImage.style.opacity = "0.8";
      jukeboxImage.style.cursor = "pointer";
    });
  
    jukeboxImage.addEventListener("mouseout", function () {
      jukeboxImage.style.opacity = "1.0";
      jukeboxImage.style.cursor = "auto";
    });
  
    // Exemplo: Ajustar os volumes por código após alguns segundos
    setTimeout(function () {
      // Novos volumes desejados (quase inaudíveis)
      var novoVolumeChuva = 0.01;  // Ajuste conforme necessário
      var novoVolumeFloresta = 0.005;  // Ajuste conforme necessário
      var novoVolumeFogueira = 0.01;  // Ajuste conforme necessário
  
      // Ajustar os volumes dos áudios
      audioChuva.volume = novoVolumeChuva;
      audioFloresta.volume = novoVolumeFloresta;
      audioFogueira.volume = novoVolumeFogueira;
    }, 5000); // Aguardar 5 segundos antes de ajustar os volumes
  
    // Função para alternar o estado do áudio e da imagem ao clicar
    function alternarAudioEImagem() {
      if (audioAtivado) {
        // Pausar todos os áudios
        audioChuva.pause();
        audioFloresta.pause();
        audioFogueira.pause();
  
        // Mudar a imagem para tons de cinza
        jukeboxImage.style.filter = "grayscale(100%)";
      } else {
        // Reiniciar e reproduzir em loop
        audioChuva.currentTime = 0;
        audioFloresta.currentTime = 0;
        audioFogueira.currentTime = 0;
  
        audioChuva.play();
        audioFloresta.play();
        audioFogueira.play();
  
        // Resetar a imagem para a cor normal
        jukeboxImage.style.filter = "grayscale(0%)";
      }
  
      // Alternar o estado do áudio
      audioAtivado = !audioAtivado;
    }
  
    // Adicionar evento antes da atualização da página para pausar a reprodução
    window.addEventListener("beforeunload", function () {
      audioChuva.pause();
      audioFloresta.pause();
      audioFogueira.pause();
    });
  
    // Adicionar evento de carregamento da página para reiniciar a reprodução
    window.addEventListener("load", iniciarReproducaoComAtraso);
  });
  