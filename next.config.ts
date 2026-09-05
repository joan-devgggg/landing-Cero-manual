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
    ];
  },
};

export default nextConfig;
