const mensaje = document.getElementById('mensaje');


// Object Literal 
const persona = {
  nombre: 'Carlos',
  edad: 80,
  anioNacimiento: function () {
    return new Date().getFullYear() - this.edad;
  }
};

console.log(persona.anioNacimiento());
// Object constructor
// Las clases se presentan como si fueran funciones

/* function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
} */

// Para las nuevas versiones de JS se puede hacer como clases
// EL constructor se usa con el codigo entre llaves 
class Tarea {
  constructor(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
  }
}

// crear nuevas tareas 

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a los suegros', '0');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);