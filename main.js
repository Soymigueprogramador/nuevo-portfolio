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