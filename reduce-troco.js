const lista = [
    {
        nome: 'Cereal',
        preco: 15
    },
    {
        nome: 'Caixa de leite',
        preco: 48
    },
    {
        nome: 'Chocolate',
        preco: 7
    },
    {
        nome: 'Frango',
        preco: 27
    }
];

const saldoConta = 300;

function calculaTroco (saldoConta, lista) {
    return lista.reduce(function(prevAcumulador, current, index) {
        console.log('Rodada: ',index + 1);
        console.log({prevAcumulador});
        console.log({current});
        return prevAcumulador - current.preco;
    }, saldoConta);
}

console.log(`\nR$ ${calculaTroco(saldoConta, lista)},00\n`);