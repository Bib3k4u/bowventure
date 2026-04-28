import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Users, Leaf, Shield, TrendingUp, Clock, Globe,
  Building2, Scale, Heart, Sprout, FlaskConical, TreePine,
  ChevronRight, BadgeCheck, FileText, Gavel, Handshake
} from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel";
import hero from "@/assets/hero-himalaya.jpg";
import yarsagumba from "@/assets/p-yarsagumba.jpg";
import jatamansi from "@/assets/p-jatamansi.jpg";
import kutki from "@/assets/p-kutki.jpg";
import ashwagandha from "@/assets/p-ashwagandha.jpg";
import timur from "@/assets/p-timur.jpg";
import coffee from "@/assets/p-coffee.jpg";
import chiraito from "@/assets/p-chiraito.jpg";
import tea from "@/assets/p-tea.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects · BOW Ventures" },
      { name: "description", content: "BOW Ventures Dolakha Sustainable Harvesting & Contract Farming Programme — MoU Term Sheet overview." },
      { property: "og:title", content: "Projects · BOW Ventures" },
      { property: "og:description", content: "Sustainable harvesting and contract farming in Dolakha District, Nepal." },
    ],
  }),
  component: Projects,
});

const objectives = [
  { icon: Globe, title: "Traceable Supply Chain", text: "Establish a verifiable, traceable supply chain for NTFPs and agricultural products meeting international certification and quality standards." },
  { icon: Leaf, title: "Sustainable Harvest", text: "Implement harvest protocols for wild-harvested medicinal species in coordination with CFUGs, the District Forest Office, and the Department of Plant Resources." },
  { icon: Handshake, title: "Contract Farming", text: "Establish guaranteed buy-back arrangements with cooperatives, providing fair pricing and capacity building to participating farmers." },
  { icon: TrendingUp, title: "Fair Value Retention", text: "Increase the share of end-market value retained by collectors, farmers, and partner communities relative to baseline." },
  { icon: TreePine, title: "Ecological Monitoring", text: "Strengthen ecological monitoring of wild-harvested species and contribute to long-term conservation of the District's biodiversity." },
  { icon: Users, title: "Community Benefits", text: "Generate verifiable employment, revenue, and community benefits for participating palikas and Community Forest User Groups." },
];

const wildHarvested = [
  { name: "Yarsagumba", latin: "Cordyceps sinensis", img: yarsagumba, note: "High-altitude fungus, strictly quota-managed" },
  { name: "Jatamansi", latin: "Nardostachys jatamansi", img: jatamansi, note: "Protected medicinal root, limited harvest windows" },
  { name: "Kutki", latin: "Picrorhiza kurroa", img: kutki, note: "Alpine bitter herb, geo-tagged collection" },
];

const cultivated = [
  { name: "Ashwagandha", latin: "Withania somnifera", img: ashwagandha, note: "Contract farming with guaranteed buy-back" },
  { name: "Timur Pepper", latin: "Zanthoxylum armatum", img: timur, note: "Native Himalayan pepper, agroforestry model" },
  { name: "Arabica Coffee", latin: "Coffea arabica", img: coffee, note: "High-altitude single-origin, Dolakha terroir" },
];

const hybrid = [
  { name: "Chiraito", latin: "Swertia chirayita", img: chiraito, note: "Wild-harvest to cultivation transition species" },
  { name: "Herbal Tea Blends", latin: "Various botanicals", img: tea, note: "Women's cooperative value-added processing" },
];

const parties = [
  {
    icon: Building2,
    role: "Implementing Partner",
    name: "Bow Ventures",
    detail: "Nepal-registered private enterprise led by Mr. Dipesh Bhandari, Founder & Programme Director. Headquartered in Kathmandu.",
    tag: "Private Sector",
  },
  {
    icon: Scale,
    role: "District Coordinator",
    name: "District Coordination Committee, Dolakha",
    detail: "Established under Nepal's Constitution and Local Government Operation Act 2074. Chairs the Programme Steering Committee. Office at Charikot, Dolakha.",
    tag: "Government",
  },
  {
    icon: MapPin,
    role: "Palika Partner",
    name: "Bigu Rural Municipality",
    detail: "A Rural Municipality of Dolakha District. Pilot area for sustainable harvesting, contract farming, and CFUG engagement.",
    tag: "Local Government",
  },
  {
    icon: MapPin,
    role: "Palika Partner",
    name: "Gaurishankar Rural Municipality",
    detail: "A Rural Municipality of Dolakha District. Co-pilot area home to Gaurishankar Conservation Area and alpine medicinal habitats.",
    tag: "Local Government",
  },
];

