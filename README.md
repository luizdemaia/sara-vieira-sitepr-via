# Sara Vieira — Hero v1

Hero responsiva em HTML/CSS/JS. Escopo: primeira seção e faixa de transição. Próximas seções ainda não implementadas.

## Fotografia

Imagem WebP de 2048 × 1152 enviada pelo usuário diretamente ao repositório. O CSS mostra os primeiros ~1014px horizontais, com proporção .88 e máscara nas bordas, ocultando os textos e CTA embutidos na metade direita da arte. Não há reconstrução de rosto no código. A imagem enviada difere da pose na prévia aprovada.

## Publicação

Site estático sem build, framework Other. Vercel deve usar a raiz do repositório. Prévia contém noindex; remover para lançamento definitivo.

## Movimento e acessibilidade

GSAP 3.12.5 + ScrollTrigger via CDN. Transform: fundo −20px, retrato −42px, frente −65px. Mobile: retrato −12px. Sem pin. prefers-reduced-motion desativa animações. Falha da CDN não esconde conteúdo. Dimensões reservadas para foto. Foco visível e link para pular ao conteúdo.

Referência: https://gsap.com/docs/v3/GSAP/gsap.matchMedia/

## Contato

WhatsApp 55 48 99674-2029, da primeira referência do usuário. O telefone fictício da nova arte não foi usado. Links configurados; titularidade e entrega de mensagens não verificadas.

## Validação

Imagem inspecionada e arquivo confirmado no GitHub. JavaScript passou por análise sintática. Ambiente local indisponível: testes visuais desktop/mobile, execução das animações, CLS e navegação por teclado permanecem pendentes.
