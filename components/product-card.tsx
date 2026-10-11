import Image from "next/image";
import { buy } from "@/app/actions";
import { formatPrice, type Product } from "@/lib/catalog";
import { BuyButton } from "./buy-button";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const price = formatPrice(product.price);
  return (
    <article className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
        />
      </div>
      <div className="product-body">
        <div className="product-heading">
          <h2>{product.name}</h2>
          <p className="product-price">
            {price} <span className="sr-only">US dollars</span>
          </p>
        </div>
        <p className="product-description">{product.description}</p>
        <form action={buy.bind(null, product.id)}>
          <BuyButton label={`Buy ${product.name} for ${price}`} />
        </form>
      </div>
    </article>
  );
}
