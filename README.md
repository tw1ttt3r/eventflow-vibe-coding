# EventFlow Vibe Coding

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-F02E65?logo=appwrite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.12.1-F69220?logo=pnpm&logoColor=white)

EventFlow es una base frontend standalone para administrar y descubrir eventos. El objetivo del proyecto es ofrecer una interfaz Angular ligera, desplegable en Vercel, con componentes reutilizables, integración preparada para Appwrite y una configuración de build reproducible con Vite.

## Objetivo funcional

- Mostrar experiencias/eventos mediante componentes de UI reutilizables.
- Servir como base para conectar datos de eventos desde Appwrite.
- Mantener una arquitectura simple para iterar rápido en funcionalidades de descubrimiento, listado y presentación de eventos.

## Tecnologías principales

- **Angular 21** con componentes standalone y rutas declarativas.
- **TypeScript 5.9** con configuración estricta.
- **Vite 7** como servidor de desarrollo y bundler de producción.
- **@analogjs/vite-plugin-angular** para integrar Angular en Vite.
- **Tailwind CSS 3** y PostCSS para estilos utilitarios.
- **Appwrite** como backend/BaaS previsto para datos de eventos.
- **Vitest** y Testing Library para pruebas unitarias.
- **pnpm 10.12.1** como package manager fijado para despliegues.
- **Vercel** como plataforma de despliegue.

## Datos técnicos relevantes

- El proyecto usa `src` como raíz de Vite; `src/index.html` se emite como `dist/index.html` para que Vercel pueda servir la aplicación desde el output directory configurado.
- El build de producción ejecuta `vite build`.
- La verificación Angular con `ngc` está separada en `pnpm typecheck` para no bloquear el build de Vercel.
- `@angular/build` está declarado porque `@analogjs/vite-plugin-angular` necesita resolver `@angular/build/private` durante la carga de configuración.
- `pnpm.onlyBuiltDependencies` permite el `postinstall` de `esbuild`, requerido por Vite.
- `engines.node` fija Node.js `22.x` para Vercel.
- `vercel.json` usa `npx --yes pnpm@10.12.1` en install/build para evitar que Vercel use un `pnpm` preinstalado incompatible.

## Características técnicas

- Atomic design aplicado en `atoms`, `molecules`, `organisms`, `templates` y `pages`.
- Alias TypeScript: `@app/*`, `@core/*`, `@shared/*` y `@env/*`.
- Appwrite centralizado en `src/app/core/config/appwrite.config.ts`.
- Vitest con Testing Library y umbrales de coverage mínimos del 80%.
- `.env.example` documenta las variables requeridas sin exponer secretos.

## Requisitos

- Node.js 22.x.
- pnpm 10.12.1 o superior compatible.
- Proyecto Appwrite con endpoint, project id, database id y collection id para eventos.

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores reales:

```bash
cp .env.example .env
```

Variables requeridas:

- `VITE_APPWRITE_ENDPOINT`
- `VITE_APPWRITE_PROJECT_ID`
- `VITE_APPWRITE_DATABASE_ID`
- `VITE_APPWRITE_EVENTS_COLLECTION_ID`

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
pnpm test
```

## Estructura principal

```text
src/index.html      Entrada HTML usada por Vite y emitida como dist/index.html
src/main.ts         Bootstrap de Angular
src/app/core        Configuración transversal, incluyendo Appwrite
src/app/shared      Sistema de diseño atómico reusable
src/app/pages       Vistas conectadas a templates
src/environments    Lectura tipada de variables Vite
```

## Despliegue en Vercel

La configuración está declarada en `vercel.json`:

- `installCommand`: `npx --yes pnpm@10.12.1 install --frozen-lockfile=false`
- `buildCommand`: `npx --yes pnpm@10.12.1 build`
- `outputDirectory`: `dist`

Pasos esperados:

1. Configura las variables `VITE_APPWRITE_*` en el proyecto de Vercel.
2. Usa Node.js 22.x, definido por `package.json`.
3. Ejecuta instalación y build mediante los comandos de `vercel.json`.
4. Publica el directorio `dist` generado por Vite.

## Reglas operativas del agente

Este repositorio conserva la bitácora de interacciones en `BITACORA.md`. Las reglas para agentes viven en `AGENTS.md` y exigen registrar cada interacción antes de finalizar el turno, incluyendo prompt literal, fecha/hora, versión de agente, rama git, preguntas/respuestas, imágenes en base64 si existen, complejidad, tiempo de ejecución, pruebas y resumen del resultado.

### Versionado SemVer

El aplicativo se versiona con SemVer y el valor fuente vive en `package.json`. La automatización se ejecuta en `.github/workflows/semver-on-merge.yml` con estas reglas operativas:

- `major`: se incrementa manualmente mediante `workflow_dispatch` cuando se indique que el aplicativo está completo o cuando se especifique una nueva versión mayor.
- `minor`: se incrementa automáticamente cada vez que un pull request se mergea hacia `main`.
- `patch`: se incrementa automáticamente cada vez que un pull request se mergea hacia `develop`.

### Release automático

Cuando un pull request hacia `main` se cierra mediante merge, el workflow de SemVer incrementa primero la versión `minor` en `package.json`, confirma ese cambio en `main` y después genera un release de GitHub con el tag `v<version>`, por ejemplo `v0.2.0`. Los merges hacia `develop` solo incrementan `patch` y no publican release.

Para cambios `major`, ejecuta manualmente el workflow **SemVer on merge**, selecciona `major` y activa `create_release` solo si también debe publicarse un release desde la rama actual.
