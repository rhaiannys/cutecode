const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Correção aqui: removi ".yes"
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Função para reposicionar o botão "Não" aleatoriamente
noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Usei offsetHeight para a altura

    // Garante que o botão não saia da tela (com alguma margem)
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    const maxX = questionContainer.offsetWidth - buttonWidth - 10;
    const maxY = questionContainer.offsetHeight - buttonHeight - 10;

    noBtn.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
    noBtn.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
});

// Funcionalidade do botão "Sim"
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "flex"; // Use flex para centralizar o loader

    const timeoutId = setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "flex"; // Use flex para o container de resultado também
        gifResult.play();
    }, 3000);
});