import { ExternalLink } from "lucide-react";
import samosLogo from "@/assets/samos-logo.png";
import iconatusLogo from "@/assets/iconatus-logo.svg";
import leonaLogo from "@/assets/leonavity-logo.jpg";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const partners = [
  { name: "Iconatus Inteligência Imobiliária", logo: iconatusLogo, url: "https://iconatus.com.br/" },
  { name: "Samos Sistemas", logo: samosLogo, url: "https://samos.com.br/" },
  { name: "Leona Vity", logo: leonaLogo, url: "https://www.instagram.com/leonavity/" },
];

const Partners = () => (
  <section id="parceiros" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading glowColor="cyan" bracketColor="primary">
        Parceiros
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner, idx) => (
          <ScrollReveal key={partner.name} delay={idx * 0.1}>
            <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
              <GlassCard className="flex flex-col items-center justify-center text-center group">
                <div className="w-full h-28 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <div className="flex items-center gap-1.5 text-primary text-sm">
                  <span>Visitar</span>
                  <ExternalLink size={14} />
                </div>
              </GlassCard>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
