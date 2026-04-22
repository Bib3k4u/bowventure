import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { getProduct, products, tierRoman } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} · BOW Ventures` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: `${loaderData.product.name} · BOW Ventures` },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
          { name: "twitter:image", content: loaderData.product.image },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="text-center py-32">
      <p className="serif text-3xl">Product not found.</p>
      <Link to="/shop" className="inline-block mt-6 text-sm border-b border-gold hover:text-gold">Back to catalog</Link>
    </div>
  ),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const related = products.filter((x) => x.tier === p.tier && x.slug !== p.slug).slice(0, 3);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <Link to="/shop" className="text-xs eyebrow hover:text-gold">← Back to catalog</Link>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 pb-24">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={p.image} alt={p.name} width={1024} height={1280} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold">
            Tier {tierRoman[p.tier]} · {p.tier} · No {p.no}
          </p>
          <h1 className="serif text-5xl md:text-6xl mt-4 leading-[1]">{p.name}</h1>
          <p className="italic text-muted-foreground mt-3">{p.latin} · {p.native}</p>

          <div className="gold-rule mt-8" />
          <p className="serif text-2xl mt-8 leading-snug text-foreground/85">{p.tagline}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>

          <div className="mt-10 flex items-baseline gap-3">
            <span className="eyebrow">From</span>
            <span className="serif text-4xl">${p.priceFrom}</span>
            <span className="text-sm text-muted-foreground">{p.unit}</span>
          </div>

          <div className="mt-8 flex items-stretch gap-4">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-muted" aria-label="Decrease"><Minus className="h-4 w-4" /></button>
              <span className="px-5 text-sm w-12 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-muted" aria-label="Increase"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              onClick={() => add({ slug: p.slug, name: p.name, unit: p.unit, price: p.priceFrom, image: p.image }, qty)}
              className="flex-1 bg-ink text-paper py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 text-sm border-t border-border/60 pt-10">
            {[
              ["Origin", p.origin],
              ["Forms", p.forms],
              ["Packaging", p.packaging],
              ["Shelf life", p.shelfLife],
              ["MOQ", p.moq],
              ["Lead time", p.leadTime],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow mb-2">{k}</dt>
                <dd className="text-foreground/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border/60">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
            <p className="eyebrow">Also from Tier {tierRoman[p.tier]}</p>
            <h2 className="serif text-3xl md:text-4xl mt-4 mb-12">{p.tier}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {related.map((r) => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
