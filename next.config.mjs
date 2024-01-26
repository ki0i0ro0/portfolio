/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
};

export default nextConfig;
