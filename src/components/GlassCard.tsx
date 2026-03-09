import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard = ({ children, className, hoverable = true }: GlassCardProps) => (
  <div className={cn(hoverable ? "glass-card-hover" : "glass-card", className)}>
    {children}
  </div>
);

export default GlassCard;
