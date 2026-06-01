
## Instalación y uso local

1. **Clona o descarga** este repositorio.
2. **Prepara los archivos multimedia**:
   - Coloca tu foto cuadrada en `multimedia/foto.webp` (puede ser `.jpg` o `.png`, pero actualiza la extensión en el HTML si es necesario).
   - Coloca los dos CV en PDF dentro de la misma carpeta `multimedia/` con los nombres exactos:
     - `CV — Darlyng Rafael Mateo Peral.pdf`
     - `CV English — Darlyng Rafael Mateo Peral.pdf`
3. Abre el archivo `index.html` en tu navegador (no necesita servidor, funciona directamente).

> Si deseas cambiar los enlaces de GitHub, el email o cualquier texto, edita el HTML y el objeto `translations` en `translations.js`.

## Personalización del idioma

El sistema de traducción está basado en **atributos `data-i18n`** y un objeto `translations`. Para añadir más textos traducibles:

1. En el HTML, añade `data-i18n="clave-unica"` al elemento.
2. En `translations.js`, agrega la clave a `translations.es` y `translations.en` con los textos correspondientes.

El botón de cambio de idioma (`#langToggle`) guarda la preferencia en `localStorage`.

## Secciones del portfolio

- **About**: presentación, descripción personal, timeline de hitos.
- **Proyectos**: SIA (sistema académico) y Votech (plataforma de votación). Cada proyecto muestra problema, solución, stack técnico y resultados.
- **Tecnologías**: grids con frontend, backend, bases de datos, herramientas; niveles de dominio (Beginner/Mid/Senior); stack actual visual.
- **Proceso**: metodología de trabajo (comprensión, arquitectura simple, iteración, resolución de problemas, comunicación, criterio técnico).
- **Logros**: estadísticas y reconocimientos (participación en ODI, MUN, usuarios simultáneos, etc.).
- **Contacto**: enlaces a GitHub, LinkedIn, correo (con copiado), ubicación y descarga de CV en ambos idiomas.

## Responsive

- El diseño se adapta a pantallas pequeñas (menos de 640px):
  - La hotbar reduce tamaño de fuente y oculta los números.
  - Los botones de los proyectos se envuelven.
  - La foto y el texto del héroe se centran en columna.
  - Las cuadrículas pasan a una sola columna.
    
---

**¿Preguntas o sugerencias?**  
Abre un issue o contacta a través del email en el portafolio.
