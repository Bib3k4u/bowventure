import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, tiers, type Tier } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop · BOW Ventures Catalog" },
      { name: "description", content: "The complete BOW Ventures catalog — fifteen rare Himalayan harvests across four tiers." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState<Tier | "All">("All");
  const list = filter === "All" ? products : products.filter((p) => p.tier === filter);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <p className="eyebrow">The Catalog</p>
        <h1 className="serif text-5xl md:text-7xl mt-6 leading-[0.95]">Fifteen treasures.</h1>
        <p className="mt-6 text-muted-foreground">Browse by tier or view the full catalog. Pricing shown is indicative wholesale per unit; final quotation issued on Proforma Invoice.</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 justify-center mt-14 mb-16">
        {(["All", ...tiers] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-xs uppercase tracking-[0.2em] px-5 py-3 border transition-colors ${
              filter === t
                ? "bg-ink text-paper border-ink"
                : "border-border text-foreground/70 hover:border-gold hover:text-gold"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {list.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-20">
        Looking for private label or custom packs? <Link to="/contact" className="border-b border-gold hover:text-gold">Get in touch.</Link>
      </p>
    </div>
  );
}
