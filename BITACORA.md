# Bitácora de interacciones

## 2026-07-01 — Diagnóstico inicial de despliegue en Vercel

- **Prompt literal:** "el despliegue en vercel arrojo lo siguiente" seguido del log de Vercel con advertencias `ERR_INVALID_THIS` al consultar `registry.npmjs.org` para paquetes de Angular, Vite, Vitest, Tailwind y TypeScript.
- **Solicitud del usuario:** Reportó errores de Vercel durante la instalación con `pnpm`, incluyendo múltiples advertencias `ERR_INVALID_THIS` al consultar `registry.npmjs.org`.
- **Acción realizada:** Se intentó estabilizar el entorno de despliegue fijando Node.js y pnpm, y actualizando comandos de instalación/build en `package.json` y `vercel.json`.
- **Archivos afectados:** `package.json`, `vercel.json`, `.npmrc`.
- **Resultado:** Se creó un commit para fijar el runtime, pero el siguiente despliegue mostró que `engines.pnpm` y `engine-strict` chocaban con el `pnpm` preinstalado por Vercel.

## 2026-07-01 — Corrección por conflicto con pnpm preinstalado en Vercel

- **Prompt literal:** "se volvio a intentar despliegue" seguido del log de Vercel donde `corepack prepare pnpm@10.12.1 --activate` terminaba en `ERR_PNPM_UNSUPPORTED_ENGINE`, con `Expected version: 10.12.1` y `Got: 6.35.1`.
- **Solicitud del usuario:** Reportó un nuevo error de Vercel: se esperaba `pnpm 10.12.1`, pero Vercel ejecutaba `pnpm 6.35.1`.
- **Acción realizada:** Se eliminó la validación estricta de `pnpm`, se quitó `.npmrc`, y se cambiaron los comandos de Vercel para ejecutar `pnpm@10.12.1` mediante `npx --yes`.
- **Archivos afectados:** `package.json`, `vercel.json`, `.npmrc`.
- **Resultado:** El siguiente despliegue consiguió instalar dependencias usando `pnpm v10.12.1`.

## 2026-07-01 — Aprobación de build script de esbuild

- **Prompt literal:** "arrojo lo siguiente" seguido del log de Vercel donde `npx --yes pnpm@10.12.1 install --frozen-lockfile=false` instalaba dependencias y mostraba la advertencia `Ignored build scripts: esbuild`.
- **Solicitud del usuario:** Reportó que el despliegue ya instalaba dependencias, pero pnpm advertía `Ignored build scripts: esbuild`.
- **Acción realizada:** Se agregó `pnpm.onlyBuiltDependencies` con `esbuild` para permitir que pnpm ejecutara el `postinstall` requerido por Vite/esbuild.
- **Archivos afectados:** `package.json`.
- **Resultado:** El siguiente despliegue ejecutó correctamente `esbuild postinstall`.

## 2026-07-01 — Separación de ngc del build de Vercel

- **Prompt literal:** "arrojo ahora lo siguiente" seguido del log de Vercel donde `esbuild postinstall` terminaba correctamente y el proceso avanzaba hasta `ngc -p tsconfig.app.json && vite build`.
- **Solicitud del usuario:** Reportó que el despliegue avanzaba hasta ejecutar `ngc -p tsconfig.app.json && vite build`, quedándose en el inicio del build.
- **Acción realizada:** Se simplificó el script `build` a `vite build` y se movió la verificación de Angular Compiler a un script separado `typecheck`.
- **Archivos afectados:** `package.json`.
- **Resultado:** Se dejó el build de Vercel enfocado en Vite y se conservó la validación de `ngc` como comando independiente.

## 2026-07-01 — Regla de bitácora para interacciones futuras

- **Prompt literal:** "regla para el agente, cualquier interacción que se haga debe guardarse en bitacora, interacciones como las que estamos teniendo actualmente deben guardarse, actualiza el registro de estas conversaciones y de las proximas".
- **Solicitud del usuario:** Indicó que cualquier interacción con el agente debe guardarse en una bitácora, incluyendo las conversaciones actuales y futuras.
- **Acción realizada:** Se agregó este archivo `BITACORA.md` con el registro resumido de las interacciones recientes y se creó `AGENTS.md` con la regla obligatoria para agentes futuros.
- **Archivos afectados:** `AGENTS.md`, `BITACORA.md`.
- **Resultado:** Las próximas interacciones deberán registrarse en esta bitácora antes de finalizar el turno.

## 2026-07-01 — Mejora de regla para registrar prompt literal

- **Prompt literal:** "una mejora en la regla de interacción para la bitacora, no olvidar registrar el prompt literal que se esta proporcionando, haz la corrección de las entradas pasadas y de las proximas no olvidar hacerlo".
- **Solicitud del usuario:** Mejorar la regla de bitácora para exigir que se registre el prompt literal en cada entrada, corregir las entradas pasadas y aplicar la regla a futuro.
- **Acción realizada:** Se actualizó `AGENTS.md` para exigir el prompt literal y se corrigió `BITACORA.md` agregando el campo `Prompt literal` a las entradas existentes y a esta interacción.
- **Archivos afectados:** `AGENTS.md`, `BITACORA.md`.
- **Resultado:** La bitácora ahora registra explícitamente el prompt literal proporcionado por el usuario en cada interacción.

## 2026-07-01 — Dependencia faltante para Analog Angular Vite plugin

- **Prompt literal:** "arrojo lo siguiente" seguido del log de Vercel donde `vite build` falla cargando `vite.config.ts` con `Error: Cannot find module '@angular/build/private'` desde `@analogjs/vite-plugin-angular`.
- **Solicitud del usuario:** Reportó el nuevo error de despliegue después de que la instalación con `pnpm@10.12.1`, `esbuild postinstall` y `vite build` ya estaban ejecutándose.
- **Acción realizada:** Se agregó `@angular/build` como devDependency compatible con Angular 21 para satisfacer el módulo privado requerido por `@analogjs/vite-plugin-angular`.
- **Archivos afectados:** `package.json`, `BITACORA.md`.
- **Resultado:** El build de Vercel debería poder resolver `@angular/build/private` al cargar la configuración de Vite.
