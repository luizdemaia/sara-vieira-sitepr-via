export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: { head: {
    htmlAttrs: { lang: 'pt-BR' },
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600&display=swap' }
    ]
  } },
  // Evita erro de cache do prerender com Nitro/unstorage no deploy Vercel.
  // A página continua com renderização SSR e metadados SEO no HTML.
  nitro: { prerender: { crawlLinks: false, routes: [] } },
  routeRules: { '/': { prerender: false } }
})
