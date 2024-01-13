  document.addEventListener('DOMContentLoaded', function() {
    var fireText = document.getElementById('fire-text');
    
    fireText.addEventListener('animationend', function() {
      fireText.style.display = 'none'; // Remover o elemento do DOM após a animação
    });
  });
