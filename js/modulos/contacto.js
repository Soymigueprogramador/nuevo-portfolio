export default function contacto() {
  const form = document.getElementById("contactForm");

  if (!form) return; // 🔒 evita errores si no existe el form

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (message.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    const data = { name, email, message };

    try {
      const res = await fetch("https://contact-husl.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await res.json();
      } catch {
        throw new Error("Respuesta inválida del servidor");
      }

      if (!res.ok) {
        throw new Error(result.error || "Error al enviar el mensaje");
      }

      alert(result.message || "Mensaje enviado correctamente");
      form.reset();

    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el mensaje. Intentá nuevamente.");
    }
  });
}