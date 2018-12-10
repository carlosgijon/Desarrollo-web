const txt_mensaje = document.getElementById('mensaje');

let recorrer_meses = function() {
    for(let i = 0; i < meses.length; i++) {

        txt_mensaje.insertAdjacentHTML('beforeend', '<li>'+meses[i]+'</li>');
    }
}

// Creando un Array con corchetes

const numeros = [10,20,30,40,50];

txt_mensaje.insertAdjacentHTML('beforebegin', '<h2>Recorriendo un array</h2>');

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Array simple</h3>');
for(let i = 0; i < numeros.length; i++) {
    txt_mensaje.insertAdjacentHTML('beforeend', '<li>'+numeros[i]+'</li>');
}


// Creando un array con new
const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo');

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Array de meses con new</h3>');

recorrer_meses();


// Array con varios tipos
const arreglo_tipo = ['Hola', 10, true, 'si', null, undefined];

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Array con varios tipos de datos</h3>');
for(let i = 0; i < arreglo_tipo.length; i++) {

    txt_mensaje.insertAdjacentHTML('beforeend', '<li>'+arreglo_tipo[i]+' es un ' +typeof arreglo_tipo[i]+'</li>');
}


// Comprobando si es un array
txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Comprobando si es un array</h3>');
txt_mensaje.insertAdjacentHTML('beforeend', '<li>¿es un array arreglo_tipo? ' +Array.isArray(arreglo_tipo)+'</li>');


// Agregar valores a un array
txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Agregar valor accediendo con el indice</h3>');
meses[5] = 'junio';

recorrer_meses();

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Agregar valor accediendo con funcion push al final del array</h3>');
meses.push('julio');

recorrer_meses();

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Agregar valor accediendo con funcion unshift al principio del array</h3>');
meses.unshift('Mes 0');

recorrer_meses();


// Borrando valores de un array
txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Borrar valor con pop al final</h3>');
meses.pop();

recorrer_meses();

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Borrar valor con shift al inicio</h3>');
meses.shift();

recorrer_meses();

txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Borrar valor con splice un valor con el rango que quieras</h3>');
meses.splice(0,1);

recorrer_meses();

// darle la vuelta a un arreglo
txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Dandole la vuelta a un array con reverse</h3>');
meses.reverse();

recorrer_meses();

// Ordenar un array alfabeticamente
txt_mensaje.insertAdjacentHTML('beforeend', '<h3>Ordenar valores alfabeticamente con sort</h3>');
meses.sort();
recorrer_meses();