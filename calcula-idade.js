function calculaIdade(tempo) {
    return `Daqui a ${tempo} anos, ${this.nome} terá ${this.idade + tempo} anos de idade.`;
}

const pessoa1 = {
    nome: 'Cleitinho',
    idade: 26
};

const pessoa2 = {
    nome: 'Robson',
    idade: 45
};

const pessoa3 = {
    nome: 'Raimundo',
    idade: 59
};

const pessoa4 = {
    nome: 'Sheila',
    idade: 32
};

const pessoa5 = {
    nome: 'Layla',
    idade: 19
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.call(pessoa4, 30));
console.log(calculaIdade.apply(pessoa1, [29]));
console.log(calculaIdade.call(pessoa5, 35));
console.log(calculaIdade.apply(pessoa2, [22]));