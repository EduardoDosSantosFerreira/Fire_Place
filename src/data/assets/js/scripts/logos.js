// FirePlace
document.addEventListener('DOMContentLoaded', function() {
    var fireText = document.getElementById('fire-text');
    
    fireText.addEventListener('animationend', function() {
      fireText.style.display = 'none'; // Remover o elemento do DOM após a animação
    });
  });

  // Shop
  // Função para exibir o texto e iniciar o efeito de desaparecimento
  function mostrarTextoTemporario() {
    var elementoTexto = document.getElementById("shop-text");

    // Mostrar o texto
    elementoTexto.style.opacity = 1;

    // Iniciar o efeito de desaparecimento
    setTimeout(function() {
      elementoTexto.style.opacity = 0;
    }, 2000); // 2000 milissegundos = 2 segundos (ajuste conforme necessário)
  }

  // Chamar a função quando a página carregar
  window.onload = mostrarTextoTemporario;