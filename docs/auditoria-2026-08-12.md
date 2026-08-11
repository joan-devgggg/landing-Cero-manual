# Auditoría ceromanual.es — 12 de agosto de 2026

Auditoría de solo lectura sobre 54 artículos de blog, 4 páginas de servicio, 1 calculadora,
la home y 2 páginas legales (63 URLs en el sitemap). Ningún archivo del sitio ha sido
modificado. Todo lo que sigue está medido sobre los ficheros, no estimado.

**Los tres hallazgos que no estaban en el encargo:**

1. **47 de los 54 artículos son huérfanos.** El blog no está enlazado por dentro.
2. **El verde de marca falla AA** en los 300 enlaces internos y en todos los botones primarios.
3. **10 artículos emiten el schema `FAQPage` dos veces** en la misma página.

**Dos cosas del encargo salen limpias, para que no pierdas tiempo:** el sitemap está
perfectamente sincronizado con las rutas reales y con el array `posts` (54 = 54 = 54, cero
desajustes), y ningún artículo baja de 800 palabras.

---

## 1. Contenido

### 1.1 Canibalización

Once clusters con solapamiento real. La evidencia no es "tratan temas parecidos": son H2
literalmente iguales, o el mismo esquema de artículo en el mismo orden.

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Dos artículos que son el mismo artículo.** `software-gestion-clinica-estetica` y `software-gestion-clinicas-esteticas` (singular/plural). H1 con 0,94 de similitud. Comparten los tres H2 vertebrales: "Qué tipos de software necesita/usa una clínica estética", "Software de citas vs CRM vs automatización", "Cuándo añadir/tiene sentido añadir automatización con IA" | `app/blog/software-gestion-clinica-estetica/`, `app/blog/software-gestion-clinicas-esteticas/` | **Alto** | Horas | Fusionar en uno. `software-gestion-clinicas-esteticas` es el más largo (1.609 vs 1.568 palabras) y el que tiene tabla + 2 fuentes; quedarme con ese y redirigir 301 el otro |
| **Duplicado de esquema completo.** `como-aumentar-facturacion-clinica-dental` y `aumentar-ingresos-clinica-dental-sin-pacientes` tienen los mismos 5 H2 en el mismo orden: no necesitas más pacientes → recupera inactivos → ticket medio → reduce no-shows → automatiza. H1 a 0,80 | `app/blog/como-aumentar-facturacion-clinica-dental/`, `app/blog/aumentar-ingresos-clinica-dental-sin-pacientes/` | **Alto** | Horas | Pilar: `como-aumentar-facturacion-clinica-dental` (1.578 palabras, tabla, fuente citada). Fusionar el otro y redirigir |
| **Cluster de recordatorios.** `recordatorios-automaticos-citas-clinica` y `recordatorios-citas-whatsapp-clinica` comparten 3 de 5 H2 palabra por palabra: "Cuándo enviar el recordatorio: el timing perfecto", "Confirmación activa vs aviso pasivo", y el bloque WhatsApp vs SMS vs email. `plantillas-…` repite además "Qué debe incluir un buen recordatorio de cita" | `app/blog/recordatorios-automaticos-citas-clinica/`, `app/blog/recordatorios-citas-whatsapp-clinica/`, `app/blog/plantillas-recordatorio-cita-clinica/`, `app/blog/emails-recordatorio-pacientes-clinica/` | **Alto** | Horas | Pilar: `recordatorios-automaticos-citas-clinica`. Absorber `recordatorios-citas-whatsapp-clinica`. `plantillas-…` y `emails-…` sobreviven como hijos, pero quitándoles el H2 de timing y el de confirmación activa y enlazando al pilar |
| **Cluster de fidelización estética.** `experiencia-paciente-clinica-estetica` y `como-mejorar-atencion-cliente-clinica-estetica` abren con el mismo H2 exacto ("Los momentos clave en la experiencia del paciente"). Titles a 0,86. `como-fidelizar-…` se solapa con ambos | `app/blog/experiencia-paciente-clinica-estetica/`, `app/blog/como-mejorar-atencion-cliente-clinica-estetica/`, `app/blog/como-fidelizar-pacientes-clinica-estetica/` | **Alto** | Horas | Pilar: `experiencia-paciente-clinica-estetica`. Fusionar `como-mejorar-atencion-cliente-…` dentro. Dejar `como-fidelizar-…` enfocado solo en post-cita y recurrencia |
| **Cluster de huecos vacíos en estética.** `como-reducir-no-shows-clinica-estetica`, `como-gestionar-ausencias-clinica-estetica` y `como-reducir-cancelaciones-clinica-estetica` desarrollan los tres "confirmación activa" y "lista de espera" como H2 propios | `app/blog/como-reducir-no-shows-clinica-estetica/`, `app/blog/como-gestionar-ausencias-clinica-estetica/`, `app/blog/como-reducir-cancelaciones-clinica-estetica/`, `app/blog/reducir-lista-espera-clinica-estetica/` | **Alto** | Horas | Pilar: `como-reducir-no-shows-clinica-estetica`. "Ausencias" y "no-shows" son la misma búsqueda en español: fusionar `como-gestionar-ausencias-…`. Dejar `cancelaciones` (intención distinta: aviso previo) y `lista-espera` (solución, no problema) como hijos enlazados |
| **IA vs automatización dental.** `inteligencia-artificial-clinicas-dentales` ("Por dónde empezar si nunca has usado IA") y `automatizacion-clinicas-dentales` ("Por dónde empezar si nunca has automatizado nada"). H1 a 0,72, descriptions casi calcadas | `app/blog/inteligencia-artificial-clinicas-dentales/`, `app/blog/automatizacion-clinicas-dentales/` | Medio | Horas | Pilar: `automatizacion-clinicas-dentales` (keyword con más volumen comercial). Reorientar el de IA hacia "qué es y qué no es IA en dental", sin repetir el listado de tareas |
| **IA vs tecnología estética.** `inteligencia-artificial-clinicas-esteticas` y `tecnologia-para-clinicas-esteticas`: descriptions a 0,71, y el segundo dedica un H2 entero a "IA: la tecnología que más impacto tiene ahora mismo" | `app/blog/inteligencia-artificial-clinicas-esteticas/`, `app/blog/tecnologia-para-clinicas-esteticas/` | Medio | Horas | Pilar: `inteligencia-artificial-clinicas-esteticas`. `tecnologia-…` pasa a ser el hub que enlaza a todas las herramientas y cede el bloque de IA |
| **Captación estética a tres bandas.** `captacion-pacientes-clinica-estetica`, `como-conseguir-mas-citas-clinica-estetica` y `como-captar-clientes-clinica-estetica-sin-presupuesto` repiten "recupera/reactiva a los que dejaron de venir", "reduce huecos por no-shows" y "automatiza". Los dos últimos tienen H1 a 0,78 y ambos dicen "sin aumentar el presupuesto" | `app/blog/captacion-pacientes-clinica-estetica/`, `app/blog/como-conseguir-mas-citas-clinica-estetica/`, `app/blog/como-captar-clientes-clinica-estetica-sin-presupuesto/` | **Alto** | Horas | Pilar: `captacion-pacientes-clinica-estetica`. Fusionar `como-conseguir-mas-citas-…` y `como-captar-clientes-…-sin-presupuesto` en uno solo: dicen lo mismo con distinto sustantivo |
| **WhatsApp estética a cinco bandas.** `clinica-estetica-por-whatsapp`, `gestionar-citas-clinica-estetica-whatsapp`, `responder-consultas-clinica-estetica-whatsapp`, `whatsapp-business-clinicas-esteticas` giran todos sobre "el problema de gestionar WhatsApp a mano → cuándo automatizar" | Los 4 + `app/blog/chatbot-whatsapp-para-clinicas-esteticas/` | **Alto** | Días | Pilar: `chatbot-whatsapp-para-clinicas-esteticas` (ya es el artículo más enlazado del blog, 16 enlaces). Fusionar `clinica-estetica-por-whatsapp` dentro. Los otros tres sobreviven con ángulo propio: configuración (Business), velocidad (responder-consultas), agenda (gestionar-citas) |
| **WhatsApp dental a tres bandas.** `whatsapp-para-clinicas-dentales`, `automatizar-whatsapp-clinica-dental` y `agente-whatsapp-clinica-dental` cierran los tres con el mismo H2 "Cuánto cuesta y cuándo se amortiza" | `app/blog/whatsapp-para-clinicas-dentales/`, `app/blog/automatizar-whatsapp-clinica-dental/`, `app/blog/agente-whatsapp-clinica-dental/` | **Alto** | Horas | Pilar: `agente-whatsapp-clinica-dental` (es el término de producto). Fusionar `automatizar-whatsapp-clinica-dental`. Dejar `whatsapp-para-clinicas-dentales` como guía amplia de canal, sin el bloque de precio |
| **Marketing vs captación dental.** `marketing-clinica-dental` ("Los canales de marketing que más funcionan…", "WhatsApp como canal de conversión") y `como-conseguir-pacientes-clinica-dental` ("Los canales que más pacientes traen…", "WhatsApp: el canal que más convierte") | `app/blog/marketing-clinica-dental/`, `app/blog/como-conseguir-pacientes-clinica-dental/` | Medio | Horas | Pilar: `marketing-clinica-dental`. `como-conseguir-pacientes-…` es además el 3.º más corto del blog (810 palabras de cuerpo): candidato claro a fusión |
| **Reseñas: mismo esqueleto, distinta vertical.** `como-conseguir-resenas-google-clinica-estetica` y `resenas-google-clinicas-dentales` tienen los 5 H2 idénticos cambiando "estética" por "dental" | `app/blog/como-conseguir-resenas-google-clinica-estetica/`, `app/blog/resenas-google-clinicas-dentales/` | Bajo | Minutos | **No fusionar**: son keywords distintas y defendibles. Pero diferenciar los ejemplos y los datos de cada uno; ahora mismo se leen como plantilla rellenada |

