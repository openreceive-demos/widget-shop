import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/catalog";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Small things, well made</p>
        <h1>Widgets for every desk, pocket and shelf.</h1>
        <p className="hero-copy">
          Pick a widget and hit Buy. Pay in bitcoin over Lightning, straight to the shop&apos;s
          wallet.
        </p>
      </section>
      <section aria-label="Products" className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 3} />
        ))}
      </section>
    </main>
  );
}
