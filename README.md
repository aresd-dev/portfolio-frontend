# Portfólio — Matheus Guilherme Dantas de Arruda

Portfólio pessoal construído em React, reunindo projetos desenvolvidos ao
longo do curso. O site tem quatro seções navegáveis — **Sobre Mim**,
**Projetos**, **Habilidades** e **Contato** — além de uma página inicial com
resumo profissional.

🔗 **Acesse a versão online:** _adicione aqui o link depois do deploy (veja o
passo a passo abaixo)_

## Sobre o projeto

- **React** (Vite) com componentes organizados por responsabilidade
- **CSS Modules** para estilização isolada por componente
- Navegação de página única, com scroll suave e destaque automático da seção
  ativa (usando `IntersectionObserver` + hooks)
- Totalmente responsivo (mobile e desktop), com menu de navegação adaptado
  para telas pequenas
- Formulário de contato funcional (abre o cliente de e-mail com a mensagem
  preenchida — não depende de backend)

## Projetos apresentados

1. **Diário de Bordo — otimização de performance**
   PWA para registrar atividades diárias (HTML, CSS e JavaScript puro), com
   um processo completo de otimização de performance documentado e validado
   com Lighthouse (Total Blocking Time reduzido em 88%, mantendo nota 100 em
   todas as categorias).
   Repositório: https://github.com/aresd-dev/frontend-performance

2. **Sistema de Pedidos com Micro Frontends**
   Aplicação dividida em três projetos Next.js independentes, integrados em
   tempo de execução com Webpack Module Federation e comunicação via eventos
   do navegador.
   Repositório: https://github.com/aresd-dev/frontend-microfrontends

3. **Lista de Tarefas**
   Aplicação Next.js (App Router) com TypeScript, testes automatizados
   (Jest + Testing Library) e pipeline de CI/CD no GitHub Actions com deploy
   automático no Vercel.
   Repositório: https://github.com/aresd-dev/lista-tarefas
   Demo: https://lista-tarefas-bnalwz612-ares-projects-8460dcad.vercel.app

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/aresd-dev/<nome-do-repositorio>.git
cd <nome-do-repositorio>

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

Para gerar a versão de produção localmente:

```bash
npm run build    # gera a pasta dist/
npm run preview  # serve a build de produção localmente
```


## Estrutura do projeto

```
src/
  assets/          Imagens (foto de perfil, screenshots de projetos)
  data/            Conteúdo editável: profile.js, projects.js, skills.js
  components/
    Navbar/        Navegação fixa, com destaque da seção ativa
    Hero/           Página inicial / resumo profissional
    About/         Sobre Mim (apresentação, foto e contato rápido)
    Projects/      Lista de projetos + ProjectCard reutilizável
    Skills/        Habilidades agrupadas por categoria
    Contact/       Links diretos + formulário de contato
    Footer/
  App.jsx          Monta as seções e controla a navegação ativa
  index.css        Tokens de design (cores, tipografia) e reset global
```
