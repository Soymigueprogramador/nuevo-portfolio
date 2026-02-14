export function initDownloadCV() {
    const downloadBtn = document.getElementById("descarga-mi-cv");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", () => {
        const urlCv = "../../Mi cv/CV - Miguel Salazar.pdf";
        const enlace = document.createElement("a");

        enlace.href = urlCv;
        enlace.download = "CV - Miguel Salazar";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}