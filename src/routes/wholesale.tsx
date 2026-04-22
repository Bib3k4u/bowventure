import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale · BOW Ventures" },
      { name: "description", content: "Wholesale terms, MOQs, lead times and partner onboarding for retailers, formulators and private-label manufacturers." },
      { property: "og:title", content: "Wholesale · BOW Ventures" },
      { property: "og:description", content: "B2B-first wholesale of rare Himalayan harvests." },
    ],
  }),
  component: Wholesale,
});

function Wholesale() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">For Retail Distributors & Wholesale Partners</p>
        <h1 className="serif text-5xl md:text-7xl mt-6 leading-[0.95]">Wholesale.</h1>
        <p className="mt-6 text-muted-foreground">
          BOW Ventures is a B2B-first operation. We partner with specialty retailers, supplement brands, hospitality buyers and private-label manufacturers who can represent Himalayan provenance with the care it deserves.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-20">
        {[
          ["MOQ", "Varies by SKU. Rare Reserve from 50–100g; bulk botanicals from 10–25kg; coffee from 60kg."],
          ["Lead Time", "Stocked SKUs ship in 2–3 weeks. Seasonal SKUs (yarsagumba, mad honey, saffron) align with harvest windows."],
          ["Payment", "50% advance with PO · 50% against scanned shipping documents. Credit terms available after three successful shipments."],
          ["Incoterms", "Quoted EXW Kathmandu by default. FOB, CIF and DDP arrangements available — freight quoted separately."],
          ["Documentation", "Phytosanitary certificate, certificate of origin, lab test reports. CITES documentation for regulated SKUs."],
          ["Private Label", "Retail-ready packaging, custom labels, white-label blends — quoted per brief."],
        ].map(([k, v]) => (
          <div key={k} className="border-t border-border pt-6">
            <p className="eyebrow">{k}</p>
            <p className="serif text-2xl mt-3">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-secondary p-10 md:p-16 text-center">
        <p className="eyebrow">How we work together</p>
        <h2 className="serif text-3xl md:text-4xl mt-4 max-w-2xl mx-auto leading-tight">
          Sample order. Quotation. Shipment. Reorder on forecast.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Partners begin with a sample order to validate quality. Once aligned, we issue a formal quotation against your target SKUs, lead times and packaging. We handle export documentation and freight; you receive complete paperwork ready for customs clearance.
        </p>
        <Link to="/contact" className="inline-block mt-10 bg-ink text-paper px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
          Request a Quotation
        </Link>
      </div>
    </div>
  );
}
