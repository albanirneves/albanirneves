import { Code2, Database, Cloud, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens e Dados",
      icon: Code2,
      color: "primary",
      skills: ["Node.js", "JavaScript", "R", "SQL (MySQL, Postgres, Firebird)", "Python", "Sencha ExtJS"]
    },
    {
      title: "Infra / DevOps / Ferramentas",
      icon: Database,
      color: "secondary",
      skills: ["Docker", "Docker Compose", "Redis", "Rtools", "Git", "Linux", "Criação de APIs", "Proxy + scraping avançado com Puppeteer e Axios"]
    },
    {
      title: "IA / Automação",
      icon: Bot,
      color: "accent",
      skills: ["RAG com Supabase", "Agentes de IA no n8n", "Integrações com modelos LLM", "Processos automáticos com cronjobs"]
    },
    {
      title: "Cloud/Outros",
      icon: Cloud,
      color: "primary",
      skills: ["Integração com Google Cloud APIs", "Processamento de dados em larga escala", "Manipulação e análise de dados"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-green">
          <span className="text-secondary">&lt;</span> Habilidades <span className="text-secondary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="terminal-window group hover:border-neon-cyan transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 text-neon-${category.color}`} />
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-background border border-border rounded text-sm hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
