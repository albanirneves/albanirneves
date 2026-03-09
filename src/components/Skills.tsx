import { Code2, Database, Cloud, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens e Dados",
    icon: Code2,
    iconColor: "text-primary",
    skills: ["Node.js", "JavaScript", "R", "SQL", "Python", "Firebird", "MySQL", "Postgres", "Processamento de dados em larga escala"],
  },
  {
    title: "Infra / DevOps / Ferramentas",
    icon: Database,
    iconColor: "text-secondary",
    skills: ["Docker", "Docker Compose", "Redis", "Rtools", "Git", "Linux", "Criação de APIs", "Sencha ExtJS", "Kubernetes", "CI/CD", "Gitlab", "Supabase"],
  },
  {
    title: "IA / Automação",
    icon: Bot,
    iconColor: "text-accent",
    skills: ["RAG", "Agentes de Atendimento no WhatsApp", "Automatização de rotinas", "OpenAI", "Agentes conversacionais", "Lovable", "Manus AI", "Claude", "DeepSeek", "Soluções para WhatsApp", "UAZAPI", "EvolutionAPI", "WABA"],
  },
  {
    title: "Cloud / Outros",
    icon: Cloud,
    iconColor: "text-primary",
    skills: ["Integração com Google Cloud APIs", "Manipulação e análise de dados", "Digital Ocean", "Hostinger", "Coolify"],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <GlassCard>
      <div className="flex items-center gap-3 mb-5">
        <Icon className={`w-6 h-6 ${category.iconColor}`} />
        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <TechBadge key={skill} label={skill} />
        ))}
      </div>
    </GlassCard>
  );
};

const Skills = () => (
  <section id="habilidades" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading glowColor="green" bracketColor="secondary">
        Habilidades
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <ScrollReveal key={category.title} delay={idx * 0.1}>
            <SkillCard category={category} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
