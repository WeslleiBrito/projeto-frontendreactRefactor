



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


/* export const productsStock = [
    {
        id: 1,
        name: 'Camiseta Espaço Astronauta Nasa Lançamento',
        value: 39.90,
        imageUrl: importarImagens(product1),
        indexImage: 0
    },

    {
        id: 2,
        name: 'Blusa Nasa Astronauta Espacial Preta',
        value: 74.90,
        imageUrl: ['https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqe8k9rzvatwIHFnVTc4zMF61bhBqoWq-Q9WCyuQv-cCJK7rF1oy6Wgvy8AUBKnkf4CB0YT7j-Bdy63yXbnhOeObo6GE0u&usqp=CAY'
        ],
        indexImage: 0
    },

    {
        id: 3,
        name: 'Vestido Astronauta No Espaço NoBrand',
        value: 95.89,
        imageUrl: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpHmmRJyt8NTLHeQwH-a4MlefT1gpG_-HvDlTBb4Mn8ZHVkNyBzzuFYi6HswIb_skaILw1aakV3mMtZyrNrPT6-fHcfBoOM9wIM-QCW4BTGlVK9wl9yieP',
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLl42g4vv9nyeOflYqqsdcvaKpWUQ9RgJeLt7N3Ax213LiUi3awiay3ydt9TMLTZrPoTSyEY2kLhQI9uwWOuTXIlRk4LQ46k8zWPNZ5EA'
        ],
        indexImage: 0
    },

    {
        id: 4,
        name: 'Camiseta Nasa Geek Astronomia Camisa Masculina Aeronautics',
        value: 104.40,
        imageUrl: [
            'https://m.media-amazon.com/images/I/41s-iXTyjaL._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/5132F61GMeL._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/51X5gfayJ2L._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/51wezMX+yXL._AC_SX522_.jpg',
            'https://m.media-amazon.com/images/I/41L75Ikj7nL._AC_SX522_.jpg'
        ],
        indexImage: 0
    },
    {
        id: 5,
        name: 'Camiseta Masculina Nave Espacial - Branco',
        value: 39.90,
        imageUrl: [
            'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYljNNWHPB4QUoUqbso41BA9yxTHlfWkTfRF24wurVscmqryhSYCTDehAO2IflgmRz60hNqaY1I6H2WSsReiqMpF_J7bUBaKz5Fkqjp-5N&usqp=CAE'
        ],
        indexImage: 0
    },

    {
        id: 6,
        name: 'Camiseta astronauta sorvete sorvete astronauta',
        value: 69.9,
        imageUrl: ['https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/BA/F7/rBVaVFxBkX6AKKE3AAP53O9WRuE019.jpg',
            'https://www.dhresource.com/webp/m/0x0/f2/albu/g10/M01/D8/B3/rBVaVlwrLPaAYfB6AAG8_OvsOws677.jpg',
            'https://www.dhresource.com/webp/m/0x0/f2/albu/g10/M00/C3/23/rBVaVlwrLPeARarxAANvG4lHfhg443.jpg',
            'https://www.dhresource.com/webp/m/0x0/f2/albu/g10/M00/99/85/rBVaVlwrLPiAa7XPAAYJnqt0RA0283.jpg'
        ],
        indexImage: 0
    }
] */

export const productsStock = [
    {
        id: 1,
        name: 'Camiseta Nasa Astronauta Masculina e Feminina 100% Algodão Primeira Linha Gola Redonda - Wintershop',
        value: 49.90,
        images: importarImagens(product1),
        indexImage: 0
    },

    {
        id: 2,
        name: 'CAMISETA MASCULINA OLHO DO UNIVERSO ESTAMPA DIGITAL',
        value: 59.90,
        images: importarImagens(product2),
        indexImage: 0
    },

    {
        id: 3,
        name: 'CAMISETA MASCULINA NAVES ESPACIAIS ESTAMPA DIGITAL',
        value: 59.90,
        images: importarImagens(product3),
        indexImage: 0
    },

    {
        id: 4,
        name: 'CAMISETA MASCULINA GALÁXIAS ESTAMPA DIGITAL',
        value: 77.90,
        images: importarImagens(product4),
        indexImage: 0
    },

    {
        id: 5,
        name: 'Camiseta astronomia- Astronauta - Inoctua',
        value: 72.00,
        images: importarImagens(product5),
        indexImage: 0
    },

    {
        id: 6,
        name: 'Camiseta Pai E Filho No Espaço Dos Astronautas Da Lua',
        value: 123.95,
        images: importarImagens(product6),
        indexImage: 0
    },

    {
        id: 7,
        name: 'Moletom ESPAÇO | Astronauta Franklin',
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
        name: 'Sistema Solar Camisas Espaciais Exteriores Acampam',
        value: 115.70,
        images: importarImagens(product9),
        indexImage: 0
    },

    {
        id: 10,
        name: 'Camiseta Planetas Cutos, Sistema Solar, Espaço, Cosmos, Gal',
        value: 79.80,
        images: importarImagens(product10),
        indexImage: 0
    },


]