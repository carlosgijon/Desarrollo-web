const txt_mensaje = document.getElementById('mensaje');

// Declaracion de la forma function declaration

// Llamada a la función
saludar('Carlos', 'desarrollador Full Stack');
saludar('Piolin', 'informatiquillo');
saludar('Goomba', 'comedor de barro'); // Llamada a la función
saludar('Lola', 'Maestra');
saludar();

// Le pasamos parametros nombre y trabajo
/*
 *
 * p_trabajo por defecto es 'no sabemos', es decir, si no le pasamos nada aqui
 * pondrá el que esta por defecto.
 *
 * */
function saludar(p_nombre = 'visitante', p_trabajo = 'no sabemos') {
    txt_mensaje.insertAdjacentHTML('beforeend', `<p>Hola ${p_nombre}!!! Tu trabajo es ${p_trabajo}</p>`);
}

// Declaracion de la forma function expression

// Le pasamos dos numeros
const suma = function(p_numero1 = 0, p_numero2 = 0) {
    txt_mensaje.insertAdjacentHTML('beforeend', `<p>${p_numero1 + p_numero2}</p>`);
};

suma(10, 20);
suma(30, 50);
suma(100, 200);

/*
 *
 *
 * Una de las diferencias entre los dos métodos es que con function declaration
 * podrías llamar a la función antes de declararla. Con function expression no.
 * Por lo que si declaramos la funcion con el método function declaration podremos
 * ordenar nuestro código como se hace en C++ (con las funciones al final del todoo).
 *
 *
 * */

/*
 *
 * IIFE
 * Son funciones que se invocan ellas mismas
 *
 * su sintaxis es
 * (function(declaracion_parametro) {
 *   // Codigo
 * })(parametro);
 *
 * */

(function(tecnologia) {
    txt_mensaje.insertAdjacentHTML('beforeend', `<p>Aqui estoy aprendiendo ${tecnologia}</p>`);
})('JavaScript');
// Printara "Aqui estoy aprendiendo JavaScript"