### 1.2 Huérfanos y enlazado interno

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **47 de 54 artículos no reciben ni un solo enlace desde otro artículo.** En todo el blog hay 49 enlaces `href="/blog/…"` y apuntan a solo 7 destinos: `chatbot-whatsapp-para-clinicas-esteticas` (16), `crm-para-clinicas-esteticas` (8), `como-reducir-no-shows-clinica-dental` (7), `mejor-software-gestion-clinica-estetica` (6), `como-aumentar-facturacion-clinica-dental` (6), `software-gestion-clinica-estetica` (3), `como-conseguir-resenas-google-clinica-estetica` (3) | Los 54 `app/blog/*/page.tsx` | **Alto** | Horas | Este es el hallazgo nº1 de toda la auditoría. Definidos los pilares del punto 1.1, cada hijo debe enlazar a su pilar y el pilar a sus hijos. Con 2-3 enlaces por artículo se pasa de 49 a ~150 enlaces internos sin escribir contenido nuevo |
| **34 artículos tienen cero enlaces salientes a otro artículo.** Su única referencia `/blog/` es su propio `PATH` | 34 ficheros, entre ellos `agenda-clinica-estetica-online`, `agente-ia-recepcion-clinica`, `marketing-digital-clinicas-esteticas`, `meta-ads-para-clinicas-esteticas`, `que-es-un-agente-de-voz-ia-para-clinicas` | **Alto** | Horas | Igual que arriba. Nota: `InternalLink` se usa **300 veces** en el blog — el componente está, la costumbre de enlazar entre artículos no |
| **No existe ningún componente de "artículos relacionados".** Grep de `Related`, `Sigue leyendo`, `Te puede interesar`, `Artículos relacionados` en `app/` y `components/`: cero resultados | — | **Alto** | Horas | Un `RelatedPosts` que reciba 3 slugs y se coloque entre el `</article>` y el `<ServiceFAQ>` resuelve el 80 % del problema anterior con un solo componente reutilizado 54 veces |
| **14 artículos no enlazan a ninguna página de servicio** (además, son exactamente los mismos 14 cuyo CTA final va a otro artículo — ver 4.1) | `aumentar-ingresos-clinica-dental-sin-pacientes`, `aumentar-ticket-medio-clinica-dental`, `chatbot-whatsapp-clinicas-rgpd`, `clinica-estetica-por-whatsapp`, `coste-real-no-shows-clinica-dental`, `crm-clinicas-esteticas-pequenas`, `cuanto-cuesta-chatbot-whatsapp-clinica`, `lista-espera-clinica-dental`, `mejor-crm-clinicas-dentales`, `mejor-software-gestion-clinica-estetica`, `programa-gestion-clinica-estetica`, `resenas-google-clinicas-dentales`, `responder-consultas-clinica-estetica-whatsapp`, `software-gestion-citas-clinica-estetica` | **Alto** | Minutos | Añadir un `InternalLink` a servicio en el último tercio del cuerpo, como ya hace `plantillas-recordatorio-cita-clinica` (que sí está arreglado: enlaza y cierra en `/recordatorios-automaticos-citas`) |

