// Formas de escribir variables

// var nombreCliente = 'Carlos'; // CamelCase
// var nombre_cliente = 'Carlos'; // Underscore


// console.log(nombreCliente);
// var nombreCliente = 'Pedro';
// var nombreCliente = 'Alejandro';  // Se pueden declarar mas veces

let nombre = 'Carlos'; // Con let podemos dejarlo sin definir
nombre = 'lola';

// console.log(nombreCliente);

const cliente = 'Carlos'; // const se tiene que definir si o si 

console.log(cliente);

const divMensaje = document.getElementById('mensaje'); // const se suele usar para definir elementos HTML
divMensaje.innerHTML = `Hola ${cliente}`;

divMensaje.innerHTML += `, hola ${nombre}`;