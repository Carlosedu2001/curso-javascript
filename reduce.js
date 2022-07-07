function somatoria (vetor) {
    return vetor.reduce(function (prevAcumulador, current) {
        console.log({prevAcumulador});
        console.log({current});
        return prevAcumulador + current;
    }, 0);
}

const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(somatoria(nums));