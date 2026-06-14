# Estructura del portfolio personal

## Objetivo general

Crear una web personal para `georgeeduardturcescu.com` que funcione como centro de marca personal, posicionamiento profesional y escaparate de proyectos reales.

La web no debe parecer un portfolio generico de estudiante. Debe transmitir que George Eduard Turcescu es un desarrollador de software capaz de construir productos digitales completos, con logica de negocio, identidad de marca, usuarios objetivo y vision de producto.

## Home / landing principal

La home debe presentar a George como desarrollador y destacar el proyecto principal actual: Pelu Go.

### Hero principal

Debe responder rapido a tres preguntas:

- Quien es George Eduard Turcescu.
- Que tipo de desarrollador es.
- Que ha construido.

Contenido recomendado:

- Nombre completo: George Eduard Turcescu.
- Rol: desarrollador de software.
- Frase de posicionamiento: desarrollador orientado a producto, capaz de crear soluciones SaaS con logica de negocio real.
- Llamadas a la accion:
  - Ver proyecto destacado.
  - Ver CV.
  - Contactar.

### Proyecto destacado

Pelu Go debe tener un bloque protagonista dentro de la home.

Contenido recomendado:

- Nombre del proyecto.
- Descripcion breve.
- Captura o imagen representativa.
- Explicacion corta del tipo de producto: SaaS B2B2C.
- Tecnologias principales.
- Estado: usable / en desarrollo activo / proyecto real.
- Boton hacia la pagina dedicada del proyecto.

La idea es que Pelu Go no se perciba como un simple ejercicio, sino como un caso de producto real.

### Sobre mi

Seccion breve y directa.

Contenido recomendado:

- Formacion: FP Superior en Desarrollo de Aplicaciones Multiplataforma.
- Enfoque: desarrollo de software, producto, resolucion de problemas reales.
- Interes profesional: construir aplicaciones utiles, escalables y mantenibles.
- Breve mencion a la experiencia construyendo Pelu Go.

### Stack tecnico

No debe ser una lista infinita de tecnologias. Mejor agruparlo por areas.

Ejemplo de grupos:

- Frontend.
- Backend.
- Bases de datos.
- Autenticacion.
- Despliegue.
- Herramientas de desarrollo.

El objetivo es mostrar criterio tecnico, no solo enumerar logos.

### Proyectos

Aunque ahora solo exista Pelu Go, la home debe estar preparada para crecer.

Contenido recomendado:

- Grid o lista de proyectos.
- Pelu Go como proyecto destacado.
- Espacio preparado para futuros proyectos.
- Cada proyecto debe poder enlazar a una pagina dedicada.

### Contacto y redes

Contenido recomendado:

- Email profesional.
- LinkedIn.
- GitHub.
- CV en PDF.
- Otras redes relevantes si aportan valor profesional.

## Pagina dedicada de proyecto

Cada proyecto debe tener una pagina propia. Para Pelu Go podria ser:

`/proyectos/pelu-go`

Esta pagina debe funcionar como caso de estudio detallado.

### Presentacion del proyecto

Contenido recomendado:

- Nombre del proyecto.
- Descripcion clara.
- Estado actual.
- Captura principal.
- Enlaces relevantes:
  - Web/app si es publica.
  - Redes.
  - Repositorio si procede.

### Problema que resuelve

Explicar el problema de negocio o usuario que hay detras del proyecto.

Debe quedar claro:

- Quien tiene el problema.
- Por que es importante.
- Que mejora aporta el producto.

### Publico objetivo

Definir para quien esta hecho el producto.

En el caso de Pelu Go:

- Negocios o profesionales relacionados con peluqueria/estetica, si aplica.
- Clientes finales, si aplica.
- Relacion B2B2C entre negocio, plataforma y usuario final.

### Filosofia del producto

Explicar la vision detras del proyecto.

Contenido recomendado:

- Por que existe.
- Que tipo de experiencia quiere ofrecer.
- Que valores de producto tiene: simplicidad, eficiencia, gestion clara, confianza, etc.

### Modelo de negocio / logica B2B2C

Esta seccion es importante para demostrar que no es solo una app tecnica.

Contenido recomendado:

- Como interactuan los diferentes tipos de usuario.
- Que valor recibe cada parte.
- Que flujos principales existen.
- Que decisiones de producto se tomaron para soportar ese modelo.

### Funcionalidades principales

Listar las funcionalidades reales del producto.

Ejemplos de bloques:

- Gestion de usuarios.
- Panel de administracion.
- Reservas o agenda, si aplica.
- Gestion de servicios.
- Notificaciones, si aplica.
- Roles y permisos.
- Pagos o monetizacion, si aplica.
- Perfil publico o presencia de marca, si aplica.

