import { createFileRoute, Link } from "@tanstack/react-router";
import { products, tiers, tierRoman } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import hero from "@/assets/hero-himalaya.jpg";
import storyHands from "@/assets/story-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOW Ventures · Rare Harvests of the Nepalese Highland" },
      { name: "description", content: "Wild-harvested mad honey, Dolpa yarsagumba, Jumla saffron, Ayurvedic botanicals and gourmet spices — direct from the Nepalese Himalaya." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = ["yarsagumba", "mad-honey", "saffron", "timur"]
    .map((s) => products.find((p) => p.slug === s)!)
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="Himalayan highlands at dawn" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 max-w-[1400px] mx-auto text-paper">
          <div className="max-w-3xl">
            <p className="eyebrow text-paper/80">Est. Nepal · Highland Harvest</p>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.95]">
              Fifteen rare harvests<br />of the Nepalese Highland.
            </h1>
            <p className="mt-8 text-base md:text-lg text-paper/80 max-w-xl leading-relaxed">
              From cliff-harvested mad honey to Dolpa yarsagumba and Jumla saffron — sourced directly from the farmers, hunters and collectors of the high Himalaya.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="bg-paper text-ink px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-paper transition-colors">
                Explore the Catalog
              </Link>
              <Link to="/about" className="border border-paper/60 text-paper px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers strip */}
      <section className="border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
          {tiers.map((t) => (
            <Link key={t} to="/shop" className="group">
              <p className="serif text-5xl text-gold">{tierRoman[t]}</p>
              <p className="serif text-xl mt-3 group-hover:text-gold transition-colors">{t}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {products.filter((p) => p.tier === t).length} products
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow">Selected Harvests</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 max-w-2xl leading-tight">
              The flagship products of the high Himalaya.
            </h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm border-b border-gold pb-1 hover:text-gold">View all 15 →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
          <img src={storyHands} alt="Hands holding dried Himalayan herbs" loading="lazy" width={1280} height={1280} className="w-full aspect-square object-cover" />
          <div>
            <p className="eyebrow">From Mountain to Market</p>
            <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">
              We pay the hands that harvested it — not the middlemen who didn't.
            </h2>
            <div className="gold-rule mt-8" />
            <p className="mt-8 text-muted-foreground leading-relaxed">
              BOW Ventures works directly with farmer cooperatives and traditional collector communities across Dolpa, Jumla, Mustang, Lamjung, Rolpa and Ilam. Every batch is traceable to its harvest zone. Wild-harvested products are volume-capped — because the quickest way to destroy a rare plant is to sell too much of it.
            </p>
            <Link to="/about" className="inline-block mt-8 text-sm border-b border-gold pb-1 hover:text-gold">Read our story</Link>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-4 gap-10">
        {[
          { k: "Sourcing", v: "Direct from farmer cooperatives. Every batch traceable to its harvest zone and season." },
          { k: "Quality", v: "DFTQC-registered. Lab-tested batch by batch. CITES documentation where required." },
          { k: "Sustainability", v: "Wild-harvest volumes capped. Cultivation programmes for rare wild species." },
          { k: "Fair Trade", v: "Farm-gate prices above prevailing market. Collectors paid in full at harvest." },
        ].map((s) => (
          <div key={s.k}>
            <p className="serif text-2xl">{s.k}</p>
            <div className="gold-rule mt-4" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.v}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