### 1.3 Artículos flojos

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Ninguno baja de 800 palabras** — el criterio del encargo no encuentra nada. El suelo real es 794 palabras de cuerpo (1.090 contando FAQ) | `agente-ia-recepcion-clinica` (794), `como-reducir-no-shows-clinica-estetica` (798), `como-conseguir-pacientes-clinica-dental` (810), `programa-gestion-clinica-estetica` (829) | Bajo | — | No tocar por longitud. Los cuatro caen igualmente en clusters canibalizados, así que se resuelven al fusionar |
| **44 de 54 artículos no tienen ninguna tabla.** `BlogTable` solo se usa en 10 | 44 ficheros | Medio | Días | No meter tablas por meterlas. Sí en los que comparan cosas y hoy lo hacen en prosa: `chatbot-whatsapp-vs-recepcionista-clinica`, `mejor-crm-clinicas-dentales`, `cuanto-cuesta-chatbot-whatsapp-clinica`, `software-gestion-citas-clinica-estetica`, `recordatorios-automaticos-citas-clinica` (WhatsApp vs SMS vs email en párrafo) |
| **FAQ: sin hallazgos.** Los 54 artículos tienen exactamente 4 preguntas y ninguna respuesta baja de 38 palabras (mínimo en `automatizar-whatsapp-clinica-dental`, con 38/44/46/38) | — | — | — | Nada que hacer. Es la parte más sólida del contenido |

### 1.4 Datos sin fuente

Solo **9 de 54 artículos citan alguna fuente**, y en todo el blog hay **2 fuentes distintas**,
ambas en texto plano y sin enlace: "MIT Lead Response Management Study" y "SEME (Sociedad
Española de Medicina Estética)".

| Cifra | Menciones | En cuántas páginas | Fuente citada |
|---|---|---|---|
| 40 % de consultas llegan fuera de horario | 48 | 32 (incluidas 2 páginas de servicio) | **ninguna** |
| 80 % de leads perdidos si no respondes en 5 min | 40 | — | "MIT Lead Response Management Study", sin enlace, solo en 9 artículos |
| 12-19 % de no-shows | 33 | — | **ninguna** |
| 3.000 € de LTV por paciente | 28 | — | "SEME" en algunos, ninguna en la mayoría |
| 95-98 % de apertura en WhatsApp | 26 | — | **ninguna** |
| 40 % de reducción de no-shows | 17 | 9 | **ninguna** |
| 7.500 €/mes de pérdida | 16 | — | **ninguna** (cifra derivada de las dos anteriores) |
| 70 % de decisiones tomadas por reseñas | 3 | — | **ninguna** |
| 20-35 % de pacientes que dejan reseña | 1 | — | **ninguna** |
| 600.000 € en "ingresos dormidos" (200 pacientes × 3.000 €) | 1 | `como-captar-clientes-clinica-estetica-sin-presupuesto` | **ninguna** |

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Hay dos "40 %" distintos y conviene no confundirlos**: el 40 % de consultas fuera de horario (48 menciones en 32 páginas) y el 40 % de reducción de no-shows (17 menciones en 9 artículos) | El segundo vive en `agenda-clinica-estetica-online`, `automatizacion-clinicas-dentales`, `automatizar-whatsapp-clinica-dental`, `como-reducir-no-shows-clinica-estetica`, `coste-real-no-shows-clinica-dental`, `emails-recordatorio-pacientes-clinica`, `recordatorios-automaticos-citas-clinica`, `recordatorios-citas-whatsapp-clinica`, `reducir-lista-espera-clinica-estetica` | **Alto** | Horas | Tratarlos por separado. El de reducción es el más comprometido: es una promesa de resultado |
| **El 40 % de reducción sigue vivo en una meta description**, es decir, se muestra en el SERP: "Los recordatorios por WhatsApp reducen los no-shows un 40 %" | `app/blog/recordatorios-citas-whatsapp-clinica/page.tsx` (constante `DESCRIPTION`) | **Alto** | Minutos | Reescribir esa description. Es lo más rápido y visible de toda la auditoría |
| **La atribución al MIT probablemente no dice lo que decimos que dice.** El estudio de referencia (Lead Response Management / InsideSales) habla de caída en la *probabilidad de cualificar* un lead pasados los 5-30 minutos, no de un "80 % de probabilidades de perderlo para siempre" | Los 9 artículos con `<BlogSource>`, más las 31 páginas que usan la cifra sin citar nada | **Alto** | Días | Verificar la fuente original, reformular la afirmación a lo que el estudio sí sostiene y enlazarla. Si no se sostiene, bajar la cifra o quitarla de las 40 menciones |
| **`BlogSource` no enlaza.** El componente renderiza `Fuente: {children}` como texto gris; no hay ni un `<a>` en ninguna de las 9 citas | `components/BlogSource.tsx` | Medio | Minutos | Añadir un `href` opcional. Una fuente sin enlace no sirve ni al lector ni a E-E-A-T |
| **Las 5 cifras que aguantan todo el argumentario comercial (40 %, 80 %, 12-19 %, 3.000 €, 95-98 %) están sin respaldo en 26-48 páginas cada una**, incluidas las páginas de servicio | Prácticamente todo `app/blog/` + `app/agente-whatsapp-clinicas-esteticas/`, `app/agente-voz-ia-clinicas/` | **Alto** | Días | Fijar las 5 cifras con fuente y fecha en un único fichero (`lib/stats.ts`), importarlas desde ahí y citarlas siempre igual. Hoy cada artículo las reescribe a mano y ya hay variantes ("casi un 40 %", "alrededor del 40 %", "hasta un 40 %", "El 40 %") |

