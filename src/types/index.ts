// Navigation Types
export interface NavLink {
  href: string;
  label: string;
  dropdown?: NavLink[];
}

// Service Types
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

// Project Types
export interface Project {
  id: number;
  title: string;
  savings: string;
  payback: string;
  image?: string;
  category?: string;
  description?: string;
}

// Insight Types
export interface Insight {
  title: string;
  tag: "Makale" | "Blog" | "Rapor";
  excerpt: string;
  date?: string;
  author?: string;
  readTime?: string;
}

// Stat Types
export interface Stat {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Contact Types
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

// Footer Types
export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Component Props Types
export interface SectionProps {
  className?: string;
  id?: string;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface MotionProps {
  initial?: object;
  animate?: object;
  exit?: object;
  whileInView?: object;
  whileHover?: object;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
  transition?: {
    delay?: number;
    duration?: number;
    ease?: string;
  };
}
