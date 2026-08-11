# `/api/chat`: qué protege hoy y qué opciones hay

Fecha: 12 de agosto de 2026. Fichero: `app/api/chat/route.ts`.

El endpoint alimenta la demo de chat de la home (`DemoSection` → `ChatWidget`).
Es público: cualquiera puede llamarlo directamente sin pasar por la web.

## Qué protege ya

| Protección | Valor | Dónde | Notas |
|---|---|---|---|
| Cap de tokens de respuesta | `max_tokens: 400` | `route.ts:99` | Fijo en servidor. El cliente no puede subirlo: no se lee nada del body para esto |
| Mensajes por conversación | máx. 30 | `route.ts:75` | Validado en servidor |
| Longitud de texto por mensaje | máx. 2.000 caracteres | `route.ts:25, 31` | Validado en servidor, tanto para `content` string como para bloques `text` |
| Roles permitidos | solo `user` y `assistant` | `route.ts:79-88` | Impide inyectar un `system` desde el cliente |
| Tipos de bloque permitidos | solo `text` e `image_url` | `route.ts:27-40` | Cualquier otro tipo devuelve 400 |
| Formato de imagen | debe empezar por `data:image/` | `route.ts:34` | No admite URLs remotas: no se puede usar el endpoint para que el servidor descargue nada |
| **Tamaño de imagen** | **máx. 1.500.000 caracteres de data-URI** | `route.ts:22, 35` | **Añadido el 2026-08-12.** Antes era la única entrada sin límite |
| Rate limit | 20 peticiones por IP y minuto | `route.ts:6-18` | En memoria. Ver limitaciones abajo |
| Alcance del prompt | solo clínica y Cero Manual | `route.ts:55` | **Ampliado el 2026-08-12** con una instrucción de rechazo para uso fuera de tema |

## Modelo y coste

Usa `anthropic/claude-haiku-4.5` (`route.ts:98`) a través de OpenRouter.

Haiku 4.5 es el modelo más barato del catálogo de Anthropic: 1 $ por millón de
tokens de entrada y 5 $ por millón de salida, en tarifa de primera parte. Como
comparación, Sonnet 5 son 3 $ / 15 $ y Opus 5 son 5 $ / 25 $.

**No hay ahorro posible cambiando de modelo hacia abajo: ya está en el más
barato.** Lo que sí conviene tener presente es que la factura no se paga a esa
tarifa sino a la de OpenRouter, que aplica su propio margen encima. La cifra
real está en el panel de OpenRouter.

Con el cap de 400 tokens de salida, el techo de coste por respuesta es pequeño;
el gasto que puede dispararse es el de **entrada**, porque una conversación de
30 mensajes con imágenes se reenvía entera en cada turno.

## Limitaciones del rate limit actual

El límite de 20/min existe y funciona, pero conviene saber qué no cubre:

1. **Es en memoria** (`const rateMap = new Map()`). Se borra en cada despliegue y
   en cada reinicio del proceso.
2. **No se comparte entre instancias.** Si Railway escala a dos instancias, el
   límite efectivo pasa a ser 40/min por IP, porque cada proceso lleva su propio
   contador.
3. **Se indexa por `x-forwarded-for`** (`route.ts:59`), que es una cabecera que
   el cliente puede falsificar. Quien quiera saltárselo solo tiene que rotar ese
   valor en cada petición.
4. **No hay límite diario.** 20/min sostenidos son 28.800 peticiones al día
   desde una sola IP.

## Opciones para endurecerlo

No implementada ninguna. Ordenadas por relación esfuerzo/beneficio.

| Opción | Qué resuelve | Esfuerzo | Coste |
|---|---|---|---|
| **Comprobar `Origin` / `Referer`** y rechazar lo que no venga de ceromanual.es | El uso desde scripts y desde otras webs, que es el grueso del abuso automatizado | Minutos | 0 € |
| **Límite diario por IP** además del por minuto, en el mismo `Map` | El goteo sostenido: alguien por debajo de 20/min todo el día | Minutos | 0 € |
| **Usar la IP real de la plataforma** en vez de `x-forwarded-for` a pelo | La falsificación de cabecera (punto 3) | Minutos | 0 € |
| **Rate limit en almacén externo** (Redis/Upstash) | Los puntos 1 y 2: sobrevive a despliegues y se comparte entre instancias | Horas | Plan gratuito suele bastar a este volumen |
| **Cap de gasto en OpenRouter** | El techo de la factura, pase lo que pase con todo lo demás | Minutos | 0 € — es configuración en su panel |
| **Captcha antes del primer mensaje** | Casi todo el abuso automatizado | Horas | 0 € en el plan básico de hCaptcha/Turnstile |

Las tres primeras son las de mejor retorno: se hacen en el mismo fichero, sin
dependencias nuevas, y tapan los agujeros más aprovechables. El cap de gasto en
OpenRouter es el único que garantiza un techo de factura con independencia de
todo lo demás — conviene tenerlo aunque no se toque nada del código.