---

## 2. SEO técnico

### 2.1 Titles y descriptions

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **50 de 54 titles superan los 60 caracteres.** El sufijo " \| Cero Manual" cuesta 14 de por sí. Los peores: `emails-recordatorio-pacientes-clinica` **96**, `como-captar-clientes-clinica-estetica-sin-presupuesto` **91**, `whatsapp-para-clinicas-dentales` **90**, `plantillas-recordatorio-cita-clinica` **89**, `captacion-pacientes-clinica-estetica` **87**, `como-gestionar-ausencias-clinica-estetica` **85**, `resenas-google-clinicas-dentales` **85**, `responder-consultas-clinica-estetica-whatsapp` **85** | Constante `TITLE` de cada `app/blog/*/page.tsx` | **Alto** | Horas | Dos decisiones. (a) Quitar el sufijo de marca de los artículos: recupera 14 caracteres de golpe en los 54 y deja 36 de ellos por debajo de 60 sin tocar una palabra. (b) Recortar a mano los ~14 que seguirían pasándose. El de 96 caracteres pierde "por qué WhatsApp funciona mejor", que es justo su ángulo diferencial |
| **25 descriptions fuera del rango 140-160.** 24 cortas y 1 larga. Solo 29 en rango. Las más cortas: `agente-ia-recepcion-clinica` **126**, `inteligencia-artificial-clinicas-dentales` **127**, `como-aumentar-facturacion-clinica-dental` **128**. La única larga: `mejor-chatbot-whatsapp-clinica-estetica` **161** | Constante `DESCRIPTION` de 25 `app/blog/*/page.tsx` | Medio | Horas | Las 24 cortas desperdician entre 14 y 34 caracteres de SERP. Alargarlas con el beneficio concreto. La de 161 se arregla quitando "y qué preguntar antes de contratar" |
| **Titles casi idénticos entre páginas.** `inteligencia-artificial-clinicas-dentales` / `-esteticas` **0,93**; `como-reducir-no-shows-clinica-dental` / `-estetica` **0,87**; `como-mejorar-atencion-cliente-…` / `experiencia-paciente-…` **0,86**; `software-gestion-citas-…` / `software-gestion-clinica-estetica` **0,83**; `mejor-software-gestion-…` / `software-gestion-citas-…` **0,82**; `software-gestion-clinica-estetica` / `software-gestion-clinicas-esteticas` **0,81** | Ver 1.1 | **Alto** | Horas | Se resuelven con las fusiones del punto 1.1. Los que sobrevivan (dental vs estética) necesitan un diferenciador real en el title, no solo el sustantivo de vertical |
| **Descriptions casi idénticas.** IA dental / IA estética **0,84**; `mejor-software-…` / `software-gestion-clinica-estetica` **0,82**; `software-gestion-citas-…` / `software-gestion-clinica-estetica` **0,82** — las tres empiezan por "¿Buscas…?" y terminan por "…automatizar con IA" | 6 ficheros | Medio | Minutos | Reescribir para que cada una prometa algo distinto. Ahora mismo un usuario en el SERP no puede elegir entre ellas |
| **5 desajustes entre el H1 del artículo y el título de su tarjeta en `/blog`** | `responder-consultas-clinica-estetica-whatsapp` ("…más rápido" vs "…más rápido (y no perder ni un lead)"), `plantillas-recordatorio-cita-clinica` ("listos para usar" vs "listos para copiar"), `lista-espera-clinica-dental`, `tecnologia-para-clinicas-esteticas`, `software-gestion-clinica-estetica` ("guía completa" vs "qué necesitas y por dónde empezar") | Bajo | Minutos | El array `posts` de `app/blog/page.tsx` duplica a mano un dato que ya vive en cada página. A medio plazo, exportar `HEADLINE` desde cada artículo y que el índice lo importe |

### 2.2 Sitemap, rutas e índice

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Sin hallazgos.** 54 rutas reales en `app/blog/*/` = 54 URLs de blog en el sitemap = 54 slugs en el array `posts`. Cero faltantes, cero sobrantes. Las 8 páginas top-level también cuadran. 63 URLs en total | `app/sitemap.ts`, `app/blog/page.tsx`, `app/blog/*/` | — | — | Nada. Está bien |
| **Las 63 entradas usan `lastModified: new Date()`**, así que cada despliegue declara el sitio entero como modificado hoy | `app/sitemap.ts` | Bajo | Horas | Cada artículo ya tiene su `modifiedTime` en `openGraph` y su `dateModified` en el JSON-LD. Leer esa fecha en vez de `new Date()`. La señal de frescura pierde valor cuando todo cambia siempre |
| **El sitemap y el índice se mantienen a mano en tres sitios.** Cada artículo nuevo obliga a tocar 3 ficheros | `app/sitemap.ts` (386 líneas), `app/blog/page.tsx` (461 líneas de array), la propia carpeta de ruta | Medio | Horas | Una fuente única de posts (`lib/posts.ts`) de la que beban sitemap e índice. Hoy funciona de milagro: está sincronizado, pero por disciplina, no por diseño |

