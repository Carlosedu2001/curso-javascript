function justMap(vetor) {
    return vetor.map(function (item) {
        return item * 2;
    });
}

const args = [1, 2, 3, 4, 5, 6, 7];

console.log(justMap(args));