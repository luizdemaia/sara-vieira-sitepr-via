<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const whatsapp = 'https://wa.me/5548996742029'
const booking = whatsapp + '?text=' + encodeURIComponent('Olá, Sara! Gostaria de agendar uma consulta.')
const questions = [
  { q: 'Como faço para agendar uma consulta?', a: 'É simples: entre em contato pelo WhatsApp. Por lá, você pode conversar sobre os horários disponíveis e combinar o primeiro encontro' },
  { q: 'Os atendimentos são online ou presenciais?', a: 'Sara oferece atendimentos online e presenciais. A disponibilidade e as informações sobre o local de atendimento são confirmadas diretamente no agendamento' },
  { q: 'Preciso saber exatamente o que dizer na primeira sessão?', a: 'Não. Você pode chegar com dúvidas, sentimentos ou apenas com o desejo de se conhecer melhor. O primeiro encontro é também um momento para conversar sobre o processo' },
  { q: 'Qual é a diferença entre psicanálise e hipnose?', a: 'A psicanálise propõe um processo de escuta e elaboração de vivências. A hipnose é outra abordagem possível, que pode ser considerada conforme cada contexto. A escolha da proposta é conversada de forma individual' },
  { q: 'Como funcionam valores e horários?', a: 'Os horários disponíveis, a duração do encontro e os valores são informados diretamente pela Sara no primeiro contato pelo WhatsApp' }
]
const benefits = [
  { mark: '✦', title: 'Escuta sem julgamentos', text: 'Um espaço para falar sobre aquilo que muitas vezes não encontra lugar nas conversas do dia a dia' },
  { mark: '◌', title: 'Seu tempo importa', text: 'Cada trajetória é singular. O processo respeita a sua história, seus limites e suas perguntas' },
  { mark: '↗', title: 'Novas perspectivas', text: 'Olhar com mais atenção para emoções, relações e experiências pode abrir caminhos de compreensão' }
]
useHead({
  title: 'Sara Vieira | Psicanalista Clínica e Hipnose',
  meta: [
    { name: 'description', content: 'Sara Vieira, psicanalista clínica. Um espaço de escuta e acolhimento, com atendimentos de psicanálise e hipnose, online e presenciais. Agende pelo WhatsApp.' },
    { name: 'theme-color', content: '#f4ebdd' },
    { name: 'robots', content: 'noindex,follow' },
    { property: 'og:title', content: 'Sara Vieira | Sua história merece um novo olhar' },
    { property: 'og:description', content: 'Psicanálise clínica e hipnose. Um encontro com a sua própria história, no seu tempo.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:url', content: 'https://sara-vieira-site.vercel.app/' }
  ],
  link: [{ rel: 'canonical', href: 'https://sara-vieira-site.vercel.app/' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context':'https://schema.org', '@type':'Person', name:'Sara Vieira', jobTitle:'Psicanalista Clínica',
    description:'Psicanálise clínica e hipnose; atendimentos online e presenciais.',
    url:'https://sara-vieira-site.vercel.app/',
    sameAs:['https://www.instagram.com/psicanalista_saravieira/']
  }) }]
})
let gsapContext: { revert: () => void } | null = null
let revealObserver: IntersectionObserver | null = null
onMounted(async () => {
  if (typeof window === 'undefined') return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // O conteúdo permanece visível sem JavaScript; somente ativa transições
  // depois de preparar o observer e marcar o que já está na tela
  if (!reduced && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          revealObserver?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -15px 0px' })
    document.querySelectorAll<HTMLElement>('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('revealed')
      } else {
        revealObserver?.observe(el)
      }
    })
    document.documentElement.classList.add('motion-ready')
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'))
  }
  // Em telas pequenas, evite carregar GSAP para o efeito sutil da foto.
  if (reduced || window.matchMedia('(max-width: 700px)').matches) return
  try {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    gsapContext = gsap.context(() => {
      const desktop = window.matchMedia('(min-width: 701px)').matches
      const st = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.65, invalidateOnRefresh: true }
      gsap.to('.photo-wrap', { y: desktop ? -22 : -7, ease: 'none', scrollTrigger: st })
    })
  } catch { /* O conteúdo continua visível sem as animações. */ }
})
onBeforeUnmount(() => {
  revealObserver?.disconnect()
  gsapContext?.revert()
  if (typeof document !== 'undefined') document.documentElement.classList.remove('motion-ready')
})
</script>
<template>
  <div>
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo">
      <HeroSection />
    <section id="sobre" class="about section-light">
      <div class="shell about-grid">
        <div class="about-left reveal">
          <span class="section-kicker"><span class="kicker-line"></span> SOBRE SARA VIEIRA</span>
          <h2 class="display-lg">A escuta é um <em>encontro</em> com você</h2>
          <div class="about-art about-art-editorial">
            <img src="/images/sara-editorial-psicanalise.webp" width="400" height="500" loading="lazy" decoding="async" alt="Ilustração editorial de dois rostos em traços de gravura com uma espiral, símbolo de reflexão e autoconhecimento">
            <div class="about-art-copy" aria-hidden="true">
              <span class="about-art-eyebrow">ESCUTA · ACOLHIMENTO</span>
              <span class="about-art-title">Olhar para <em>dentro</em></span>
            </div>
            <span class="about-art-credit" aria-hidden="true">SARA VIEIRA <span>✳</span> PSICANÁLISE</span>
          </div>
        </div>
        <div class="about-right reveal">
          <p class="intro-serif">Nem sempre é fácil colocar em palavras aquilo que sentimos</p>
          <p>Sou Sara Vieira, psicanalista clínica. Acredito na importância de um espaço em que cada pessoa possa falar, ser ouvida e olhar para a própria história com mais cuidado</p>
          <p>Por meio da psicanálise e da hipnose, proponho um acompanhamento que valoriza a singularidade de cada trajetória, sem respostas prontas ou julgamentos</p>
          <div class="about-signature"><span class="signature">Sara Vieira</span><span>PSICANALISTA CLÍNICA</span></div>
          <a class="text-link" :href="booking" target="_blank" rel="noopener noreferrer">Vamos conversar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section id="atendimentos" class="services section-brown">
      <div class="shell">
        <div class="services-heading reveal">
          <div><span class="section-kicker light-kicker"><span class="kicker-line"></span> POSSIBILIDADES DE CUIDADO</span><h2 class="display-lg">Um caminho que começa <em>de dentro</em></h2></div>
          <p>Conheça as abordagens de atendimento e encontre um ponto de partida para a sua jornada de autoconhecimento</p>
        </div>
        <div class="services-grid">
          <article class="service-card service-psy reveal">
            <div class="service-art" aria-hidden="true"><div class="service-circle"><span>escutar<br>sentir<br>compreender</span></div></div>
            <div class="service-content"><span class="service-label">ESCUTA E AUTOCONHECIMENTO</span><h3>Psicanálise <em>clínica</em></h3><p>Um espaço para explorar sentimentos, vivências, relações e padrões que atravessam a sua história. Um processo de escuta e reflexão que respeita quem você é</p><a :href="booking" target="_blank" rel="noopener noreferrer">Conversar sobre psicanálise <span aria-hidden="true">↗</span></a></div>
          </article>
          <article class="service-card service-hypno reveal">
            <div class="service-art" aria-hidden="true"><div class="hypno-waves"><i></i><i></i><i></i><i></i></div></div>
            <div class="service-content"><span class="service-label">ATENÇÃO E PRESENÇA</span><h3>Hipnose</h3><p>Uma abordagem que pode favorecer a atenção às experiências internas e integrar um processo de autoconhecimento, conforme o contexto e as necessidades de cada pessoa</p><a :href="booking" target="_blank" rel="noopener noreferrer">Conversar sobre hipnose <span aria-hidden="true">↗</span></a></div>
          </article>
        </div>
      </div>
    </section>

    <section class="values section-light">
      <div class="shell values-grid">
        <div class="values-intro reveal"><span class="section-kicker"><span class="kicker-line"></span> UM ESPAÇO PARA VOCÊ</span><h2 class="display-lg">Não existe uma única forma de <em>recomeçar</em></h2><p>Cada história é única. Por isso, o cuidado começa pelo respeito à experiência de quem chega</p></div>
        <div class="values-list">
          <article v-for="item in benefits" :key="item.title" class="value-item reveal"><span class="value-mark" aria-hidden="true">{{ item.mark }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></article>
        </div>
      </div>
    </section>

    <section class="manifesto">
      <div class="manifesto-glow" aria-hidden="true"></div>
      <div class="shell manifesto-inner reveal"><span class="section-kicker light-kicker">UM CONVITE À TRANSFORMAÇÃO</span><blockquote>“Acolho histórias, <em>ressignifico dores</em> e desperto consciências”</blockquote><span class="manifesto-author">SARA VIEIRA</span></div>
    </section>

    <section id="como-funciona" class="journey section-light">
      <div class="shell journey-grid">
        <div class="journey-intro reveal"><span class="section-kicker"><span class="kicker-line"></span> SEU PRIMEIRO PASSO</span><h2 class="display-lg">Você não precisa ter todas as <em>respostas</em></h2><p>O mais importante é poder começar uma conversa. O restante se constrói ao longo do caminho</p><a class="dark-cta" :href="booking" target="_blank" rel="noopener noreferrer">Quero agendar <span aria-hidden="true">↗</span></a></div>
        <div class="journey-steps">
          <article class="journey-step reveal"><span class="step-glyph">↗</span><div><h3>Entre em contato</h3><p>Fale com a Sara pelo WhatsApp para saber sobre disponibilidade, valores e modalidade de atendimento</p></div></article>
          <article class="journey-step reveal"><span class="step-glyph">◌</span><div><h3>Um primeiro encontro</h3><p>Um momento para apresentar suas questões, conhecer a proposta de acompanhamento e tirar dúvidas</p></div></article>
          <article class="journey-step reveal"><span class="step-glyph">✳</span><div><h3>Um processo no seu ritmo</h3><p>O acompanhamento se desenvolve a partir da sua experiência e do que for construído ao longo das conversas</p></div></article>
        </div>
      </div>
    </section>

    <section class="formats section-sand">
      <div class="shell formats-grid">
        <div class="formats-head reveal"><span class="section-kicker"><span class="kicker-line"></span> ONDE ACONTECE</span><h2 class="display-lg">Cuidado que cabe na <em>sua realidade</em></h2></div>
        <div class="format-card reveal"><span class="format-icon" aria-hidden="true">⌁</span><h3>Atendimento online</h3><p>Encontros à distância, com a possibilidade de conversar de onde você estiver em um espaço reservado</p></div>
        <div class="format-card reveal"><span class="format-icon" aria-hidden="true">⌂</span><h3>Atendimento presencial</h3><p>Uma experiência de escuta presencial. O local e os horários são informados diretamente no agendamento</p></div>
      </div>
    </section>

    <section id="duvidas" class="faq section-light">
      <div class="shell faq-grid">
        <div class="faq-intro reveal"><span class="section-kicker"><span class="kicker-line"></span> DÚVIDAS FREQUENTES</span><h2 class="display-lg">Tudo começa com uma <em>conversa</em></h2><p>Algumas respostas para tornar o primeiro contato mais simples</p></div>
        <div class="faq-list reveal"><details v-for="(question, index) in questions" :key="question.q"><summary><span>{{ question.q }}</span><span class="faq-toggle" aria-hidden="true">+</span></summary><p>{{ question.a }}</p></details></div>
      </div>
    </section>

    <section id="contato" class="contact">
      <div class="contact-glow" aria-hidden="true"></div>
      <div class="shell contact-inner reveal"><span class="section-kicker light-kicker">UM PRIMEIRO PASSO PODE MUDAR O OLHAR</span><h2>Seu novo capítulo pode <em>começar aqui</em></h2><p>Há espaço para a sua história. Entre em contato e saiba como agendar seu primeiro encontro</p><a class="primary contact-primary" :href="booking" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <svg aria-hidden="true" viewBox="0 0 30 16" fill="none"><path d="M0 8h28M21 1l7 7-7 7" stroke="currentColor" stroke-width="1.4"/></svg></a><div class="google-rating" aria-label="Avaliação 5,0 no Google conforme captura de tela fornecida"><span class="stars">★★★★★</span><span><strong>5,0</strong> no Google</span></div><small class="rating-note">Nota apresentada no material de referência. Confirme a atualização antes da publicação definitiva</small></div>
    </section>
  </main>
  <footer class="footer">
    <div class="shell footer-top"><div><a href="#conteudo" class="footer-name">SARA VIEIRA</a><p>Psicanalista clínica · Psicanálise e hipnose</p></div><div class="footer-links"><a href="#sobre">Sobre</a><a href="#atendimentos">Atendimentos</a><a href="#duvidas">Dúvidas</a><a href="https://www.instagram.com/psicanalista_saravieira/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a :href="booking" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div>
    <div class="shell footer-bottom"><span>© {{ new Date().getFullYear() }} Sara Vieira. Todos os direitos reservados</span><span>Um espaço de escuta no seu tempo</span></div>
  </footer>
  </div>
</template>
