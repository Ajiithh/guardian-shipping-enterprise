"use client";

import Link from "next/link";

const reviews = [
  {
    name: "Ahmed Al Kuwari",
    company: "Corporate Relocation",
    review:
      "Guardian Shipping managed our office relocation with excellent planning and professionalism. The transition was smooth with minimal disruption to operations.",
  },
  {
    name: "Sarah Mathew",
    company: "International Relocation",
    review:
      "The team handled our international move with care and precision. Packing, transport, and delivery were completed professionally and on time.",
  },
  {
    name: "Ramesh Nair",
    company: "Air Freight Services",
    review:
      "Reliable cargo handling and fast communication throughout the shipment process. Highly dependable logistics partner.",
  },
  {
    name: "Mohammed Al Marri",
    company: "Warehousing",
    review:
      "Professional warehousing support with organized inventory handling and excellent customer service.",
  },
  {
    name: "Priya Menon",
    company: "Home Relocation",
    review:
      "Guardian Shipping made our family relocation stress-free. Their team handled furniture and fragile items carefully.",
  },
  {
    name: "David Thomas",
    company: "Commercial Logistics",
    review:
      "Professional logistics coordination and secure cargo handling. Great experience working with the Guardian team.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">

        <img
          src="/images/guardian-shipping-journey-ahead.webp"
          alt="Guardian Shipping Reviews"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            Client Testimonials
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Trusted by Families,
            <br />
            Businesses & Global Clients
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Guardian Shipping proudly delivers relocation, logistics, cargo,
            freight, and warehousing solutions trusted by clients across Qatar
            and international destinations.
          </p>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Why Clients Trust Guardian
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Trusted Logistics
            <br />
            Backed by Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We deliver reliable cargo, relocation, warehousing, and logistics
            solutions with professionalism, precision, and care.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              { title: "24/7", subtitle: "Support" },
              { title: "Global", subtitle: "Coverage" },
              { title: "Professional", subtitle: "Handling" },
              { title: "Trusted", subtitle: "Operations" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-3xl font-bold text-[#355AA3]">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* REVIEWS GRID */}
      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Testimonials
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              What Our Clients Say
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-[36px] bg-white p-10 shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 text-[#355AA3]">
                  ★★★★★
                </div>

                <p className="leading-8 text-slate-600">
                  {review.review}
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">

                  <h3 className="font-bold text-[#233F8C]">
                    {review.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {review.company}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    
      {/* STATS SECTION */}
      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                number: "500+",
                label: "Projects Completed",
              },
              {
                number: "100+",
                label: "Corporate Clients",
              },
              {
                number: "24/7",
                label: "Support",
              },
              {
                number: "Global",
                label: "Coverage",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-[32px] bg-white p-10 text-center shadow-lg"
              >
                <h3 className="text-4xl font-bold text-[#355AA3]">
                  {stat.number}
                </h3>

                <p className="mt-4 text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#355AA3] py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Experience Reliable
            <br />
            Logistics Solutions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Partner with Guardian Shipping for reliable relocation,
            logistics, cargo, and warehousing solutions across Qatar
            and international destinations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact-us"
              className="rounded-full bg-white px-8 py-4 font-medium text-[#355AA3] transition hover:scale-105"
            >
              Contact Us
            </Link>

            <Link
              href="/tracking"
              className="rounded-full border border-white/50 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-[#355AA3]"
            >
              Track Shipment
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}