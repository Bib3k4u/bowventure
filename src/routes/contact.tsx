import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · BOW Ventures" },
      { name: "description", content: "Request a quotation, sample order, or schedule a partner conversation with BOW Ventures." },
      { property: "og:title", content: "Contact · BOW Ventures" },
      { property: "og:description", content: "Request a quotation or sample order." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="serif text-5xl md:text-6xl mt-6 leading-[0.95]">Let's talk harvest.</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Tell us what you're looking for — SKUs, target volumes, packaging needs, destination market — and we'll come back with a formal quotation, lead times and any compliance considerations.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow mb-1">Email</dt>
              <dd>partners@bowventures.com</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Phone</dt>
              <dd>+977 — to be confirmed</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Office</dt>
              <dd>Registered in Nepal · Kathmandu</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Response time</dt>
              <dd>Within 2 business days</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-secondary p-8 md:p-10 space-y-5"
        >
          {sent ? (
            <div className="text-center py-16">
              <p className="serif text-4xl">Thank you.</p>
              <div className="gold-rule mt-6 mx-auto" />
              <p className="mt-6 text-muted-foreground">We'll be in touch within two business days.</p>
            </div>
          ) : (
            <>
              <Field label="Company"><input required className="input" /></Field>
              <Field label="Your name"><input required className="input" /></Field>
              <Field label="Email"><input type="email" required className="input" /></Field>
              <Field label="Country / market"><input className="input" /></Field>
              <Field label="What are you looking for?">
                <textarea rows={5} required className="input resize-none" placeholder="SKUs, volumes, packaging, target delivery..." />
              </Field>
              <button type="submit" className="w-full bg-ink text-paper py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors">
                Send Inquiry
              </button>
            </>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--paper);
          border: 1px solid var(--border);
          padding: 0.85rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--ink);
        }
        .input:focus { outline: none; border-color: var(--gold); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      {children}
    </label>
  );
}
