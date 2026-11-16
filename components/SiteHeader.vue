<script setup lang="ts">
import { brand } from '~/data/brand'
</script>
<template>
<header class="masthead flex items-center justify-between">
 <a class="identity" href="#conteudo" aria-label="Sara Vieira — início">
  <span class="wordmark">SARA VIEIRA</span><span class="specialty">{{ brand.specialty }}</span>
 </a>
 <nav aria-label="Contato" class="flex items-center gap-8">
  <a class="instagram-link" :href="brand.instagram" target="_blank" rel="noopener noreferrer">Instagram <span class="sr-only">(abre em nova aba)</span></a>
  <a class="header-cta" :href="brand.whatsapp" target="_blank" rel="noopener noreferrer">Agendar <span class="sr-only">pelo WhatsApp (abre em nova aba)</span></a>
 </nav>
</header>
</template>