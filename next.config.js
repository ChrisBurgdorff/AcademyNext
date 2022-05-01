/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };
    config.externals = ['pg', 'sqlite3', 'tedious', 'pg-hstore'];

    return config;
  },
};
