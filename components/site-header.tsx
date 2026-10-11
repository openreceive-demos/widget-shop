import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true" />
          Widget Shop
        </Link>
        <p className="site-header-note">Prices in USD</p>
      </div>
    </header>
  );
}