### 2.3 Datos estructurados

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **10 artículos emiten `FAQPage` dos veces.** Declaran su propio `faqJsonLd` **y** renderizan `<ServiceFAQ>`, que ya emite el suyo en `components/ServiceFAQ.tsx:105-115`. Resultado: dos nodos `FAQPage` idénticos en el mismo HTML | `chatbot-whatsapp-para-clinicas-esteticas`, `como-aumentar-facturacion-clinica-dental`, `como-reducir-no-shows-clinica-dental`, `crm-para-clinicas-esteticas`, `marketing-digital-clinicas-esteticas`, `meta-ads-para-clinicas-esteticas`, `mejor-software-gestion-clinica-estetica`, `plantillas-recordatorio-cita-clinica`, `software-gestion-clinica-estetica`, `software-gestion-clinicas-esteticas` | Medio | Minutos | Borrar el `faqJsonLd` local de esos 10. `ServiceFAQ` ya lo cubre. Es la corrección con mejor relación impacto/esfuerzo de todo el bloque técnico |
| **Cero `BreadcrumbList` en las 63 páginas**, teniendo una jerarquía `/` → `/blog` → artículo perfectamente definida (y el enlace "← Volver al blog" ya presente en los 54) | Todo `app/` | Medio | Horas | Añadir `BreadcrumbList` a los 54 artículos. Con un helper en `lib/schema.ts` (donde ya viven `localBusinessProvider` y `spainAreaServed`) son 3 líneas por fichero |
| **Los 54 `articleJsonLd` usan el logo como imagen del artículo**: `image: "https://ceromanual.es/logo.png"`, un PNG de 356 KB | Los 54 `app/blog/*/page.tsx` | Medio | Días | Google espera una imagen de artículo ancha (≥1200 px) y representativa. Existe ya `app/opengraph-image.tsx` generando 1200×630 con `next/og`: generar una por artículo y apuntar el JSON-LD ahí |
| **Cobertura de schema, para el registro**: los 54 artículos tienen `Article`; las 4 páginas de servicio tienen `Service` con provider y `areaServed`; `/calculadora-no-shows` tiene su JSON-LD; el layout emite `ProfessionalService`. Sin schema: `/privacidad`, `/aviso-legal` (correcto) y `/` (hereda del layout) | — | Bajo | — | Nada urgente |
| **H1: sin hallazgos.** Los 54 artículos tienen exactamente uno. Las 4 páginas de servicio y la home lo tienen vía `motion.h1` en `ServiceHero.tsx:58` y `HeroSection.tsx:49` — no aparece en un grep de `<h1`, pero está en el HTML | — | — | — | Nada |

### 2.4 Otros

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **La home es `"use client"` entera por un `useEffect` de 5 líneas** que hace scroll a un hash. Eso arrastra `HeroSection`, `ProblemSection`, `ServicesSection`, `TimelineSection`, `DemoSection`, `ResultsSection`, `CTASection` y `FAQSection` al bundle de cliente, y le impide exportar `metadata` propia (hereda la del layout) | `app/page.tsx:1-23` | Medio | Minutos | `globals.css:25-27` ya define `scroll-behavior: smooth` en `html`. El navegador hace ese scroll solo. Quitar el `useEffect` y el `"use client"`, y aprovechar para dar a la home su `metadata` y su canonical explícitos |

---

## 3. Diseño y frontend

### 3.1 Tokens

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **El sistema de tokens está muerto.** `globals.css:3-19` define `--color-sage`, `--color-cream`, `--color-charcoal`, etc. En `app/` + `components/` hay **1.379 literales hexadecimales** frente a **1 solo uso** de una utilidad de token: `text-charcoal` en `Navbar.tsx:64`, y encima duplicado con un `style={{ color: "#1A1A1A" }}` en la línea siguiente | Todo `app/` y `components/` | Medio | Días | No es un problema visual hoy: los hex coinciden con los tokens. Es un problema el día que quieras cambiar el verde y tengas que tocar 345 sitios. Migrar por tandas, empezando por `components/` (el blog puede esperar) |
| **Reparto de los 1.379 hex**: `#7D9B76` 345, `#1A1A1A` 272, `#8A8580` 156, `#3A3A3A` 125, `#FFFFFF` 116, `#F5F2EE` 85, `#E0DBD4` 76, `#6A8564` 64, `#F0F4EF` 55 | — | — | — | — |
| **25 colores fuera de la paleta.** Los que se renderizan de verdad: `#5A5450` (16 usos, en `HeroSection`, `ServiceFAQ` vía `ServiceHero`, `ProblemSection`, `ResultsSection`, `FAQSection`, `calculadora-no-shows`), `#C8C2BA`, `#C0BAB3`, `#B5B0AA`, `#FAFAF8`. El resto (`#BEFF00`, `#0A0A0A`, `#111111`, `#1E1E1E`, `#2A2A2A`, `#444444`, `#555555`, `#666666`, `#888888`, `#C0C0C0`, `#141414`, `#F5F5F5`) vive solo en `PricingSection` y `UrgencySection`, que no se renderizan en ninguna página | Ver arriba | Bajo | Minutos | `#5A5450` es un gris de texto legítimo y bien contrastado (6,68:1): merece ser token, no literal. Los colores de `IntegrationsTicker` (`#00B67A`, `#3B82F6`, `#E87722`…) son colores de marca de terceros y están bien como literales |

### 3.2 Contraste

Ratios calculados sobre los pares que aparecen realmente en el código:

