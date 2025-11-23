import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* CTA Button */}
        <div className="text-center mb-8">
          <a
            href="https://wa.me/5518996473715?text=Olá!%20Gostaria%20de%20conversar%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:shadow-xl hover:shadow-secondary/50 transition-all duration-300 font-bold text-lg"
          >
            Entre em contato comigo agora mesmo!
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Albanir Neves
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              ALBANIR ANTONIO MARTINS DAS NEVES TECNOLOGIA DA INFORMAÇÃO LTDA
            </p>
            <p className="text-xs text-muted-foreground/70">
              CNPJ: 53.192.960/0001-67
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/albanirneves/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/albanirneves"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
