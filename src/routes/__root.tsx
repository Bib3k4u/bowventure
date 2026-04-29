import { Outlet, createRootRoute, HeadContent, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cart";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="eyebrow">404</p>
        <h1 className="serif text-5xl mt-4">Page not found.</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for has wandered off into the highlands.</p>
        <Link to="/" className="inline-block mt-8 text-sm border-b border-gold pb-1 hover:text-gold">Return home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: "author", content: "BOW Ventures" },
      { property: "og:title", content: "BOW Ventures · Himalayan Highland Harvest" },
      { property: "og:description", content: "Rare botanicals and gourmet spices from the Nepalese Himalaya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <CartProvider>
      <HeadContent />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
