import react from '@astrojs/react';
import { defineConfig, envField } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  experimental: {
    env: {
      schema: {
        DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN: envField.string({
          context: 'server',
          access: 'secret',
        }),
        DATOCMS_DRAFT_CONTENT_CDA_TOKEN: envField.string({
          context: 'server',
          access: 'secret',
        }),
        DATOCMS_CMA_TOKEN: envField.string({
          context: 'server',
          access: 'secret',
        }),
        SECRET_API_TOKEN: envField.string({
          context: 'server',
          access: 'secret',
        }),
      },
      validateSecrets: true,
    },
  },
  integrations: [react()],
  adapter: node({
    mode: 'standalone',
  }),
});
