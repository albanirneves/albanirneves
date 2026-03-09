import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const highlights = [
  "Instrutor de Informática",
  <>Me tornei <a href="https://www.sencha.com/mvp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline decoration-primary/40">Sencha MVP</a> pelo meu trabalho com Sencha ExtJS</>,
  "8 anos desenvolvendo sistemas ERP para gestão empresarial",
  null, // placeholder for dynamic year
  "Especialista em scraping, RAGs, agentes de IA e pipelines de dados",
  "Forte experiência com WhatsApp: automações, APIs, n8n e atendimento inteligente",
  "Infra: Docker, Kubernetes, otimização de queries e processamento em larga escala",
  "Desenvolvimento de APIs complexas e seguras",
];

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2009;
  const yearsInCurrentRole = new Date().getFullYear() - 2021;

  const items = highlights.map((item, i) =>
    item === null
      ? `${yearsInCurrentRole} anos criando ferramentas avançadas de dados e automação`
      : item
  );

  return (
    <section id="sobre" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <SectionHeading glowColor="cyan" bracketColor="primary">
          Sobre Mim
        </SectionHeading>

        <ScrollReveal>
          <GlassCard hoverable={false} className="space-y-6">
            <p className="terminal-prompt text-lg font-medium">
              {yearsOfExperience}+ anos transformando desafios em soluções tecnológicas eficientes.
            </p>

            <ul className="space-y-3 text-muted-foreground" role="list">
              {items.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-primary mt-0.5 shrink-0 font-mono">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-secondary font-semibold text-lg pt-2">
              Foco total em criar soluções que realmente funcionam e resolvem problemas reais.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
