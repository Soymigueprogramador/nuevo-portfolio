export function cambiarModo() {
    const boton = document.getElementById('theme-toggle');
    const icono = document.getElementById('theme-icon');

    if (!boton) return;

    const setThemeIcon = (theme) => {
        boton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        if (icono) icono.textContent = theme === 'dark' ? 'D' : 'L';
    };

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        setThemeIcon('dark');
    } else {
        setThemeIcon('light');
    }

    boton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            setThemeIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setThemeIcon('dark');
        }
    });
}
