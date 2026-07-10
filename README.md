np# Portfólio — Jasiel Rasec

Reconstrução do seu portfólio original (HTML/CSS puro) como uma aplicação **React + TypeScript + Vite**, mantendo a identidade visual (tema escuro, neon ciano/magenta/roxo, tipografia Orbitron) e reorganizando tudo em componentes reutilizáveis e tipados.

## O que mudou em relação ao HTML original

- **Componentização**: cada seção (Header, Hero, About, Projects, Certifications, Contact, Footer) virou um componente React isolado, com seu próprio CSS.
- **Dados tipados**: projetos, certificações, links sociais e tecnologias agora vivem em `src/data/*.ts`, tipados via `src/types/index.ts`. Adicionar um novo projeto ou certificação é só adicionar um objeto no array — não precisa mexer em HTML.
- **Menu mobile real**: o antigo hack de `<input type="checkbox">` virou um `useState` de verdade, com `aria-expanded` correto.
- **Carrossel de certificações funcional**: as setas agora de fato rolam o carrossel (`scrollBy`), o que não existia no HTML original.
- **CSS consolidado**: variáveis de cor/tipografia centralizadas em `src/styles/variables.css`; removi duplicações que existiam no `projects.css` original.
- **Acessibilidade**: `aria-label`, `alt`, foco visível no teclado.

## Estrutura

```
src/
  components/
    Header/       Hero/         About/
    Projects/     Certifications/  Contact/  Footer/
  data/            → projects.ts, certifications.ts, social.ts, technologies.ts, navigation.ts
  types/           → interfaces TypeScript
  styles/          → reset.css, variables.css, base.css
  App.tsx
  main.tsx
public/
  images/          → coloque aqui suas imagens (mesma estrutura do site antigo)
```

## Antes de rodar: adicione suas imagens

Este projeto não inclui as imagens (elas não foram enviadas). Copie a pasta `images/` do seu site atual para dentro de `public/images/`, mantendo os mesmos nomes de arquivo:

```
public/
  favicon.ico
  images/
    logo/logo.svg
    profile.jfif
    landing-page-super-mario.JPG
    aura-studio.JPG
    icons/
      github.svg, linkedin.svg, instagram.svg, email.svg,
      hamburguer.svg, mouse.svg,
      react-icon.svg, typescript-icon.svg, nodejs-icon.svg,
      postgresql-icon.svg, nextjs-icon.svg, reactnative-icon.svg
    certifications/
      frontend_certification.png
      n8n_certification.png
```

Tudo dentro de `public/` é servido a partir da raiz (`/images/...`), exatamente como no site original.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages (mesmo domínio do seu portfólio atual)

1. Em `vite.config.ts`, ajuste `base` para `'/portifolio-pessoal/'` (ou o nome do seu repositório).
2. `npm run build` gera a pasta `dist/`.
3. Publique o conteúdo de `dist/` na branch `gh-pages`, ou use a action oficial `actions/deploy-pages`.

## Próximos passos sugeridos

- Trocar `<img>` por `<picture>`/formatos `webp` para os prints dos projetos, ganhando performance.
- Adicionar testes com Vitest + Testing Library para os componentes de dados (Projects, Certifications).
- Se o carrossel de certificações crescer muito, considerar paginação por pontos (dots) além das setas.
