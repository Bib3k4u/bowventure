import { createFileRoute, Link } from "@tanstack/react-router";
import storyHands from "@/assets/story-hands.jpg";
import hero from "@/assets/hero-himalaya.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · BOW Ventures" },
      { name: "description", content: "From the Himalayan highlands to the world's finest kitchens, apothecaries and wellness shelves — the BOW Ventures story." },
      { property: "og:title", content: "Our Story · BOW Ventures" },
      { property: "og:description", content: "Sourcing rare Himalayan harvests, paying farm-gate prices, capping wild-harvest volumes." },
      { property: "og:image", content: hero },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src={hero} alt="Himalayan dawn" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-[1400px] mx-auto text-paper">
          <div className="max-w-2xl">
            <p className="eyebrow text-paper/80">Our Story</p>
            <h1 className="serif text-5xl md:text-7xl mt-6 leading-[0.95]">From Himalayan highlands to the world.</h1>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 prose prose-lg">
        <p className="serif text-3xl leading-snug text-foreground">
          BOW Ventures was born from a simple conviction: that the rarest, most potent agricultural treasures of the Nepalese Himalaya deserve a home in the world's finest kitchens, apothecaries and wellness shelves — and the farmers who cultivate them deserve a fair share of the value they create.
        </p>
        <div className="gold-rule my-12 mx-auto" />
        <p className="text-muted-foreground leading-relaxed">
          We farm, source and promote high-value agricultural products from the Himalayan highlands of Nepal, partnering directly with mountain communities from the mid-hills to alpine pastures above 4,000 metres. From cliff-harvested mad honey to hand-picked yarsagumba, wild Timur pepper to Jumla-grown saffron, our catalog is curated around rarity, potency and provenance.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-6">
          Our model is deliberate. We do not buy everything we can find; we select what Nepal does best in the world. We pay farm-gate prices that keep collectors in their villages rather than chasing wage labour abroad. And we insist on sustainable volumes — because the quickest way to destroy a rare plant is to sell too much of it.
        </p>
      </section>

      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-3 gap-12">
          {[
            { k: "Farm", v: "We cultivate ashwagandha, shatavari, turmeric, saffron and cardamom on partner farms in Nepal's mid-hill and trans-Himalayan zones. Our agronomy team works with farmers on soil, seed and post-harvest." },
            { k: "Source", v: "For wild-harvested rarities — yarsagumba, mad honey, timur, kutki, jatamansi, chiraito — we work directly with traditional collector communities in Dolpa, Jumla, Mustang, Lamjung and Rolpa." },
            { k: "Export", v: "End-to-end export: DFTQC licensing, CITES documentation, lab testing, export clearance, freight. Wholesale partners receive compliant, documented shipments ready for retail." },
          ].map((b) => (
            <div key={b.k}>
              <p className="serif text-4xl text-gold">◆</p>
              <h3 className="serif text-2xl mt-4">{b.k}</h3>
              <div className="gold-rule mt-4" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow">The Geography of Value</p>
          <h2 className="serif text-4xl md:text-5xl mt-4 leading-tight">Why Nepal.</h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nepal spans a 7,000-metre altitudinal gradient in under 200 kilometres — from subtropical plains to the roof of the world. This vertical compression creates an extraordinary range of microclimates in a very small footprint.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The highland zones above 2,500 metres — where our rarest products originate — combine intense UV, cold nights, mineral-rich glacial soils and brief but vigorous growing seasons. These conditions stress plants into producing higher concentrations of the secondary metabolites that give our botanicals their potency and our spices their character.
          </p>
        </div>
        <img src={storyHands} alt="Hands with herbs" loading="lazy" className="w-full aspect-square object-cover" />
      </section>

      <section className="border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="eyebrow">Partner with us</p>
          <h2 className="serif text-4xl md:text-5xl mt-4">Built for buyers who care where it came from.</h2>
          <Link to="/wholesale" className="inline-block mt-10 bg-ink text-paper px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">Become a Partner</Link>
        </div>
      </section>
    </div>
  );
}
