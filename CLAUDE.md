@AGENTS.md

# Cero Manual

Web de la agencia: instala agentes de IA para clínicas estéticas y dentales (chatbot de
WhatsApp, agente de voz, recordatorios, reactivación de pacientes). B2B nacional, **solo
español**, sin i18n.

> El aviso importado de `AGENTS.md` va en serio: **esto es Next 16 con React 19**, no el Next
> que uno recuerda. Antes de escribir código, mira la guía que toque en
> `node_modules/next/dist/docs/`.

## Stack

Next.js **16.2.6** (App Router) · React **19.2.4** · Tailwind **4** (vía PostCSS) ·
TypeScript 5 en **modo estricto**. `engines.node >= 20.9.0`. **Gestor: npm**
(`package-lock.json`, único lockfile). No hay `src/`: todo cuelga de `app/`, `components/`
y `lib/`.

**Dominio canónico: `https://ceromanual.es`** — **sin `www`**, sin barra final. Coincide en
`app/layout.tsx` (`metadataBase`), `app/sitemap.ts`, `app/robots.ts` y las `openGraph.url` de
cada página. Los canonical de las páginas son **relativos** y los absolutiza `metadataBase`.

`sitemap.xml` y `robots.txt` **son rutas generadas** (`app/sitemap.ts`, `app/robots.ts`), no
ficheros en `public/`. No los busques ahí.

## Despliegue: Railway, no Vercel

`railway.json` es el único fichero de despliegue: builder **NIXPACKS**, `startCommand:
npm start`. O sea **un servidor Node corriendo**, no una exportación estática.

**El `README.md` es el boilerplate literal de `create-next-app`, bloque "Deploy on Vercel"
incluido, y no describe este proyecto.** Manda `railway.json`.

Según `docs/dns-ceromanual-backup-2026-09-02.md`, el DNS estaba en **GoDaddy** con una
migración a Cloudflare planificada y **sin ejecutar**. El correo es Microsoft 365.

## Scripts

Solo los tres de `create-next-app`: `dev`, `build`, `start`. No hay carpeta `scripts/`.

**No hay tests, ni linter, ni typecheck.** ESLint ni siquiera está instalado; lo único que
valida tipos es `next build`. (Curiosidad: `components/MetaPixel.tsx` lleva un
`eslint-disable` para un ESLint que no existe aquí.)

## Rutas

Por convención de ficheros del App Router:

- **8 páginas top**: `/`, `/agente-whatsapp-clinicas-esteticas`,
  `/agente-whatsapp-clinicas-dentales`, `/agente-voz-ia-clinicas`,
  `/recordatorios-automaticos-citas`, `/reactivacion-pacientes-inactivos`,
  `/calculadora-no-shows`, `/blog`.
- **2 legales**: `/privacidad`, `/aviso-legal`.
- **54 artículos** bajo `app/blog/`.
- **3 API**: `/api/chat`, `/api/leads`, `/api/meta-capi`.

Un redirect 301 en `next.config.ts`: `/blog/agente-whatsapp-clinicas-esteticas` →
`/agente-whatsapp-clinicas-esteticas`.

### La trampa principal: tres listas de artículos en paralelo

Al añadir o quitar un artículo hay que tocar **tres sitios**, y **ningún test los cruza**:

1. La carpeta en `app/blog/<slug>/`.
2. El array `articleSlugs` de `app/sitemap.ts`.
3. El array `posts` de `app/blog/page.tsx` (con `title`, `excerpt`, `date`, `readingTime`).

Más `lib/blog-dates.ts`, de donde salen las fechas reales. Hoy las cuatro cuadran (54 = 54 =
54, y las fechas coinciden), pero nada lo garantiza. **Si tocas artículos, comprueba las tres
listas a mano.**

Detalle que ya se corrigió y conviene no deshacer: las páginas top van **sin `lastModified`**
en el sitemap. Antes llevaban `new Date()`, que en cada build le decía a Google que habían
cambiado hoy. Los 54 artículos sí llevan fecha real.

## Trampas

