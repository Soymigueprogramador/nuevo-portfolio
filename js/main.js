// Importacion de modulos
import { initDownloadCV } from './modulos/descargaCv.js';
import { initContactForm } from './modulos/contacto.js';
import { cambiarModo } from './modulos/cambiarModo.js';
import { descargarCv } from './modulos/descargaCv.js'

// Iniciamos todo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Llamamos a los modulos
    initDownloadCV();
    initContactForm();
    cambiarModo();
    descargarCv()

    // Aquí puedes agregar otras funciones que tengas, como el menú mobile, etc.
});