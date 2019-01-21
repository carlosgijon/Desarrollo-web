// Las fechas en JavaScript son Objetos 
const diaHoy = new Date();

let valor = diaHoy;
// Retorna el numero del mes = 0 = enero
valor = diaHoy.getMonth();

// retorna el numero de dia de la semana: 0 = domingo
valor = diaHoy.getDay();

// retorna el numero de dia del mes
valor = diaHoy.getDate();

// retorna el dia actual
valor = diaHoy.getFullYear();

// minutos de la hora
valor = diaHoy.getMinutes();

// devuelve la hora
valor = diaHoy.getHours();

// devuelve un timeStamp para hacer operaciones con fechas
valor = diaHoy.getTime();



// Para escribir se pone con set
valor = diaHoy.setFullYear(1998);
valor = diaHoy.getFullYear();




// Se puede instanciar un dia
const unDia = new Date('11-15-1985');
valor = unDia.getDay();


switch (valor) {
  case 0:
    valor = 'Domingo';
    break;

  case 1:
    valor = 'Lunes';
    break;

  case 2:
    valor = 'Martes';
    break;

  case 3:
    valor = 'Miercoles';
    break;

  case 4:
    valor = 'Jueves';
    break;

  case 5:
    valor = 'Viernes';
    break;

  case 6:
    valor = 'Sabado';
    break;
}

console.log(`Yo naci un ${valor}`);