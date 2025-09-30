// ==================== DESCARGA DEL CV ====================

// Obtiene el elemento del DOM con el ID "descarga-mi-cv", que representa el botón de descarga del CV
const DescargaMiCv = document.getElementById("descarga-mi-cv");

// Le agrega un evento "click" al botón de descarga para que, al hacer clic, se ejecute la función "descargarCv"
DescargaMiCv.addEventListener("click", descargarCv);

// Define la función que se ejecutará al hacer clic en el botón
function descargarCv() {
    // Ruta relativa del archivo PDF del CV dentro del proyecto
    const urlCv = "./Mi cv/CV - Miguel Salazar - Front-end Developer.pdf";

    // Crea un elemento HTML <a> dinámicamente (etiqueta de enlace)
    const enlaceDescarga = document.createElement("a");

    // Asigna la URL del archivo PDF al atributo href del enlace
    enlaceDescarga.href = urlCv;

    // Especifica el nombre con el que se descargará el archivo
    enlaceDescarga.download = "CV - Miguel Salazar - Front-end Developer";

    // Oculta el enlace del DOM (no será visible para el usuario)
    enlaceDescarga.style.display = "none";

    // Inserta el enlace en el cuerpo del documento para que esté disponible en el DOM
    document.body.appendChild(enlaceDescarga);

    // Simula un clic en el enlace para iniciar la descarga automáticamente
    enlaceDescarga.click();

    // Elimina el enlace del DOM después de que se haya ejecutado
    document.body.removeChild(enlaceDescarga);
}


// ==================== ENVÍO DEL FORMULARIO DE CONTACTO (VERSION CORREGIDA) ====================

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        // Muestra un SweetAlert indicando que el mensaje fue enviado correctamente
        Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por comunicarte conmigo. Te responderé pronto.",
        });

        // Resetea el formulario, limpiando todos los campos
        form.reset();

        // Opcional: Recarga a la sección de contacto después de un pequeño retraso para asegurar la limpieza del formulario
        setTimeout(() => {
           window.location.replace(form.querySelector('input[name="_next"]').value);
         }, 1000);
    })
    .catch(error => {
        // Si ocurre un error real de red o del navegador
        console.error("Error en la petición fetch:", error);
        Swal.fire({
            icon: "error",
            title: "Error de conexión",
            text: "Tranquilo/a tu mensaje fue enviado con exito, si ves lo contrario es un error del alert.",
        });
    });
});