import { createFileRoute, Link } from "@tanstack/react-router";

type Search = { ref?: string };

export const Route = createFileRoute("/quotation-confirmed")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    ref: typeof s.ref === "string" ? s.ref : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Quotation Received · BOW Ventures" },
      { name: "description", content: "Thank you. Your B2B quotation request has been received. Our team will respond within one business day." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ConfirmedPage,
});

function ConfirmedPage() {
  const { ref } = Route.useSearch();
  return (
    <div className="max-w-[760px] mx-auto px-6 md:px-10 py-32 text-center">
      <p className="eyebrow">Confirmation</p>
      <h1 className="serif text-5xl md:text-6xl mt-4 leading-[1]">Thank you.</h1>
      <div className="gold-rule mx-auto mt-10" style={{ maxWidth: 60 }} />
      <p className="text-foreground/85 mt-10 text-lg leading-relaxed">
        Your quotation request has been received. A member of our team will respond within
        one business day with a formal Proforma Invoice including freight, insurance and payment terms.
      </p>
      {ref && (
        <div className="mt-12 inline-block border border-border px-8 py-5">
          <p className="eyebrow">Reference</p>
          <p className="serif text-2xl mt-1 tracking-wider">{ref}</p>
        </div>
      )}
      <div className="mt-16 flex flex-wrap gap-6 justify-center">
        <Link to="/shop" className="text-sm border-b border-gold pb-1 hover:text-gold">Continue browsing</Link>
        <Link to="/" className="text-sm border-b border-border pb-1 hover:text-gold hover:border-gold">Return home</Link>
      </div>
    </div>
  );
}
