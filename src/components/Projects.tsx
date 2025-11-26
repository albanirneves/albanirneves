import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agente de Atendimento para Salão de Cabeleireiros",
      description: "Sistema inteligente de atendimento automatizado via WhatsApp integrado com Supabase para gestão de dados e n8n para orquestração de fluxos. Utiliza IA para compreender solicitações dos clientes, realizar agendamentos, responder dúvidas sobre serviços e preços, enviar lembretes automáticos e coletar feedback. Implementa RAG para consultar base de conhecimento sobre procedimentos e produtos. Interface conversacional natural com confirmações, reagendamentos e histórico completo de interações armazenado no banco de dados.",
      tech: ["WhatsApp", "Supabase", "n8n", "IA", "RAG"]
    },
    {
      title: "Sistema para Clínica Escola",
      description: "Plataforma completa de gestão para clínica escola de osteopatia centralizando operações acadêmicas e administrativas. Inclui módulo financeiro, agendamento inteligente, gestão de alunos e professores, prontuário eletrônico, área do aluno com estudos de caso, central de ajuda, relatórios gerenciais e dashboard administrativo. Sistema de notificações automáticas e controle de permissões por perfil.",
      tech: ["React", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
      link: "https://www.youtube.com/watch?v=osHqlvSIx1k"
    },
    {
      title: "SAAS para Atendimento em Pet Shop (Em andamento)",
      description: "Plataforma completa em desenvolvimento para gestão de atendimento e relacionamento com clientes de pet shops. Sistema multicanal com agendamento inteligente, prontuário digital dos pets, controle de vacinas e medicamentos, automação de lembretes via WhatsApp, gestão financeira e relatórios analíticos. Arquitetura escalável preparada para multi-tenant com personalização por estabelecimento.",
      tech: ["Node.js", "WhatsApp", "Supabase", "n8n", "IA"],
      link: "https://zappet.com.br"
    },
    {
      title: "Sistema de Atendimento para Franquia de Oficinas de Faróis",
      description: "Solução corporativa de atendimento centralizado para rede de franquias especializada em restauração e manutenção de faróis automotivos. Sistema unificado de agendamento, triagem automática de serviços via WhatsApp, chatbot inteligente para atendimento inicial e FAQ.",
      tech: ["WhatsApp", "Node.js", "Supabase", "n8n", "IA"]
    },
    {
      title: "Plataforma de Votação Online",
      description: "Sistema completo de votação online para concursos de beleza com segurança, validação de elegibilidade, registro único de votos e dashboard de apuração em tempo real. Inclui mecanismo antifraude, confirmação de voto, auditoria completa e relatórios exportáveis.",
      tech: ["Node.js", "n8n", "MySQL / PostgreSQL", "Webhooks", "Lovable"],
      link: "https://votopopular.lovable.app/"
    },
    {
      title: "Scraper de dados via proxy",
      description: "Sistema avançado de coleta automatizada de dados da internet utilizando Puppeteer com rotação inteligente de proxies. Implementa controle de sessão, cache com Redis, tratamento de bloqueios e captchas, logs detalhados e sistema de retry automático. Executa dentro de containers Docker para garantir isolamento e escalabilidade. Coleta milhares de registros diariamente de forma confiável e eficiente.",
      tech: ["Node.js", "Puppeteer", "Proxy", "Redis", "Docker"]
    },
    {
      title: "RAG para agente inteligente no n8n",
      description: "Implementação completa de Retrieval-Augmented Generation utilizando Supabase como base vetorial. O sistema realiza embedding de documentos, busca semântica eficiente e fornece contexto relevante para respostas precisas. Integrado ao n8n para automação de fluxos conversacionais. Suporta múltiplas fontes de conhecimento, atualização dinâmica da base e fine-tuning de relevância. Utilizado em chatbots corporativos com alta taxa de assertividade.",
      tech: ["Supabase", "embeddings", "n8n", "IA", "pgvector"]
    },
    {
      title: "Manipulação de Dados em R",
      description: "Scripts avançados em R para análise exploratória, transformação e processamento de grandes datasets. Implementa joins complexos, agregações, filtros condicionais, limpeza de dados e pipelines otimizados com dplyr e data.table. Geração de visualizações estatísticas e exportação para diversos formatos. Processa milhões de registros com eficiência usando paralelização e técnicas de otimização de memória.",
      tech: ["R", "dplyr", "data.table", "Parquet", "CSV", "JSON"]
    },
    {
      title: "Ferramentas internas empresariais",
      description: "Conjunto de microserviços e scripts desenvolvidos para automação de processos internos das empresas. Inclui integrações entre sistemas legados, APIs RESTful customizadas, dashboards de monitoramento, ETL de dados, sincronização entre bases, geração de relatórios automatizados e ferramentas de deploy. Todos containerizados com Docker Compose para fácil manutenção e escalabilidade. Reduziu em 70% o tempo gasto em tarefas manuais repetitivas.",
      tech: ["Node.js", "Docker", "MySQL", "REST APIs", "Docker Compose"]
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center glow-purple">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold mt-2"
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
