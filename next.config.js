const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['fluent-ffmpeg$'] = path.resolve(
        __dirname,
        'node_modules/fluent-ffmpeg/lib/fluent-ffmpeg.js'
      );
    }
    return config;
  },
};

module.exports = nextConfig;
