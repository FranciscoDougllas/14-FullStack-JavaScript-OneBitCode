// Função para converter metros para outras unidades
function converterMedidas(valor, unidade) {
    switch (unidade) {
        case 'mm':
            return valor * 1000; // Milímetros
        case 'cm':
            return valor * 100; // Centímetros
        case 'dm':
            return valor * 10; // Decímetros
        case 'dam':
            return valor / 10; // Decâmetros
        case 'hm':
            return valor / 100; // Hectômetros
        case 'km':
            return valor / 1000; // Quilômetros
        default:
            return null; // Opção inválida
    }
}
s
// Entrada de dados do usuário
let valorMetros = parseFloat(prompt("Digite o valor em metros:"));
let unidadeDestino = prompt("Para qual unidade deseja converter? (mm, cm, dm, dam, hm, km)").toLowerCase();

// Conversão da medida
let resultado = converterMedidas(valorMetros, unidadeDestino);

// Exibição do resultado ou mensagem de erro
if (resultado !== null) {
    alert(`O valor de ${valorMetros} metros em ${unidadeDestino} é: ${resultado}`);
} else {
    alert("Opção inválida");
}
