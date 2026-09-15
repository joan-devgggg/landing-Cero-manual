import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Host canónico: www -> ápex, conservando ruta y query string.
      // El `has` de host hace que solo dispare en www, así que el ápex nunca
      // entra aquí y no hay bucle.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ceromanual.es" }],
        destination: "https://ceromanual.es/:path*",
        permanent: true,
      },
      {
        source: "/blog/agente-whatsapp-clinicas-esteticas",
        destination: "/agente-whatsapp-clinicas-esteticas",
        permanent: true,
      },
      // Fase 2 SEO (15-sep-2026): artículos fusionados por canibalización. Copia de cada
      // uno en docs/fase2-articulos-fusionados/.
      {
        source: "/blog/software-gestion-clinica-estetica",
        destination: "/blog/software-gestion-clinicas-esteticas",
        permanent: true,
      },
      {
        source: "/blog/agenda-clinica-estetica-online",
        destination: "/blog/software-gestion-clinicas-esteticas",
        permanent: true,
      },
      {
        source: "/blog/plantillas-recordatorio-cita-clinica",
        destination: "/blog/emails-recordatorio-pacientes-clinica",
        permanent: true,
      },
      {
        source: "/blog/recordatorios-automaticos-citas-clinica",
        destination: "/recordatorios-automaticos-citas",
        permanent: true,
      },
      {
        source: "/blog/inteligencia-artificial-clinicas-dentales",
        destination: "/blog/automatizacion-clinicas-dentales",
        permanent: true,
      },
      {
        source: "/blog/aumentar-ingresos-clinica-dental-sin-pacientes",
        destination: "/blog/como-aumentar-facturacion-clinica-dental",
        permanent: true,
      },
      {
        source: "/blog/gestionar-citas-clinica-estetica-whatsapp",
        destination: "/blog/clinica-estetica-por-whatsapp",
        permanent: true,
      },
      {
        source: "/blog/responder-consultas-clinica-estetica-whatsapp",
        destination: "/blog/clinica-estetica-por-whatsapp",
        permanent: true,
      },
      {
        source: "/blog/agente-whatsapp-clinica-dental",
        destination: "/agente-whatsapp-clinicas-dentales",
        permanent: true,
      },
      {
        source: "/blog/captacion-pacientes-clinica-estetica",
        destination: "/blog/marketing-digital-clinicas-esteticas",
        permanent: true,
      },
      {
        source: "/blog/como-conseguir-mas-citas-clinica-estetica",
        destination: "/blog/como-captar-clientes-clinica-estetica-sin-presupuesto",
        permanent: true,
      },
      {
        source: "/blog/como-conseguir-pacientes-clinica-dental",
        destination: "/blog/marketing-clinica-dental",
        permanent: true,
      },
      {
        source: "/blog/como-mejorar-atencion-cliente-clinica-estetica",
        destination: "/blog/experiencia-paciente-clinica-estetica",
        permanent: true,
      },
      {
        source: "/blog/como-gestionar-ausencias-clinica-estetica",
        destination: "/blog/como-reducir-no-shows-clinica-estetica",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
