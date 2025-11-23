import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Número de WhatsApp no formato internacional
  const phoneNumber = "5518996473715";
  const message = encodeURIComponent("Olá! Gostaria de conversar sobre seus serviços.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-secondary text-secondary-foreground p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      style={{
        boxShadow: "0 0 30px hsl(var(--neon-green) / 0.5)"
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        !
      </span>
    </a>
  );
};

export default WhatsAppButton;
