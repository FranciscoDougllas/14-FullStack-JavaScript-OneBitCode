// Entrada de dados do atacante
let nomeAtacante = prompt("Digite o nome do personagem atacante:");
let poderAtaque = parseFloat(prompt("Digite o poder de ataque do personagem atacante:"));

// Entrada de dados do defensor
let nomeDefensor = prompt("Digite o nome do personagem defensor:");
let pontosVida = parseFloat(prompt("Digite a quantidade de pontos de vida do personagem defensor:"));
let poderDefesa = parseFloat(prompt("Digite o poder de defesa do personagem defensor:"));
let possuiEscudo = prompt("O defensor possui um escudo? (sim/não)").toLowerCase() === "sim";

// Cálculo do dano
let danoCausado = 0;

if (poderAtaque > poderDefesa) {
    if (possuiEscudo) {
        danoCausado = (poderAtaque - poderDefesa) / 2;
    } else {
        danoCausado = poderAtaque - poderDefesa;
    }
}

pontosVida -= danoCausado;

// Exibição dos resultados
alert(`${nomeAtacante} causou ${danoCausado} de dano em ${nomeDefensor}.`);
alert(`Status atualizado de ${nomeDefensor}:\nPontos de Vida: ${pontosVida}`);
