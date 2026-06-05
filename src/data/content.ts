import {
  ShieldCheck,
  FileText,
  ClipboardCheck,
  Home,
  Layers,
  PaintRoller,
  PanelTop,
  DoorClosed,
  AppWindow,
  Zap,
  Droplets,
  ShowerHead,
  CookingPot,
  Wind,
  Umbrella,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

// ── Why Choose ShineOne Estate (4 cards) ──────────────────────────────
export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUs: FeatureCard[] = [
  {
    icon: ShieldCheck,
    title: 'Independent Assessment',
    description:
      'An unbiased, third-party evaluation of your property — we work for you, the homebuyer, and report exactly what we observe.',
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description:
      'A structured report with location-wise observations, photographs and clear, prioritised recommendations.',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional Inspection Process',
    description:
      'A systematic, room-by-room walkthrough following a consistent inspection methodology across every visit.',
  },
  {
    icon: Home,
    title: 'Homebuyer Focused',
    description:
      'Guidance framed around what matters to you before possession — clarity, confidence and informed conversations with your builder.',
  },
];

// ── What We Inspect (exactly 14 categories) ───────────────────────────
export interface InspectionCategory {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export const inspectionCategories: InspectionCategory[] = [
  {
    icon: Layers,
    title: 'Flooring Inspection',
    points: ['Tile level & alignment', 'Hollow tile detection', 'Surface finish & damage'],
  },
  {
    icon: PaintRoller,
    title: 'Wall Inspection',
    points: ['Cracks & uneven plaster', 'Paint & finish quality', 'Dampness indicators'],
  },
  {
    icon: PanelTop,
    title: 'Ceiling Inspection',
    points: ['Cracks & seepage marks', 'POP / false ceiling finish', 'Stains & discolouration'],
  },
  {
    icon: DoorClosed,
    title: 'Door Inspection',
    points: ['Alignment & operation', 'Frame & hardware', 'Locks & finishing'],
  },
  {
    icon: AppWindow,
    title: 'Window Inspection',
    points: ['Sliding & sealing', 'Glass & grills', 'Water-tightness checks'],
  },
  {
    icon: Zap,
    title: 'Electrical Inspection',
    points: ['Switches & sockets', 'Visible wiring concerns', 'Functional point testing'],
  },
  {
    icon: Droplets,
    title: 'Plumbing Inspection',
    points: ['Water pressure & flow', 'Visible leakage', 'Drainage observation'],
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Inspection',
    points: ['Fittings & fixtures', 'Slope & drainage', 'Waterproofing indicators'],
  },
  {
    icon: CookingPot,
    title: 'Kitchen Inspection',
    points: ['Counter & cabinet finish', 'Sink & plumbing points', 'Electrical provisions'],
  },
  {
    icon: Wind,
    title: 'Balcony Inspection',
    points: ['Railing safety', 'Flooring & slope', 'Drainage & finishing'],
  },
  {
    icon: Umbrella,
    title: 'Waterproofing Assessment',
    points: ['Wet-area observation', 'Seepage indicators', 'Vulnerable joints'],
  },
  {
    icon: Sparkles,
    title: 'Interior Finishing Inspection',
    points: ['Overall finish quality', 'Joinery & edges', 'Surface consistency'],
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Functional Assessment',
    points: ['Accessible safety points', 'Functional checks', 'Visible hazard observation'],
  },
  {
    icon: ClipboardCheck,
    title: 'Possession Readiness Review',
    points: ['Consolidated findings', 'Priority snag list', 'Possession guidance'],
  },
];

// ── Common Issues Found During Possession (exactly 6) ─────────────────
export interface CommonIssue {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const commonIssues: CommonIssue[] = [
  {
    icon: AlertTriangle,
    title: 'Cracks',
    description: 'Hairline to visible cracks across walls, ceilings and joints.',
    image:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=70',
    alt: 'Close-up of a cracked plastered wall surface',
  },
  {
    icon: Droplets,
    title: 'Leakage',
    description: 'Seepage and water marks around wet areas and ceilings.',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=70',
    alt: 'Water leakage stain on an interior ceiling',
  },
  {
    icon: Layers,
    title: 'Hollow Tiles',
    description: 'Improperly bonded tiles that sound hollow when tapped.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=70',
    alt: 'Tiled floor being inspected for hollow sections',
  },
  {
    icon: PaintRoller,
    title: 'Poor Finishing',
    description: 'Uneven paint, rough edges and inconsistent surface finishing.',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=70',
    alt: 'Wall with uneven paint and finishing defects',
  },
  {
    icon: Zap,
    title: 'Electrical Defects',
    description: 'Non-functional points, loose fittings and visible wiring concerns.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=70',
    alt: 'Electrical switchboard being examined',
  },
  {
    icon: ShowerHead,
    title: 'Plumbing Concerns',
    description: 'Low pressure, slow drainage and leakage at plumbing points.',
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=70',
    alt: 'Bathroom plumbing fittings under inspection',
  },
];

// ── Inspection Process (4-step timeline) ──────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const inspectionProcess: ProcessStep[] = [
  {
    step: 1,
    title: 'Schedule Inspection',
    description: 'Share your property details and a preferred date and time. Our team confirms the visit.',
  },
  {
    step: 2,
    title: 'On-Site Inspection',
    description: 'A systematic, room-by-room walkthrough documenting observations and capturing photographs.',
  },
  {
    step: 3,
    title: 'Detailed Report Preparation',
    description: 'Findings are compiled into a structured, prioritised report with supporting images.',
  },
  {
    step: 4,
    title: 'Report Review & Guidance',
    description: 'We walk you through the findings and help you frame the right conversations with your builder.',
  },
];

// ── Included In Report (6 cards) ──────────────────────────────────────
export interface ReportInclusion {
  icon: LucideIcon;
  title: string;
}

export const reportInclusions: ReportInclusion[] = [
  { icon: ClipboardCheck, title: 'Detailed observations' },
  { icon: FileText, title: 'Defect photographs' },
  { icon: Home, title: 'Location-wise findings' },
  { icon: AlertTriangle, title: 'Priority-based issue categorization' },
  { icon: CheckCircle2, title: 'Professional recommendations' },
  { icon: ShieldCheck, title: 'Builder discussion support' },
];

// ── Testimonials (placeholders — never fabricate) ─────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '[PLACEHOLDER — REPLACE WITH REAL DATA] A short client quote about their inspection experience goes here.',
    name: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
    context: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
  },
  {
    quote:
      '[PLACEHOLDER — REPLACE WITH REAL DATA] A short client quote about clarity and guidance goes here.',
    name: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
    context: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
  },
  {
    quote:
      '[PLACEHOLDER — REPLACE WITH REAL DATA] A short client quote about the detailed report goes here.',
    name: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
    context: '[PLACEHOLDER — REPLACE WITH REAL DATA]',
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What is a home inspection?',
    answer:
      'A home inspection is an independent, visual assessment of a property’s observable condition. We document findings across areas such as flooring, walls, electrical and plumbing, and present them in a structured report.',
  },
  {
    question: 'When should I schedule?',
    answer:
      'Ideally before taking possession, so any observations can be discussed with your builder while it is still convenient to address them.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Duration depends on the size and type of property. Our team will share an indicative timeframe when confirming your visit.',
  },
  {
    question: 'Will I receive a report?',
    answer:
      'Yes. After the inspection we prepare a detailed report with location-wise observations, photographs and prioritised recommendations.',
  },
  {
    question: 'What areas are inspected?',
    answer:
      'We cover flooring, walls, ceilings, doors, windows, electrical, plumbing, bathrooms, kitchens, balconies, waterproofing, interior finishing, safety and functional aspects, and overall possession readiness.',
  },
  {
    question: 'Can I attend?',
    answer:
      'Yes, you are welcome to attend the inspection. Many homebuyers find it helpful to walk through the observations on-site.',
  },
];
