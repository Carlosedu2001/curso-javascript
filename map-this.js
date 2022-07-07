const double = {
    value: 2,
};

const triple = {
    value: 3,
};

function mapthis(vetor, thisArg) {
    return vetor.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const args = [1, 2, 3, 4];

console.log('"this" sendo: double', mapthis(args, double));
console.log('"this" sendo: triple', mapthis(args, triple));