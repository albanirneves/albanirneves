import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Aqui você pode integrar com um backend ou serviço de email
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    // Limpar formulário
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-green">
          <span className="text-secondary">&lt;</span> Contato <span className="text-secondary">/&gt;</span>
        </h2>

        <div className="terminal-window">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 terminal-prompt">
                Nome
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border focus:border-primary"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 terminal-prompt">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border focus:border-primary"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 terminal-prompt">
                Mensagem
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary min-h-32"
                placeholder="Sua mensagem..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Enviar Mensagem
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-4">Ou entre em contato por:</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:albanirneves@gmail.com"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/albanirneves/"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/albanirneves"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
