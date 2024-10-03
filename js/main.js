// Eliminar el primer elemento hijo desde el padre.
const cardContainer = document.querySelector('#cardContainer');
cardContainer.removeChild(cardContainer.firstElementChild);

// Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".
cardContainer.querySelector('.cards.redClass').remove();

// 3) Crear un elemento h1 con vuestro nombre.
const h1 = document.createElement('h1');
h1.textContent = 'David Cuevas';
// Agregarlo al contenedor.
cardContainer.appendChild(h1);

// Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const enlaceVedruna = document.createElement('a');
enlaceVedruna.textContent = 'Vedruna';
enlaceVedruna.href = 'https://vedrunasevilla.org/';

// Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';
botonJoker.textContent = 'boton';

// Crear un elemento div cuya clase sea "cards greenClass".
const divVerde = document.createElement('div');
divVerde.classList.add('cards greenClass');

// Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
divVerde.appendChild(h1);
divVerde.appendChild(enlaceVedruna);

// Añadir a cardContainer el div del apartado anterior.
cardContainer.appendChild(divVerde);
