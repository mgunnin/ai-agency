module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/copilotkit/chat",
        destination: "/api/copilotkit/chat",
      },
      {
        source: "/api/github",
        destination: "/api/github",
      },
    ]
  },
}
