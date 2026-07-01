# Bitácora Cardex

## Reglas generales del agente

- Modelo obligatorio: gpt-5.3-codex.
- Generar y mantener este archivo en `.cardex/bitacora.md`.
- Cuando el usuario indique una nueva regla general para el agente, agregarla a esta sección.
- Por cada prompt recibido generar una entrada en esta bitácora.
- Actualizar el README.md principal con lo necesario y relevante en cuanto a objetivo, tecnologías y datos técnicos.

## Entradas

### Entrada 1

- **Prompt literal proporcionado:**

```text
# Specifications
  - Angular 21, standalone, 
  - pnpm
  - vite
  - tailwindcss
  - typescript
  - typescript aliases paths
  - Appwrite como BaaS
  - Vercel 
  - Atomic design, analizar vistas y descomponer en atomos, moleculas, organismos y templates
  - Reciclar y complementar componentes ya generados cuando sea necesario, pero mantenerlo escalables y fáciles de mantener
  - Se deben generar test unitarios, buscando cumplir o superar un coverage minimo de 80%
  - Los secrets se proveeran en el archivo .env, el cual no debe conservarse en el repositorio, pero si se debe generar su contraparte .env.example (o si existe atualizarlo) el cual no debe tener los valores secrets, solo el nombre de los secrets
  - Generar archivo README.md con lo necesario para poder levantar el proyecto, caracteristicas técnicas, datos necesarios, listado de tecnologías usando badges para reconocerlas.
  - Conservar este archivo archivo en raiz de proyecto
  
# General Agent Rules
  - modelo obligatorio: gpt-5.3-codex
  - Generar un archivo .cardex/bitacora.md
  - Cuando el usuario indique una nueva regla general para el agente, agregarla a este archivo en esta seccción
  - Por cada prompt recibido generar una entrada en .cardex/bitacora.md
  - Cada entrada debe tener lo siguiente:
    - número de entrada (Autoincremental)
    - prompt literal proporcionado
    - cuando el prompt contenga preguntas, se deben agregar a la entrada las preguntas con su respuesta correspondiente
    - Si se adjuntan imagenes, convertirlas en b64 y agregarlas a la entrada de la bitacora
    - hora y fecha 
    - version de agente
    - rama actual de git
    - tiempo total de ejecución
    - complejidad
      - baja: menos de 5 archivos modificados o generados
      - media: más de 5 y menos de 10 archivos modificados o generados
      - alta: más de 10 archivos modificados o generados
    - resumen del resultado obtenido, generado por el agente
    - Actualizar el README.md principal con lo necesario y reelevante en cuanto a objetivo, tecnologías, datos técnicos

# Sonar Agent Rules
  - Generar un archivo .quality/sonar.md
  - Por cada prompt recibido que contenga `sonar` generar una entrada en .quality/sonar.md
  - Cuando el usuario indique una nueva regla de sonar para el agente, agregarla a este archivo en esta seccción
  - Cada entrada debe tener lo siguiente:
    - número de entrada (Autoincremental)
    - prompt literal proporcionado
    - cuando el prompt contenga preguntas, se deben agregar a la entrada las preguntas con su respuesta correspondiente
    - Si se adjuntan imagenes, convertirlas en b64 y agregarlas a la entrada de la bitacora
    - hora y fecha 
    - version de agente
    - rama actual de git
    - tiempo total de ejecución
    - complejidad: basada en el contenido del archivo `issues.md` adjunto al prompt, el contenido del archivo debe formar parte de la entrada generada
    - Resumen del porque sonar arrojo el resumen obtenido, generado por el agente
    - Resumen de los cambios realizados para mitigar lo que sonar arrojo, generado por el agente
```

- **Preguntas y respuestas:** No se incluyeron preguntas explícitas en el prompt.
- **Imágenes adjuntas:** No se adjuntaron imágenes.
- **Hora y fecha:** 2026-07-01 03:05:15 UTC
- **Versión de agente:** gpt-5.3-codex
- **Rama actual de git:** work
- **Tiempo total de ejecución:** aprox. 15 minutos.
- **Complejidad:** alta, más de 10 archivos modificados o generados.
- **Resumen del resultado obtenido:** Se inicializó una aplicación Angular standalone con Vite, Tailwind CSS, aliases TypeScript, configuración Appwrite, estructura Atomic Design, pruebas unitarias, variables de entorno de ejemplo y documentación principal.