### Arquitectura y stack tecnico

Explicar como esta construido.

Contenido recomendado:

- Frontend.
- Backend.
- Base de datos.
- Autenticacion.
- Hosting/despliegue.
- Servicios externos.
- Patrones o decisiones tecnicas importantes.

No hace falta revelar informacion sensible. La idea es demostrar criterio tecnico.

### Retos tecnicos

Esta seccion da mucha credibilidad.

Contenido recomendado:

- Problemas dificiles que aparecieron.
- Decisiones que hubo que tomar.
- Trade-offs.
- Cosas aprendidas.
- Mejoras futuras.

### Marca, identidad y redes

Mostrar que el proyecto tiene una dimension de producto real.

Contenido recomendado:

- Nombre y significado.
- Logo/identidad visual si existe.
- Tono de comunicacion.
- Redes sociales.
- Pagina publica o presencia online.

### Estado actual y proximos pasos

Contenido recomendado:

- Que esta disponible ahora.
- Que se esta validando.
- Que funcionalidades vendran despues.
- Que objetivos tiene el proyecto.

## Enfoque visual recomendado

El estilo puede ser oscuro, moderno y profesional.

Direccion visual recomendada:

- Fondo oscuro.
- Contraste alto.
- Acentos de color para llamadas a la accion.
- Capturas grandes de producto.
- Tipografia clara.
- Secciones bien separadas.
- Aspecto mas cercano a SaaS premium que a portfolio generico.

La web debe ser atractiva, pero el contenido debe seguir siendo el protagonista.

## Librerias visuales decididas

El proyecto ya incluye las librerias necesarias para construir una experiencia fluida sin sobrecargar el stack.

### Motion

Uso principal:

- Animaciones de entrada en el hero.
- Aparicion progresiva de secciones al hacer scroll.
- Microinteracciones en botones, enlaces y tarjetas.
- Transiciones suaves en cards de proyecto.
- Animaciones de layout si alguna seccion cambia de estado.

Criterio de uso:

- Animaciones cortas y elegantes.
- Evitar efectos excesivos que distraigan del contenido.
- Priorizar `opacity`, `transform`, `scale` y `y` para buen rendimiento.
- Respetar `prefers-reduced-motion` cuando sea posible.

### Lenis

Uso principal:

- Scroll suave global.
- Navegacion fluida entre secciones.
- Sensacion mas cuidada y premium.

Criterio de uso:

- Mantener el scroll natural, no demasiado lento.
- Evitar que el efecto dificulte leer contenido largo.
- Verificar bien la experiencia en movil.

### MUI Icons

Uso principal:

- Iconos para contacto, GitHub, LinkedIn, CV y enlaces externos.
- Iconos de apoyo para stack tecnico y funcionalidades.
- Flechas y llamadas a la accion.

Criterio de uso:

- Usar iconos como apoyo visual, no como decoracion sin significado.
- Mantener consistencia de tamanos y colores.

## Reglas de animacion

La animacion debe reforzar la percepcion de calidad, no competir con el contenido.

Recomendaciones:

- Hero con entrada suave de texto, foto y CTA.
- Secciones con aparicion progresiva al entrar en viewport.
- Cards con hover sutil: ligera elevacion, borde o brillo controlado.
- Capturas de proyecto con transiciones suaves.
- Botones con feedback claro al hover y tap.
- Evitar animaciones largas, rebotes exagerados o efectos demasiado llamativos.
- Mantener buen rendimiento en movil.

## SEO y posicionamiento

La estructura debe ayudar a indexar tanto el nombre personal como los proyectos.

Busquedas objetivo:

- George Eduard Turcescu.
- Portfolio George Eduard Turcescu.
- Desarrollador George Eduard Turcescu.
- Creador Pelu Go.
- Pelu Go SaaS.
- Desarrollador Pelu Go.

Recomendaciones:

- Usar el nombre completo en el title y hero.
- Crear una pagina dedicada para Pelu Go.
- Incluir metadatos por pagina.
- Usar textos claros y descriptivos.
- Preparar URLs limpias.
- Incluir enlaces internos entre home, proyectos y contacto.

## Estructura inicial sugerida

```text
/
  Home principal

/proyectos
  Listado de proyectos

/proyectos/pelu-go
  Caso de estudio detallado de Pelu Go

/cv
  Acceso o redireccion al CV en PDF

/contacto
  Opcional si se quiere una pagina de contacto dedicada
```

## Principio clave

El portfolio debe comunicar una idea principal:

George Eduard Turcescu no solo aprende tecnologias; construye productos reales con criterio tecnico, logica de negocio y vision de marca.
