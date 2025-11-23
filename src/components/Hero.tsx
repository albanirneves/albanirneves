import profileImage from "@/assets/profile.png";

const Hero = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2009;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="terminal-window">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={profileImage}
                alt="Albanir Neves"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-primary shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-3 glow-cyan">
                  Albanir Neves
                </h1>
                <p className="text-xl md:text-2xl text-secondary glow-green">
                  Desenvolvedor de Software | Especialista em Dados e Automação
                </p>
              </div>

              <div className="terminal-prompt space-y-2 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Sou desenvolvedor de software com <span className="text-primary font-bold">{yearsOfExperience} anos</span> de experiência criando soluções para o mercado.
                </p>
                <p>
                  Trabalho com dados, automações, IA e integrações que tornam processos mais eficientes e inteligentes.
                </p>
                <p>
                  Adoro resolver problemas complexos usando tecnologia.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <a
                  href="#projetos"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
                >
                  Ver Projetos
                </a>
                <a
                  href="#servicos"
                  className="px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-semibold"
                >
                  Ver Serviços
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
