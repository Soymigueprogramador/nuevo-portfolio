export function initContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje enviado!",
                    text: "Gracias por comunicarte conmigo. Te responderé pronto.",
                });
                form.reset();
            } else {
                throw new Error("Error en la respuesta del servidor");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Ups...",
                text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            });
        }
    });
}