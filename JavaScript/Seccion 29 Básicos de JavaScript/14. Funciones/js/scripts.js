const txt_mensaje = document.getElementById('mensaje');
const contenedorApp = document.querySelector('#mensaje');

const nombre = 'Carlos', trabajo = 'Desarrollador web';

// template literals
/*
*
*  CUIDADO QUE NO SON COMILLAS NORMALES
* `cadena ${variable}`;
*
*
*
* */
txt_mensaje.insertAdjacentHTML("beforeend", `<p>Nombre: ${nombre}, Trabajo: ${trabajo}`);


// html concatenado normal
let html = '<ul>' +
                '<li>Nombre: ' + nombre + ' </li>' +
                '<li>Trabajo: ' + trabajo + '</li>' +
            '</ul>';

// html con template literals
let html2 = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
             </ul>`;

contenedorApp.innerHTML = html2;