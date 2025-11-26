import samosLogo from "@/assets/samos-logo.png";
import iconatusLogo from "@/assets/iconatus-logo.svg";
import leonaLogo from "@/assets/leonavity-logo.jpg";
import { ExternalLink } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Iconatus Inteligência Imobiliária",
      logo: iconatusLogo,
      url: "https://iconatus.com.br/"
    },
    {
      name: "Samos Sistemas",
      logo: samosLogo,
      url: "https://samos.com.br/"
    },
    {
      name: "Leona Vity",
      logo: leonaLogo,
      url: "https://www.instagram.com/leonavity/"
    }
  ];

  return (
    <section id="parceiros" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-cyan">
          &lt; Parceiros /&gt;
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-window group hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-8"
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                {partner.name}
              </h3>
              <div className="flex items-center gap-2 text-primary group-hover:glow-cyan transition-all">
                <span className="text-sm">Visitar</span>
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
