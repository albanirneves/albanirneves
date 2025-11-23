import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma de Votação Online",
      description: "Desenvolvi um sistema completo de votação online para concursos de beleza, permitindo que usuários votem com segurança. O sistema identifica o usuário, valida elegibilidade, registra votos de forma unívoca e gera relatórios automáticos de apuração.",
      features: [
        "Validação para impedir votos duplicados",
        "Confirmação de voto e auditoria de logs",
        "Dashboard de apuração em tempo real",
        "Relatórios finais exportáveis",
        "Mecanismo antifraude com registro único por pessoa",
        "Automação do fluxo completo"
      ],
      tech: ["Node.js", "n8n", "MySQL / PostgreSQL", "Webhooks", "Lovable"],
      result: "Um sistema de votação simples, confiável, acessível e extremamente prático — com excelente taxa de engajamento e adoção por parte dos votantes, eliminando a necessidade de plataformas externas e garantindo segurança e rastreabilidade total.",
      link: "#"
    },
    {
      title: "Scraper de dados via proxy",
      description: "Automação avançada usando Puppeteer + proxies rotativos para coleta confiável de dados da internet.",
      tech: ["Node.js", "Puppeteer", "Proxy", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "Atualização diária de planilha com milhões de registros",
      description: "Pipeline Node.js + MySQL + Google Sheets, sobrescrevendo dados diariamente.",
      tech: ["Node.js", "MySQL", "Google Sheets API"],
      link: "#"
    },
    {
      title: "RAG para agente inteligente no n8n",
      description: "Criação de um RAG completo no Supabase para garantir respostas contextuais.",
      tech: ["Supabase", "embeddings", "n8n", "IA"],
      link: "#"
    },
    {
      title: "Manipulação de Dados em R",
      description: "Manipulação de grandes volumes, joins, counts, filtros e pipelines otimizados.",
      tech: ["R", "dplyr", "queries complexas"],
      link: "#"
    },
    {
      title: "Ferramentas internas empresariais",
      description: "Diversos scripts e micro-serviços para processamento, análise e integração.",
      tech: ["Node.js", "Docker", "MySQL"],
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

              {project.features && (
                <ul className="text-xs text-muted-foreground mb-4 space-y-1 list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}

              {project.result && (
                <p className="text-xs text-secondary mb-4 italic">
                  {project.result}
                </p>
              )}

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
