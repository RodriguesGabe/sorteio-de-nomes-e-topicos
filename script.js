// Obtendo referências dos elementos HTML
const addButton = document.getElementById("add-button");// Obtém a referência para o elemento HTML com o ID "add-button" e atribui à variável addButton.
const drawButton = document.getElementById("draw-button");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const resultsList = document.getElementById("results-list");

// Array para armazenar os nomes
let names = [];

// Adicionando um ouvinte de evento para o botão "Adicionar"
addButton.addEventListener("click", () => {
    const name = nameInput.value;
    names.push(name); // Adiciona o nome ao array "names"
    nameInput.value = ""; // Limpa o campo de entrada de nomes
});

// Adicionando um ouvinte de evento para o botão "Sortear"
drawButton.addEventListener("click", () => {
    const quantity = parseInt(numberInput.value); // Obtém a quantidade de números a sortear
    const shuffledNames = shuffle(names.slice()); // Cria uma cópia embaralhada do array de nomes
    const shuffledNumbers = shuffleNumbers(quantity); // Gera um array embaralhado de números
    
    resultsList.innerHTML = ""; // Limpa os resultados anteriores
    
    // Loop para criar os elementos de lista com os nomes e números sorteados
    for (let i = 0; i < quantity; i++) {
        const listItem = document.createElement("li");
        const nameIndex = i % names.length; // Utiliza o operador módulo para percorrer os nomes ciclicamente
        const number = shuffledNumbers[i];
        listItem.textContent = `${shuffledNames[nameIndex]}: ${number}`; // Define o conteúdo do elemento de lista
        resultsList.appendChild(listItem); // Adiciona o elemento de lista à lista de resultados
    }
});

// Função para embaralhar um array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos aleatoriamente
    }
    return array;
}

// Função para gerar um array embaralhado de números
function shuffleNumbers(quantity) {
    const numbers = [];
    for (let i = 1; i <= quantity; i++) {
        numbers.push(i); // Adiciona os números ao array
    }
    return shuffle(numbers); // Retorna o array embaralhado
}
