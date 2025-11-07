// Fix: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

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
  tooltip: string;
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

// Types for Fix & Flip Scorecard
export interface FixAndFlipChecklistItem {
  id: string;
  label: string;
  subLabel?: string;
  type: 'REQUIRED' | 'IDEAL';
}

export interface FixAndFlipChecklistSection {
  title: string;
  items: FixAndFlipChecklistItem[];
  sidebarNote?: {
    level: 'CRITICAL' | 'WARNING' | 'INFO';
    text: string;
  };
  scoreLabel?: string;
  dealKiller?: boolean;
}

export interface FixAndFlipSectionData {
  title: string;
  heading: string;
  sections: FixAndFlipChecklistSection[];
}
