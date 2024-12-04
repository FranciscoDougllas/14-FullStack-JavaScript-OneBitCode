// Coleta o nome do turista
let nomeTurista = prompt("Qual é o seu nome?");

// Inicializa variáveis para armazenar as cidades visitadas e a contagem
let cidadesVisitadas = [];
let resposta = prompt("Você já visitou alguma cidade? (sim/não)").toLowerCase();

// Loop para continuar perguntando enquanto a resposta for "sim"
while (resposta === "sim") {
    let cidade = prompt("Qual o nome da cidade que você visitou?");
    cidadesVisitadas.push(cidade); // Armazena a cidade na lista
    resposta = prompt("Você visitou outra cidade? (sim/não)").toLowerCase();
}

// Exibe o resultado final
if (cidadesVisitadas.length > 0) {
    alert(`${nomeTurista} visitou ${cidadesVisitadas.length} cidades: ${cidadesVisitadas.join(', ')}.`);
} else {
    alert(`${nomeTurista} não visitou nenhuma cidade.`);
}
