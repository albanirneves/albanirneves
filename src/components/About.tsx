const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsInCurrentRole = currentYear - 2021;

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-cyan">
          <span className="text-primary">&lt;</span> Sobre Mim <span className="text-primary">/&gt;</span>
        </h2>

        <div className="terminal-window space-y-6 text-lg leading-relaxed">
          <p className="terminal-prompt">
            Atuo há mais de 16 anos na área de tecnologia, trabalhando com tecnologia aplicada a dados, integrações, sistemas ERP, automações e inteligência artificial.
          </p>

          <p>
            Inicialmente fui professor de informática e depois passei 8 anos desenvolvendo soluções para gestão empresarial, onde me tornei{" "}
            <a
              href="https://www.sencha.com/mvp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors underline decoration-primary/50 hover:decoration-secondary"
            >
              Sencha MVP
            </a>
            {" "}e, há {yearsInCurrentRole} anos crio ferramentas de software avançadas para gestão e integração de dados.
          </p>

          <p>
            Tenho experiência com scraping, RAGs em Supabase, construção de agentes inteligentes, pipelines de dados, consultas complexas em R, processamento de grandes volumes, otimizações e infra com Docker e Kubernetes.
          </p>

          <p>
            Tenho forte experiência com integrações avançadas usando <span className="text-secondary font-semibold">WhatsApp</span> principalmente para automações e atendimento inteligente. Já trabalhei com fluxos completos envolvendo integrações via n8n, webhooks, APIs oficiais, agentes de IA, automações de atendimento e fluxos complexos de comunicação.
          </p>

          <p>
            Desenvolvo soluções completas que envolvem lógica de negócios, automações inteligentes, conectividade com banco de dados, IA (incluindo RAG), controle de sessão e monitoramento em ambiente real.
          </p>

          <p className="text-primary font-semibold pt-4">
            Sou focado, direto e gosto de criar soluções eficientes, rápidas e que realmente resolvem problemas reais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
