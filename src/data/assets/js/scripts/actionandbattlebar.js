function increaseZIndex() {
    var battleBar = document.getElementById("battle-bar");
    battleBar.style.zIndex = "2"; // Altera o z-index da "battle-bar" para 2
}

// Variáveis para os pontos de vida e status da abelha
var healthPoints = 30;
var isBeeAlive = true;

// Variáveis para os pontos de vida e status do usuário
var userHealthPoints = 100; // Defina o valor inicial dos pontos de vida do usuário
var isUserAlive = true;

// Função para atualizar a barra de vida da abelha
function updateHealth() {
    var healthBar = document.getElementById("health-bar");
    var maxHealth = 30; // Valor máximo de pontos de vida
    var percentage = (healthPoints / maxHealth) * 100; // Calcula a porcentagem de vida

    var maxWidth = 100; // Largura máxima da barra de vida
    var newWidth = (percentage / 100) * maxWidth; // Calcula a nova largura da barra de vida

    healthBar.style.width = newWidth + "px"; // Define a largura da barra de vida

    // Atualiza a cor da barra dependendo da porcentagem de vida
    if (percentage > 50) {
        healthBar.style.backgroundColor = "#00ff00"; // verde
    } else if (percentage > 20) {
        healthBar.style.backgroundColor = "#ffff00"; // amarelo
    } else {
        healthBar.style.backgroundColor = "#ff0000"; // vermelho
    }
}

function dealDamage(damage) {
    healthPoints -= damage; // Reduz os pontos de vida da abelha pelo dano recebido
    if (healthPoints <= 0) {
        healthPoints = 0; // Garante que os pontos de vida não sejam negativos
        isBeeAlive = false;
        updateHealth(); // Atualiza a barra de vida da abelha
        alert("Você derrotou a abelha maldosa."); // Exibe mensagem de vitória
    } else {
        updateHealth(); // Atualiza a barra de vida da abelha
        // Agora é a vez da abelha atacar
        beeAttack();
    }

    // Mostra a imagem do golpe de espada
    var swordSlash = document.getElementById("sword-slash");
    swordSlash.style.display = "inline";
    // Define um temporizador para esconder a imagem após um curto período de tempo (por exemplo, 500 milissegundos)
    setTimeout(function() {
        swordSlash.style.display = "none";
    }, 500); // 500 milissegundos

    // Adiciona a classe 'red-hit' à imagem da abelha para simular o dano
    var beeImage = document.getElementById("bee");
    beeImage.classList.add("red-hit");

    // Remove a classe 'red-hit' após um certo período de tempo
    setTimeout(function() {
        beeImage.classList.remove("red-hit");
    }, 1000); // Tempo em milissegundos, deve ser o mesmo tempo usado para mostrar o golpe de espada
}

// Função para a abelha atacar o usuário
function beeAttack() {
    // Dano base da abelha
    var beeDamage = 20;
    // Aplica o dano ao usuário
    dealUserDamage(beeDamage);
}


// Função para atualizar a barra de vida do usuário
function updateUserHealth() {
    var userHealthBar = document.getElementById("user-health-bar");
    var maxHealth = 100; // Valor máximo de pontos de vida do usuário
    var percentage = (userHealthPoints / maxHealth) * 100; // Calcula a porcentagem de vida do usuário

    var maxWidth = 250; // Largura máxima da barra de vida do usuário
    var newWidth = (percentage / 100) * maxWidth; // Calcula a nova largura da barra de vida do usuário

    userHealthBar.style.width = newWidth + "px"; // Define a largura da barra de vida do usuário

    // Atualiza a cor da barra dependendo da porcentagem de vida do usuário
    if (percentage > 50) {
        userHealthBar.style.backgroundColor = "#00ff00"; // verde
    } else if (percentage > 20) {
        userHealthBar.style.backgroundColor = "#ffff00"; // amarelo
    } else {
        userHealthBar.style.backgroundColor = "#ff0000"; // vermelho
    }
}

// Função para aplicar dano ao usuário
function dealUserDamage(damage) {
    userHealthPoints -= damage; // Reduz os pontos de vida do usuário pelo dano recebido
    if (userHealthPoints <= 0) {
        userHealthPoints = 0; // Garante que os pontos de vida do usuário não sejam negativos
        isUserAlive = false;
        updateUserHealth(); // Atualiza a barra de vida do usuário
        // Redireciona para a página do mercado se o usuário for derrotado
        window.location.href = "./shop.html";
    } else {
        updateUserHealth(); // Atualiza a barra de vida do usuário
    }
}

// Event listeners para os botões de ataque
document.getElementById("sword").addEventListener("click", function() {
    if (isBeeAlive && isUserAlive) {
        dealDamage(2); // Golpe de espada
    }
});

document.getElementById("bow").addEventListener("click", function() {
    if (isBeeAlive && isUserAlive) {
        dealDamage(4); // Ataque de arco
    }
});

document.getElementById("dagger").addEventListener("click", function() {
    if (isBeeAlive && isUserAlive) {
        dealDamage(3); // Ataque de adaga
    }
});

document.getElementById("staff").addEventListener("click", function() {
    if (isBeeAlive && isUserAlive) {
        dealDamage(10); // Ataque de cajado
    }
});

// Inicializa a barra de vida no início
updateHealth();
updateUserHealth();