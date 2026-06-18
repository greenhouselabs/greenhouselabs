/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable MDX file imports if needed in the future
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/products/cuepilot-mcp",
        destination: "/products/cuescope-mcp",
        permanent: true,
      },
      {
        source: "/projects/cuepilot-mcp",
        destination: "/projects/cuescope-mcp",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
