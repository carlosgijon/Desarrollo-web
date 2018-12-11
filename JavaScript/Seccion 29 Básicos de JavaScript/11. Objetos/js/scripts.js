const txt_mensaje = document.getElementById('mensaje');

// Object literal

const persona = {
    nombre: 'Carlos',
    apellido: 'Gijon',
    edad: 33,
    trabajo: true,
    musica: ['rock', 'heavy metal'],
    hogar: {
        ciudad: 'Alcazar',
        pais: 'España'
    }
};

txt_mensaje.insertAdjacentHTML('beforeend', '<li>'+persona['hogar']['ciudad']+'</li>');