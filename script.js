// Seleciona os elementos HTML que serão manipulados pelo JavaScript
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Adiciona um evento de 'mouseenter' à seção esquerda
// Quando o mouse entra na área esquerda, adiciona a classe 'hover-left' ao container
left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

// Adiciona um evento de 'mouseleave' à seção esquerda
// Quando o mouse sai da área esquerda, remove a classe 'hover-left' do container
left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

// Adiciona um evento de 'mouseenter' à seção direita
// Quando o mouse entra na área direita, adiciona a classe 'hover-right' ao container
right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

// Adiciona um evento de 'mouseleave' à seção direita
// Quando o mouse sai da área direita, remove a classe 'hover-right' do container
right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});
