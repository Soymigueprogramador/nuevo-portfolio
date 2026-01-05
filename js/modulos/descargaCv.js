export function initDownloadCV() {
    const downloadBtn = document.getElementById("descarga-mi-cv");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", () => {
        const urlCv = "./Mi cv/CV - Miguel Salazar - Front-end Developer.pdf";
        const enlace = document.createElement("a");

        enlace.href = urlCv;
        enlace.download = "CV - Miguel Salazar - Front-end Developer";

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    });
}