"use client";

import { useFormStatus } from "react-dom";

export function BuyButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="buy-button" disabled={pending} aria-label={label}>
      {pending ? "Creating order..." : "Buy"}
    </button>
  );
}
