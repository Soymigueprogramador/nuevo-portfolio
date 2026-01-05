export function initContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Buscamos el input de tipo submit
        const submitInput = form.querySelector('input[type="submit"]');

        // Guardamos el texto original usando .value (no .innerText)
        const originalValue = submitInput ? submitInput.value : "Enviar";

        if (submitInput) {
            submitInput.value = "Enviando..."; // Cambiamos el value
            submitInput.disabled = true;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje enviado!",
                    text: "Gracias por comunicarte conmigo. Te responderé pronto.",
                });
                form.reset();
            } else {
                throw new Error("Error en el servidor");
            }

        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Ups...",
                text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
            });
        } finally {
            if (submitInput) {
                submitInput.value = originalValue; // Restauramos el value original
                submitInput.disabled = false;
            }
        }
    });
}