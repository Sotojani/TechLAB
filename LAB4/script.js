ocument.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Ingrese un correo electrónico válido.");
            return;
        }

        alert("Formulario enviado correctamente. Nos pondremos en contacto pronto.");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