| Par | Ratio | AA (4,5:1) | Dónde se ve |
|---|---|---|---|
| `#9BB594` sobre `#F5F2EE` | **2,00** | ❌ Falla | sage-light sobre crema |
| `#7D9B76` sobre `#F5F2EE` | **2,76** | ❌ Falla | **Los 300 `InternalLink` del blog**, el "Leer artículo →" de las 54 tarjetas, todos los kickers en mayúsculas ("Blog", "Gestión de clínicas", "FAQ"), la cursiva verde de los H1 |
| `#FFFFFF` sobre `#7D9B76` | **3,08** | ❌ Falla (texto normal) | **Todos los botones primarios del sitio**: "Reservar auditoría gratuita", los CTA de los 54 artículos, el botón del navbar |
| `#D96464` sobre `#F5F2EE` | 3,16 | ❌ Falla (texto normal) | coral |
| `#8A8580` sobre `#F5F2EE` | **3,27** | ❌ Falla | Fecha y tiempo de lectura de los 54 artículos, "← Volver al blog", enlaces del navbar, labels de las métricas del hero |
| `#8A8580` sobre `#FFFFFF` | 3,65 | ❌ Falla | Fecha en las tarjetas del índice del blog |
| `#5A5450` sobre `#F5F2EE` | 6,68 | ✅ | Subheadline del hero, respuestas de FAQ |
| `#3A3A3A` sobre `#F5F2EE` | 10,19 | ✅ | Cuerpo de los artículos |
| `#1A1A1A` sobre `#F5F2EE` | 15,60 | ✅ | Titulares |

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **El verde de marca sobre crema da 2,76:1 y es el color de todos los enlaces del blog.** Un enlace que no llega a AA no es un detalle de accesibilidad: es un enlace que la gente no ve | `components/BlogSource.tsx` no, pero sí los 54 `app/blog/*/page.tsx` (función local `InternalLink`), `app/blog/page.tsx:535`, todos los kickers | **Alto** | Horas | No cambiaría el verde de marca. Introduciría un `--color-sage-text` más oscuro (a partir de `#5A7A52` ya se pasa de 4,5:1 sobre crema) reservado para texto y enlaces, dejando `#7D9B76` para fondos, bordes y elementos decorativos. El `InternalLink` ya lleva `underline`, así que el color no es el único indicador — pero sigue sin ser legible |
| **Blanco sobre verde en los botones da 3,08:1.** Afecta al CTA principal de todas las páginas | `components/ServiceHero.tsx:94-113`, `components/ServiceCTA.tsx`, `components/Navbar.tsx:92`, el bloque CTA de los 54 artículos | **Alto** | Horas | El mismo `sage-text` oscuro como fondo de botón resuelve los dos problemas a la vez. `#6A8564` (sage-dark, ya en la paleta y ya usado como hover) sube a 3,9:1 — mejor, pero aún no basta |
| **`#8A8580` a 3,27:1 en metadatos y navegación.** En el navbar es texto de 14 px | `components/Navbar.tsx:78`, `components/ServiceHero.tsx:118,157`, los 54 artículos (línea de fecha) | Medio | Horas | Oscurecer el gris muted a ~`#6E6963` (≈4,6:1 sobre crema). Es un cambio de un token en un sitio si antes se hace la migración de 3.1 |

### 3.3 Móvil

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Las tablas fuerzan `minWidth: 640px` dentro de un `overflow-x-auto` sin ningún indicador de scroll.** En un móvil de 390 px se ve poco más de la mitad de la tabla y nada sugiere que se pueda deslizar. La tabla de 4 columnas de `plantillas-recordatorio-cita-clinica` es la peor | `components/BlogTable.tsx:9-13`, 10 artículos | Medio | Horas | Añadir una sombra de desvanecimiento en el borde derecho mientras haya scroll pendiente. Y en tablas de 4 columnas, plantear un apilado en tarjetas por debajo de `md` |
| **El botón de WhatsApp y el banner de cookies se solapan en móvil**, ambos con `z-50`: `WhatsAppButton` en `fixed bottom-6 right-6`, `CookieBanner` en `fixed bottom-4 left-4 right-4` (ancho completo hasta `md`) | `components/WhatsAppButton.tsx:10`, `components/CookieBanner.tsx:33` | Medio | Minutos | Subir el banner a `z-60` y desplazar el botón de WhatsApp mientras el banner esté visible. Ahora mismo el primer contacto de un usuario móvil con el sitio es un choque de dos elementos flotantes |
| **Los artículos abren con `py-28` (112 px) antes del H1**, y el bloque CTA queda al final de 1.000-1.900 palabras sin ninguna llamada intermedia | `app/blog/*/page.tsx` (`<main className="px-6 py-28">` en los 54) | Medio | Horas | Bajar a `py-16 md:py-28`. Y meter un CTA intermedio tras el segundo H2: hoy, en móvil, el único CTA está a varias pantallas de scroll del pliegue |
| **`text-[120px]` en móvil** en la cifra grande de resultados | `components/ResultsSection.tsx:36,90` | Bajo | Minutos | Escalar con `text-[64px] md:text-[180px]`. En 390 px, 120 px de tipografía ocupa casi un tercio del alto de pantalla |
| **Texto de 14 px en zonas de lectura**: respuestas de FAQ (`text-sm` en `ServiceFAQ.tsx`), excerpts de las 54 tarjetas del índice, celdas de tabla | `components/ServiceFAQ.tsx`, `app/blog/page.tsx:528`, `components/BlogTable.tsx` | Bajo | Minutos | El cuerpo del artículo va bien a `text-base` (16 px). Subir a `text-base` al menos las respuestas de FAQ, que son contenido, no metadato |

### 3.4 Imágenes

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Los logos de integraciones se cargan desde un CDN externo** (`cdn.simpleicons.org`), con `<img>` crudo y sin `loading="lazy"`. El marquee duplica la lista, así que son ~26 peticiones a un tercero. Y se disparan **antes** de que el usuario acepte cookies | `components/IntegrationsTicker.tsx:59-66` | Medio | Horas | Descargar los SVG a `public/` y servirlos locales. Elimina 26 peticiones a un tercero, la dependencia de un CDN ajeno y el problema de RGPD de contactar con un dominio externo sin consentimiento. Sí tienen `width`/`height`, así que al menos no hay CLS |
| **`public/logo.png` pesa 356 KB sin optimizar** y se usa como logo de la organización y como imagen de los 54 artículos en el JSON-LD | `public/logo.png`, `app/layout.tsx:70-71`, `lib/schema.ts:4`, los 54 `articleJsonLd` | Medio | Minutos | Recomprimir. Un logo no debería pasar de 30-40 KB |
| **Los SVG del starter de Next siguen en `public/`**: `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` | `public/` | Bajo | Minutos | Borrar. Son públicos y no los usa nadie |

### 3.5 Componentes duplicados y muertos

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Cada uno de los 54 artículos redefine en local sus propios `P`, `H2` e `InternalLink`** (y `Template` en plantillas). Son 54 copias de los mismos 3-4 componentes, con los mismos estilos inline repetidos | Los 54 `app/blog/*/page.tsx` (líneas ~89-137 de cada uno) | Medio | Horas | Extraerlos a `components/blog/` como ya se hizo con `BlogTable` y `BlogSource`. Hoy, arreglar el contraste de los enlaces (3.2) obliga a editar 54 ficheros; con esto sería uno |
| **7 componentes terminados que no se importan en ningún sitio**: `ChatWidget` (745 líneas), `PricingSection`, `UrgencySection`, `TestimonialsSection`, `ServiceSocialProof`, `VoiceAgentCard`, `CustomCursor` | `components/` | Bajo | Minutos | Dos de ellos merecen resucitar, no borrarse: **`ServiceSocialProof`** (ver 4.2) y **`TestimonialsSection`**. El resto, borrar. Ojo: `ChatWidget` está muerto pero su `app/api/chat/route.ts` (117 líneas, con SDK de Anthropic) sigue desplegado y accesible — eso es un endpoint vivo sin interfaz que lo use |

