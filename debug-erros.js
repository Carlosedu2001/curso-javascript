function validaVetor (vetor, num) {

    try {
        if (!vetor && !num) throw new ReferenceError ("Você não inseriu os parâmtros necessários!");

        if (typeof vetor !== 'object') throw new TypeError ("Necessário que vetor seja do tipo 'object'!");
    
        if (typeof num !== 'number') throw new TypeError ("Necessário que num seja do tipo 'number'!");
    
        if (vetor.length !== num) throw new RangeError ("Range do vetor inválido!");
    
        return vetor;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Erro desconhecido: ", e);
        }
    }
}

console.log(validaVetor([]));