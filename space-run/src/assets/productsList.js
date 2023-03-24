
const importarImagens = (imagens) => {

    let imagensArray = [];
    imagens.keys().forEach((caminho) => {
        imagensArray.push(imagens(caminho));
    });
    return imagensArray;
};

const product1 = require.context('./img/imagesProducts/product1', false, /\.(png|jpe?g|svg)$/);
const product2 = require.context('./img/imagesProducts/product2', false, /\.(png|jpe?g|svg)$/);
const product3 = require.context('./img/imagesProducts/product3', false, /\.(png|jpe?g|svg)$/);
const product4 = require.context('./img/imagesProducts/product4', false, /\.(png|jpe?g|svg)$/);
const product5 = require.context('./img/imagesProducts/product5', false, /\.(png|jpe?g|svg)$/);
const product6 = require.context('./img/imagesProducts/product6', false, /\.(png|jpe?g|svg)$/);
const product7 = require.context('./img/imagesProducts/product7', false, /\.(png|jpe?g|svg)$/);
const product8 = require.context('./img/imagesProducts/product8', false, /\.(png|jpe?g|svg)$/);
const product9 = require.context('./img/imagesProducts/product9', false, /\.(png|jpe?g|svg)$/);
const product10 = require.context('./img/imagesProducts/product10', false, /\.(png|jpe?g|svg)$/);
const product11 = require.context('./img/imagesProducts/product11', false, /\.(png|jpe?g|svg)$/);
const product12 = require.context('./img/imagesProducts/product12', false, /\.(png|jpe?g|svg)$/);



export const productsStock = [
    {
        id: 1,
        name: 'Camiseta Nasa Astronauta 100% Algodão Primeira Linha',
        value: 49.90,
        images: importarImagens(product1),
        indexImage: 0
    },

    {
        id: 2,
        name: 'Camiseta Lua astronauta balanço',
        value: 114.95,
        images: importarImagens(product2),
        indexImage: 0
    },

    {
        id: 3,
        name: 'Camiseta Teóricos dos Astronautas',
        value: 146.10,
        images: importarImagens(product3),
        indexImage: 0
    },

    {
        id: 4,
        name: 'Camiseta Tributo de Rover Oppy',
        value: 119.05,
        images: importarImagens(product4),
        indexImage: 0
    },

    {
        id: 5,
        name: 'Camiseta ESPAÇO Astronauta do Snoopy',
        value: 160.70,
        images: importarImagens(product5),
        indexImage: 0
    },

    {
        id: 6,
        name: 'Camiseta Espaço Dos Astronautas Da Lua',
        value: 123.95,
        images: importarImagens(product6),
        indexImage: 0
    },

    {
        id: 7,
        name: 'Moletom ESPAÇO Astronauta Franklin',
        value: 170.70,
        images: importarImagens(product7),
        indexImage: 0
    },

    {
        id: 8,
        name: 'Camiseta Astronauta Psychedelic Music DJ',
        value: 122.50,
        images: importarImagens(product8),
        indexImage: 0
    },

    {
        id: 9,
        name: 'Sistema Solar Camisas Espaciais Exteriores',
        value: 115.70,
        images: importarImagens(product9),
        indexImage: 0
    },

    {
        id: 10,
        name: 'Camiseta Espaço Cosmos',
        value: 79.80,
        images: importarImagens(product10),
        indexImage: 0
    },

    {
        id: 11,
        name: 'Camiseta Camisa-T do Unicórnio',
        value: 160.70,
        images: importarImagens(product11),
        indexImage: 0
    },

    {
        id: 12,
        name: 'Camiseta Gato Astronauta',
        value: 110.65,
        images: importarImagens(product12),
        indexImage: 0
    },



]