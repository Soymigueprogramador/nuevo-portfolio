// Logica para la descarga del cv.
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

/* Logica para el alert que de dispara despues de mandar el formulario 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: "¡Mensaje enviado!",
                text: "Gracias por comunicarte conmigo, Tratare de contestarte lo antes posible",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Mensaje no enviado",
                text: "UPS algo salio mal, asun asi te podes comunicar conmigo por linkedin",
                icon: "error"
            });
        }
    })
    .catch(error => {
        Swal.fire({
            title: "Mensaje no enviado",
            text: "UPS algo salio mal, asun asi te podes comunicar conmigo por linkedin",
            icon: "error"
        });
    });
});*/



const contactForm = document.getElementById('contactForm'); 

addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        name: e.target.name.value,
        mensaje: e.target.mensaje.value,
    };

    try {
        const response = await fetch('http://127.0.0.1:5500/index.html#contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
    } catch (error) {
        console.log('Mensaje no enviado', error);
        alert('Mensaje no enviado');
    }
});