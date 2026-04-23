import { Link } from "@tanstack/react-router";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useEffect } from "react";

export function CartDrawer() {
  const { items, open, setOpen, remove, setQty, subtotal, count } = useCart();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-paper z-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-8 h-20 border-b border-border/60">
          <div>
            <p className="eyebrow">Your selection</p>
            <p className="serif text-xl mt-1">Cart · {count}</p>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close cart"><X className="h-5 w-5" strokeWidth={1.4} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="text-center mt-24">
              <p className="eyebrow">Empty</p>
              <p className="serif text-2xl mt-3">Nothing here yet.</p>
              <Link to="/shop" onClick={() => setOpen(false)} className="inline-block mt-8 text-sm border-b border-gold pb-1 hover:text-gold">
                Browse the catalog
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((it) => (
                <li key={it.slug} className="flex gap-4">
                  <img src={it.image} alt={it.name} className="w-20 h-24 object-cover" />
                  <div className="flex-1">
                    <p className="serif text-lg leading-tight">{it.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{it.unit}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border">
                        <button onClick={() => setQty(it.slug, it.qty - 1)} className="px-2 py-1 hover:bg-muted" aria-label="Decrease"><Minus className="h-3 w-3" /></button>
                        <span className="px-3 text-sm">{it.qty}</span>
                        <button onClick={() => setQty(it.slug, it.qty + 1)} className="px-2 py-1 hover:bg-muted" aria-label="Increase"><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="text-sm">${(it.price * it.qty).toFixed(2)}</span>
                    </div>
                    <button onClick={() => remove(it.slug)} className="text-xs text-muted-foreground hover:text-ink mt-2 underline underline-offset-2">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border/60 px-8 py-6 space-y-4">
            <div className="flex justify-between">
              <span className="eyebrow">Subtotal</span>
              <span className="serif text-2xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Indicative pricing · final quote on Proforma Invoice. EXW Kathmandu by default.</p>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-ink text-paper py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Request Quotation
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
