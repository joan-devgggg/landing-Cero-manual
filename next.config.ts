import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/blog/agente-whatsapp-clinicas-esteticas",
        destination: "/agente-whatsapp-clinicas-esteticas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
