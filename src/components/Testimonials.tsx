import { Quote, Star, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";
import { testimonialData } from "@/data/testimonials";

const WORKANA_URL = "https://www.workana.com/freelancer/34f32c05be5acc0058eca7e0fc82737c";

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonialData[0]; index: number }) => (
  <ScrollReveal delay={index * 0.05}>
    <GlassCard className="flex flex-col h-full">
      {testimonial.comment && (
        <div className="mb-4">
          <Quote className="w-5 h-5 text-secondary/60 mb-2" />
          <p className="text-foreground/90 italic text-sm leading-relaxed">
            "{testimonial.comment}"
          </p>
        </div>
      )}

      <StarRating />

      <div className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground mb-1">
          <span className="text-secondary font-mono">Cliente:</span> {testimonial.client}
        </p>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          <span className="text-secondary font-mono">Projeto:</span> {testimonial.project}
        </p>

        {testimonial.techs.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {testimonial.techs.slice(0, 5).map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
            {testimonial.techs.length > 5 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{testimonial.techs.length - 5}
              </span>
            )}
          </div>
        )}

        <a
          href={WORKANA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors text-xs font-semibold"
        >
          Ver no Workana <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </GlassCard>
  </ScrollReveal>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-24 px-4">
    <div className="container max-w-6xl mx-auto">
      <SectionHeading glowColor="green" bracketColor="secondary">
        Depoimentos
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialData.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
