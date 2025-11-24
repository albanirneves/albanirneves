import { Code2, Database, Cloud, Bot } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens e Dados",
      icon: Code2,
      color: "primary",
      skills: ["Node.js", "JavaScript", "R", "SQL", "Python", "Firebird", "MySQL", "Postgres"]
    },
    {
      title: "Infra / DevOps / Ferramentas",
      icon: Database,
      color: "secondary",
      skills: ["Docker", "Docker Compose", "Redis", "Rtools", "Git", "Linux", "Criação de APIs", "Sencha ExtJS", "Kubernetes", "CI/CD", "Gitlab", "Supabase"]
    },
    {
      title: "IA / Automação",
      icon: Bot,
      color: "accent",
      skills: ["RAG", "Agentes de Atendimento no WhatsApp", "Automatização de rotinas", "OpenAI", "Agentes conversacionais", "Lovable", "Manus AI", "Claude", "DeepSeek", "Soluções para WhatsApp", "UAZAPI", "EvolutionAPI", "WABA"]
    },
    {
      title: "Cloud/Outros",
      icon: Cloud,
      color: "primary",
      skills: ["Integração com Google Cloud APIs", "Processamento de dados em larga escala", "Manipulação e análise de dados", "Digital Ocean", "Hostinger", "Coolify"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center glow-green">
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
