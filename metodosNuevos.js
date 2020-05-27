"use strict";

var texto = 'Hola Mundo';
console.log(texto, 'Empieza con h:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'Empieza con o:', texto.toLowerCase().startsWith('o'));
console.log(texto, 'Incluye la palabra Diego:', texto.includes('Diego'));
var amigos = ['Diego', 'Roberto', 'Anna', 'Cecilia'];
console.log(amigos.includes('Anna'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Anna';
}));