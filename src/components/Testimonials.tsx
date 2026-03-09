import { Quote, Star, ExternalLink } from "lucide-react";

interface Testimonial {
  client: string;
  project: string;
  comment?: string;
  techs: string[];
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    // Com comentários (priorizados)
    {
      client: "Toni Varela",
      project: "Atualização de informações nos anúncios dos produtos do estoque",
      comment: "Excelente profissional, atento e cuidadoso, rapidamente entendeu o que era necessário fazer e executou com perfeição. Recomendo o trabalho dele.",
      techs: ["Microsoft Excel", "Atenção ao cliente"]
    },
    {
      client: "GhstDvlprs",
      project: "Criar Https para Api em Nodejs existente",
      comment: "Excelente profissional! Recomendo!",
      techs: ["JavaScript", "API", "Node.js", ".Net Core"]
    },
    {
      client: "GhstDvlprs",
      project: "Robo que consiga logar em uma webpage",
      comment: "Albanir ja é parceiro nossos dos projetos, muito bom!",
      techs: ["JavaScript", "Node.js"]
    },
    {
      client: "Marcos Custodio",
      project: "Criar Api de consumo a Banco de Dados",
      comment: "o cara é bom!",
      techs: ["JavaScript", "MySQL", "CSS", "HTML", "Node.js"]
    },
    {
      client: "Rafael Ribeiro",
      project: "Integrador Firebird e Lojaintegrada",
      comment: "Excelente profissional, muito rápido, domina completamente o assunto proposto.",
      techs: ["C", "C#", "DotNet", "Firebird"]
    },
    {
      client: "Pedro Balerine",
      project: "Web Scraper paramétrico",
      comment: "Muito rápido e prestativo! Recomendo!",
      techs: ["JavaScript", "HTML", "Node.js"]
    },
    {
      client: "Alan Silva",
      project: "Contratação direta para Albanir Neves",
      comment: "excelente profissional",
      techs: []
    },
    {
      client: "GhstDvlprs",
      project: "Webscrapper versao 2",
      comment: "Excelente profissional, agil e rapido e da um otimo suporte, mesmo depois de terminado o projeto.",
      techs: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
      client: "Alexander Burt",
      project: "Desenvolvedor backend Webscraping 4",
      comment: "Ótima experiência, fácil o contato, muito ágil na entrega.",
      techs: ["JavaScript", "MySQL", "PHP"]
    },
    {
      client: "GhstDvlprs",
      project: "Desenvolvimento de endpoint api Nodejs e Puppeteer Js para web scraping",
      comment: "Excelente profissional! Atendeu as minhas requisições de forma super rapida! Recomendo!",
      techs: ["JavaScript", "API", "Node.js", "MongoDB"]
    },
    {
      client: "S. Filipe",
      project: "Conexao Firebird 3.0 com Node.Js",
      comment: "Ótimo profissional e prestativo",
      techs: ["Node.js", "Firebird"]
    },
    {
      client: "Rodrigo Dantas",
      project: "Import JSON para MySQL",
      comment: "Desenvolvimento rápido e de qualidade!",
      techs: []
    },
    {
      client: "Andre Godinho",
      project: "Criação de arquivo Excel feito a partir do Javascript",
      comment: "Programador muito hábil e eficiente. Demonstrou conhecimento no projeto que propus e fácil comunicação. Com certeza farei mais trabalhos com ele",
      techs: ["JavaScript", "API"]
    },
    {
      client: "Wil",
      project: "Extração de dados de website (web scraping) para planilha excel.",
      comment: "Execução rápida e bem feita. Excelente profissional!",
      techs: ["HTML5", "MySQL", "PHP", "API", "CSS", "HTML", "JavaScript"]
    },
    {
      client: "Rodrigo Dantas",
      project: "Crawler 11º cartório",
      comment: "Profissional muito fácil de trabalhar, muito objetivo e rápido!",
      techs: ["JavaScript", "MySQL", "PHP"]
    },
    {
      client: "Alan Silva",
      project: "Javascript Botão leia mais",
      comment: "Atencioso, e entrega o projeto muito rápido!",
      techs: ["JavaScript", "MySQL", "PHP", "API", "C#", "CSS", "HTML", "HTML5", "WordPress"]
    },
    {
      client: "José Antônio O Junior",
      project: "Criação de Cartão virtual em Html5",
      comment: "Excelente trabalho, eficiente, boa comunicação, entregou no prazo solicitado atendendo todos os requisitos conforme foi proposto.",
      techs: ["CSS", "HTML", "HTML5", "JavaScript", "Responsive Web Design"]
    },
    {
      client: "Danilo",
      project: "Landing Pages",
      comment: "Albanir é muito prestativo e o melhor de tudo, se antecipou ao projeto e surpreendeu as expectativas. Fez uma landing page com muito profissionalismo.",
      techs: ["CSS", "HTML", "Responsive Web Design", "JavaScript"],
      time: "há 5 anos"
    },
    {
      client: "Jaqueline Selzler",
      project: "Criar Relatório através de banco de dados Firebird.",
      comment: "Profissional extremamente atencioso e célere. Fez um excelente trabalho, e precisando novamente com certeza o contratarei.",
      techs: ["JavaScript", "Node.js", "Firebird", "React.js"],
      time: "há 5 anos"
    },
    {
      client: "Rafael Yoshida",
      project: "Ajuda com um código do Javascript",
      comment: "Excelente, Rápido Efetivo e Eficaz, com tudo muito bem explicado, não poderia ser melhor",
      techs: ["JavaScript"],
      time: "há 6 anos"
    },
    {
      client: "Lucas",
      project: "Plugin e \"bot\" para web",
      comment: "O Albanir é um excelente profissional. Competente, pontual e com uma boa comunicação.",
      techs: ["HTML", "JavaScript"],
      time: "há 6 anos"
    },
    {
      client: "Lucas",
      project: "Bot para pegar Urls do Youtube",
      comment: "Excelente profissional! Tudo perfeito.",
      techs: ["JavaScript", "MySQL", "PHP", "Python"],
      time: "há 6 anos"
    },
    {
      client: "Gabriel Stano",
      project: "Contador Regressivo Baseado em Cookie",
      comment: "Ótimo entendeu o projeto e o realizou rapidamente",
      techs: ["HTML", "JavaScript", "PHP"],
      time: "há 10 anos"
    },
    // Sem comentários
    {
      client: "ALEXANDRE CAIRO",
      project: "Estou a procura de um programador que consiga criar um processo repetitivo",
      techs: ["HTML5", "MySQL", "PHP"],
      time: "há 4 anos"
    },
    {
      client: "Andre Beethoven Barros Araujo",
      project: "Scraper Vivareal",
      techs: ["HTML", "JavaScript", "MySQL", "PHP", "HTML5"],
      time: "há 4 anos"
    },
    {
      client: "luiz felipe braga da silva",
      project: "Script instagram",
      techs: ["HTML5", "MySQL", "PHP"],
      time: "há 5 anos"
    },
    {
      client: "Rodrigo Dantas",
      project: "Contratação direta para Albanir Neves",
      techs: [],
      time: "há 5 anos"
    },
    {
      client: "Plinio Gundim",
      project: "Web scraping para coleta de informações em e-commerce",
      techs: ["JavaScript", "MySQL", "PHP"],
      time: "há 5 anos"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center glow-green">
          <span className="text-secondary">&lt;</span> Depoimentos <span className="text-secondary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="terminal-window group hover:border-secondary transition-all duration-300 flex flex-col"
            >
              {testimonial.comment && (
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-secondary mb-2" />
                  <p className="text-foreground italic text-sm leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>
              )}

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-muted-foreground text-xs mb-1">
                  <span className="text-secondary">Cliente:</span> {testimonial.client}
                </p>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                  <span className="text-secondary">Projeto:</span> {testimonial.project}
                </p>

                {testimonial.techs.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {testimonial.techs.slice(0, 5).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 bg-background border border-border rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {testimonial.techs.length > 5 && (
                      <span className="px-2 py-0.5 text-muted-foreground text-xs">
                        +{testimonial.techs.length - 5}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-xs">{testimonial.time}</p>
                  <a
                    href="https://www.workana.com/freelancer/34f32c05be5acc0058eca7e0fc82737c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors text-xs font-semibold"
                  >
                    Ver no Workana <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
