# Instrucciones para agentes

## Bitácora de interacciones

- Toda interacción con el usuario debe registrarse en `BITACORA.md` antes de finalizar el turno.
- Cada entrada debe incluir, como mínimo:
  - hora y fecha;
  - prompt literal proporcionado por el usuario;
  - preguntas detectadas en el prompt y su respuesta correspondiente; si no hay preguntas, indicar `No aplica`;
  - imágenes adjuntas convertidas a base64; si no hay imágenes, indicar `No aplica`;
  - versión de agente;
  - rama actual de git;
  - tiempo total de ejecución;
  - complejidad, calculada por cantidad de archivos modificados o generados:
    - baja: menos de 5 archivos;
    - media: más de 5 y menos de 10 archivos;
    - alta: más de 10 archivos;
  - resumen del resultado obtenido, generado por el agente;
  - respuesta o cambio realizado;
  - estado de pruebas/comandos relevantes;
  - archivos principales afectados, cuando aplique.
- Esta instrucción aplica a todo el repositorio.
