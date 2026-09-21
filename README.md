# El Papelero - Sitio Web Oficial

Sitio web empresarial y catálogo de productos para **El Papelero**, distribuidora mayorista y minorista de artículos descartables, insumos de embalaje, artículos de librería y oficina.

Este proyecto ha sido creado utilizando un diseño premium limpio, con micro-interacciones fluidas y un sistema responsivo optimizado para todo tipo de pantallas (móviles, tablets y ordenadores).

---

## 🚀 Características del Proyecto

### 🎨 Diseño Visual Moderno (CSS Vanilla)
* **Paleta de Colores**: Se mantiene el alma tradicional del comercio utilizando el terracota clásico (`#a16565`) combinado con destellos del amarillo papelero (`#FFD500`), complementados con sombras suaves y fondos limpios.
* **Tipografías**: Integración directa de Google Fonts con **Montserrat** (para menús, botones y destaques) y **Poppins** (para títulos de secciones).

### 📱 Experiencia Móvil (Responsive)
* **Menú de Hamburguesa Táctil**: Implementado en la cabecera mediante el patrón **Checkbox Hack en CSS**. Al ser presionado, se anima en forma de "X" y despliega un menú lateral (Drawer) desde la derecha junto con un fondo difuminado de desenfoque (`backdrop-filter`). Al no utilizar Javascript para la animación, es inmune a fallas de carga asíncrona.
* **Consistencia Estructural**: Se forzó mediante flexbox que en móviles las imágenes siempre se muestren arriba del texto (en lugar del patrón espejado e intercalado de escritorio), logrando un flujo de lectura consistente y cómodo.
* **Mapa Responsivo**: Ajustado en altura en móviles para evitar el bloqueo del desplazamiento vertical (scroll).

---

## 📂 Estructura de Archivos

El sitio web está estructurado de manera modular para facilitar el mantenimiento:

```text
web keep/
│
├── README.md               # Este archivo de documentación
├── mySite/                 # Carpeta contenedora del sitio web
│   ├── index.html          # Página de inicio general
│   ├── home.html           # Contenido de la sección de inicio (cargado dinámicamente)
│   ├── productos.html      # Catálogo completo de productos y rubros
│   ├── contacto.html       # Página de contacto, redes sociales y mapa
│   ├── header.html         # Encabezado reutilizable (cargado por JS)
│   ├── footer.html         # Pie de página reutilizable (cargado por JS)
│   │
│   ├── assets/             # Recursos gráficos
│   │   ├── icons/          # Iconos locales
│   │   └── img/            # Logotipos e imágenes ilustrativas del catálogo
│   │
│   ├── scripts/            # Lógica en JavaScript
│   │   └── main.js         # Script para la inyección modular de componentes HTML
│   │
│   └── styles/             
│       ├── style.css       # Variables de diseño globales y reset
│       ├── header.css      # Estilos del header, barra de búsqueda y menú hamburguesa
│       ├── footer.css      # Estilos del pie de página multi-columna
│       ├── home.css        # Estilos de la página principal (Hero, características, etc.)
│       ├── productos.css   # Estilos del catálogo de productos y barra lateral
│       └── contact.css     # Estilos de la sección de contacto y mapa
```

---

## 🛠️ Stack Tecnológico

* **HTML5**: Estructuración semántica de componentes.
* **CSS3**: Diseño responsivo, Grid Layout, Flexbox, transiciones animadas y Checkbox Hack.
* **JavaScript**: Inyección modular asíncrona para cabeceras y pies de página a través del API nativa `fetch`.

---

## 💻 Ejecución del Proyecto Localmente

Debido a que el sitio web carga los componentes compartidos (`header.html`, `footer.html` y `home.html`) utilizando peticiones de `fetch`, los navegadores modernos bloquearán estas solicitudes si abres el archivo directamente (`file://`) por políticas de CORS.

Para visualizar la web correctamente en desarrollo, es necesario correrla en un servidor local:

### Opción 1: Extensión Live Server (Recomendado)
1. Instala la extensión **Live Server** en tu editor (ej. VS Code).
2. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

### Opción 2: Python (Consola)
Si tienes Python instalado, ejecuta en la carpeta del proyecto:
```bash
python -m http.server 8000
```
Luego ingresa a `http://localhost:8000` en tu navegador.

### Opción 3: Node.js (http-server)
Si tienes Node instalado, puedes correr:
```bash
npx http-server mySite
```
