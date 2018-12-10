// De numeros a String

// Declaro el txt_dato
const txt_dato = document.getElementById("txt_dato");

let dato = 198;
let year = 19871;
// para pasar a String

// dato = String(year);
// dato = String(true);
// dato = String(new Date());

// En una array length nos dira el numero de caracteres que tienen.
// dato = String([1,2,3,4]);

console.log(dato);

txt_dato.innerText += ' ' +dato.length;
console.log(dato.length);