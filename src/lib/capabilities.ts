import { BrainCircuit, Cloud, Cpu, ShieldCheck, type LucideIcon } from 'lucide-react'

export type Capability = { label: string; href: string }

export const capabilityIcons: Record<string, LucideIcon> = {
  'Data & AI': BrainCircuit,
  Cloud,
  Cybersecurity: ShieldCheck,
  'GPU On-Demand': Cpu,
}

export type CapabilityGroup = { title: string; items: Capability[] }

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Data & AI',
    items: [
      { label: 'AI Readiness Assessment', href: '#capabilities' },
      { label: 'Agentic AI & Application Library', href: '#ai' },
      { label: 'Data Lakes / Curate', href: '#platforms' },
      { label: 'Data Analytics', href: '#capabilities' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { label: 'Migration & Modernization', href: '#services' },
      { label: 'FinOps', href: '#finops' },
      { label: 'Cloud Strategy & Design', href: '#capabilities' },
      { label: 'Cloud Managed Services', href: '#services' },
    ],
  },
  {
    title: 'Cybersecurity',
    items: [],
  },
  {
    title: 'GPU On-Demand',
    items: [
      { label: 'AI Infrastructure Assessment', href: '#capabilities' },
      { label: 'GPU Infrastructure', href: '#capabilities' },
      { label: 'GPU on Demand', href: '#capabilities' },
      { label: 'Red Hat Center of Excellence', href: '#capabilities' },
    ],
  },
]
