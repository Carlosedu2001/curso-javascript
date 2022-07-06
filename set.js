const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUni (vetor) {
    const mySet = new Set(vetor);

    return [...mySet];
}

console.log(valoresUni(meuArray));