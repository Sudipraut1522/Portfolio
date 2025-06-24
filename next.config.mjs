/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ─── Option A: remotePatterns ────────────────────────────────────────
    // Precise control over each external domain + path
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/**",
      },
    ],

    // ─── Option B: domains ───────────────────────────────────────────────
    // Simpler, but less precise. Uncomment if you prefer:
    // domains: [
    //   'encrypted-tbn0.gstatic.com',
    //   'media.istockphoto.com',
    // ],
  },
};

export default nextConfig;
