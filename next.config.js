/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (/** @type {import("webpack").Configuration} */ config) => {
    if (Array.isArray(config.externals)) {
      config.externals.push("pino-pretty", "lokijs", "encoding");
    }
    return config;
  },
};

export default nextConfig;
