import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  badge: "Leads Photovoltaïque exclusifs",
  title: "Des leads Photovoltaïque 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires avec un potentiel solaire élevé grâce à l'IA, et vous envoie en exclusivité des leads avec un projet d'installation photovoltaïque.",
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
      desc: "Propriétaires avec un projet solaire identifié, pas de simples curieux.",
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
      desc: "Transmis instantanément par email, Google Sheet ou webhook.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  statsTitle: "Tous types de projets solaires couverts",
  statsSubtitle:
    "De l'autoconsommation à la revente totale, nos leads couvrent l'ensemble de vos installations.",
  stats: [
    { title: "Autoconsommation", desc: "Propriétaires souhaitant réduire leur facture électrique." },
    { title: "Revente totale", desc: "Projets orientés rentabilité avec injection réseau." },
    { title: "Ombrières & toitures", desc: "Maisons individuelles, garages et dépendances." },
  ],
  productLabel: "Leads Photovoltaïque — Installation Solaire",
  productDesc:
    "Propriétaires souhaitant installer des panneaux solaires. Potentiel solaire vérifié, projet identifié, contact qualifié.",
  pricingBannerText: "LEADS PHOTOVOLTAÏQUE · OFFRE LIMITÉE AVRIL",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "Installateur indépendant",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Entreprise solaire établie",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau d'installateurs",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const Photovoltaique = () => <LeadPageLayout config={config} />;

export default Photovoltaique;
