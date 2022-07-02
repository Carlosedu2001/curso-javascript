// Primeira forma

function palindromo(string) {
    if(!string) return "Por favor, escreva um valor válido!";

    return string.split(" ").join("").split("").reverse().join("") === string.split(" ").join("");
}

// Segunda forma

function palindromo2(string) {
    if(!string) return "Por favor, escreva um valor válido!";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo("roma me tem amor"));
console.log(palindromo2("ovo"));