# Keep Life - Sitio Web Oficial

Keep Life® — Bolsas Barrera y Soluciones de Envasado al Vacío

Sitio web corporativo y catálogo técnico de Keep Life®, empresa argentina especializada en la fabricación y comercialización de bolsas barrera y rollos gofrados de alta tecnología para la conservación de alimentos al vacío.

📋 Tabla de Contenidos

Descripción General

Líneas de Productos y Aplicaciones

Características del Proyecto

Estructura del Repositorio

Tecnologías Utilizadas

Instalación y Despliegue Local

Canales de Atención y Contacto

Licencia

📦 Descripción General

El sitio está diseñado como una plataforma estática, rápida y modular que presenta las soluciones integrales de envasado al vacío para el sector gastronómico, carnicerías, frigoríficos, fiambrerías y el hogar.

Cuenta con un sistema de inyección modular asíncrona mediante JavaScript vanilla para reutilizar cabeceras (header.html) y pies de página (footer.html) sin necesidad de preprocesadores de plantillas ni frameworks pesados.

🥩 Líneas de Productos y Aplicaciones

El catálogo técnico detalla especificaciones, espesores, formatos y compatibilidades:

Rollos Gofrados de 15 Metros (Media Barrera / 90 a 100 µm):

Diseñados para envasadoras domésticas o externas de succión (FoodSaver, Oster, Peabody, Turbosaver, etc.).

Formato continuo que rinde el triple frente a los rollos comunes de 5 m, reduciendo desperdicios de film.

Disponibles en 4 anchos: 15 cm, 20 cm, 25 cm y 30 cm.

Bolsas Lisas Multicapa STD (Media Barrera):

Para envasadoras a campana industriales y de mostrador.

Terminación con boca de labio abierto desfasado para agilizar la carga en ambientes húmedos o grasos.

Apta para cocción Sous-Vide a baja temperatura (hasta 80 °C).

Personalización e Impresión Flexográfica:

Impresión en ambas caras de 2 a 4 colores exclusiva para la línea de bolsas lisas.

Espesores a elección de 60 a 120 micrones.

Bolsas Termocontraíbles STD y Alta Barrera:

Ajuste anatómico por inmersión en calor, brillo superior y alta resistencia mecánica contra roturas por huesos o espinas.

Bolsas Cook-In:

Resistencia térmica de grado industrial para cocción al vacío, procesos en autoclave y alta adhesión cárnica para evitar mermas de peso.

🚀 Características del Proyecto

Modularidad sin Frameworks: Carga dinámica asíncrona (fetch) de cabecera y pie de página en todas las secciones.

Carruseles Interactivos y Táctiles: Carruseles autónomos con soporte para gestos táctiles (swipe) en dispositivos móviles, controles manuales y autoplay con pausa al interactuar (scripts/aplicaciones.js).

Centro de Ayuda Interactivo: Módulo de acordeón y filtrado dinámico por categorías para preguntas frecuentes (scripts/faq.js).

Accesibilidad y Navegación Móvil: Menú lateral desplegable optimizado con Checkbox Hack y cierre automático al seleccionar una sección.

Header Dinámico: Efecto de compresión suave en scroll y barra superior estática con horarios comerciales.

SEO & Performance: Metaetiquetas Open Graph, semántica HTML5 y tipografías servidas vía Google Fonts (Inter, Montserrat y Poppins).

📂 Estructura del Repositorio

├── index.html                   # Página de entrada principal
├── home.html                    # Contenido modular inyectado en el inicio
├── aplicaciones.html            # Catálogo técnico de rubros y tabla comparativa
├── nosotros.html                # Historia, trayectoria, servicios y logística
├── contacto.html                # Canales comerciales, salón de ventas y mapa
├── faq.html                     # Centro de respuestas y preguntas frecuentes
├── header.html                  # Componente modular de cabecera y navegación
├── footer.html                  # Componente modular de pie de página y WhatsApp flotante
├── scripts/
│   ├── main.js                  # Inyección de módulos, scroll dinámico y menú activo
│   ├── aplicaciones.js          # Control de carruseles interactivos con swipe
│   └── faq.js                   # Lógica de acordeones y filtrado de categorías
├── styles/
│   ├── style.css                # Variables CSS, reset y clases de utilidad globales
│   ├── header.css               # Estilos de cabecera, barra superior y drawer móvil
│   ├── footer.css               # Estilos del footer y botón flotante de WhatsApp
│   ├── home.css                 # Hero dual, tarjetas de pilares y banners de inicio
│   ├── aplicaciones.css         # Cuadrícula técnica, tablas y carruseles
│   ├── nosotros.css             # Secciones corporativas y de distribución
│   ├── contact.css              # Tarjetas de contacto y estilos de mapa
│   └── faq.css                  # Acordeones y botones de filtro interactivos
└── assets/
    ├── icons/                   # Favicon, isotipos y logotipos de marca
    └── img/                     # Fotografías de productos y banners institucionales


🛠️ Tecnologías Utilizadas

HTML5: Marcado semántico optimizado para motores de búsqueda.

CSS3 Vanilla: Uso extensivo de variables CSS (Custom Properties), Flexbox y CSS Grid.

JavaScript ES6+: Fetch API para modularización asíncrona y manipulación del DOM sin dependencias externas.

Google Fonts: Tipografías Inter (cuerpo), Poppins (títulos) y Montserrat (botones/navegación).

💻 Instalación y Despliegue Local

Debido a que el sitio utiliza fetch() para inyectar header.html, footer.html y home.html, debe ser servido a través de un servidor HTTP local para evitar bloqueos por políticas de CORS (file://).

Opción 1: Extensión Live Server (VS Code)

Abrir la carpeta del proyecto en Visual Studio Code.

Instalar la extensión Live Server.

Hacer clic derecho sobre index.html y seleccionar Open with Live Server.

Opción 2: Python HTTP Server

Si tienes Python instalado en tu equipo, ejecuta en la terminal dentro de la raíz del proyecto:

# Python 3
python -m http.server 8000


Luego abre tu navegador en http://localhost:8000.

Opción 3: Node.js (npx serve o http-server)

npx serve .


📍 Canales de Atención y Contacto

Salón de Ventas: Av. Ingeniero Guillermo Marconi 6521, B1684 El Palomar, Provincia de Buenos Aires, Argentina.

Horarios: Lunes a Viernes de 8:30 a 16:00 hs | Sábados de 8:30 a 13:00 hs.

WhatsApp de Asesoramiento: +54 9 11 5379-6041

Correo Electrónico: ventas@keeplife.com.ar

Instagram: @keeplife_ar

📄 Licencia

© 2026 Keep Life®. Todos los derechos reservados.
