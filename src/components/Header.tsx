import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/projects", label: "Projects" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/80 border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="serif text-2xl tracking-tight">BOW Ventures</span>
          <span className="eyebrow text-[0.6rem] mt-1">Himalayan Highland Harvest</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground border-b border-gold pb-1" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center gap-2 text-sm hover:text-gold transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-ink text-paper text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
