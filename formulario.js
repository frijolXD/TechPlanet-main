$(document).ready(function() {
    // Manejar el envío del formulario
    $('#formulario-contacto').submit(function(event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();
        var edad = $('#edad').val();

        // Validar que se ingrese un nombre real
        if (!nombre || !/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre.trim())) {
            alert('Por favor, ingresa un nombre válido.');
            return; // Detener la ejecución del script si el nombre no es válido
        }

        // Validar que se ingrese un correo electrónico válido
        if (!email || !/^\S+@\S+\.\S+$/.test(email.trim())) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Validar que se ingrese un número de teléfono válido
        if (!telefono || !/^\d{7,15}$/.test(telefono.trim())) {
            alert('Por favor, ingresa un número de teléfono válido.');
            return;
        }

        // Validar que se ingrese una edad válida
        if (!edad || isNaN(edad) || edad < 18) {
            alert('Por favor, ingresa una edad válida (mayor de 18 años).');
            return;
        }

        // Si todos los campos están completos y los valores son válidos
        // Redirigir al usuario a index.html
        window.location.href = "index.html";
    });
});
