import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  badge: "Leads Audit Énergétique exclusifs",
  title: "Des leads Audit Énergétique 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires ayant besoin d'un audit énergétique grâce à l'IA, et vous envoie en exclusivité des leads avec un projet réel d'amélioration thermique.",
  ctaUrl: "https://tally.so/r/Gxo6Jk",
  features: [
    {
      icon: Shield,
      title: "Exclusif",
      desc: "Chaque lead vous est transmis en exclusivité — jamais mis en concurrence.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Intentionniste",
      desc: "Propriétaires avec un besoin concret d'audit, pas de simples curieux.",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: Phone,
      title: "Vérifié",
      desc: "Joignabilité optimale : moins d'appels perdus, plus de RDV.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Temps réel",
      desc: "Transmis instantanément par mail, SMS et Google Sheet.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  statsTitle: "Tous types d'audits énergétiques couverts",
  statsSubtitle:
    "De l'audit réglementaire à l'audit global, nos leads couvrent l'ensemble de vos missions.",
  stats: [
    { title: "Audit réglementaire", desc: "Propriétaires souhaitant se conformer à la réglementation." },
    { title: "Audit global", desc: "Projets de rénovation d'ampleur nécessitant un audit complet." },
    { title: "Toutes zones géographiques", desc: "Leads ciblés selon votre zone d'intervention." },
  ],
  productLabel: "Leads Audit Énergétique",
  productDesc:
    "Propriétaires ayant besoin d'un audit énergétique pour accéder aux aides à la rénovation. Projet identifié, contact vérifié.",
  pricingBannerText: "LEADS AUDIT ÉNERGÉTIQUE · OFFRE LIMITÉE AVRIL",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "Auditeur indépendant",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "X€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      ctaUrl: "https://buy.stripe.com/fZu28q0uJ4cs3s13SN9AA08",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Cabinet d'audit établi",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "X€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      ctaUrl: "https://buy.stripe.com/8x200i7Xb38o9Qp9d79AA09",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau d'auditeurs",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "X€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      ctaUrl: "https://buy.stripe.com/5kQ28q5P3dN2faJ4WR9AA0a",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const Audit = () => <LeadPageLayout config={config} />;

export default Audit;
