/**
 * KEEP LIFE® - Scripts para Acordeón de FAQ
 * Manejo interactivo de preguntas frecuentes y filtros por rubro
 */

document.addEventListener("DOMContentLoaded", () => {
    initFaqAccordion();
    initFaqCategoryFilter();
});

function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const parentItem = question.closest(".faq-item");
            const isActive = parentItem.classList.contains("active");

            // Opcional: Cerrar otros acordeones si se prefiere uno a la vez (comportamiento estándar y limpio)
            document.querySelectorAll(".faq-item.active").forEach(activeItem => {
                if (activeItem !== parentItem) {
                    activeItem.classList.remove("active");
                }
            });

            // Toggle estado actual
            if (isActive) {
                parentItem.classList.remove("active");
            } else {
                parentItem.classList.add("active");
            }
        });
    });
}

function initFaqCategoryFilter() {
    const filterButtons = document.querySelectorAll(".faq-cat-btn");
    const categoryGroups = document.querySelectorAll(".faq-category-group");

    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetCategory = btn.getAttribute("data-category");

            // Actualizar botón activo
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Filtrar grupos
            categoryGroups.forEach(group => {
                const groupCategory = group.getAttribute("data-group");
                if (targetCategory === "all" || groupCategory === targetCategory) {
                    group.style.display = "block";
                } else {
                    group.style.display = "none";
                }
            });
        });
    });
}
