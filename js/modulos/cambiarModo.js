export function cambiarModo() {
    const boton = document.getElementById('theme-toogle');
    const icono = document.getElementById('theme-icon');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icono) icono.textContent = '☀️';
    }

    boton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme', 'dark');

        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            // CAMBIO 2: Usar setItem para GUARDAR la preferencia
            localStorage.setItem('theme', 'light');
            icono.textContent = '🌙';
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            // CAMBIO 3: Asegúrate de usar 'icono' (con o al final)
            icono.textContent = "☀️";
        }
    });
};