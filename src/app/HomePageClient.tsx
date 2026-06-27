"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  "/images/hero-banner.webp",
  "/images/air-cargo-services.webp",
  "/images/logistics-company-qatar-hero-banner.webp",
  "/images/guardian-shipping-loading-dock-operations.webp",
  "/images/commercial-logistics.webp",
  "/images/hero-logistics.webp",
  "/images/guardian-shipping-moving-forward.webp",
];

export default function HomePageClient() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white overflow-hidden">

      <section className="relative flex min-h-screen items-center overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Guardian Shipping Global Logistics"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-slate-300">
            Global Logistics & Relocation Solutions
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Connecting Businesses
            <br />
            Across the World
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Guardian Shipping delivers premium air freight, sea freight,
            warehousing, relocation and logistics solutions across Qatar,
            India and international destinations.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact-us"
              className="rounded-full bg-[#355AA3] px-8 py-4 font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#29498a]"
            >
              Request a Quote
            </Link>

            <Link
              href="/tracking"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              Track Shipment
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 text-sm text-slate-300 md:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p>Operations</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Global</p>
              <p>Coverage</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Corporate</p>
              <p>Clients</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">End-to-End</p>
              <p>Logistics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Global Logistics Solutions
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Premium Services Designed Around Your Needs
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              From cargo forwarding and warehousing to international relocations,
              Guardian Shipping delivers end-to-end logistics worldwide.
            </p>
          </div>
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "Air Freight", image: "/images/air-cargo-services.webp" },
              { title: "Sea Freight", image: "/images/sea-cargo-&-ocean-freight.webp" },
              { title: "Warehousing", image: "/images/warehousing-&-storage.webp" },
              { title: "Corporate Logistics", image: "/images/corporate-logistics.webp" },
              { title: "Residential Relocation", image: "/images/residential-relocation.webp" },
              { title: "Global Operations", image: "/images/guardian-operations.webp" },
            ].map((service, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#233F8C]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Premium logistics solutions built for businesses,
                    corporate clients and individuals.
                  </p>

                  <Link
                    href="/contact-us"
                    className="mt-8 inline-flex rounded-full bg-[#355AA3] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#29498a]"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="/images/guardian-about.webp"
              alt="Guardian Shipping"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Global Operations
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Connecting Businesses Across Borders
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping provides international logistics, relocation,
              cargo handling, warehousing and freight forwarding solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Logistics Built For Every Sector
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Corporate Offices",
              "Oil & Gas",
              "Government Projects",
              "Residential Relocation",
              "Retail & Commerce",
              "Construction",
              "Healthcare",
              "International Trade",
            ].map((industry, i) => (
              <div
                key={i}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#233F8C]">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#355AA3] py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Ready To Move Your Business Forward?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Speak with Guardian Shipping for premium relocation and logistics
            solutions tailored to your business or family.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact-us"
              className="rounded-full bg-white px-8 py-4 font-medium text-[#355AA3]"
            >
              Request Quote
            </Link>

            <Link
              href="/tracking"
              className="rounded-full border border-white/50 px-8 py-4 font-medium text-white"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}