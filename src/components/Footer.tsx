import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="serif text-2xl">BOW Ventures</div>
          <p className="eyebrow mt-2">Himalayan Highland Harvest</p>
          <p className="mt-6 text-sm text-muted-foreground max-w-md leading-relaxed">
            Rare botanicals, gourmet spices, and highland reserves — sourced directly from
            farmer cooperatives across Dolpa, Jumla, Mustang, Lamjung, Rolpa and Ilam.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Catalog</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-gold">All Products</Link></li>
            <li><Link to="/shop" search={{ tier: "Rare Himalayan Reserve" }} className="hover:text-gold">Rare Reserve</Link></li>
            <li><Link to="/shop" search={{ tier: "Ayurvedic Botanicals" }} className="hover:text-gold">Ayurvedic</Link></li>
            <li><Link to="/shop" search={{ tier: "Gourmet Spices" }} className="hover:text-gold">Spices</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">House</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
            <li><Link to="/wholesale" className="hover:text-gold">Wholesale</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} BOW Ventures · Registered in Nepal</span>
          <span>DFTQC-licensed · CITES-documented · Phytosanitary certified</span>
        </div>
      </div>
    </footer>
  );
}
