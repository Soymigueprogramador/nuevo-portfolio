// ==================== DESCARGA DEL CV ====================

// Obtiene el elemento del DOM con el ID "descarga-mi-cv", que representa el botón de descarga del CV
const DescargaMiCv = document.getElementById("descarga-mi-cv");

// Le agrega un evento "click" al botón de descarga para que, al hacer clic, se ejecute la función "descargarCv"
DescargaMiCv.addEventListener("click", descargarCv);

// Define la función que se ejecutará al hacer clic en el botón
function descargarCv() {
    // Ruta relativa del archivo PDF del CV dentro del proyecto
    const urlCv = "./Mi cv/MIGUEL SALAZAR CV.pdf";

    // Crea un elemento HTML <a> dinámicamente (etiqueta de enlace)
    const enlaceDescarga = document.createElement("a");

    // Asigna la URL del archivo PDF al atributo href del enlace
    enlaceDescarga.href = urlCv;

    // Especifica el nombre con el que se descargará el archivo
    enlaceDescarga.download = "MIGUEL SALAZAR CV.pdf";

    // Oculta el enlace del DOM (no será visible para el usuario)
    enlaceDescarga.style.display = "none";

    // Inserta el enlace en el cuerpo del documento para que esté disponible en el DOM
    document.body.appendChild(enlaceDescarga);

    // Simula un clic en el enlace para iniciar la descarga automáticamente
    enlaceDescarga.click();

    // Elimina el enlace del DOM después de que se haya ejecutado
    document.body.removeChild(enlaceDescarga);
}


// ==================== ENVÍO DEL FORMULARIO DE CONTACTO ====================

// Agrega un evento "submit" al formulario con ID "contactForm"
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Previene el comportamiento por defecto del formulario (que recargue la página)
    event.preventDefault();

    // Obtiene el formulario que fue enviado
    const form = event.target;

    // Crea un objeto FormData a partir del formulario, que contiene todos los campos del mismo
    const formData = new FormData(form);

    // Utiliza fetch para enviar los datos del formulario a la URL indicada en el atributo "action"
    fetch(form.action, {
        method: "POST", // Método HTTP utilizado para enviar los datos
        body: formData  // Cuerpo de la petición, con los datos del formulario
    })
        .then(response => {
            // Si la respuesta es exitosa (código 200–299)
            if (response.ok) {
                // Muestra un SweetAlert indicando que el mensaje fue enviado correctamente
                Swal.fire({
                    icon: "success", // Ícono de éxito
                    title: "¡Mensaje enviado!",
                    text: "Gracias por comunicarte conmigo. Te responderé pronto.",
                });

                // Resetea el formulario, limpiando todos los campos
                form.reset();
            } else {
                // Si hubo un error en la respuesta (por ejemplo, 400 o 500), muestra un mensaje de error
                Swal.fire({
                    icon: "error", // Ícono de error
                    title: "Error al enviar",
                    text: "Algo salió mal. Podés escribirme directamente por LinkedIn.",
                });
            }
        })
        .catch(error => {
            // Si ocurre un error en la red o el servidor no responde
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "No se pudo enviar el mensaje. Intentá nuevamente más tarde.",
            });
        });
});