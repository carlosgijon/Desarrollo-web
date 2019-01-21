const txt_mensaje = document.getElementById('mensaje');

const suma = function (p_numero1 = 0, p_numero2 = 0) {
  return p_numero1 + p_numero2;
};

const multiplicar = function (a) {
  return a * 5;
}

let total;
let resultado_suma = suma(10 + 20);
total = multiplicar(resultado_suma)

txt_mensaje.insertAdjacentHTML('beforeend', total);

// FUNCION FLECHA O LAMBDA
const suma_arrow = (a = 0, b = 0) => {
  return a + b;
}

// puedes ponerla sin llaves

const multiplicar_arrow = (a) => a * 5;

// ESTO ES IGUAL A
//
// const multiplicar_arrow = (a) => {
//    return a * 5
// }

let viajando = function (destino) {
  return 'viajando a la ciudad de ' + destino;
}

// TRANSFORMAR A UN ARROW FUNCTION 
let viajando_arrow = (destino) => {
  `viajando a la ciudad de ${destino}`;
}

let viaje = viajando_arrow('Madrid');
txt_mensaje.insertAdjacentHTML('beforeend', viaje);