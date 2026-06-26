import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Guardian Shipping | Logistics & Relocation Services in Qatar",
  description:
    "Guardian Shipping offers premium logistics, cargo, freight forwarding, relocation, warehousing and shipping services across Qatar and internationally.",
  keywords: [
    "logistics company qatar",
    "shipping company qatar",
    "cargo services qatar",
    "freight forwarding qatar",
    "relocation services qatar",
    "warehouse services qatar",
    "movers qatar",
    "moving services qatar",
    "storage services qatar",
    "home relocation qatar",
    "packers and movers qatar",
    "No.1 moving team qatar"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">

        {/* ================= NAVBAR ================= */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

            {/* Logo + Company Name */}
            <Link href="/" className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="Guardian Shipping"
                width={70}
                height={70}
                priority
                className="h-auto w-[70px]"
              />

              <div className="leading-tight">
                <h1 className="text-[28px] font-semibold tracking-tight text-[#355AA3]">
                  Guardian Shipping
                </h1>

                <p className="text-sm text-slate-500">
                  Your Logistics Guardian
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
              <Link href="/" className="transition hover:text-[#355AA3]">
                Home
              </Link>

              <Link href="/about-us" className="transition hover:text-[#355AA3]">
                About Us
              </Link>

              <Link href="/home-relocation" className="transition hover:text-[#355AA3]">
                Home Relocation
              </Link>

              <Link href="/business-logistics" className="transition hover:text-[#355AA3]">
                Business Logistics
              </Link>

              <Link href="/contact-us" className="transition hover:text-[#355AA3]">
                Contact Us
              </Link>

              <Link href="/tracking" className="transition hover:text-[#355AA3]">
                Tracking
              </Link>
              
              <Link href="/reviews" className="transition hover:text-[#355AA3]">
                Reviews
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="rounded-full bg-[#355AA3] px-6 py-3 font-medium text-white transition hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        <WhatsAppButton />
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white shadow-2xl rounded-full px-5 py-3 border hover:scale-105 transition-all duration-300 animate-pulse"
       
        {/* ================= FOOTER ================= */}
        <footer className="bg-[#102847] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

            <div className="grid gap-12 lg:grid-cols-4">

              {/* Brand */}
              <div>
                <Image
                  src="/logo-white.png"
                  alt="Guardian Shipping"
                  width={180}
                  height={180}
                  className="mb-5"
                />

                <p className="max-w-sm leading-7 text-slate-300">
                  Reliable relocation, freight, warehousing and logistics
                  solutions across Qatar and international markets.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-5 text-lg font-semibold">
                  Services
                </h3>

                <ul className="space-y-3 text-slate-200">
                  <li>Home Relocation</li>
                  <li>Business Logistics</li>
                  <li>Freight & Cargo</li>
                  <li>Storage Solutions</li>
                  <li>Warehousing</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-5 text-lg font-semibold">
                  Quick Links
                </h3>

                <ul className="space-y-3 text-slate-300">
                  <li>About Us</li>
                  <li>Tracking</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-5 text-lg font-semibold">
                  Contact
                </h3>

                <div className="space-y-3 text-slate-200">
                  <p>+974 33706057</p>
                  <p>info@guardianshipping.com</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/15 pt-8 text-center text-sm text-slate-200">
              © 2026 Guardian Shipping. All Rights Reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}