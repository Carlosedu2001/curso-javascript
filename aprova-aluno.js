const alunos = [
    {
        nome: 'Carlos',
        nota: 10,
        turma: '3ºA'
    },
    {
        nome: 'Pedro',
        nota: 7,
        turma: '9ºA'
    },
    {
        nome: 'Felipe',
        nota: 7,
        turma: '5ºA'
    },
    {
        nome: 'Júlia',
        nota: 8,
        turma: '5ºA'
    },
    {
        nome: 'Florisvalda',
        nota: 9,
        turma: '9ºA'
    },
    {
        nome: 'Florisvaldo',
        nota: 4,
        turma: '7ºC'
    },
    {
        nome: 'Geraldo',
        nota: 5.5,
        turma: '7ºB'
    }
];

function aprovaAluno(vetor, media) {
    let aprovados = [];

    for(let i = 0; i < vetor.length; i++) {
        const {nota, nome} = vetor[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(aprovaAluno(alunos, 7));