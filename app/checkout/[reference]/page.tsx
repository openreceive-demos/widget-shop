import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/catalog";
import { findOwnOrder } from "@/lib/orders";
import { OrderCheckout } from "./order-checkout";

export const dynamic = "force-dynamic";

// The order's own URL. A payer can reload or bookmark it to come back to a
// pending payment or a swap refund.
export default async function CheckoutPage({ params }: { params: Promise<{ reference: string }> }) {
  const { reference } = await params;
  const order = await findOwnOrder(reference);
  if (!order) notFound();
  const paid = order.state === "paid";
  return (
    <main className="container checkout">
      <Link href="/" className="back-link">
        &larr; Back to the shop
      </Link>
      <div className="checkout-summary">
        <div>
          <p className="eyebrow">Order {order.id.slice(0, 8)}</p>
          <h1>{order.product_name}</h1>
        </div>
        <div className="checkout-total">
          <p className="product-price">
            {formatPrice(order.amount)} {order.currency}
          </p>
          <p className={paid ? "status status-paid" : "status"}>
            {paid ? "Paid, thank you." : "Awaiting payment"}
          </p>
        </div>
      </div>
      <div className="checkout-widget">
        <OrderCheckout reference={order.id} />
      </div>
    </main>
  );
}
