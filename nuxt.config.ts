// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-directus', '@nuxt/image', '@nuxt/icon'],
  tailwindcss: {
    cssPath: '~/assets/styles/index.scss',
  },


  googleFonts: {
    families: {
      'DM+Sans': [400, 500, 700],
    },
  },


  directus: { 
     url: "https://directus.pawel-romanowski.pl/" 
  } ,

  image: {
    directus: {
      // This URL needs to include the final `assets/` directory
      baseURL: 'https://directus.pawel-romanowski.pl/assets/',
    }
  },

  app: {
    pageTransition: {
      name: 'default',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'default',
      mode: 'out-in', // default
    },
  },



  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})



// services:
//   directus:
//     image: directus/directus:11
//     volumes:
//       - directus-database:/directus/database
//       - directus-uploads:/directus/uploads
//       - directus-extensions:/directus/extensions
//       - directus-templates:/directus/templates
//     environment:
//       - SERVICE_FQDN_DIRECTUS_8055
//       - ADMIN_EMAIL:$SERVICE_ADMIN_EMAIL
//       - ADMIN_PASSWORD:$SERVICE_ADMIN_PASSWORD
//       - KEY:$SERVICE_KEY
//       - SECRET:$SERVICE_SECRET
//       - DB_CLIENT:$SERVICE_DB_CLIENT
//       - DB_HOST:$SERVICE_DB_HOST
//       - DB_PORT:$SERVICE_DB_PORT
//       - DB_DATABASE:$SERVICE_DB_DATABASE
//       - DB_USER:$SERVICE_DB_USER
//       - DB_PASSWORD:$SERVICE_DB_PASSWORD
//       - CACHE_ENABLED:$SERVICE_CACHE_ENABLED
//       - CACHE_STORE:$SERVICE_CACHE_STORE
//       - REDIS:$SERVICE_REDIS
//       - CACHE_AUTO_PURGE:$SERVICE_CACHE_AUTO_PURGE
//       - CORS_ENABLED:$SERVICE_CORS_ENABLED
//       - CORS_ORIGIN:$SERVICE_CORS_ORIGIN
//       - WEBSOCKETS_ENABLED=$SERVICE_WEBSOCKETS_ENABLED
//     healthcheck:
//       test:
//         ["CMD", "wget", "-q", "--spider", "http://127.0.0.1:8055/admin/login"]
//       interval: 5s
//       timeout: 20s
//       retries: 10



// SERVICE_FQDN_DIRECTUS=https://directus.pawel-romanowski.pl
// SERVICE_ADMIN_EMAIL=admin@example.com
// SERVICE_ADMIN_PASSWORD=password
// SERVICE_KEY=sBQmahc7ItuZHXmebse64UIcbfTQQHe8Zf3prmjxRaCQtu4K7PngqiwOTqj0U565
// SERVICE_SECRET=oLXzMr6swDcecFOliXDwsGw6eusKAiA5lzXWHnfQ6Dpso0YkxNrQCcbKDKiHZrx4
// SERVICE_DB_CLIENT=pg
// SERVICE_DB_HOST=uc4s4g440os0c8c0cwk4s84o
// SERVICE_DB_PORT=5432
// SERVICE_DB_DATABASE=directus
// SERVICE_DB_USER=postgres
// SERVICE_DB_PASSWORD=bGfNvtszQs4AQxczaKMKbXPzyKRzfwTaeIm1ZASDOnYNfLvXokImOzOS8q2wkJvD
// SERVICE_CACHE_ENABLED=true
// SERVICE_CACHE_STORE=directus
// SERVICE_REDIS=redis://default:wbttE67rALL48TAZ1Y5KQdgiv2SqVqZEDNBlqsykI6xy1gdpoUMkHNzt5TcaFaBn@fsksck80k40kow84w44084sc:6379
// SERVICE_CACHE_AUTO_PURGE=true
// SERVICE_CORS_ENABLED=false
// SERVICE_CORS_ORIGIN=false