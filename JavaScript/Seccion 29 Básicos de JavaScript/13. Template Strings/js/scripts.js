const txt_mensaje = document.getElementById('mensaje');
const contenedorApp = document.querySelector('#mensaje');

const nombre = 'Carlos', trabajo = 'Desarrollador web';

// template literals
/*
*
*
* `cadena ${variable}`;
*
*
*
* */
txt_mensaje.insertAdjacentHTML("beforeend", `<p>Nombre: ${nombre}, Trabajo: ${trabajo}`);

let html = '<ul>' +
                '<li>Nombre: ' + nombre + ' </li>' +
                '<li>Trabajo: ' + trabajo + '</li>' +
            '</ul>';

let html2 = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
             </ul>`;

contenedorApp.innerHTML = html2;