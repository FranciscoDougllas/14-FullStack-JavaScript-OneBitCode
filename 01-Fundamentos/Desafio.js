function createMonster(name, element, health, skills) {
    // Validação do nome
    if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Nome do monstro deve ser uma string não vazia.');
    }

    // Validação do tipo de elemento
    const validElements = ['fogo', 'água', 'terra', 'ar'];
    if (!validElements.includes(element)) {
        throw new Error('Tipo de elemento inválido. Use: fogo, água, terra ou ar.');
    }

    // Validação dos pontos de vida
    if (typeof health !== 'number' || health < 50 || health > 200) {
        throw new Error('Ponto de vida deve ser um número entre 50 e 200.');
    }

    // Validação das habilidades
    if (!Array.isArray(skills) || skills.length > 3) {
        throw new Error('Habilidades devem ser um array de no máximo 3 strings.');
    }

    for (let skill of skills) {
        if (typeof skill !== 'string' || skill.trim() === '') {
            throw new Error('Cada habilidade deve ser uma string não vazia.');
        }
    }

    // Criação do objeto monstro
    return {
        name: name,
        element: element,
        health: health,
        skills: skills
    };
}

// Exemplo de chamada da função
try {
    let meuMonstro = createMonster('Fogo Dragão', 'fogo', 150, ['soltar chamas', 'voar', 'rugido infernal']);
    console.log(meuMonstro);
} catch (error) {
    console.error(error.message);
}
