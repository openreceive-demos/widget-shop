import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Widget Shop",
  description: "Five well-made widgets, priced in US dollars and paid over Lightning.",
};

export const viewport: Viewport = {
  themeColor: "#f6f3ee",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container">Widget Shop. Payments settle to the shop&apos;s own wallet.</div>
        </footer>
      </body>
    </html>
  );
}
