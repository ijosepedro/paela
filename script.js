const imagens = [
    { src: "A9B1A235-DDF5-4E05-98B2-A516833754B9.JPG", texto: "Você é incrível e especial!" },
    { src: "IMG_2044.PNG", texto: "Sua força inspira todos à sua volta." },
    { src: "A97E6EB8-0E26-40B0-A0EB-8C2ECDE9B719.JPG", texto: "Obrigado por ser quem você é!" },
    { src: "Vai.jpg", texto: "Seu sorriso ilumina tudo ao redor." },
    { src: "IMG_1638.PNG", texto: "Eu te amo My Mulher!!" }
];

let indice = 0;

function nextSlide() {
    const titulo = document.getElementById("titulo");
    const imagem = document.getElementById("imagem");
    const texto = document.getElementById("texto");
    const gif = document.getElementById("gif");

    // Faça o GIF desaparecer no primeiro clique
    if (indice === 0) {
        gif.style.display = "none";
    }

    if (indice < imagens.length) {
        titulo.classList.add("hidden");
        imagem.src = imagens[indice].src;
        texto.textContent = imagens[indice].texto;
        imagem.classList.remove("hidden");
        texto.classList.remove("hidden");
        indice++;
    } else {
        indice = 0;
        titulo.classList.remove("hidden");
        imagem.classList.add("hidden");
        texto.classList.add("hidden");
        gif.style.display = "block"; // Mostre o GIF novamente quando reiniciar
    }
}



document.getElementById("musica").volume = 0.5;

