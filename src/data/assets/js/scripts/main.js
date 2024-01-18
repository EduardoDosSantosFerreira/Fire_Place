document.addEventListener("DOMContentLoaded", function () {
  var openMenuButton = document.getElementById("map");
  var closeMenuButton = document.getElementById("close-menu");
  var offCanvasMenu = document.querySelector(".off-canvas-menu");
  var viagensDropdown = document.querySelector(".viagens-dropdown"); // Alterado para classe

  openMenuButton.addEventListener("click", function () {
    offCanvasMenu.style.right = "0"; // Abre o menu deslizando do lado direito
    openMenuButton.style.display = "none";
  });

  closeMenuButton.addEventListener("click", function () {
    offCanvasMenu.style.right = "-300px"; // Fecha o menu deslizando para fora do lado direito
    openMenuButton.style.display = "block";
  });

  // Adicionando funcionalidade ao dropdown "Viagens"
  viagensDropdown.addEventListener("click", function (event) {
    var dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
    event.stopPropagation(); // Impede a propagação do evento para o window click handler
  });

  // Fechar dropdown se clicar fora dele
  window.addEventListener("click", function (event) {
    if (event.target !== viagensDropdown && !viagensDropdown.contains(event.target)) {
      var dropdownContent = viagensDropdown.querySelector(".dropdown-content");
      dropdownContent.classList.remove("show");
    }
  });
});
