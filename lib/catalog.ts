// The shop's catalog. Prices are decimal strings: OpenReceive converts the
// order's own amount into the Lightning invoice and never reads a price from
// the browser.
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: "USD";
  image: string;
}

export const products: readonly Product[] = [
  {
    id: "pocket-widget",
    name: "Pocket Widget",
    description: "Brushed aluminum, one knurled dial. Fits in any pocket.",
    price: "12.00",
    currency: "USD",
    image: "/products/pocket-widget.png",
  },
  {
    id: "desk-widget",
    name: "Desk Widget",
    description: "Two toggles and a tiny display for the top of your desk.",
    price: "24.00",
    currency: "USD",
    image: "/products/desk-widget.png",
  },
  {
    id: "brass-widget",
    name: "Brass Widget",
    description: "Polished brass gears on a solid hex base. Turns forever.",
    price: "38.00",
    currency: "USD",
    image: "/products/brass-widget.png",
  },
  {
    id: "smart-widget",
    name: "Smart Widget",
    description: "A charcoal puck with a soft ring light that knows when to glow.",
    price: "59.00",
    currency: "USD",
    image: "/products/smart-widget.png",
  },
  {
    id: "widget-kit",
    name: "Widget Kit",
    description: "A wooden case of assorted widgets for the serious collector.",
    price: "89.00",
    currency: "USD",
    image: "/products/widget-kit.png",
  },
];

export function findProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function formatPrice(amount: string): string {
  return usd.format(Number(amount));
}
