const txt_mensaje = document.getElementById('mensaje');


// Como crear un método
const musica = {

    // METODO
    reproducir: function (cancion) {
        return `<p style="color: darkgreen;">Reproduciendo la canción ${cancion}</p>`;
    }, // <-- no olvidar la coma para tener mas métodos o propiedades
    pausar: function () {
        return `<p style="color: blue;">Pausando...</p>`;
    }

}

// Los metodso pueden ir fuera de la clase definiendolos asi:
musica.borrar = function (id) {
    return `<p style="color:red;">Borrando la cancion ${id}</p>`;
}

txt_mensaje.insertAdjacentHTML('beforeend', musica.reproducir('Hotel California'));
txt_mensaje.insertAdjacentHTML('beforeend', musica.pausar());
txt_mensaje.insertAdjacentHTML('beforeend', musica.borrar(21));
