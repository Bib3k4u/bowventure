import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { tierRoman } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold">Tier {tierRoman[p.tier]} · No {p.no}</p>
          <h3 className="serif text-2xl mt-2 leading-tight">{p.name}</h3>
          <p className="text-xs italic text-muted-foreground mt-1">{p.latin}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">From</p>
          <p className="serif text-xl mt-1">${p.priceFrom}</p>
        </div>
      </div>
    </Link>
  );
}
