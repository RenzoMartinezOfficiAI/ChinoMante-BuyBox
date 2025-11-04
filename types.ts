export interface BuyBoxData {
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
}

export interface ScorecardOption {
  label: string;
  value: number;
}

export interface ScorecardCategory {
  id: keyof ScorecardScores;
  title: string;
  subtitle?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  options: ScorecardOption[];
}

export interface ScorecardScores {
  balloonPayment: number;
  asIsValue: number;
  ltrCashFlow: number;
  rehabNeeded: number;
  entryFee: number;
  interestRate: number;
}

export interface ScorecardFaqItem {
  question: string;
  answer: string;
  example?: string;
}