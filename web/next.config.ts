import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  outputFileTracingExcludes: {
    "*": [
      "public/brand/**/*",
      "public/videos/**/*",
      "public/images/**/*",
      "public/fonts/**/*",
      ".next/cache/**/*",
      "node_modules/@next/swc-*/**/*",
      "node_modules/@esbuild/**/*",
    ],
  },

  outputFileTracingIncludes: {
    "/admin/marca/[slug]": ["./brand/**/*.md"],
    "/admin/viralidad/modelo": ["./content/viralidad/*.md"],
    "/admin/viralidad/benchmark": ["./content/viralidad/*.md"],
    "/admin/viralidad/parrilla": ["./content/viralidad/*.md"],
    "/admin/viralidad/calendarios/[mes]": ["./content/viralidad/*.md"],
    "/admin/packs/[slug]": ["./content/viralidad/packs/**/*.md"],
    "/admin/editor/[...path]": [
      "./brand/**/*.md",
      "./content/**/*.md",
    ],
    "/admin/empresa/[slug]": ["./content/empresa/*.md"],
    "/admin/contenido/calendario": ["./content/sistemas/contenido/*.md"],
    "/admin/contenido/hooks": ["./content/sistemas/contenido/*.md"],
    "/admin/contenido/guiones/[slug]": [
      "./content/sistemas/contenido/guiones/*.md",
      "./content/sistemas/contenido/humanizados/*.md",
      "./content/viralidad/packs/**/*.md",
    ],
    "/admin/packs/valentina": ["./content/packs/valentina/*.md"],
    "/blog": ["./content/blog/*.mdx"],
    "/blog/[slug]": ["./content/blog/*.mdx"],
    "/blog/categoria/[categoria]": ["./content/blog/*.mdx"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "ugccolombia.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [];
  },
};

export default nextConfig;
