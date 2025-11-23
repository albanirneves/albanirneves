import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma de Votação Online",
      description: "Sistema completo de votação online para concursos de beleza com segurança, validação de elegibilidade, registro único de votos e dashboard de apuração em tempo real. Inclui mecanismo antifraude, confirmação de voto, auditoria completa e relatórios exportáveis.",
      tech: ["Node.js", "n8n", "MySQL / PostgreSQL", "Webhooks", "Lovable"],
      link: "#"
    },
    {
      title: "Scraper de dados via proxy",
      description: "Sistema avançado de coleta automatizada de dados da internet utilizando Puppeteer com rotação inteligente de proxies. Implementa controle de sessão, cache com Redis, tratamento de bloqueios e captchas, logs detalhados e sistema de retry automático. Executa dentro de containers Docker para garantir isolamento e escalabilidade. Coleta milhares de registros diariamente de forma confiável e eficiente.",
      tech: ["Node.js", "Puppeteer", "Proxy", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "Atualização diária de planilha com milhões de registros",
      description: "Pipeline robusto que processa grandes volumes de dados do MySQL e atualiza automaticamente Google Sheets. Implementa processamento em lotes, validação de dados, tratamento de erros, logs de auditoria e execução via cronjob. Otimizado para lidar com milhões de linhas mantendo performance e integridade. Inclui sistema de notificação em caso de falhas e backup automático dos dados processados.",
      tech: ["Node.js", "MySQL", "Google Sheets API", "Cronjob"],
      link: "#"
    },
    {
      title: "RAG para agente inteligente no n8n",
      description: "Implementação completa de Retrieval-Augmented Generation utilizando Supabase como base vetorial. O sistema realiza embedding de documentos, busca semântica eficiente e fornece contexto relevante para respostas precisas. Integrado ao n8n para automação de fluxos conversacionais. Suporta múltiplas fontes de conhecimento, atualização dinâmica da base e fine-tuning de relevância. Utilizado em chatbots corporativos com alta taxa de assertividade.",
      tech: ["Supabase", "embeddings", "n8n", "IA", "pgvector"],
      link: "#"
    },
    {
      title: "Manipulação de Dados em R",
      description: "Scripts avançados em R para análise exploratória, transformação e processamento de grandes datasets. Implementa joins complexos, agregações, filtros condicionais, limpeza de dados e pipelines otimizados com dplyr e data.table. Geração de visualizações estatísticas, relatórios automatizados em RMarkdown e exportação para diversos formatos. Processa milhões de registros com eficiência usando paralelização e técnicas de otimização de memória.",
      tech: ["R", "dplyr", "data.table", "RMarkdown", "ggplot2"],
      link: "#"
    },
    {
      title: "Ferramentas internas empresariais",
      description: "Conjunto de microserviços e scripts desenvolvidos para automação de processos internos das empresas. Inclui integrações entre sistemas legados, APIs RESTful customizadas, dashboards de monitoramento, ETL de dados, sincronização entre bases, geração de relatórios automatizados e ferramentas de deploy. Todos containerizados com Docker Compose para fácil manutenção e escalabilidade. Reduziu em 70% o tempo gasto em tarefas manuais repetitivas.",
      tech: ["Node.js", "Docker", "MySQL", "REST APIs", "Docker Compose"],
      link: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-purple">
          <span className="text-accent">&lt;</span> Projetos <span className="text-accent">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="terminal-window group hover:border-accent transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-background border border-border rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold mt-auto"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
