# TeOrientaCalouro

Guia estático, responsivo e acessível para orientar calouros da UFPA. O projeto não possui login, banco de dados ou LLM.

## Tecnologias

- Astro com geração estática e TypeScript;
- Tailwind CSS 4.3, com abordagem mobile-first;
- Markdown para os guias e TypeScript para dados de contatos e locais;
- Leaflet + OpenStreetMap para o mapa;
- Fuse.js para busca local;
- Manifesto e Service Worker para instalação como PWA.

## Desenvolvimento

```bash
npm install
npm run dev
```

Para validar e gerar o conteúdo de publicação:

```bash
npm run build
```

Os arquivos prontos para publicação ficam em `dist/`. Eles podem ser servidos diretamente pelo Nginx na VPS.

## Atualização de conteúdo

- Guias: `src/content/guias/*.md`;
- Contatos: `src/data/contatos.ts`;
- Pontos do mapa: `src/data/locais.ts`;
- Links compartilhados: `src/data/links.ts`.

Ao atualizar prazos, valores, horários ou editais, altere também a data de revisão no frontmatter do guia. O TeOrientaCalouro deve apontar para fontes oficiais e nunca substituir os canais da UFPA.

## Publicação no Nginx

Após gerar o build, envie o conteúdo de `dist/` para o diretório do seu site. Uma configuração mínima deve usar `try_files $uri $uri/ =404;`, pois o Astro gera páginas estáticas em arquivos HTML.
