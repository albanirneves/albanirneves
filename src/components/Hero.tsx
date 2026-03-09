import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";
import AnimatedGrid from "./AnimatedGrid";

const WHATSAPP_URL =
  "https://wa.me/5518996473715?text=Olá!%20Gostaria%20de%20conversar%20sobre%20seus%20serviços.";

const ctaButtons = [
  { href: "#projetos", label: "Ver Projetos", variant: "primary" as const },
  { href: "#servicos", label: "Ver Serviços", variant: "outline" as const },
  { href: WHATSAPP_URL, label: "Entrar em Contato", variant: "secondary" as const, external: true },
];

const variantStyles = {
  primary:
    "bg-primary text-primary-foreground hover:shadow-[0_0_24px_hsl(var(--neon-cyan)/0.35)]",
  outline:
    "border border-secondary text-secondary hover:bg-secondary/10",
  secondary:
    "bg-secondary text-secondary-foreground hover:shadow-[0_0_24px_hsl(var(--neon-green)/0.35)]",
};

const Hero = () => {
  const yearsOfExperience = new Date().getFullYear() - 2009;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      <AnimatedGrid />

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile picture */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-2xl animate-pulse" />
            <div className="relative rounded-full p-[2px] bg-gradient-to-br from-primary via-accent to-secondary">
              <img
                src={profileImage}
                alt="Albanir Neves — Engenheiro de Software"
                className="rounded-full w-56 h-56 md:w-64 md:h-64 object-cover bg-background"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 glow-cyan">
                Albanir Neves
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-1">
                Engenheiro de Software
              </p>
              <p className="text-base md:text-lg text-secondary font-mono">
                Foco em Dados, IA e Automação
              </p>
            </div>

            <div className="space-y-2 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Profissional de TI com{" "}
                <span className="text-primary font-semibold">{yearsOfExperience} anos</span>{" "}
                de experiência criando soluções para o mercado.
              </p>
              <p>
                Trabalho com dados, automações, IA e integrações que tornam
                processos mais eficientes e inteligentes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              {ctaButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  {...(btn.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${variantStyles[btn.variant]}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
