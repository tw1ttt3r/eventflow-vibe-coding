# Bitácora de interacciones

## 2026-07-01 — Diagnóstico inicial de despliegue en Vercel

- **Solicitud del usuario:** Reportó errores de Vercel durante la instalación con `pnpm`, incluyendo múltiples advertencias `ERR_INVALID_THIS` al consultar `registry.npmjs.org`.
- **Acción realizada:** Se intentó estabilizar el entorno de despliegue fijando Node.js y pnpm, y actualizando comandos de instalación/build en `package.json` y `vercel.json`.
- **Archivos afectados:** `package.json`, `vercel.json`, `.npmrc`.
- **Resultado:** Se creó un commit para fijar el runtime, pero el siguiente despliegue mostró que `engines.pnpm` y `engine-strict` chocaban con el `pnpm` preinstalado por Vercel.

## 2026-07-01 — Corrección por conflicto con pnpm preinstalado en Vercel

- **Solicitud del usuario:** Reportó un nuevo error de Vercel: se esperaba `pnpm 10.12.1`, pero Vercel ejecutaba `pnpm 6.35.1`.
- **Acción realizada:** Se eliminó la validación estricta de `pnpm`, se quitó `.npmrc`, y se cambiaron los comandos de Vercel para ejecutar `pnpm@10.12.1` mediante `npx --yes`.
- **Archivos afectados:** `package.json`, `vercel.json`, `.npmrc`.
- **Resultado:** El siguiente despliegue consiguió instalar dependencias usando `pnpm v10.12.1`.

## 2026-07-01 — Aprobación de build script de esbuild

- **Solicitud del usuario:** Reportó que el despliegue ya instalaba dependencias, pero pnpm advertía `Ignored build scripts: esbuild`.
- **Acción realizada:** Se agregó `pnpm.onlyBuiltDependencies` con `esbuild` para permitir que pnpm ejecutara el `postinstall` requerido por Vite/esbuild.
- **Archivos afectados:** `package.json`.
- **Resultado:** El siguiente despliegue ejecutó correctamente `esbuild postinstall`.

## 2026-07-01 — Separación de ngc del build de Vercel

- **Solicitud del usuario:** Reportó que el despliegue avanzaba hasta ejecutar `ngc -p tsconfig.app.json && vite build`, quedándose en el inicio del build.
- **Acción realizada:** Se simplificó el script `build` a `vite build` y se movió la verificación de Angular Compiler a un script separado `typecheck`.
- **Archivos afectados:** `package.json`.
- **Resultado:** Se dejó el build de Vercel enfocado en Vite y se conservó la validación de `ngc` como comando independiente.

## 2026-07-01 — Regla de bitácora para interacciones futuras

- **Solicitud del usuario:** Indicó que cualquier interacción con el agente debe guardarse en una bitácora, incluyendo las conversaciones actuales y futuras.
- **Acción realizada:** Se agregó este archivo `BITACORA.md` con el registro resumido de las interacciones recientes y se creó `AGENTS.md` con la regla obligatoria para agentes futuros.
- **Archivos afectados:** `AGENTS.md`, `BITACORA.md`.
- **Resultado:** Las próximas interacciones deberán registrarse en esta bitácora antes de finalizar el turno.
