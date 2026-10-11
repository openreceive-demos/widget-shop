"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { findProduct } from "@/lib/catalog";
import { db } from "@/lib/db";
import { VISITOR_COOKIE } from "@/lib/orders";

/** Creates the order first; its id is the OpenReceive reference. */
export async function buy(productId: string): Promise<void> {
  // The price always comes from the server-side catalog, never the browser.
  const product = typeof productId === "string" ? findProduct(productId) : undefined;
  if (!product) throw new Error("Unknown product.");

  const jar = await cookies();
  let visitor = jar.get(VISITOR_COOKIE)?.value;
  if (!visitor) {
    visitor = randomUUID();
    jar.set(VISITOR_COOKIE, visitor, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  const id = randomUUID();
  await db().query(
    "INSERT INTO orders (id, visitor, product_id, product_name, amount, currency) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, visitor, product.id, product.name, product.price, product.currency],
  );
  redirect(`/checkout/${id}`);
}
