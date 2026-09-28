/**
 * KEEP LIFE® - Scripts para la Sección Aplicaciones
 * Carrusel interactivo y autónomo para cada sección (3 fotos por carrusel)
 * Soporta navegación por flechas, indicadores, swipe táctil y autoplay inteligente con pausa al hover.
 */

document.addEventListener("DOMContentLoaded", () => {
    initCarousels();
});

function initCarousels() {
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach((carousel, carouselIndex) => {
        const track = carousel.querySelector(".carousel-track");
        const slides = carousel.querySelectorAll(".carousel-slide");
        const prevBtn = carousel.querySelector(".carousel-btn.prev");
        const nextBtn = carousel.querySelector(".carousel-btn.next");
        const dots = carousel.querySelectorAll(".carousel-dot");

        if (!slides.length) return;

        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoplayTimer = null;
        let touchStartX = 0;
        let touchEndX = 0;

        function updateCarousel(newIndex) {
            // Manejo cíclico de índices
            if (newIndex >= totalSlides) {
                currentIndex = 0;
            } else if (newIndex < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = newIndex;
            }

            // Desplazamiento del track con CSS transform
            if (track) {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Actualización de slides activas
            slides.forEach((slide, idx) => {
                slide.classList.toggle("active", idx === currentIndex);
            });

            // Actualización de dots indicadores
            dots.forEach((dot, idx) => {
                dot.classList.toggle("active", idx === currentIndex);
                dot.setAttribute("aria-current", idx === currentIndex ? "true" : "false");
            });
        }

        function nextSlide() {
            updateCarousel(currentIndex + 1);
        }

        function prevSlide() {
            updateCarousel(currentIndex - 1);
        }

        // Eventos en botones
        if (nextBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                nextSlide();
                resetAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                prevSlide();
                resetAutoplay();
            });
        }

        // Eventos en dots
        dots.forEach((dot, dotIdx) => {
            dot.addEventListener("click", (e) => {
                e.preventDefault();
                updateCarousel(dotIdx);
                resetAutoplay();
            });
        });

        // Soporte de Swipe táctil en móviles
        carousel.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay();
        }, { passive: true });

        carousel.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoplay();
        }, { passive: true });

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            const threshold = 40; // Umbral mínimo en px para considerar swipe
            if (swipeDistance > threshold) {
                prevSlide();
            } else if (swipeDistance < -threshold) {
                nextSlide();
            }
        }

        // Autoplay inteligente
        function startAutoplay() {
            stopAutoplay();
            autoplayTimer = setInterval(() => {
                nextSlide();
            }, 4500 + (carouselIndex * 700)); // Pequeño desfase estético entre ambos carruseles
        }

        function stopAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }

        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        // Pausa al pasar el mouse por encima
        carousel.addEventListener("mouseenter", stopAutoplay);
        carousel.addEventListener("mouseleave", startAutoplay);

        // Inicializar estado
        updateCarousel(0);
        startAutoplay();
    });
}
