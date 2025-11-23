import { Wrench, BarChart, Workflow, Bot, Link2, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Desenvolvimento de sistemas sob medida",
      description: "Criação de soluções personalizadas para suas necessidades específicas"
    },
    {
      icon: BarChart,
      title: "Consultoria de dados e análises",
      description: "Transforme dados em insights acionáveis para seu negócio"
    },
    {
      icon: Workflow,
      title: "Automação de processos",
      description: "Otimize operações e economize tempo com automações inteligentes"
    },
    {
      icon: Bot,
      title: "Criação de agentes de IA",
      description: "Desenvolva assistentes inteligentes para atendimento e processos"
    },
    {
      icon: Link2,
      title: "Integrações entre sistemas",
      description: "Conecte suas ferramentas e plataformas de forma eficiente"
    },
    {
      icon: Database,
      title: "Scraping e coleta de dados",
      description: "Extraia dados da web de forma estruturada e confiável"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-cyan">
          <span className="text-primary">&lt;</span> Serviços <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="terminal-window group hover:border-primary transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
