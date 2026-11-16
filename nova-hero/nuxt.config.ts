export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  app: { head: { htmlAttrs: { lang: 'pt-BR' }, title: 'Sara Vieira | Psicanálise e Hipnose',
    meta: [{name:'description',content:'Um espaço para ouvir a sua história. Atendimentos online e presenciais com Sara Vieira.'},{name:'robots',content:'noindex, nofollow'},{name:'theme-color',content:'#f4ebdd'}],
    link: [{rel:'preconnect',href:'https://fonts.googleapis.com'},{rel:'preconnect',href:'https://fonts.gstatic.com',crossorigin:'anonymous'},{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600&display=swap'}]
  } }
})