import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  children: string;
  glowColor?: "cyan" | "green" | "purple";
  bracketColor?: "primary" | "secondary" | "accent";
}

const glowMap = {
  cyan: "glow-cyan",
  green: "glow-green",
  purple: "glow-purple",
};

const bracketColorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const SectionHeading = ({
  children,
  glowColor = "cyan",
  bracketColor = "primary",
}: SectionHeadingProps) => (
  <ScrollReveal>
    <h2 className={`section-heading ${glowMap[glowColor]}`}>
      <span className={`bracket ${bracketColorMap[bracketColor]}`}>&lt; </span>
      {children}
      <span className={`bracket ${bracketColorMap[bracketColor]}`}> /&gt;</span>
    </h2>
  </ScrollReveal>
);

export default SectionHeading;