---

## 4. Conversión

### 4.1 CTAs que no encajan con la intención

Reparto de los 54 CTAs finales: `/agente-whatsapp-clinicas-esteticas` **23**,
`/recordatorios-automaticos-citas` **10**, `/reactivacion-pacientes-inactivos` **5**,
`/agente-voz-ia-clinicas` **2**, y **14 que apuntan a otro artículo del blog**.
`/calculadora-no-shows` recibe **0**.

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **7 artículos de vertical dental cierran en una página cuyo H1 dice literalmente "para clínicas estéticas".** Un dentista lee 1.300 palabras sobre su clínica dental, hace clic y aterriza en `/agente-whatsapp-clinicas-esteticas`: "Agente de WhatsApp con IA para clínicas estéticas que llena tu agenda" | `whatsapp-para-clinicas-dentales`, `automatizar-whatsapp-clinica-dental`, `agente-whatsapp-clinica-dental`, `marketing-clinica-dental`, `como-conseguir-pacientes-clinica-dental`, `inteligencia-artificial-clinicas-dentales`, `automatizacion-clinicas-dentales` | **Alto** | Minutos | A corto plazo, redirigir esos 7 CTAs a `/recordatorios-automaticos-citas` o `/reactivacion-pacientes-inactivos`, que son neutros de vertical. A medio plazo, la pregunta de verdad: hay 22 artículos dentales y ninguna página de servicio dental |
| **Mismo cruce de vertical en dos CTAs a artículo**: `mejor-crm-clinicas-dentales` → `/blog/crm-para-clinicas-esteticas`, y `resenas-google-clinicas-dentales` → `/blog/como-conseguir-resenas-google-clinica-estetica` | 2 ficheros | Medio | Minutos | Un lector dental no quiere el equivalente estético del mismo artículo. Apuntar a servicio |
| **`coste-real-no-shows-clinica-dental` no enlaza a la calculadora.** El artículo se titula "cómo calcularlo con tus propios números", tiene un H2 entero llamado "Cómo calcular tu pérdida real por no-shows"… y cierra hacia otro artículo. `/calculadora-no-shows` existe, hace exactamente eso, y recibe **0 CTAs finales** en 54 artículos y solo 4 enlaces en cuerpo (`como-gestionar-ausencias-…`, `como-reducir-cancelaciones-…`, `como-reducir-no-shows-clinica-dental`, `recordatorios-automaticos-citas-clinica`) | `app/blog/coste-real-no-shows-clinica-dental/page.tsx`, `app/calculadora-no-shows/page.tsx` | **Alto** | Minutos | El encaje más limpio de toda la auditoría: intención de cálculo → herramienta de cálculo. Cambiar ese CTA, y añadir la calculadora como enlace en cuerpo en los ~12 artículos que hablan de coste de no-shows |
| **14 artículos terminan en otro artículo, no en una página de servicio.** Son exactamente los mismos 14 que no enlazan a servicio en ningún punto (1.2). El caso más caro es `cuanto-cuesta-chatbot-whatsapp-clinica`: intención de precio, lo más BOFU del blog, y el CTA manda a otro post. Igual en `mejor-crm-clinicas-dentales`, `mejor-software-gestion-clinica-estetica`, `software-gestion-citas-clinica-estetica`, `programa-gestion-clinica-estetica` — todos con "mejor" o "cuánto cuesta" en el título, es decir, gente comparando antes de comprar | Los 14 listados en 1.2 | **Alto** | Minutos | Un CTA a artículo es legítimo a mitad de embudo, pero no en artículos de precio y comparativa. Reemplazar el CTA final por servicio en los 5 de intención comercial y dejar el enlace al artículo como secundario dentro del cuerpo |
| **`/agente-voz-ia-clinicas` recibe 2 CTAs de 54**, teniendo página de servicio completa | 52 artículos | Medio | Horas | Hay artículos que piden voz y hoy no la mencionan: `agente-ia-recepcion-clinica` (sí lo hace), pero también `como-conseguir-pacientes-clinica-dental`, `chatbot-whatsapp-vs-recepcionista-clinica`, `automatizacion-clinicas-dentales`. El servicio existe y no lo está viendo casi nadie |
| **`/agente-whatsapp-clinicas-esteticas` acumula 23 de 54 CTAs** (43 %), con 74 enlaces en cuerpo | — | Bajo | — | No es un problema en sí, pero explica por qué los otros tres servicios casi no reciben tráfico interno |

### 4.2 Páginas de servicio: prueba social y FAQ

| Hallazgo | Archivos afectados | Impacto | Esfuerzo | Qué haría |
|---|---|---|---|---|
| **Ninguna de las 5 páginas de servicio tiene prueba social.** Y `components/ServiceSocialProof.tsx` existe, está terminado, contempla incluso placeholders de testimonio mientras llegan los reales (`ServiceTestimonialPlaceholder`) y una métrica de respaldo — y no se importa en ningún fichero | `components/ServiceSocialProof.tsx`, `app/agente-whatsapp-clinicas-esteticas/`, `app/agente-voz-ia-clinicas/`, `app/recordatorios-automaticos-citas/`, `app/reactivacion-pacientes-inactivos/`, `app/calculadora-no-shows/` | **Alto** | Minutos | Montarlo en las 4 páginas de servicio, entre `ServiceBenefits` y `ServiceFAQ`. El componente ya está escrito con la hipótesis de que aún no hay testimonios reales: no hay excusa para no usarlo. Es una página de venta pidiendo una auditoría sin un solo indicio de que alguien más lo haya hecho |
| **FAQ en páginas de servicio: casi sin hallazgos.** Las 4 páginas de servicio tienen `ServiceFAQ` con 5 preguntas y su `FAQPage` correcto | — | — | — | Nada |
| **`/calculadora-no-shows` no tiene ni FAQ ni prueba social ni CTA de servicio visible.** Es la única página del sitio sin `ServiceFAQ`, y recibe tráfico de intención altísima (alguien calculando cuánto pierde) | `app/calculadora-no-shows/page.tsx` | **Alto** | Horas | Añadir FAQ (dudas sobre el propio cálculo: qué cuenta como no-show, de dónde sale el 12-19 %) y un CTA a `/recordatorios-automaticos-citas` inmediatamente después del resultado. Alguien que acaba de ver "pierdes 4.200 €/mes" está en el mejor momento de conversión de todo el sitio |

