document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
    const navLinks = document.querySelectorAll("nav ul li a"); // Selecciona todos los enlaces del navbar

    // Crea un Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la sección es visible, activa el enlace correspondiente
                navLinks.forEach(link => {
                    link.classList.remove("nav-active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("nav-active");
                    }
                });
            }
        });
    }, {
        threshold: 0.6 // El porcentaje de visibilidad de la sección antes de activarse (ajustable)
    });

    // Observa cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
});