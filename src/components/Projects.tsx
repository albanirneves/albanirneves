import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Agente de Atendimento para Salão de Cabeleireiros",
    description: "Sistema inteligente de atendimento automatizado via WhatsApp integrado com Supabase para gestão de dados e n8n para orquestração de fluxos. Utiliza IA para compreender solicitações dos clientes, realizar agendamentos, responder dúvidas sobre serviços e preços.",
    tech: ["WhatsApp", "Supabase", "n8n", "IA", "RAG"],
  },
  {
    title: "Sistema para Clínica Escola",
    description: "Plataforma completa de gestão para clínica escola de osteopatia centralizando operações acadêmicas e administrativas. Inclui módulo financeiro, agendamento inteligente, gestão de alunos e professores, prontuário eletrônico.",
    tech: ["React", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
    link: "https://www.youtube.com/watch?v=osHqlvSIx1k",
  },
  {
    title: "SAAS para Atendimento em Pet Shop (Em andamento)",
    description: "Plataforma completa em desenvolvimento para gestão de atendimento e relacionamento com clientes de pet shops. Sistema multicanal com agendamento inteligente, prontuário digital dos pets.",
    tech: ["Node.js", "WhatsApp", "Supabase", "n8n", "IA"],
    link: "https://zappet.com.br",
  },
  {
    title: "Sistema de Atendimento para Franquia de Oficinas de Faróis",
    description: "Solução corporativa de atendimento centralizado para rede de franquias especializada em restauração e manutenção de faróis automotivos.",
    tech: ["WhatsApp", "Node.js", "Supabase", "n8n", "IA"],
  },
  {
    title: "Plataforma de Votação Online",
    description: "Sistema completo de votação online para concursos com segurança, validação de elegibilidade, registro único de votos e dashboard de apuração em tempo real.",
    tech: ["Node.js", "n8n", "MySQL / PostgreSQL", "Webhooks", "Lovable"],
    link: "https://votopopular.lovable.app/",
  },
  {
    title: "Scraper de dados via proxy",
    description: "Sistema avançado de coleta automatizada de dados utilizando Puppeteer com rotação inteligente de proxies. Implementa cache com Redis, tratamento de bloqueios e sistema de retry.",
    tech: ["Node.js", "Puppeteer", "Proxy", "Redis", "Docker"],
  },
  {
    title: "RAG para agente inteligente no n8n",
    description: "Implementação completa de Retrieval-Augmented Generation utilizando Supabase como base vetorial. Busca semântica eficiente e contexto relevante para respostas precisas.",
    tech: ["Supabase", "embeddings", "n8n", "IA", "pgvector"],
  },
  {
    title: "Manipulação de Dados em R",
    description: "Scripts avançados em R para análise exploratória, transformação e processamento de grandes datasets com dplyr e data.table.",
    tech: ["R", "dplyr", "data.table", "Parquet", "CSV", "JSON"],
  },
  {
    title: "Ferramentas internas empresariais",
    description: "Conjunto de microserviços para automação de processos internos. Inclui integrações entre sistemas legados, APIs RESTful, dashboards e ETL de dados.",
    tech: ["Node.js", "Docker", "MySQL", "REST APIs", "Docker Compose"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <ScrollReveal delay={index * 0.08}>
    <GlassCard className="flex flex-col h-full">
      <h3 className="text-lg font-bold mb-3 text-foreground">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-semibold mt-auto"
        >
          Ver projeto <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </GlassCard>
  </ScrollReveal>
);

const Projects = () => (
  <section id="projetos" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading glowColor="purple" bracketColor="accent">
        Projetos
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
