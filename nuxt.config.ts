export default defineNuxtConfig({
 compatibilityDate: '2025-05-01',
 modules: ['@nuxtjs/tailwindcss'],
 css: ['~/assets/css/main.css'],
 devtools: { enabled: false },
 app: { head: { htmlAttrs: {lang:'pt-BR'}, link:[
 {rel:'preconnect',href:'https://fonts.googleapis.com'},
 {rel:'preconnect',href:'https://fonts.gstatic.com',crossorigin:'anonymous'},
 {rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600&display=swap'}
 ] } },
 nitro: { prerender: { crawlLinks: false, routes: [] } },
 routeRules: { '/': { prerender: false } }
})