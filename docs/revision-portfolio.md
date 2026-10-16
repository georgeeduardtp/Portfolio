# Revisión visual y funcional del portfolio

Revisión del 16 de octubre de 2026. Cambios aplicados al proyecto local.

## Ampliación de escritorio y animaciones

Segunda revisión solicitada por George:

- Escritorio desde 1100 px: contenido al 94 % del ancho disponible, con un máximo de 1640 px. A 1440 px ocupa aproximadamente 1340 px, frente al límite anterior de 1180 px.
- Aumentados nombre, fotografía, títulos, párrafos, botones, etiquetas, tarjetas y ventana de perfil. La ventana ampliada admite hasta 1100 px de ancho.
- Nombre con entrada escalonada por líneas y degradado animado; contenido con aparición al entrar en pantalla, una sola vez.
- Movimiento suave en las órbitas, el halo y la tarjeta de la fotografía. Efectos de ratón en enlaces, flechas, botones y captura del proyecto.
- Indicador de avance de lectura y botón para pausar o reanudar el movimiento.
- La preferencia del sistema de reducir movimiento desactiva las animaciones decorativas y las entradas. El contenido permanece visible sin JavaScript o si se interrumpen las animaciones.
- Comprobadas anchuras de 320, 390, 768, 1099, 1100, 1280, 1440, 1920 y 2560 px: sin desbordamientos horizontales ni títulos recortados en las verificaciones realizadas. Comprobados pausa/reanudación, carrusel y desplazamiento de la ventana ampliada.
- TypeScript y compilación de producción correctos; consola de la revisión sin errores ni advertencias.

## Diseño y estructura

- Identidad oscura y verde conservada, con una paleta, tipografía, bordes y espaciados comunes.
- Portada con propuesta profesional, fotografía optimizada con Next Image y accesos al proyecto, CV y redes.
- Navegación fija a proyectos, perfil y contacto; enlaces de salto y estados de foco visibles.
- Stack agrupado por áreas para facilitar la lectura, sustituyendo la cinta de movimiento continuo.
- Pelu Go como primer contenido tras la portada: captura real extraída de la documentación local, enlace a la web y caso explicativo.
- Contacto con correo, LinkedIn, GitHub y CV facilitados por George.
- Eliminada de la página la bienvenida que obligaba a hacer clic para acceder al contenido.

## Problemas corregidos

### Sobre mí: desplazamiento horizontal

El carrusel anterior ocultaba su barra y carecía de controles para un ratón convencional. La distribución también incluía anchos mínimos elevados en escritorio.

El nuevo carrusel tiene flechas, selectores por apartado, indicador de posición y barra visible. Admite arrastre con ratón, desplazamiento horizontal nativo y controles de teclado (flechas, Inicio y Fin). El gesto táctil utiliza el desplazamiento nativo del navegador, sin interceptar los eventos táctiles ni convertir la rueda vertical en navegación horizontal.

### Perfil ampliado: desplazamiento vertical

Se ha retirado Lenis de la página para evitar su interferencia con las ventanas y los contenedores anidados. La ventana tiene una cabecera fija dentro del diálogo y un único cuerpo desplazable con `min-height: 0`. Su altura depende de `100dvh`, de modo que también se adapta al móvil en horizontal. El botón de cierre permanece visible.

### Acciones y adaptación

- El botón «Ver caso completo próximamente», que no hacía nada, se ha sustituido por un caso de proyecto que se abre y permite visitar Pelu Go.
- Enlaces reales al PDF, correo y perfiles; enlaces externos con protección para nuevas pestañas.
- Columnas flexibles sin mínimos que ensanchen la pantalla; correo y botones se adaptan a pantallas estrechas.
- Navegación por anclas ajustada para la cabecera fija.
- Movimiento reducido: se detienen animaciones y se evita el desplazamiento animado cuando el sistema lo solicita.

## Validación

- Comprobación de TypeScript sin errores.
- Compilación de producción completada, con la portada generada de forma estática.
- Vistas de navegador de 320 × 740, 390 × 844, 768 × 1024, 844 × 390 y 1440 × 900, además de la vista de escritorio habitual: sin desbordamientos horizontales ni títulos recortados en las comprobaciones realizadas.
- Carrusel: flechas, selección directa, arrastre con ratón, Inicio/Fin y límites de navegación comprobados.
- Perfil ampliado: desplazamiento hasta el final en escritorio y en vista móvil, cierre visible y cierre mediante Escape comprobados.
- Caso de Pelu Go: apertura y adaptación en orientación horizontal comprobadas.
- PDF y recursos locales: respuesta HTTP 200.

Las vistas móviles se han comprobado mediante el tamaño de ventana del navegador. Queda pendiente la comprobación en un dispositivo físico, especialmente Safari en iOS y el gesto táctil real. Esto no es una auditoría exhaustiva de accesibilidad ni de rendimiento.

## Recomendaciones por prioridad

1. **Ampliar la evidencia de Pelu Go.** Añadir capturas actuales de reservas y del panel de negocio, con datos de demostración. La imagen existente documenta el producto, pero su resolución es limitada. Un vídeo breve del recorrido completo ayudaría a explicar la aplicación.
2. **Crear una página propia del caso.** El resumen ya funciona en una ventana. Una ruta como `/proyectos/pelu-go` permitiría compartir y encontrar el caso directamente. Incluir un diagrama de arquitectura, el reto más difícil, una decisión con sus alternativas y enlaces al código que se quiera hacer público.
3. **Mostrar resultados comprobables.** Incluir métricas o aprendizajes con evidencia: pruebas realizadas, tiempos medidos y limitaciones detectadas. Publicar cifras de uso solo cuando existan datos reales.
4. **Añadir un segundo proyecto que aporte algo diferente.** Por ejemplo, una API con pruebas y documentación o una integración con un servicio externo. Explicar el problema y las decisiones aporta más que repetir el mismo stack.
5. **Preparar la tarjeta para compartir.** La configuración actual declara la fotografía de perfil como imagen social de 1200 × 630. Conviene crear una imagen con esas dimensiones reales que incluya nombre, rol y un pequeño avance del trabajo.
6. **Revisar el CV y el perfil público juntos.** Mantener coherentes fechas, experiencia, formación y nivel de inglés. Sustituir descripciones genéricas por tareas y aportaciones concretas que se puedan explicar en una entrevista.
7. **Comprobar la versión desplegada.** Medir carga, estabilidad visual y respuesta con PageSpeed Insights una vez publicada, y repetir los recorridos en un móvil físico. Estas métricas no se han medido en esta revisión local.

Los controles manuales y el uso de teclado del carrusel siguen la orientación de [W3C WAI sobre controles e interacción](https://www.w3.org/WAI/tutorials/carousels/controls/).
