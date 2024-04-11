function increaseZIndex() {
    var battleBar = document.getElementById("battle-bar");
    battleBar.style.zIndex = "2"; // Altera o z-index da "battle-bar" para 2
}

// Variáveis para os pontos de vida e status da abelha
var healthPoints = 30;
var isBeeAlive = true;

// Função para atualizar a barra de vida da abelha
function updateHealth() {
    var healthBar = document.getElementById("health-bar");
    var maxHealth = 30; // Valor máximo de pontos de vida
    var percentage = (healthPoints / maxHealth) * 100; // Calcula a porcentagem de vida

    var maxWidth = 150; // Largura máxima da barra de vida
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


// Função para aplicar o dano na abelha
function dealDamage(damage) {
    healthPoints -= damage; // Reduz os pontos de vida da abelha pelo dano recebido
    if (healthPoints <= 0) {
        healthPoints = 0; // Garante que os pontos de vida não sejam negativos
        isBeeAlive = false;
        updateHealth(); // Atualiza a barra de vida da abelha
        alert("Você derrotou a abelha maldosa."); // Exibe mensagem de vitória
    } else {
        updateHealth(); // Atualiza a barra de vida da abelha
    }
}

// Event listeners para os botões de ataque
document.getElementById("sword").addEventListener("click", function() {
    if (isBeeAlive) {
        dealDamage(2);
    }
});

document.getElementById("bow").addEventListener("click", function() {
    if (isBeeAlive) {
        dealDamage(4);
    }
});

document.getElementById("dagger").addEventListener("click", function() {
    if (isBeeAlive) {
        dealDamage(3);
    }
});

document.getElementById("staff").addEventListener("click", function() {
    if (isBeeAlive) {
        dealDamage(10);
    }
});

// Inicializa a barra de vida no início
updateHealth();