/*
    export function initDownloadCV() {
    const downloadBtn = document.getElementById("descarga-mi-cv");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", () => {
        const urlCv = "../../cv/CV - Miguel Salazar.pdf";
        const enlace = document.createElement("a");

        enlace.href = urlCv;
        enlace.download = "CV - Miguel Salazar";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}
*/








export function initDownloadCV() {
    const downloadBtn = document.getElementById("descarga-mi-cv");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", () => {
        window.open("../../cv/CV - Miguel Salazar.pdf", "_blank");
    });
}
