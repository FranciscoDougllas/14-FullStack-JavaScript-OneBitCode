// Entrada de dados dos veículos
let veiculo1 = prompt("Digite o nome do primeiro veículo:");
let velocidade1 = parseFloat(prompt("Digite a velocidade do primeiro veículo (em km/h):"));
let veiculo2 = prompt("Digite o nome do segundo veículo:");
let velocidade2 = parseFloat(prompt("Digite a velocidade do segundo veículo (em km/h):"));

// Comparação das velocidades
if (velocidade1 > velocidade2) {
    alert(`${veiculo1} é mais rápido que ${veiculo2}.`);
} else if (velocidade2 > velocidade1) {
    alert(`${veiculo2} é mais rápido que ${veiculo1}.`);
} else {
    alert(`${veiculo1} e ${veiculo2} têm a mesma velocidade.`);
}

