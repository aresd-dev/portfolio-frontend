// Cada projeto: título, descrição, stack, links e (opcional) imagem/destaque.
// Para adicionar um novo projeto, basta acrescentar um objeto novo ao array.
const projects = [
  {
    id: "diario-de-bordo",
    title: "Diário de Bordo — otimização de performance",
    description:
      "PWA para registrar, listar e remover atividades diárias, com persistência em localStorage e funcionamento totalmente offline após o primeiro acesso. Construída em HTML, CSS e JavaScript puro (sem framework), a versão final documenta um processo completo de otimização: reaproveitamento de formatadores de data, renderização em lote com DocumentFragment, delegação de eventos, content-visibility para listas longas, compressão de imagens e minificação de assets.",
    highlight: "TBT −88% · nota 100 mantida no Lighthouse",
    tech: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker", "Lighthouse"],
    repoUrl: "https://github.com/aresd-dev/frontend-performance",
    image: null,
  },
  {
    id: "microfrontends",
    title: "Sistema de Pedidos com Micro Frontends",
    description:
      "Aplicação de pedidos dividida em três projetos Next.js independentes — container, cardápio e pedido — integrados em tempo de execução com Webpack Module Federation. Os micro frontends se comunicam por eventos nativos do navegador, sem compartilhar código entre si, simulando um cenário real de times trabalhando em aplicações desacopladas.",
    highlight: "3 apps Next.js integradas via Module Federation",
    tech: ["Next.js", "React", "Webpack Module Federation", "CSS Modules"],
    repoUrl: "https://github.com/aresd-dev/frontend-microfrontends",
    image: null,
  },
  {
    id: "lista-tarefas",
    title: "Lista de Tarefas",
    description:
      "Aplicação de lista de tarefas construída com Next.js (App Router) e TypeScript, com testes unitários usando Jest e Testing Library. Um pipeline de CI/CD no GitHub Actions roda lint, testes e build a cada push, publicando automaticamente no Vercel sempre que tudo passa na branch principal.",
    highlight: "Lint, testes e build automatizados em CI/CD",
    tech: ["Next.js", "TypeScript", "Jest", "Testing Library", "GitHub Actions"],
    repoUrl: "https://github.com/aresd-dev/lista-tarefas",
    demoUrl: "https://lista-tarefas-bnalwz612-ares-projects-8460dcad.vercel.app",
    image: null,
  },
];

export default projects;
