const txt_mensaje = document.getElementById('mensaje');


// String
const nombre = "carlos";

txt_mensaje.insertAdjacentHTML('beforeend', '<li>nombre es '+typeof nombre+ ' </li>');

// Numeros
const edad = 80;
txt_mensaje.insertAdjacentHTML('beforeend', '<li>edad es ' +typeof edad+ '</li>');

// Boolean
let aprendiendoJS = true;
txt_mensaje.insertAdjacentHTML('beforeend', '<li>aprendiendoJS es ' +typeof aprendiendoJS+ '</li>');

/*let valor;
console.log(typeof valor);

valor = "Hola";
console.log(typeof valor);

valor = true;
console.log(typeof valor);

valor = 20;
console.log(typeof valor);

valor = String(valor);
console.log(typeof valor);*/

// null
let hijos = null;
txt_mensaje.insertAdjacentHTML('beforeend', '<li>hijos(null) es ' +typeof hijos+ '</li>');

// indefinido
let indefinida;
txt_mensaje.insertAdjacentHTML('beforeend', '<li>indefinida es ' +typeof indefinida+ '</li>');

// Array
let lenguaje = ['Html', 'CSS', 'JS'];
txt_mensaje.insertAdjacentHTML('beforeend', '<li>lenguaje(Array) es ' +typeof lenguaje+ '</li>');

// Objeto
let persona = {
    nombre: 'Juan',
    ciudad: 'Puertollano'
};
txt_mensaje.insertAdjacentHTML('beforeend', '<li>persona(Objeto) es ' +typeof persona+ '</li>');

// Fechas
let fecha = new Date();
txt_mensaje.insertAdjacentHTML('beforeend', '<li>fecha(Date) es ' +typeof fecha+ '</li>');