**`@anthropic-ai/sdk` está en `package.json` y no se importa en ningún sitio.** Es una
dependencia muerta. El chat real (`app/api/chat/route.ts`) llama a **OpenRouter** con un
`fetch` a pelo contra `https://openrouter.ai/api/v1/chat/completions`, usando
`OPENROUTER_API_KEY` y el slug `anthropic/claude-haiku-4.5`, con `max_tokens: 400`. Si buscas
el SDK para tocar el chat, no está por ahí.

**El `.env.example` está desincronizado con el `.env.local` real:**

```
.env.example : ANTHROPIC_API_KEY  META_CAPI_ACCESS_TOKEN  NEXT_PUBLIC_META_PIXEL_ID  META_CAPI_TEST_EVENT_CODE
.env.local   : OPENROUTER_API_KEY  AIRTABLE_API_KEY  META_CAPI_ACCESS_TOKEN  NEXT_PUBLIC_META_PIXEL_ID  META_CAPI_TEST_EVENT_CODE
```

`ANTHROPIC_API_KEY` no la lee nadie. Faltan en el example `OPENROUTER_API_KEY` y
`AIRTABLE_API_KEY`, que sí se usan: **quien clone el repo y siga el example no levanta ni el
chat ni los leads.**

**`NEXT_PUBLIC_META_PIXEL_ID` está declarada en los dos `.env` y no la lee nadie.** El id del
pixel está a fuego **en dos sitios** que hay que mantener sincronizados a mano:
`components/MetaPixel.tsx` y `app/api/meta-capi/route.ts`.

**Más identificadores hardcodeados**: `AIRTABLE_BASE_ID` y la tabla `WEB_LEADS` en
`app/api/leads/route.ts`; la clave pública y el id de asistente de Vapi en
`lib/hooks/useVapi.ts`. (Las credenciales de verdad —`AIRTABLE_API_KEY`,
`OPENROUTER_API_KEY`— sí van por entorno.)

**El rate limiter de `/api/chat` es un `Map` en memoria** (20 peticiones por IP y minuto).
Se reinicia con cada despliegue de Railway y no se comparte entre instancias: no es un límite
real si algún día se escala. Está analizado en `docs/endpoint-chat-opciones.md`.

**El prompt de sistema del chat vive dentro del route handler** (`app/api/chat/route.ts`), e
incluye una tarifa cerrada de 6 tratamientos con precios y nombres de producto. Es contenido
de negocio metido en código: si cambian los precios, se cambian ahí.

**`components/ServiceSocialProof.tsx` está escrito y deliberadamente sin importar** desde
ningún sitio, a la espera de un testimonio real. La receta para activarlo está en
`docs/servicesocialproof-como-activarlo.md`. Su literal fijo es `[Testimonio real
próximamente]`.

**El `FAQPage` se emite desde componentes, no desde páginas**: `components/FAQSection.tsx`
(solo la home) y `components/ServiceFAQ.tsx` (el resto). Ningún fichero importa los dos, y así
debe seguir: cuando se importaban los dos, 10 artículos emitían el schema por duplicado.

## Documentación

- `docs/auditoria-2026-08-12.md` — auditoría de solo lectura sobre 63 URLs. Sus hallazgos de
  contraste AA y artículos huérfanos **no los mide ningún check**, así que pueden seguir
  vigentes.
- `docs/endpoint-chat-opciones.md` — qué protege hoy `/api/chat`.
- `docs/servicesocialproof-como-activarlo.md` — cómo encender ese componente.
- `docs/correo-baseline-*.md` y `docs/dns-*-backup-*.md` — **no están en git**. Son el
  respaldo del correo y de la zona DNS antes de migrar. No tienen copia en ninguna otra parte.

## Contenido

Contacto publicado: `joan@ceromanual.es` · **+34 644 786 952** · `@cero.manual` en Instagram.
JSON-LD `ProfessionalService`, `areaServed: "ES"`, `availableLanguage: ["Spanish"]`.
`lib/schema.ts` exporta los trozos reutilizados por las landings de servicio.
