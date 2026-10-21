/**
 * KEEP LIFE® - Scripts Principales
 * Inyección modular asíncrona de Header, Footer y Home, detección de página activa y menú móvil.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyección de Header
    const headerElem = document.getElementById("header");
    if (headerElem) {
        fetch("header.html")
            .then(res => {
                if (!res.ok) throw new Error("No se pudo cargar header.html");
                return res.text();
            })
            .then(html => {
                headerElem.innerHTML = html;
                highlightActiveMenu();
                setupMobileMenuAutoClose();
                setupHeaderScroll();
            })
            .catch(err => console.error("Error cargando header:", err));
    }

    // Inicializar listener de scroll dinámico
    setupHeaderScroll();

    // 2. Inyección de Footer
    const footerElem = document.getElementById("footer");
    if (footerElem) {
        fetch("footer.html")
            .then(res => {
                if (!res.ok) throw new Error("No se pudo cargar footer.html");
                return res.text();
            })
            .then(html => {
                footerElem.innerHTML = html;
            })
            .catch(err => console.error("Error cargando footer:", err));
    }

    // 3. Inyección de Home; el contenido en index.html queda como respaldo si falla la carga.
    const homeElem = document.getElementById("home");
    if (homeElem) {
        fetch("home.html")
            .then(res => {
                if (!res.ok) throw new Error("No se pudo cargar home.html");
                return res.text();
            })
            .then(html => {
                homeElem.innerHTML = html;
            })
            .catch(err => console.error("Error cargando home:", err));
    }
});

/**
 * Resalta el ítem activo en la barra de navegación según el archivo actual
 */
function highlightActiveMenu() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll(".menu-list li a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href").toLowerCase();
        
        // Comprobar coincidencia exacta o de inicio
        const isHome = (href === "./" || href === "index.html") && (currentPath.endsWith("/") || currentPath.endsWith("index.html") || currentPath === "");
        const isMatch = href.length > 2 && currentPath.includes(href);

        if (isHome || isMatch) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/**
 * Cierra automáticamente el drawer móvil al hacer clic en cualquier enlace
 */
function setupMobileMenuAutoClose() {
    const menuCheckbox = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (menuCheckbox && navLinks.length) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuCheckbox.checked = false;
            });
        });
    }
}

/**
 * Controla el comportamiento dinámico del header de navegación al hacer scroll:
 * - Reduce el alto del header en ~5px cuando se desplaza hacia abajo (scrollY > 35px).
 * - Restaura el alto inicial (+5px) al volver arriba de todo.
 * - La barra de horarios superior permanece estática en la página sin parpadeos ni transiciones.
 */
function setupHeaderScroll() {
    const headerElem = document.getElementById("header");
    if (!headerElem || headerElem.dataset.scrollInit) return;
    headerElem.dataset.scrollInit = "true";

    let ticking = false;

    const handleScroll = () => {
        const headerNav = document.querySelector(".header-nav");
        const isScrolled = window.scrollY > 35;

        if (headerNav) {
            headerNav.classList.toggle("scrolled", isScrolled);
        }
        headerElem.classList.toggle("scrolled", isScrolled);

        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    // Chequeo de estado inicial
    handleScroll();
}
