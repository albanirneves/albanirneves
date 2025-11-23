const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInCurrentRole = currentYear - 2021;

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center glow-cyan">
          <span className="text-primary">&lt;</span> Sobre Mim <span className="text-primary">/&gt;</span>
        </h2>

        <div className="terminal-window space-y-6">
          <p className="terminal-prompt text-lg">
            16+ anos transformando desafios em soluções tecnológicas eficientes.
          </p>

          <div className="space-y-3 text-muted-foreground">
            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>Instrutor de Informática e <a href="https://www.sencha.com/mvp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline">Sencha MVP</a></p>
            </div>

            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>8 anos desenvolvendo sistemas ERP para gestão empresarial</p>
            </div>

            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>{yearsInCurrentRole} anos criando ferramentas avançadas de dados e automação</p>
            </div>

            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>Especialista em scraping, RAGs, agentes de IA e pipelines de dados</p>
            </div>

            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>Forte experiência com WhatsApp: automações, APIs, n8n e atendimento inteligente</p>
            </div>

            <div className="flex gap-3">
              <span className="text-primary">▹</span>
              <p>Infra: Docker, Kubernetes, otimização de queries e processamento em larga escala</p>
            </div>
          </div>

          <p className="text-secondary font-semibold text-lg pt-4">
            Foco total em criar soluções que realmente funcionam e resolvem problemas reais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
