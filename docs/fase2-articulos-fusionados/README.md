# Artículos fusionados en la Fase 2 (15-sep-2026)

Copia literal del `page.tsx` de cada artículo del blog que se eliminó al consolidar la
canibalización de keywords. Sirve para recuperar un artículo o rescatar más contenido sin
tener que buscar en el historial de git.

**Van con extensión `.page.tsx.txt` a propósito.** `tsconfig.json` incluye `**/*.tsx`, así que
si tuvieran extensión `.tsx` entrarían en el typecheck de `next build`. Además fallarían, porque
llaman a `articleDates("<slug>")` con slugs que ya no existen en `lib/blog-dates.ts`.

Para recuperar uno hay que:

1. Copiarlo a `app/blog/<slug>/page.tsx`.
2. Volver a añadirlo a `lib/blog-dates.ts`, a `articleSlugs` en `app/sitemap.ts` y a `posts` en `app/blog/page.tsx`.
3. Quitar su redirect de `next.config.ts`.

| Slug eliminado | Redirige (permanente) a | Motivo |
|---|---|---|
| software-gestion-clinica-estetica | /blog/software-gestion-clinicas-esteticas | Misma query ("software clínica medicina estética"), el plural tiene más del doble de impresiones y los únicos clics |
| agenda-clinica-estetica-online | /blog/software-gestion-clinicas-esteticas | 7 impresiones, sin queries propias |
| plantillas-recordatorio-cita-clinica | /blog/emails-recordatorio-pacientes-clinica | Misma query, el pilar posiciona 56 puestos mejor |
| recordatorios-automaticos-citas-clinica | /recordatorios-automaticos-citas | Misma keyword que la página de servicio |
| inteligencia-artificial-clinicas-dentales | /blog/automatizacion-clinicas-dentales | Misma query ("automatización clínica dental"), peor posición |
| aumentar-ingresos-clinica-dental-sin-pacientes | /blog/como-aumentar-facturacion-clinica-dental | H1 casi idéntico al del pilar |
| gestionar-citas-clinica-estetica-whatsapp | /blog/clinica-estetica-por-whatsapp | Misma intención (gestionar WhatsApp en estética) |
| responder-consultas-clinica-estetica-whatsapp | /blog/clinica-estetica-por-whatsapp | Misma intención |
| agente-whatsapp-clinica-dental | /agente-whatsapp-clinicas-dentales | Misma keyword que la página de servicio |
| captacion-pacientes-clinica-estetica | /blog/marketing-digital-clinicas-esteticas | Mismos canales y mismo enfoque |
| como-conseguir-mas-citas-clinica-estetica | /blog/como-captar-clientes-clinica-estetica-sin-presupuesto | Mismo H1 ("sin aumentar el presupuesto") |
| como-conseguir-pacientes-clinica-dental | /blog/marketing-clinica-dental | Misma intención |
| como-mejorar-atencion-cliente-clinica-estetica | /blog/experiencia-paciente-clinica-estetica | Comparten H2 idénticos |
| como-gestionar-ausencias-clinica-estetica | /blog/como-reducir-no-shows-clinica-estetica | Ausencia = no-show |

Los detalles de cada decisión están en la auditoría de canibalización del 15-sep-2026 y en los
datos de Search Console por query que se usaron en la Fase 2.