const benefitCards = [
  { icon: TrendingUp, title: "Above-Market Pricing", text: "Bow Ventures pays collectors and farmers prices that, on average, exceed prevailing middleman rates. Pricing reviewed annually against international benchmark indices." },
  { icon: Users, title: "Local Employment First", text: "Qualified residents of Dolakha District are given first preference in recruitment for field staff and the Charikot collection facility." },
  { icon: Leaf, title: "Community Benefit Contribution", text: "A percentage of net export value (target 1–3%) is allocated to ecological monitoring, CFUG conservation, women's cooperative development, and local infrastructure." },
  { icon: Heart, title: "Women's Engagement", text: "Priority participation for women's cooperatives in cultivation, post-harvest processing, and herbal tea blending — with dedicated programme support." },
];

const rolesData = {
  bow: {
    label: "Bow Ventures",
    items: [
      "Plan, finance, and implement the Programme in accordance with Nepali law",
      "Establish and operate the Charikot collection, drying, and grading facility",
      "Hire a District Field Manager and field staff resident in Dolakha",
      "Develop sustainable harvest protocols with CFUGs and the District Forest Office",
      "Provide capacity building — training of collectors, agronomic extension, post-harvest instruction",
      "Supply certified planting material, agronomic inputs, and technical assistance",
      "Pay fair prices transparently linked to international market benchmarks",
      "Pursue and maintain organic, FairWild, GMP, and applicable certifications",
      "Maintain a traceability system with batch-level records of origin, harvest, and quality",
      "Make quarterly Community Benefit Contributions to palikas and CFUGs",
    ],
  },
  dcc: {
    label: "District Coordination Committee",
    items: [
      "Coordinate among district government offices and the Implementing Partner",
      "Facilitate working relationships with the District Forest Office and Agriculture offices",
      "Host and chair Programme Steering Committee meetings",
      "Support resolution of inter-palika or inter-agency disputes",
      "Provide guidance on alignment with the District Periodic Plan",
    ],
  },
  palika: {
    label: "Bigu & Gaurishankar Palikas",
    items: [
      "Designate a Palika Focal Point for ongoing coordination",
      "Support engagement of CFUGs, agricultural cooperatives, and women's cooperatives",
      "Enforce access controls and harvest regulations to prevent unauthorised collection",
      "Facilitate the registration of collectors and farmers",
      "Make available, where feasible, Palika-level facilities or land for the Programme",
      "Participate in the Programme Steering Committee",
      "Consider co-investment in drying facilities, water supply, and rural roads",
    ],
  },
};

const keyTerms = [
  { icon: Clock, label: "Programme Term", value: "3 years from Effective Date, renewable by mutual written agreement" },
  { icon: BadgeCheck, label: "Status", value: "Draft for Discussion — Version 1.0, April 2026. Not for signature in present form." },
  { icon: FileText, label: "Amendment", value: "Only by written instrument signed by all Parties" },
  { icon: Gavel, label: "Dispute Resolution", value: "Good-faith consultation → PSC escalation (30 days) → Mediation → Kathmandu courts" },
  { icon: Shield, label: "Termination", value: "90 days' written notice by any Party; immediate for material breach after 30-day cure period" },
  { icon: Globe, label: "Effective Date", value: "Date on which the last Party signs the definitive executed MoU" },
];

const pscMembers = [
  { role: "Chair", name: "Chief, District Coordination Committee, Dolakha" },
  { role: "Member", name: "Chairperson or representative, Bigu Rural Municipality" },
  { role: "Member", name: "Chairperson or representative, Gaurishankar Rural Municipality" },
  { role: "Member", name: "Representative, District Forest Office, Dolakha" },
  { role: "Member", name: "Representative, FECOFUN District Chapter / CFUG Federation" },
  { role: "Member", name: "Programme Director, Bow Ventures" },
  { role: "Secretary", name: "District Field Manager, Bow Ventures" },
];

type RoleKey = keyof typeof rolesData;

function ProductCard({ name, latin, img, note }: { name: string; latin: string; img: string; note: string }) {
  return (
    <div className="group bg-paper border border-border overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="serif text-lg leading-tight">{name}</p>
        <p className="text-[11px] text-muted-foreground italic mt-1">{latin}</p>
        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{note}</p>
      </div>
    </div>
  );
}

