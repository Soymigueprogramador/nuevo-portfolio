export function initContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", () => {
        const submitInput = form.querySelector('input[type="submit"]');

        if (submitInput) {
            submitInput.value = "Enviando...";
            submitInput.disabled = true;
        }

        // ❗ NO usamos preventDefault
        // ❗ NO usamos fetch
        // El navegador envía el form directamente a FormSubmit
    });
}