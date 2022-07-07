function filterPares (vetor) {
    return vetor.filter(callback);
}

function callback (item) {
    return item % 2 === 0;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 11, 22, 33, 44, 55, 66, 77];

console.log(filterPares(nums));