---

## 5. Lista priorizada — por dónde empezar mañana

Ordenada por impacto dividido entre esfuerzo. Los cinco primeros son media mañana en total.

| # | Qué | Impacto | Esfuerzo | Por qué aquí |
|---|---|---|---|---|
| **1** | Reescribir la meta description de `recordatorios-citas-whatsapp-clinica`: quita el "40 %" sin fuente que hoy se muestra en el SERP | Alto | 2 min | Una afirmación sin respaldo, visible en Google, en un fichero |
| **2** | Borrar el `faqJsonLd` local de los 10 artículos que lo duplican con `ServiceFAQ` | Medio | 20 min | Schema duplicado; se arregla borrando líneas |
| **3** | Cambiar el CTA de `coste-real-no-shows-clinica-dental` a `/calculadora-no-shows` | Alto | 5 min | Encaje perfecto de intención; la calculadora hoy no recibe ni un CTA |
| **4** | Redirigir los 7 CTAs de artículos dentales que hoy apuntan a la landing "para clínicas estéticas" | Alto | 30 min | Fricción de vertical evidente en el momento del clic |
| **5** | Montar `ServiceSocialProof` en las 4 páginas de servicio | Alto | 30 min | El componente ya está escrito y no lo usa nadie |
| **6** | CTA a servicio en los 5 artículos de intención comercial que hoy terminan en otro post (`cuanto-cuesta-…`, `mejor-crm-…`, `mejor-software-…`, `software-gestion-citas-…`, `programa-gestion-…`) | Alto | 30 min | Es el tráfico más cerca de comprar y se le manda a leer más |
| **7** | Quitar el sufijo " \| Cero Manual" de los 54 titles de artículo | Alto | 1 h | Deja 36 de los 50 titles largos por debajo de 60 sin reescribir nada |
| **8** | Enlace a servicio en cuerpo en los 14 artículos que no tienen ninguno | Alto | 1 h | Catorce artículos sin salida comercial |
| **9** | Arreglar el solape de `WhatsAppButton` y `CookieBanner` en móvil | Medio | 15 min | Es lo primero que ve un usuario móvil |
| **10** | Quitar el `useEffect` y el `"use client"` de la home; darle `metadata` propia | Medio | 15 min | El CSS ya hace ese scroll; la home entera está en cliente por 5 líneas |
| **11** | Componente `RelatedPosts` + 3 enlaces por artículo | **Alto** | 1-2 días | **El hallazgo nº1**: 47 huérfanos. Alto esfuerzo, pero nada de lo demás rinde mientras el blog no esté enlazado por dentro |
| **12** | Introducir `sage-text` oscuro para enlaces y botones (AA) | Alto | 4 h | Afecta a los 300 enlaces del blog y a todos los CTA. Sube a 1 h si antes se extraen `P`/`H2`/`InternalLink` a `components/blog/` |
| **13** | Fusionar `software-gestion-clinica-estetica` + `software-gestion-clinicas-esteticas` | Alto | 4 h | Dos artículos que son el mismo artículo (H1 a 0,94) |
| **14** | Fusionar `como-aumentar-facturacion-…` + `aumentar-ingresos-…-sin-pacientes` | Alto | 4 h | Mismo esquema, mismos 5 H2, mismo orden |
| **15** | Fusionar `recordatorios-automaticos-…` + `recordatorios-citas-whatsapp-…` | Alto | 4 h | 3 de 5 H2 literales |
| **16** | Fusionar `experiencia-paciente-…` + `como-mejorar-atencion-cliente-…` | Alto | 4 h | H2 de apertura idéntico, titles a 0,86 |
| **17** | Fusionar `como-gestionar-ausencias-…` dentro de `como-reducir-no-shows-clinica-estetica` | Alto | 4 h | "Ausencias" y "no-shows" son la misma búsqueda |
| **18** | Reescribir las 25 descriptions fuera de rango | Medio | 3 h | 24 desperdician entre 14 y 34 caracteres de SERP |
| **19** | FAQ + CTA en `/calculadora-no-shows` | Alto | 3 h | Momento de máxima conversión del sitio, hoy sin salida |
| **20** | `BreadcrumbList` en los 54 artículos vía helper en `lib/schema.ts` | Medio | 3 h | Jerarquía obvia, cero implementada |
| **21** | Fuentes reales para las 5 cifras que sostienen el argumentario (40 %, 80 %, 12-19 %, 3.000 €, 95-98 %), centralizadas en `lib/stats.ts` | **Alto** | Días | Riesgo alto y esfuerzo alto. Verificar antes que nada la atribución al MIT, que probablemente no dice lo que decimos |
| **22** | Servir los logos de integraciones en local en vez de desde `cdn.simpleicons.org` | Medio | 2 h | 26 peticiones a un tercero antes del consentimiento de cookies |
| **23** | Extraer `P`, `H2`, `InternalLink` a `components/blog/` | Medio | 4 h | 54 copias; habilita que los puntos 12 y 18 se hagan en un fichero |
| **24** | Fusiones restantes: captación estética (3), WhatsApp estética (5), WhatsApp dental (3), IA/automatización dental, IA/tecnología estética, marketing/captación dental | Alto | Días | El grueso de la canibalización que queda |
| **25** | Migrar los 1.379 hex a tokens; borrar los 5 componentes muertos y el endpoint `/api/chat` sin interfaz; recomprimir `logo.png`; limpiar los SVG del starter; `lastModified` real en el sitemap; `lib/posts.ts` como fuente única | Bajo-Medio | Días | Deuda técnica. No urge, pero cada semana que pase cuesta más |
