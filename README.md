# Sara Vieira — Hero v1

Primeira seção em HTML/CSS/JS, com layout desktop/mobile, paleta preto/âmbar/dourado e CTA WhatsApp. Escopo: somente Hero e faixa de transição; próximas seções ainda não implementadas.

## Estado

Código inicial salvo. Publicação pendente da fotografia. Ainda não validado visualmente em navegador: ambiente local indisponível durante a criação.

## Fotografia necessária

Adicionar na raiz `sara.jpg`: a captura original de 710 × 1536 px enviada pelo usuário, com o retrato circular de Sara. O CSS recorta o círculo em x≈120, y≈433, diâmetro≈465, escondendo a interface do telefone. Não adicionar a imagem do mockup como uma página inteira. Se usar uma foto original diferente, adaptar `.photo-crop img` para o enquadramento dela.

Esta versão usa recorte da fotografia original, sem reconstrução de rosto por IA. O resultado deve ser conferido lado a lado com a direção visual aprovada.

## Publicação

Site estático, sem build. Vercel: framework Other, raiz do repositório, sem comando de build. Apenas publicar após incluir e verificar a foto. Prévia usa noindex; remover antes de lançar o site definitivo.

## Movimento

GSAP 3.12.5 + ScrollTrigger via CDN. Somente transform: fundo −20px, retrato −42px, frente −65px. Mobile: apenas retrato −12px. Sem pin. prefers-reduced-motion desativa animações. Conteúdo permanece visível caso a CDN não carregue. Dimensões reservadas para imagem; fontes externas precisam ter CLS avaliado no navegador.

Documentação: https://gsap.com/docs/v3/GSAP/gsap.matchMedia/

## Contato

WhatsApp 55 48 99674-2029, conforme a arte enviada. O destino dos links está configurado; entrega de mensagem e titularidade não foram verificadas.

## Validação disponível

Script inline passou por análise sintática JavaScript. Ainda pendentes: renderização em desktop/mobile, enquadramento da foto, contraste, navegação por teclado, execução GSAP, estabilidade de layout e resposta HTTP dos assets. Não há testes de navegador concluídos.
