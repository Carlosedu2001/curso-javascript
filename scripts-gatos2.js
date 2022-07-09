const BASE_URL = 'https://aws.random.cat/meow';
const gatoBtn = document.getElementById('troca_gato');

const escolheGato = async () => {
        const dados = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

        return dados.webpurr;
};

const carregafoto = async () => {
    const gatoImg = document.getElementById('gato');
    gatoImg.src = await escolheGato();
};

gatoBtn.addEventListener('click', carregafoto);

carregafoto();