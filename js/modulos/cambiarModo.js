export function cambiarModo() {
    const boton = document.getElementById('theme-toggle');
    const icono = document.getElementById('theme-icon');

    if (!boton) return; // evita crash si no existe

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icono) icono.textContent = '☀️';
    }

    boton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (icono) icono.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (icono) icono.textContent = '☀️';
        }
    });
}