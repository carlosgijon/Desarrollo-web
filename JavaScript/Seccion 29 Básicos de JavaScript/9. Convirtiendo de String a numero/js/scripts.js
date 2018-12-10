/*let numero1 = 50,
    numero2 = "10",
    numero3 = "tres",
    numero4 = "20.20";

console.log(`Concatenando: ${numero1 + numero2}`);  // 5010
console.log(`Al restar se convierte en int: ${numero1 - numero2}`); // resta 50 - 10*/

/*
// Para pasar una cadena como numero se utiliza:
console.log(`Convirtiendo un String en int ${Number(numero2) + numero1}`);

// Con parseInt haces lo mismo
console.log(`Con funcion parseInt: ${parseInt(numero2) + numero1}`);

// Convertir a Float con parseFloat
console.log(`Con funcion parseFloat ${parseFloat(numero4) + numero1}`);*/

let dato;
dato = Number("20");
dato = Number("20.20");
dato = Number(true);
dato = Number([1,2,3,4]);

console.log(dato);

// to Fixed, para hacer redondeo con decimales (si se pasa el numero de decimales como parametro)
// o sin decimales (si no se le pasa parámetro)
let numero1 = "15616131351654654651.651651651651";
let numero2 = 65656516516565654;

console.log(Number(numero1).toFixed(2));
console.log(numero2.toFixed(4));