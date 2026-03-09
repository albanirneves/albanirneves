import { Wrench, BarChart, Workflow, Bot, Link2, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Wrench, title: "Desenvolvimento de sistemas sob medida", description: "Criação de soluções personalizadas para suas necessidades específicas" },
  { icon: BarChart, title: "Consultoria de dados e análises", description: "Transforme dados em insights acionáveis para seu negócio" },
  { icon: Workflow, title: "Automação de processos", description: "Otimize operações e economize tempo com automações inteligentes" },
  { icon: Bot, title: "Criação de agentes de IA", description: "Desenvolva assistentes inteligentes para atendimento e processos" },
  { icon: Link2, title: "Integrações entre sistemas", description: "Conecte suas ferramentas e plataformas de forma eficiente" },
  { icon: Database, title: "Scraping e coleta de dados", description: "Extraia dados da web de forma estruturada e confiável" },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  return (
    <ScrollReveal delay={index * 0.08}>
      <GlassCard className="group">
        <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
        <p className="text-muted-foreground text-sm">{service.description}</p>
      </GlassCard>
    </ScrollReveal>
  );
};

const Services = () => (
  <section id="servicos" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading glowColor="cyan" bracketColor="primary">
        Serviços
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} service={service} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
