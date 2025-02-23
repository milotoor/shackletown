import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });

    return config;
  },
};

export default nextConfig;
