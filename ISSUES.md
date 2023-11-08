

### FFMPEG Issues 
Note: That for production deployment , we may need to switch to another api to extract audio
givent that ffmpeg may not be installed and we may not have control over the deployment on vercels server.

If you run into issues with fluent-ffmpeg you'll need to:
1. make sure to install ffmpeg on your machine so that the binary is available
2. update nextjs config to avoid the error below:

```
Import trace for requested module:
./lib/videohelper.ts
./app/api/video/upload/route.ts
 ⨯ ./node_modules/fluent-ffmpeg/index.js:1:48
Module not found: Can't resolve './lib-cov/fluent-ffmpeg'
```
**Update nextjs config**

```
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

```

