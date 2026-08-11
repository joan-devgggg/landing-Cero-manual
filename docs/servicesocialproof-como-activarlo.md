# `ServiceSocialProof`: qué hace falta para activarlo

Fecha: 12 de agosto de 2026. Componente: `components/ServiceSocialProof.tsx`.

El componente está escrito y terminado, pero **no se importa desde ningún sitio, y
así debe seguir hasta que haya un testimonio real**.

Motivo de la decisión: hoy el componente solo sabe pintar huecos. La línea del
nombre es el literal fijo `[Testimonio real próximamente]`
(`ServiceSocialProof.tsx:142`) y las tarjetas llevan borde discontinuo. Publicar
eso en una landing de venta comunica que no hay clientes, que resta más de lo que
suma. Y rellenar el `proofMetric` con un dato de sector, bajo un bloque cuyo
eyebrow por defecto es "Clientes", se lee como un resultado propio aunque la
línea de fuente diga otra cosa.

Este documento es la receta para que el día que haya un testimonio sea pegar y
desplegar.

---

## 1. Cambios que hay que hacer en el componente

Hoy el componente **solo admite placeholders**: pasarle una cita real no basta,
porque el nombre está escrito a fuego. Son tres cambios, todos en
`components/ServiceSocialProof.tsx`:

| # | Qué | Dónde | Detalle |
|---|---|---|---|
| 1 | Añadir campo de nombre al tipo | `:6-10`, interfaz `ServiceTestimonialPlaceholder` | Hoy tiene `placeholder`, `role` e `initials`. Falta `name` (o `author`). Conviene renombrar la interfaz: deja de ser un *placeholder* |
| 2 | Sustituir el literal por ese campo | `:142` | Ahora mismo: `[Testimonio real próximamente]`, escrito directamente en el JSX |
| 3 | Borde discontinuo → sólido | `:104` | `border: "1px dashed #E0DBD4"` → `solid`. El discontinuo es lo que marca la tarjeta como hueco |

El campo `placeholder` pasa a contener la cita literal. Puede quedarse con ese
nombre o renombrarse a `quote`; si se renombra, hay que tocar también `:119`.

## 2. Props que pide

Leídas de `ServiceSocialProof.tsx:12-19`:

| Prop | Tipo | Obligatoria | Dónde sale en pantalla |
|---|---|---|---|
| `eyebrow` | `string` | No — por defecto `"Clientes"` | Kicker en mayúsculas sobre el título |
| `title` | `string` | Sí | H2 de la sección |
| `titleAccent` | `string` | No | Segunda línea del H2, en cursiva verde |
| `proofMetric` | `{ value, desc, source }` | Sí | Tarjeta destacada: cifra grande en verde + descripción + línea de fuente en gris |
| `testimonials` | array de `{ placeholder, role, initials }` | Sí | Rejilla de tarjetas |

**La rejilla es `md:grid-cols-3` (`:92`): tres testimonios es el número que
cuadra.** Con uno o dos la fila queda coja; con cuatro se parte en 3 + 1.

Si solo hay un testimonio real, la opción limpia es publicarlo con el
`proofMetric` y **omitir la rejilla** (pasar `testimonials: []`), no rellenar los
otros dos huecos con placeholders.

## 3. Dónde se monta

En las 4 páginas de servicio, entre `<ServiceBenefits>` y `<ServiceFAQ>`:

- `app/agente-whatsapp-clinicas-esteticas/page.tsx`
- `app/agente-voz-ia-clinicas/page.tsx`
- `app/recordatorios-automaticos-citas/page.tsx`
- `app/reactivacion-pacientes-inactivos/page.tsx`

```tsx
import ServiceSocialProof from "@/components/ServiceSocialProof"

// ...

<ServiceBenefits ... />

<ServiceSocialProof
  title="Lo que dicen las clínicas"
  titleAccent="que ya lo tienen"
  proofMetric={{
    value: "",   // resultado medido de un cliente
    desc: "",    // qué mide y en cuánto tiempo
    source: "",  // de qué clínica y de qué periodo sale
  }}
  testimonials={[
    { placeholder: "", role: "", initials: "", /* name: "" */ },
  ]}
/>

<ServiceFAQ faqs={faqs} />
```

## 4. Qué hay que recopilar antes

**Del cliente, por escrito:**

- La cita literal, tal y como la dijo.
- Cómo acepta aparecer: nombre y cargo, solo cargo, o iniciales.
- Si autoriza nombrar la clínica.
- Consentimiento explícito para publicarlo en la web.

**Para el `proofMetric`:**

Un resultado medido **de ese cliente**, con periodo y método. Por ejemplo, el
número de no-shows del mes anterior frente al mes posterior a activar los
recordatorios, indicando cuántas citas entran en cada cifra.

**No sirve un dato de sector.** Puesto bajo un bloque titulado "Clientes", una
cifra de sector se lee como un resultado propio: es exactamente el problema que
esta decisión evita. Si no hay un número propio todavía, el `proofMetric` se deja
fuera y se publica solo el testimonio.

## 5. Comprobación antes de desplegar

1. Buscar `[Testimonio real próximamente]` en el repo: no debe quedar ninguna
   ocurrencia.
2. Buscar `dashed` en `ServiceSocialProof.tsx`: no debe quedar ninguna.
3. Ninguna cifra del bloque sin una fuente propia detrás.
