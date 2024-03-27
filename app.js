'use strict';

const boton = document.querySelector('.botonCita');
let numerosGenerados = []; // Almacena los índices aleatorios de las citas
let ultimoNumero;

function crearNumeroAleatorio() {
    let cantCitas = citas.length;
    let numAleat;

    // Si ya se han generado todos los números, restablecer el registro
    if (numerosGenerados.length === cantCitas) {
        numerosGenerados = [];
    }

    // Generar un nuevo número aleatorio que no esté en el registro ni sea igual al último generado
    do {
        numAleat = Math.floor(Math.random() * cantCitas);
    } while (numerosGenerados.includes(numAleat) || numAleat === ultimoNumero);

    // Agregar el nuevo número generado al registro
    numerosGenerados.push(numAleat);
    ultimoNumero = numAleat;

    return numAleat;
}

function cambiarCita (numAleat) {
   let cita = document.querySelector('.cita'); 
   let nombre = document.querySelector('.h2Nombre');

   cita.textContent = citas[numAleat]['cita'];
   nombre.textContent = citas[numAleat]['nombre'];
}

boton.addEventListener('click', () => {
    let numAleat = crearNumeroAleatorio();
    cambiarCita(numAleat);
});