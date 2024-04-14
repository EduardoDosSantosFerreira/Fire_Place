// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <div class="menu-container">
    <img src="../data/assets/img/icons/map.webp" id="map" alt="Abrir Menu">
    <nav class="off-canvas-menu">
      <button id="close-menu">
        <img src="../data/video/gif/off_menu/compass.gif" id="bussola" alt="Fechar Menu"></button>
      <ul>
        <li>
          <a href="#">Atributos</a>
          <img src="../data/video/gif/off_menu/blinktotem.gif" id="icon" alt="About/Sobre">
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Viagens</a>
          <div class="dropdown-content fade-down">
            <a href="./home.html">Fogueira</a>
            <a href="./library.html">Biblioteca</a>
            <a href="./shop.html">Mercado</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn">Mochila</a>
          <div class="dropdown-content fade-down">
            <a href="#">Armas</a>
            <a href="#">Magias</a>
            <a href="#">Coletaveis</a>
          </div>
        </li>
        <img src="../data/video/gif/off_menu/jukebox.gif" id="jkbx" alt="Music">
      </ul>
    </nav>
  </div>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();