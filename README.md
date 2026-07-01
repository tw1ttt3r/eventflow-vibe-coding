# EventFlow Vibe Coding

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-BaaS-F02E65?logo=appwrite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)

EventFlow es una base frontend standalone para administrar y descubrir eventos. El proyecto está preparado para Angular 21, Vite, Tailwind CSS, Appwrite como BaaS y despliegue en Vercel.

## Características técnicas

- Angular standalone con rutas declarativas y componentes sin módulos.
- Atomic design aplicado en `atoms`, `molecules`, `organisms`, `templates` y `pages`.
- Alias TypeScript: `@app/*`, `@core/*`, `@shared/*` y `@env/*`.
- Tailwind CSS configurado para estilos utilitarios y tokens de marca.
- Appwrite centralizado en `src/app/core/config/appwrite.config.ts`.
- Vitest con Testing Library y umbrales de coverage mínimos del 80%.
- `.env.example` documenta las variables requeridas sin exponer secretos.

## Requisitos

- Node.js 22 o superior recomendado.
- pnpm 10 o superior.
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
pnpm test
pnpm build
```

## Estructura principal

```text
src/app/core         Configuración transversal, incluyendo Appwrite
src/app/shared       Sistema de diseño atómico reusable
src/app/pages        Vistas conectadas a templates
src/environments     Lectura tipada de variables Vite
```

## Despliegue en Vercel

1. Configura las variables `VITE_APPWRITE_*` en el proyecto de Vercel.
2. Usa `pnpm install` como instalación.
3. Usa `pnpm build` como build command.
4. Publica el directorio `dist` generado por Vite.

## Reglas operativas del agente

Este repositorio conserva la bitácora de prompts en `.cardex/bitacora.md` y, cuando aplique, registros de sonar en `.quality/sonar.md`.
