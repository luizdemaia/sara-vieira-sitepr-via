<script setup lang="ts">
import { brand } from '~/data/brand'
</script>
<template>
<section class="hero" aria-labelledby="hero-title">
 <div class="hero-copy">
  <p class="eyebrow">Escuta, acolhimento<br>e autoconhecimento</p>
  <span class="small-rule" aria-hidden="true"></span>
  <h1 id="hero-title">Um espaço para<br class="desktop-break"> ouvir a <em>sua história.</em></h1>
  <p class="intro">Atendimentos online e presenciais,<br class="desktop-break"> com Sara Vieira.</p>
  <a class="primary-cta inline-flex items-center justify-between" :href="brand.whatsapp" target="_blank" rel="noopener noreferrer">
   <span>Agendar pelo WhatsApp</span>
   <svg aria-hidden="true" width="25" height="18" viewBox="0 0 25 18" fill="none"><path d="M1 9h22M16 2l7 7-7 7" stroke="currentColor" stroke-width="1.4"/></svg>
   <span class="sr-only">(abre em nova aba)</span>
  </a>
  <div class="social-proof flex flex-wrap items-center">
   <span :aria-label="`Nota ${brand.rating} no Google conforme material fornecido`">{{ brand.rating }} <span class="star" aria-hidden="true">★</span> no Google</span>
  </div>
  <div class="bottom-rule" aria-hidden="true"></div>
 </div>
 <figure class="portrait-stage">
  <div class="photo-wrap"><img :src="brand.portrait" width="1122" height="1402" alt="Retrato de Sara Vieira" fetchpriority="high" decoding="async"></div>
  <div class="portrait-orbit" aria-hidden="true"></div>
  <figcaption>Psicanalista<br>Clínica</figcaption>
 </figure>
</section>
</template>