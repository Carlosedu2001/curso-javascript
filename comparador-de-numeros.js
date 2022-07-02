function comparaNum(n1, n2) {
    const primeiraF = frase1(n1, n2);
    const segundaF = frase2(n1, n2);

    return `${primeiraF} ${segundaF}`;
}

function frase1 (n1, n2) {
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não ';
    }

    return `Os números ${n1} e ${n2} ${saoIguais}são iguais.`;
}

function frase2 (n1, n2) {
    const soma = n1 + n2;

    let r10 = 'menor';
    let r20 = 'menor';

    const compara10 = soma > 10;
    const igual10 = soma === 10;
    const compara20 = soma > 20;
    const igual20 = soma === 20;

    if (compara10) {
        r10 = 'maior que';
    }

    if (compara20) {
        r20 = 'maior que';
    }

    if (igual10) {
        r10 = 'igual a';
    }

    if (igual20) {
        r20 = 'igual a';
    }

    return `Sua soma é ${soma}, que é ${r10} 10 e ${r20} 20.`;
}

console.log(comparaNum(10, 10));