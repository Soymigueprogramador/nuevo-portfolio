// Guardo el "ID" del botón
const DescargaMiCv = document.getElementById("descarga-mi-cv");

// Creo el evento "click" para cuando se descargue
DescargaMiCv.addEventListener("click", descargarCv);

// Creo la función para "descargarCv"
function descargarCv() {
    const urlCv = "./Mi cv/MIGUEL SALAZAR CV.pdf";
    
    // Creo el enlace de descarga
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = urlCv;
    enlaceDescarga.download = "MIGUEL SALAZAR CV.pdf";
    enlaceDescarga.style.display = "none";
    
    // Agrego el enlace al cuerpo del documento
    document.body.appendChild(enlaceDescarga);
    
    // Simulo un click en el botón de descarga
    enlaceDescarga.click();
    
    // Elimino el enlace del cuerpo del documento
    document.body.removeChild(enlaceDescarga);
}

// Aca esta la logica para el alert que de dispara despues de mandar el formulario 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Mostrar la alerta de éxito
            Swal.fire({
                title: "¡Buen trabajo!",
                text: "Tu mensaje ha sido enviado con éxito.",
                icon: "success"
            });

            // Limpiar el formulario después del envío
            form.reset();
        } else {
            // Mostrar una alerta de error si falla
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
                icon: "error"
            });
        }
    })
    .catch(error => {
        // Mostrar alerta de error si hay algún problema con la solicitud
        Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            icon: "error"
        });
    });
});