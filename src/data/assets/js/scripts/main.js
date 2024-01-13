// Nav
document.addEventListener("DOMContentLoaded", function () {
  var openMenuButton = document.getElementById("map");
  var closeMenuButton = document.getElementById("close-menu");
  var offCanvasMenu = document.querySelector(".off-canvas-menu");

  openMenuButton.addEventListener("click", function () {
    offCanvasMenu.style.right = "0"; // Abre o menu deslizando do lado direito
    openMenuButton.style.display = "none";
  });

  closeMenuButton.addEventListener("click", function () {
    offCanvasMenu.style.right = "-300px"; // Fecha o menu deslizando para fora do lado direito
    openMenuButton.style.display = "block";
  });
});

// /Nav