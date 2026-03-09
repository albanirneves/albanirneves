interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => (
  <span className="tech-badge">{label}</span>
);

export default TechBadge;
