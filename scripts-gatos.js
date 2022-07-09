const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const gatoBtn = document.getElementById('troca_gato');

const escolheGato = async () => {
    try {
        const dados = await fetch(BASE_URL);
        const json = await dados.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const carregafoto = async () => {
    const gatoImg = document.getElementById('gato');
    gatoImg.src = await escolheGato();
};

gatoBtn.addEventListener('click', carregafoto);

carregafoto();