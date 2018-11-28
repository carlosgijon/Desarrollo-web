let banda = 'Metallica',
    cancion = 'Enter Sandman';

let nombre;

nombre = banda + ": " + cancion;

// Saber caracteres que contiene la cadena
console.log(banda.length);

// concat
nombre = nombre.concat(" ", "y es genial");

// TODAS MAYUSCULAS 
nombre = nombre.toUpperCase();

// todas minusculas
nombre = nombre.toLowerCase();

// dividir una cadena de texto
let actividad = 'Estoy aprendiendo JavaScript con el curso';
nombre = actividad.split(' ');

let intereses = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
nombre = intereses.split(', ');

// reemplazar un valor
// nombre = actividad.replace('JavaScript', 'JS');

//revisa que exista lo que se le pase por paranetros
nombre = actividad.includes("JavaScript");

// let email = 'correo@correo.com';
// nombre = email.includes('@');

// Repetir las veces que se indica
let master = 'Master ',
    puppets = 'Of Puppets';

console.log(master.repeat(3));
console.log(puppets);

console.log(nombre);