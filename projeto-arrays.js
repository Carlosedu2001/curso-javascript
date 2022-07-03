function substituiNum(array) {
    if (!array) return "Por favor, escreva um valor válido!\n\n-1";
    if (!array.length) return "Por favor, escreva um valor válido!\n\n-1";

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`O valor ${array[i]} foi substituido por 0!`);
            array[i] = 0;
        }
    }

    return array;
}

let vetor = [2, 4, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17];
let vetor2 = [];
console.log(substituiNum(vetor));
console.log(substituiNum(vetor2));