function Projects() {
  const [activeRole, setActiveRole] = useState<RoleKey>("bow");
  const [activeCategory, setActiveCategory] = useState<"wild" | "cultivated" | "hybrid">("wild");

  const categoryProducts = {
    wild: wildHarvested,
    cultivated,
    hybrid,
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <img src={hero} alt="Dolakha highlands" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-16 max-w-[1400px] mx-auto text-paper">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase bg-gold/20 border border-gold/40 text-gold px-3 py-1.5 w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Draft for Discussion · v1.0 · April 2026
          </span>
          <p className="eyebrow text-paper/70 mb-4">Dolakha District, Nepal</p>
          <h1 className="serif text-5xl md:text-7xl leading-[0.92] max-w-3xl">
            Sustainable Harvesting &amp; Contract Farming Programme.
          </h1>
          <p className="mt-6 text-paper/75 max-w-xl leading-relaxed text-sm md:text-base">
            A proposed MoU between Bow Ventures and the Government Parties of Dolakha District to establish a verifiable, community-first botanical supply chain.
          </p>
        </div>
      </section>

      {/* Status strip */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Programme Term", value: "3 Years + Renewable" },
            { label: "Pilot Geography", value: "Bigu & Gaurishankar" },
            { label: "Central Facility", value: "Charikot, Dolakha" },
            { label: "Parties", value: "4 — Private + Government" },
          ].map((item) => (
            <div key={item.label}>
              <p className="eyebrow text-paper/50 text-[0.58rem]">{item.label}</p>
              <p className="serif text-xl mt-2 text-paper">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Background — Why */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Background</p>
          <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Why Dolakha. Why now.</h2>
        </div>
        <div className="gold-rule mt-8" />
        <div className="grid md:grid-cols-2 gap-10 mt-10 text-muted-foreground text-sm leading-relaxed">
          <p>
            Dolakha District is endowed with significant high-value Non-Timber Forest Products, medicinal plants, and agricultural resources — including Yarsagumba, Jatamansi, Kutki, Chiraito, Rhododendron, Timur, Ashwagandha, Buckwheat, Himalayan Arabica coffee, and Sea Buckthorn.
          </p>
          <p>
            The present commercialisation of these resources is dominated by informal channels that under-compensate collectors and farmers, and lack the certification, traceability, and ecological safeguards required by premium export markets. Unsustainable harvest practices threaten the long-term viability of several wild-harvested species. This Programme is designed to change that.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-xl mx-auto">
            <p className="eyebrow">Programme Objectives</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Six pillars of the programme.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {objectives.map((obj) => (
              <div key={obj.title} className="bg-paper p-8 border border-border">
                <obj.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="serif text-xl mt-5">{obj.title}</h3>
                <div className="gold-rule mt-4" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Scope */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">Product Scope</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Three product categories.</h2>
          </div>
          <div className="flex gap-1 border border-border p-1">
            {(["wild", "cultivated", "hybrid"] as const).map((cat) => {
              const labels = { wild: "Wild-Harvested", cultivated: "Cultivated", hybrid: "Hybrid & Value-Added" };
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-colors ${
                    activeCategory === cat ? "bg-ink text-paper" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {labels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative px-12">
          <Carousel opts={{ align: "start", loop: false }}>
            <CarouselContent>
              {categoryProducts[activeCategory].map((product) => (
                <CarouselItem key={product.name} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-center border-t border-border pt-10">
          {[
            { icon: FlaskConical, label: "Wild-Harvested", sub: "Yarsagumba · Jatamansi · Kutki" },
            { icon: Sprout, label: "Cultivated Crops", sub: "Ashwagandha · Buckwheat · Timur · Coffee · Sea Buckthorn" },
            { icon: Leaf, label: "Hybrid & Value-Added", sub: "Chiraito · Rhododendron · Herbal Tea Blends" },
          ].map((cat) => (
            <div key={cat.label} className="flex items-center gap-4 px-4">
              <cat.icon className="h-8 w-8 text-gold shrink-0" strokeWidth={1.2} />
              <div className="text-left">
                <p className="text-sm font-medium">{cat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{cat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Scope */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow">Geographic Scope</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Pilot geography &amp; operational hub.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                name: "Bigu Rural Municipality",
                type: "Pilot Area",
                detail: "Eastern Dolakha District. Home to high-altitude NTFPs and community forest areas managed by active CFUGs. First engagement zone for wild-harvest and contract farming.",
              },
              {
                icon: MapPin,
                name: "Gaurishankar Rural Municipality",
                type: "Pilot Area",
                detail: "Western Dolakha, adjacent to Gaurishankar Conservation Area. Rich in alpine medicinal species. Co-pilot zone for the sustainable harvesting programme.",
              },
              {
                icon: Building2,
                name: "Charikot, Dolakha",
                type: "Central Facility",
                detail: "District headquarters. Site of the Programme's central collection, drying, grading, and dispatch facility. Also hosts the Programme Steering Committee secretariat.",
              },
            ].map((loc) => (
              <div key={loc.name} className="bg-paper border border-border p-8">
                <div className="flex items-start gap-3">
                  <loc.icon className="h-5 w-5 text-gold mt-1 shrink-0" strokeWidth={1.4} />
                  <div>
                    <span className="eyebrow text-[0.58rem]">{loc.type}</span>
                    <h3 className="serif text-xl mt-2">{loc.name}</h3>
                    <div className="gold-rule mt-3" />
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{loc.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Parties */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow">The Parties</p>
          <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Four signatories to the MoU.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parties.map((party) => (
            <div key={party.name} className="border border-border p-7 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <party.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-border px-2 py-1">{party.tag}</span>
              </div>
              <p className="eyebrow text-[0.58rem]">{party.role}</p>
              <h3 className="serif text-lg mt-2 leading-snug flex-1">{party.name}</h3>
              <div className="gold-rule mt-4" />
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{party.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow">Roles &amp; Responsibilities</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">What each Party commits to.</h2>
          </div>
          {/* Tab nav */}
          <div className="flex justify-center gap-1 border border-border p-1 w-fit mx-auto mb-10">
            {(Object.keys(rolesData) as RoleKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-colors ${
                  activeRole === key ? "bg-ink text-paper" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {rolesData[key].label}
              </button>
            ))}
          </div>
          {/* Tab content */}
          <div className="bg-paper border border-border p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="serif text-2xl mb-8">{rolesData[activeRole].label}</h3>
            <ul className="space-y-4">
              {rolesData[activeRole].items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <ChevronRight className="h-4 w-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow">Community Benefit Framework</p>
          <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Fair value. Shared futures.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {benefitCards.map((card) => (
            <div key={card.title} className="border-t border-border pt-8 flex gap-6">
              <card.icon className="h-6 w-6 text-gold shrink-0 mt-1" strokeWidth={1.4} />
              <div>
                <h3 className="serif text-xl">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance — PSC */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow text-paper/60">Governance</p>
              <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Programme Steering Committee.</h2>
              <div className="w-10 h-px bg-gold mt-8" />
              <p className="mt-8 text-paper/70 text-sm leading-relaxed">
                A Programme Steering Committee (PSC) shall be constituted within <strong className="text-paper">30 days</strong> of the Effective Date. The PSC meets <strong className="text-paper">at least once per quarter</strong> to review operations, ecological monitoring, community benefits, and financial flows.
              </p>
              <p className="mt-4 text-paper/70 text-sm leading-relaxed">
                Bow Ventures submits a written quarterly Programme Report to the PSC and an annual report to each Government Party, covering operations, certification status, community benefits, and financial information.
              </p>
            </div>
            <div className="space-y-4">
              {pscMembers.map((member) => (
                <div key={member.name} className="flex items-start gap-5 border-b border-paper/10 pb-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-gold mt-0.5 w-16 shrink-0">{member.role}</span>
                  <p className="text-sm text-paper/80 leading-snug">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Harvest Protocols */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="eyebrow">Sustainable Harvest</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Harvest protocols that protect what makes this rare.</h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
              Prior to each harvest cycle, Bow Ventures prepares a written Sustainable Harvest Protocol for each species, reviewed by the District Forest Office and acknowledged by participating CFUGs before implementation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: "Per-collector quotas", sub: "Based on ecological carrying capacity and DPR guidance" },
              { icon: Clock, label: "Permitted harvest windows", sub: "Aligned with biological maturity and regeneration cycles" },
              { icon: TreePine, label: "No-go regeneration zones", sub: "Designated with CFUGs and the District Forest Office" },
              { icon: Leaf, label: "Mandatory leave-behind ratios", sub: "For reproductive material to ensure species continuity" },
              { icon: BadgeCheck, label: "Minimum maturity standards", sub: "Size and maturity criteria for all collected material" },
              { icon: Globe, label: "Geo-tagged records", sub: "Batch identifiers and pre-season collector registration" },
            ].map((item) => (
              <div key={item.label} className="bg-secondary p-5 border border-border">
                <item.icon className="h-5 w-5 text-gold mb-3" strokeWidth={1.4} />
                <p className="text-xs font-medium leading-snug">{item.label}</p>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Legal Terms */}
      <section className="bg-secondary">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow">Key Terms</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Legal framework at a glance.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((term) => (
              <div key={term.label} className="flex items-start gap-5 border-t border-border pt-6">
                <term.icon className="h-5 w-5 text-gold mt-0.5 shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="eyebrow text-[0.6rem]">{term.label}</p>
                  <p className="serif text-lg mt-2 leading-snug">{term.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-binding notice + CTA */}
      <section className="border-t border-border/60">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="eyebrow">Non-Binding Term Sheet</p>
          <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight max-w-2xl mx-auto">
            Subject to finalisation of definitive documentation and legal review.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            This term sheet records proposed terms for inclusion in a final MoU. The terms are non-binding until executed in a final MoU reviewed by counsel for each party. Items shown in square brackets indicate values to be confirmed during negotiation.
          </p>
          <p className="mt-4 text-muted-foreground text-xs">
            Effective Date: The date on which the last Party signs the definitive MoU.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-block bg-ink text-paper px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="inline-block border border-ink text-ink px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-secondary transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
