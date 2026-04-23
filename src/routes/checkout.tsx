import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Request Quotation · BOW Ventures" },
      { name: "description", content: "Submit your B2B quotation request. Our team responds within one business day with a Proforma Invoice." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function genReference() {
  const t = Date.now().toString(36).toUpperCase();
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BOW-${t}-${r}`;
}

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    country: "",
    incoterm: "EXW Kathmandu",
    shipping_address: "",
    message: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setSubmitting(true);
    setError(null);
    const reference = genReference();
    const payload = {
      reference,
      ...form,
      items: items.map((i) => ({ slug: i.slug, name: i.name, unit: i.unit, price: i.price, qty: i.qty })),
      subtotal_usd: Number(subtotal.toFixed(2)),
    };

    const { error: insertError } = await supabase.from("quotation_requests").insert(payload);
    if (insertError) {
      setError(insertError.message);
      setSubmitting(false);
      return;
    }
    clear();
    navigate({ to: "/quotation-confirmed", search: { ref: reference } });
  };

  if (items.length === 0) {
    return (
      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-32 text-center">
        <p className="eyebrow">Empty</p>
        <h1 className="serif text-4xl mt-4">Your selection is empty.</h1>
        <p className="text-muted-foreground mt-4">Browse the catalog to add products to your quotation.</p>
        <Link to="/shop" className="inline-block mt-8 text-sm border-b border-gold pb-1 hover:text-gold">Browse the catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <p className="eyebrow">Step 02</p>
      <h1 className="serif text-5xl md:text-6xl mt-3">Request a Quotation</h1>
      <p className="text-muted-foreground mt-4 max-w-xl">
        Submit your details and we will respond within one business day with a formal Proforma Invoice — including freight, insurance and payment terms.
      </p>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 mt-16">
        <form onSubmit={onSubmit} className="space-y-8">
          <fieldset className="space-y-5">
            <legend className="eyebrow mb-4">Company</legend>
            <Field label="Company name" required value={form.company_name} onChange={onChange("company_name")} />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Contact name" required value={form.contact_name} onChange={onChange("contact_name")} />
              <Field label="Email" type="email" required value={form.email} onChange={onChange("email")} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" value={form.phone} onChange={onChange("phone")} />
              <Field label="Country" required value={form.country} onChange={onChange("country")} />
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="eyebrow mb-4">Shipping</legend>
            <div>
              <label className="block text-xs eyebrow mb-2">Incoterm</label>
              <select
                value={form.incoterm}
                onChange={onChange("incoterm")}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm"
              >
                <option>EXW Kathmandu</option>
                <option>FOB Kolkata</option>
                <option>CIF Destination Port</option>
                <option>DAP Door</option>
              </select>
            </div>
            <div>
              <label className="block text-xs eyebrow mb-2">Shipping address (optional)</label>
              <textarea
                value={form.shipping_address}
                onChange={onChange("shipping_address")}
                rows={3}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm resize-none"
              />
            </div>
            <div>
              <label className="block text-xs eyebrow mb-2">Notes — certifications, packaging, timeline</label>
              <textarea
                value={form.message}
                onChange={onChange("message")}
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm resize-none"
              />
            </div>
          </fieldset>

          {error && <p className="text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="block w-full text-center bg-ink text-paper py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit Quotation Request"}
          </button>
          <p className="text-xs text-muted-foreground">By submitting you agree to be contacted regarding this enquiry. No payment is taken at this stage.</p>
        </form>

        <aside className="border-l border-border/60 pl-10 self-start sticky top-28">
          <p className="eyebrow">Your selection</p>
          <h2 className="serif text-2xl mt-2 mb-6">Summary</h2>
          <ul className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
            {items.map((it) => (
              <li key={it.slug} className="flex gap-3">
                <img src={it.image} alt={it.name} className="w-14 h-16 object-cover" />
                <div className="flex-1 text-sm">
                  <p className="serif text-base leading-tight">{it.name}</p>
                  <p className="text-xs text-muted-foreground">{it.qty} × ${it.price} {it.unit}</p>
                </div>
                <span className="text-sm">${(it.price * it.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border/60 mt-6 pt-6 flex justify-between items-baseline">
            <span className="eyebrow">Indicative subtotal</span>
            <span className="serif text-2xl">${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Final pricing confirmed on Proforma Invoice. Freight, insurance and CITES permits (where applicable) quoted separately.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label, required, type = "text", value, onChange,
}: {
  label: string; required?: boolean; type?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs eyebrow mb-2">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm"
      />
    </div>
  );
}
